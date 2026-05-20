/**
 * Python 学习平台 — 主应用逻辑
 * 依赖：Pyodide, CodeMirror, LESSONS (lessons.js), Judge (judge.js)
 */

const App = {
  // ---- 状态 ----
  currentLessonId: null,
  currentCardIndex: 0,        // 当前课时内第几张卡片 (0 = 概念, 1 = 习题)
  submitted: false,           // 当前习题是否已提交通过
  pyodide: null,
  editor: null,
  completedLessons: new Set(),

  // ---- 初始化 ----
  async init() {
    this._loadProgress();
    this._renderHomePage();
    this._bindSearch();
    this._showLoading();
    await this._initPyodide();
    this._hideLoading();
    this._updatePyodideStatus();
  },

  // ================================================================
  //  Pyodide
  // ================================================================
  async _initPyodide() {
    const startTime = performance.now();
    // 优先用 gcore（亚洲优化），失败降级到主域名
    const cdns = [
      'https://gcore.jsdelivr.net/pyodide/v0.25.0/full/',
      'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
    ];
    console.log('⏳ Pyodide 开始加载...');

    let loaded = false;
    for (const cdn of cdns) {
      try {
        console.log(`   尝试: ${cdn}`);
        this.pyodide = await loadPyodide({ indexURL: cdn, fullStdLib: false });
        const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);
        console.log(`✅ Pyodide 加载完成！耗时 ${elapsed}s，CDN: ${cdn}`);
        console.log('   Python 版本:', this.pyodide.runPython('import sys; sys.version').trim());
        loaded = true;
        break;
      } catch (e) {
        console.warn(`   失败: ${cdn}`, e.message || e);
      }
    }
    if (!loaded) {
      const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);
      console.error(`❌ 所有 CDN 均加载失败（${elapsed}s）`);
      console.error('   可能原因：网络不通、浏览器不支持 WASM');
      console.error('   手动解决方案：');
      console.error('   1. 开代理/VPN');
      console.error('   2. 下载 Pyodide 到本地: pip install pyodide');
      console.error('   3. 用国内镜像: https://jsd.onmicrosoft.cn/pyodide/v0.25.0/full/');
    }
  },

  _showLoading() {
    const overlay = document.createElement('div');
    overlay.id = 'pyodide-loading';
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
      <div class="loading-box">
        <div class="spinner"></div>
        <p id="loading-msg">正在加载 Python 运行环境...</p>
        <p style="font-size:12px;color:#94a3b8;margin-top:4px;">首次加载约需下载 20MB，请耐心等待</p>
      </div>`;
    document.body.appendChild(overlay);
  },

  _hideLoading() {
    const overlay = document.getElementById('pyodide-loading');
    if (overlay) overlay.remove();
  },

  _updatePyodideStatus() {
    const tip = document.querySelector('.home-tip');
    if (this.pyodide) {
      tip.textContent = '✅ Python 运行环境就绪，点击任意课时卡片开始学习。';
      tip.style.color = '#16a34a';
    } else {
      tip.textContent = '⚠️ Python 运行环境未就绪，代码运行功能暂不可用。请检查网络连接。';
      tip.style.color = '#dc2626';
    }
  },

  /**
   * 执行用户代码，返回 { stdout, stderr, error }
   */
  async runCode(code) {
    if (!this.pyodide) {
      return { stdout: '', stderr: '', error: 'Pyodide 尚未加载完成，请稍后重试' };
    }
    let stdout = '';
    const capture = (text) => { stdout += text + '\n'; };
    try {
      this.pyodide.setStdout({ batched: capture });
      this.pyodide.setStderr({ batched: capture });
      await this.pyodide.runPythonAsync(code);
      return { stdout, stderr: '', error: null };
    } catch (e) {
      return { stdout, stderr: '', error: e.message || String(e) };
    }
  },

  // ================================================================
  //  首页
  // ================================================================
  _renderHomePage() {
    const grid = document.getElementById('lesson-grid');
    const count = this.completedLessons.size;
    document.getElementById('progress-text').textContent = `${count} / ${LESSONS.length} 课时已完成`;
    document.getElementById('overall-progress-bar').style.width = `${(count / LESSONS.length) * 100}%`;

    grid.innerHTML = LESSONS.map((lesson, i) => {
      const done = this.completedLessons.has(lesson.id);
      return `
        <div class="lesson-card${done ? ' completed' : ''}" data-id="${lesson.id}">
          <span class="card-number">${i + 1}</span>
          <div class="card-title">${lesson.title}</div>
          <div class="card-subtitle">${lesson.subtitle}</div>
          <span class="card-badge ${done ? 'badge-done' : 'badge-new'}">${done ? '已完成' : '未开始'}</span>
        </div>`;
    }).join('');

    // 点击卡片进入学习
    grid.querySelectorAll('.lesson-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        this._enterLesson(id);
      });
    });
  },

  _bindSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      const grid = document.getElementById('lesson-grid');
      if (!q) { grid.classList.remove('filtering'); return; }
      grid.classList.add('filtering');
      grid.querySelectorAll('.lesson-card').forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const subtitle = card.querySelector('.card-subtitle').textContent.toLowerCase();
        card.classList.toggle('visible', title.includes(q) || subtitle.includes(q));
      });
    });
  },

  // ================================================================
  //  页面切换
  // ================================================================
  _showPage(pageName) {
    document.getElementById('home-page').classList.toggle('hidden', pageName !== 'home');
    document.getElementById('lesson-page').classList.toggle('hidden', pageName !== 'lesson');
  },

  _enterLesson(lessonId) {
    this.currentLessonId = lessonId;
    this.currentCardIndex = 0;
    this.submitted = false;
    this._showPage('lesson');
    this._renderCard();
    this._updateNavButtons();
  },

  _goHome() {
    this._destroyEditor();
    this._showPage('home');
    this._renderHomePage(); // 刷新进度
  },

  // ================================================================
  //  卡片渲染
  // ================================================================
  _getLesson() {
    return LESSONS.find(l => l.id === this.currentLessonId);
  },

  _renderCard() {
    this._destroyEditor();
    const lesson = this._getLesson();
    if (!lesson) return;
    const card = lesson.cards[this.currentCardIndex];
    const container = document.getElementById('card');
    document.getElementById('lesson-badge').textContent = `课时 ${lesson.id} · ${lesson.title}`;

    if (lesson.cards.length > 1) {
      document.getElementById('card-indicator').textContent = `卡片 ${this.currentCardIndex + 1}/${lesson.cards.length}`;
    } else {
      document.getElementById('card-indicator').textContent = `仅概念介绍`;
    }

    container.style.animation = 'none';
    container.offsetHeight; // reflow
    container.style.animation = 'fadeIn .3s ease';

    if (card.type === 'concept') {
      this._renderConceptCard(container, card, lesson);
    } else {
      this._renderExerciseCard(container, card);
    }

    this._updateNavButtons();
  },

  _renderConceptCard(container, card, lesson) {
    const hasExample = card.example && card.example.trim();
    const hasOutput = card.exampleOutput && card.exampleOutput.trim();
    container.innerHTML = `
      <h2>📖 ${card.title}</h2>
      <div class="concept-body">${card.content}</div>
      ${hasExample ? `
        <div class="code-block">
          <span class="code-label">示例代码</span>
          <pre>${this._escapeHtml(card.example)}</pre>
        </div>` : ''}
      ${hasOutput ? `
        <div class="output-block">
          <span class="output-label">输出结果</span>
          <pre>${this._escapeHtml(card.exampleOutput)}</pre>
        </div>` : ''}
      ${lesson.cards.length > 1 ? `
        <p style="margin-top:16px;color:#94a3b8;font-size:13px;">💡 看完概念后点击「下一张」进入练习</p>` : ''}
    `;
  },

  _renderExerciseCard(container, card) {
    container.innerHTML = `
      <h2>✏️ ${card.title}</h2>
      <div class="exercise-desc">${card.description}</div>
      ${card.hint ? `<div class="tip-block"><strong>提示：</strong>${card.hint}</div>` : ''}
      <div id="exercise-area">
        <textarea id="code-editor">${card.template || '# 在这里写代码\n'}</textarea>
      </div>
      <div class="exercise-actions">
        <button class="btn btn-secondary" id="btn-run">▶ 运行代码</button>
        <button class="btn btn-success" id="btn-submit">✓ 提交答案</button>
      </div>
      <div class="output-panel" id="output-panel" style="display:none">
        <div class="output-header">输出结果</div>
        <pre id="output-content"></pre>
      </div>
      <div id="feedback-area"></div>
    `;

    this._initEditor();
    this._bindExerciseButtons(card);
  },

  // ================================================================
  //  CodeMirror 编辑器
  // ================================================================
  _initEditor() {
    this._destroyEditor();
    const textarea = document.getElementById('code-editor');
    if (!textarea) return;
    this.editor = CodeMirror.fromTextArea(textarea, {
      mode: 'python',
      theme: 'monokai',
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      matchBrackets: true,
      autoCloseBrackets: true,
      lineWrapping: true,
      extraKeys: { 'Ctrl-Enter': () => this._handleSubmit() }
    });
    this.editor.setSize('100%', 200);
  },

  _destroyEditor() {
    if (this.editor) {
      const el = this.editor.getWrapperElement();
      if (el && el.parentNode) el.parentNode.removeChild(el);
      this.editor = null;
    }
  },

  _getUserCode() {
    return this.editor ? this.editor.getValue() : '';
  },

  // ================================================================
  //  习题交互
  // ================================================================
  _bindExerciseButtons(card) {
    document.getElementById('btn-run').addEventListener('click', () => this._handleRun());
    document.getElementById('btn-submit').addEventListener('click', () => this._handleSubmit());
  },

  async _handleRun() {
    const code = this._getUserCode();
    if (!code.trim()) { this._showOutput('(请先编写代码)', 'idle'); return; }

    const result = await this.runCode(code);
    if (result.error) {
      this._showOutput(result.error, 'error');
    } else {
      this._showOutput(result.stdout || '(代码运行完毕，无输出)', 'ok');
    }
  },

  async _handleSubmit() {
    const lesson = this._getLesson();
    const card = lesson.cards[this.currentCardIndex];
    const code = this._getUserCode();

    if (!code.trim()) {
      this._showFeedback(false, '请先编写代码再提交');
      return;
    }

    // 也先运行一下看看有没有错误
    const runResult = await this.runCode(code);
    if (runResult.error) {
      this._showOutput(runResult.error, 'error');
      this._showFeedback(false, `运行出错，请检查代码后重新提交`);
      return;
    }
    this._showOutput(runResult.stdout || '(无输出)', 'ok');

    const evaluation = await Judge.evaluate(code, card, (c) => this.runCode(c), runResult);

    if (evaluation.pass) {
      this._showFeedback(true, evaluation.feedback);
      this.submitted = true;
      this._markCompleted(lesson.id);
      this._updateNavButtons();
      // 禁用提交按钮
      const btn = document.getElementById('btn-submit');
      if (btn) { btn.disabled = true; btn.textContent = '✓ 已通过'; }
    } else {
      this._showFeedback(false, evaluation.feedback);
    }
  },

  _showOutput(text, className) {
    const panel = document.getElementById('output-panel');
    const content = document.getElementById('output-content');
    if (!panel || !content) return;
    panel.style.display = 'block';
    content.textContent = text;
    content.className = `output-${className}`;
  },

  _showFeedback(pass, message) {
    const area = document.getElementById('feedback-area');
    if (!area) return;
    area.innerHTML = `<div class="feedback feedback-${pass ? 'correct' : 'wrong'}">${this._escapeHtml(message)}</div>`;
  },

  // ================================================================
  //  导航按钮
  // ================================================================
  _updateNavButtons() {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const lesson = this._getLesson();
    if (!lesson) return;

    const totalCards = lesson.cards.length;
    const isConcept = lesson.cards[this.currentCardIndex].type === 'concept';
    const hasExercise = totalCards > 1;
    const isLastLesson = this.currentLessonId >= LESSONS.length;

    // 左按钮
    if (this.currentCardIndex === 0) {
      btnLeft.textContent = '🏠 返回首页';
      btnLeft.className = 'btn btn-secondary';
      btnLeft.onclick = () => this._goHome();
    } else {
      btnLeft.textContent = '◀ 上一张';
      btnLeft.className = 'btn btn-secondary';
      btnLeft.onclick = () => { this.currentCardIndex--; this.submitted = false; this._renderCard(); };
    }

    // 右按钮
    if (isConcept && hasExercise) {
      // 概念卡 → 去习题卡
      btnRight.textContent = '下一张 ▶';
      btnRight.className = 'btn btn-primary';
      btnRight.disabled = false;
      btnRight.onclick = () => { this.currentCardIndex++; this.submitted = false; this._renderCard(); };
    } else if (!isConcept && !this.submitted) {
      // 习题卡但还没提交
      btnRight.textContent = '请先提交答案';
      btnRight.className = 'btn btn-primary';
      btnRight.disabled = true;
      btnRight.onclick = null;
    } else if (isLastLesson) {
      // 最后一课时
      btnRight.textContent = '🎉 全部完成！';
      btnRight.className = 'btn btn-success';
      btnRight.disabled = false;
      btnRight.onclick = () => this._goHome();
    } else {
      // 去下一课时
      btnRight.textContent = '下一课时 ▶';
      btnRight.className = 'btn btn-primary';
      btnRight.disabled = false;
      btnRight.onclick = () => this._enterLesson(this.currentLessonId + 1);
    }
  },

  // ================================================================
  //  进度持久化
  // ================================================================
  _markCompleted(lessonId) {
    this.completedLessons.add(lessonId);
    try {
      localStorage.setItem('python-study-progress', JSON.stringify([...this.completedLessons]));
    } catch (e) { /* localStorage 不可用 */ }
  },

  _loadProgress() {
    try {
      const raw = localStorage.getItem('python-study-progress');
      if (raw) {
        this.completedLessons = new Set(JSON.parse(raw));
      }
    } catch (e) { /* 忽略 */ }
  },

  // ================================================================
  //  工具函数
  // ================================================================
  _escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

// ---- 启动 ----
document.addEventListener('DOMContentLoaded', () => App.init());
