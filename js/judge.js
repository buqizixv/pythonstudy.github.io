/**
 * 答案判定模块
 * 支持多种判定策略：语法检查、输出比对、关键词检查
 */

const Judge = {
  /**
   * 检查代码中是否包含指定关键词
   * @returns {{ pass: boolean, missing: string[] }}
   */
  checkKeywords(code, keywords) {
    if (!keywords || keywords.length === 0) return { pass: true, missing: [] };
    const missing = keywords.filter(kw => !code.includes(kw));
    return { pass: missing.length === 0, missing };
  },

  /**
   * 对比输出结果（忽略首尾空白）
   */
  checkOutput(actual, expected) {
    if (!expected) return { pass: true, actual, expected };
    const a = actual.trim();
    const e = expected.trim();
    return { pass: a === e, actual: a, expected: e };
  },

  /**
   * 综合判定入口
   * @param {string} code - 用户代码
   * @param {object} exercise - 习题定义
   * @param {function} runCode - 执行代码的函数，返回 { stdout, stderr, error }
   * @param {object} [preRunResult] - 如果已经运行过，传入结果避免重复执行
   * @returns {Promise<{ pass: boolean, feedback: string, details: object }>}
   */
  async evaluate(code, exercise, runCode, preRunResult) {
    const { judgeType, expectedOutput, requiredKeywords } = exercise;

    // 1. 关键词检查
    if (requiredKeywords && requiredKeywords.length > 0) {
      const kwResult = this.checkKeywords(code, requiredKeywords);
      if (!kwResult.pass) {
        return {
          pass: false,
          feedback: `代码缺少必要内容：${kwResult.missing.join(', ')}`,
          details: { keywordMissing: kwResult.missing }
        };
      }
    }

    // 2. 执行代码（如果还没运行过）
    let result = preRunResult || null;
    if (!result) {
      try {
        result = await runCode(code);
      } catch (e) {
        return {
          pass: false,
          feedback: `代码执行异常：${e.message}`,
          details: { error: e.message }
        };
      }
    }

    // 3. 语法/运行时错误
    if (result.error) {
      return {
        pass: false,
        feedback: `运行出错：${this._simplifyError(result.error)}`,
        details: { error: result.error, stdout: result.stdout }
      };
    }

    // 4. 输出比对（如果有 expectedOutput）
    if (judgeType === 'output' && expectedOutput) {
      const outResult = this.checkOutput(result.stdout, expectedOutput);
      if (!outResult.pass) {
        return {
          pass: false,
          feedback: `输出不匹配。\n期望输出：${outResult.expected}\n实际输出：${outResult.actual || '(无输出)'}`,
          details: { expected: outResult.expected, actual: outResult.actual, stdout: result.stdout }
        };
      }
    }

    // 5. 所有检查通过
    return {
      pass: true,
      feedback: '正确！做得很好！',
      details: { stdout: result.stdout }
    };
  },

  /**
   * 简化 Pyodide 的错误信息
   */
  _simplifyError(errorMsg) {
    if (!errorMsg) return '未知错误';
    // 去掉 Pyodide 冗长的 traceback 前缀，保留核心错误
    const lines = errorMsg.split('\n');
    // 找最后一行（通常是实际的错误类型和信息）
    const lastLine = lines[lines.length - 1] || '';
    if (lastLine.trim()) return lastLine.trim();
    // 如果最后一行空，找倒数第二行
    const secondLast = lines[lines.length - 2] || '';
    return secondLast.trim() || errorMsg.substring(0, 200);
  }
};
