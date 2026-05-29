/**
 * 国际化 (i18n) — 中英文翻译
 */
const I18N = {
  _lang: 'zh',

  _data: {
    zh: {
      // ---- UI ----
      ui_title: '🐍 Python 冒险之旅',
      ui_subtitle: '选择关卡，编写代码，击败挑战！<br>26 个关卡等你来征服，从小白到大师的进阶之路。',
      ui_progress_label: '冒险进度',
      ui_progress_fmt: '{count} / {total} 关卡',
      ui_search: '搜索关卡...',
      ui_ready: '✅ 引擎就绪，选择一个关卡开始冒险吧！',
      ui_not_ready: '⚠️ Python 引擎未就绪，代码运行功能暂不可用',
      ui_back_home: '🏠 返回大厅',
      ui_back: '◀ 返回',
      ui_next_card: '进入挑战 ▶',
      ui_locked: '🔒 请先完成挑战',
      ui_all_done: '🎉 全部通关！',
      ui_next_lesson: '下一关 ▶',
      ui_level: '关卡',
      ui_only_concept: '📖',
      ui_go_challenge: '💡 阅读完毕后点击「进入挑战」开始实战',
      ui_loading: '正在加载 Python 运行环境...',
      ui_loading_sub: '首次加载约需下载 20MB，请耐心等待',
      ui_run: '▶ 运行代码',
      ui_submit: '⚔ 提交挑战',
      ui_submitted: '✅ 挑战完成',
      ui_output: '输出结果',
      ui_no_code: '(请先编写代码)',
      ui_no_output: '(代码运行完毕，无输出)',
      ui_example_code: '示例代码',
      ui_output_result: '输出结果',
      ui_hint: '💡 提示：',
      ui_level_unit: '关卡',
      ui_clear: '🗑 清空',
      ui_back_btn: '🏠 返回首页',
      ui_toast_xp: '<span style="font-size:28px;">🎉</span><br><strong>+30 XP</strong><br><span style="font-size:13px;opacity:.8;">关卡 {id} 通关！</span>',
      ui_toast_levelup: '<div style="font-size:36px;margin-bottom:4px;">⬆</div><strong>升级了！</strong><br>{title}',
      ui_toast_badge: '<span style="font-size:32px;">{icon}</span><br><strong>成就解锁！</strong><br>{label}<br><span style="font-size:12px;opacity:.8;">{desc}</span>',
      ui_feedback_correct: '正确！做得很好！',
      ui_feedback_no_code: '请先编写代码再提交',
      ui_feedback_error: '运行出错，请检查代码后重新提交',
      ui_feedback_missing: '代码缺少必要内容：{missing}',
      ui_feedback_mismatch: '输出不匹配。\n期望输出：{expected}\n实际输出：{actual}',
      ui_card: '卡片',
      ui_judge_correct: '✅ 正确！做得很好！',

      // ---- Achievements ----
      ach_first_label: '🎯 初出茅庐',
      ach_first_desc: '完成第1个关卡',
      ach_five_label: '🔥 渐入佳境',
      ach_five_desc: '完成5个关卡',
      ach_ten_label: '🚀 勇往直前',
      ach_ten_desc: '完成10个关卡',
      ach_half_label: '⚡ 半程高手',
      ach_half_desc: '完成13个关卡',
      ach_twenty_label: '💎 炉火纯青',
      ach_twenty_desc: '完成20个关卡',
      ach_all_label: '👑 Python 大师',
      ach_all_desc: '完成全部26个关卡',

      // ---- Levels ----
      lvl_0: '🐣 Python 新手',
      lvl_1: '🐍 Python 学徒',
      lvl_2: '⚡ Python 进阶者',
      lvl_3: '🔥 Python 高手',
      lvl_4: '💎 Python 专家',
      lvl_5: '👑 Python 大师',

      // ---- Regions ----
      region_forest_name: '🌿 基础之森',
      region_forest_desc: '踏入 Python 世界的第一步，掌握最基本的工具',
      region_valley_name: '💎 数据山谷',
      region_valley_desc: '探索数据的容器，学会组织和存储信息',
      region_mountain_name: '🏔️ 逻辑山脉',
      region_mountain_desc: '翻越条件与循环的高峰，让程序学会思考和重复',
      region_temple_name: '🏛️ 大师殿堂',
      region_temple_desc: '掌握高阶技巧，从函数进阶到生成器的终极修炼',
      region_domain_name: '⭐ 终极领域',
      region_domain_desc: '融会贯通，掌握模块、文件与异常处理',
      region_locked: '🔒 尚未解锁',

      // ---- Character ----
      char_greeting_0: '你好！准备好开始冒险了吗？',
      char_greeting_1: '继续前进，你越来越强了！',
      char_greeting_2: '写得不错！下一个挑战等着你！',
      char_greeting_3: '你已经是 Python 高手了！',
      char_greeting_4: '离大师只有一步之遥！',
      char_greeting_5: '太厉害了，你就是 Python 大师！',
      char_greeting_done: '全部通关！你是传奇！🎉',

      // ---- Cards ----
      card_challenge: '⚔ 挑战',
      card_done: '✅ 已通关',

      // ---- Copyright ----
      copyright: '© 2026 PythonStudy — 闯关学 Python',

      // ======== LESSONS ========
      // Lesson 1
      l1_title: 'print() 输出函数',
      l1_subtitle: '程序的第一步，向世界打个招呼',
      l1_concept_title: '认识 print() 函数',
      l1_concept_body: `
        <p><code>print()</code> 是 Python 中最基础也最常用的函数，用于<strong>将内容输出到屏幕上</strong>。</p>
        <h3>基本用法</h3>
        <ul>
          <li>括号里放要输出的内容，字符串需要用引号包裹</li>
          <li>数字、变量可以直接放入，无需引号</li>
          <li>可以同时输出多个内容，用逗号分隔</li>
        </ul>
        <h3>常用参数</h3>
        <ul>
          <li><code>sep</code> — 多个内容之间的分隔符，默认是空格</li>
          <li><code>end</code> — 输出结尾的字符，默认是换行 <code>\\n</code></li>
        </ul>`,
      l1_exercise_title: '练习：使用 print 输出',
      l1_exercise_desc: '请使用 <code>print()</code> 函数，在一行中输出 <strong>三件你喜欢的东西</strong>，用 <code> - </code>（空格短横空格）分隔。',
      l1_exercise_hint: '用 sep=" - " 参数来设置分隔符，例如：print("A", "B", "C", sep=" - ")',

      // Lesson 2
      l2_title: '变量与赋值',
      l2_subtitle: '给数据贴上标签',
      l2_concept_title: '什么是变量？',
      l2_concept_body: `
        <p><strong>变量</strong>就像一个带标签的盒子，用来存储数据。Python 中创建变量非常简洁：直接写名字，用 <code>=</code> 赋值即可。</p>
        <h3>命名规则</h3>
        <ul>
          <li>只能包含字母、数字、下划线，不能以数字开头</li>
          <li>区分大小写：<code>name</code> 和 <code>Name</code> 是两个不同变量</li>
          <li>不能使用 Python 关键字（如 if、for、while）</li>
          <li>建议使用有意义的英文单词，单词间用下划线连接</li>
        </ul>
        <h3>动态类型</h3>
        <p>Python 是动态类型语言，变量不需要声明类型，可以随时赋不同类型的值。</p>`,
      l2_exercise_title: '练习：创建变量',
      l2_exercise_desc: '创建三个变量：<code>name</code> 存你的名字、<code>age</code> 存你的年龄、<code>city</code> 存你所在的城市，然后依次打印它们，每行一个。',
      l2_exercise_hint: 'name = "你的名字"\nage = 你的年龄\ncity = "你的城市"\nprint(name)\nprint(age)\nprint(city)',

      // Lesson 3
      l3_title: '数据类型概述',
      l3_subtitle: 'Python 世界的四种基本元素',
      l3_concept_title: '四种基本数据类型',
      l3_concept_body: `
        <p>Python 有四种最基础的数据类型：</p>
        <ul>
          <li><code>int</code>（整数）— 如 1、100、-5</li>
          <li><code>float</code>（浮点数）— 如 3.14、-0.5、1.0</li>
          <li><code>str</code>（字符串）— 如 "hello"、'Python'</li>
          <li><code>bool</code>（布尔值）— 只有 <code>True</code> 和 <code>False</code></li>
        </ul>
        <p>使用 <code>type()</code> 函数可以查看一个值或变量的类型。</p>
        <p>不同类型之间可以用内置函数转换：<code>int()</code>、<code>float()</code>、<code>str()</code>、<code>bool()</code>。</p>`,
      l3_exercise_title: '练习：查看类型',
      l3_exercise_desc: '创建一个整数变量 <code>x = 25</code>，一个浮点数 <code>y = 7.5</code>，然后用 <code>type()</code> 打印它们各自的类型。最后计算 <code>x + y</code> 并打印结果和结果的类型。',
      l3_exercise_hint: 'print(type(x))\nprint(type(y))\nz = x + y\nprint(z)\nprint(type(z))',

      // Lesson 4
      l4_title: '数字类型与运算',
      l4_subtitle: '加减乘除，算天算地',
      l4_concept_title: '算术运算符',
      l4_concept_body: `
        <h3>基本运算符</h3>
        <ul>
          <li><code>+</code> 加、<code>-</code> 减、<code>*</code> 乘、<code>/</code> 除（结果为浮点数）</li>
          <li><code>//</code> 整除（向下取整）、<code>%</code> 取余（模运算）</li>
          <li><code>**</code> 幂运算（如 2³ = 2**3）</li>
        </ul>
        <h3>运算优先级</h3>
        <p>括号 <code>()</code> > 幂 <code>**</code> > 乘除 <code>* / // %</code> > 加减 <code>+ -</code></p>
        <h3>复合赋值</h3>
        <p><code>x += 5</code> 等价于 <code>x = x + 5</code>，同理还有 <code>-=</code>、<code>*=</code>、<code>/=</code>。</p>`,
      l4_exercise_title: '练习：数字运算',
      l4_exercise_desc: '小明有 128 元，买了 3 本单价 35 元的书。请计算他<strong>还剩多少钱</strong>，以及<strong>如果剩下的钱全部买 2 元一支的笔，可以买几支</strong>。用变量存储并打印结果。',
      l4_exercise_hint: 'left = money - book_price * book_count\npens = left // pen_price\nprint("剩余:", left, "元")\nprint("可买笔:", pens, "支")',

      // Lesson 5
      l5_title: '字符串操作',
      l5_subtitle: '文字游戏，灵活多变',
      l5_concept_title: '字符串的玩法',
      l5_concept_body: `
        <h3>索引与切片</h3>
        <p>字符串中每个字符都有位置编号（从 0 开始）。<code>s[0]</code> 取第一个字符，<code>s[-1]</code> 取最后一个。<br>
        <code>s[start:end]</code> 切片取子串，含头不含尾。</p>
        <h3>常用方法</h3>
        <ul>
          <li><code>len(s)</code> — 获取长度</li>
          <li><code>s.upper()</code> / <code>s.lower()</code> — 大小写转换</li>
          <li><code>s.strip()</code> — 去除首尾空格</li>
          <li><code>s.replace(old, new)</code> — 替换</li>
          <li><code>s.split(sep)</code> — 按分隔符切分成列表</li>
        </ul>
        <h3>f-string 格式化</h3>
        <p><code>f"我叫{name}，今年{age}岁"</code> — 在字符串前加 f，大括号里直接写变量。</p>`,
      l5_exercise_title: '练习：字符串处理',
      l5_exercise_desc: '有一个字符串 <code>s = "Python学习很有趣"</code>：<br>1) 用切片取出前 6 个字符<br>2) 用切片取出后 3 个字符<br>3) 打印字符串的长度<br>4) 用 f-string 输出："我在学XXX，感觉XXX"（XXX 分别用前6和后3的结果填入）',
      l5_exercise_hint: '前6: s[:6]，后3: s[-3:]，长度: len(s)\nf-string: f"我在学{前}，感觉{后}"',

      // Lesson 6
      l6_title: '列表 list',
      l6_subtitle: '最灵活的数据容器',
      l6_concept_title: '认识列表',
      l6_concept_body: `
        <p><strong>列表</strong>用方括号 <code>[]</code> 包裹，元素用逗号分隔。是有序、可修改的数据集合。</p>
        <h3>基本操作</h3>
        <ul>
          <li><code>lst[i]</code> — 按索引访问，支持负数索引</li>
          <li><code>lst.append(x)</code> — 末尾添加元素</li>
          <li><code>lst.insert(i, x)</code> — 在指定位置插入</li>
          <li><code>lst.pop()</code> — 移除并返回末尾元素</li>
          <li><code>lst.remove(x)</code> — 移除第一个匹配值</li>
          <li><code>len(lst)</code> — 列表长度</li>
          <li><code>lst.sort()</code> — 排序</li>
        </ul>
        <p>列表可以包含不同类型的元素，也可以嵌套列表。</p>`,
      l6_exercise_title: '练习：操作列表',
      l6_exercise_desc: '1) 创建一个空列表 <code>nums</code><br>2) 依次往里面添加 10、20、30 三个数<br>3) 在索引 1 的位置插入 15<br>4) 打印最终的列表和它的长度',
      l6_exercise_hint: 'nums.append(10)\nnums.append(20)\nnums.append(30)\nnums.insert(1, 15)\nprint(nums)\nprint(len(nums))',

      // Lesson 7
      l7_title: '元组 tuple',
      l7_subtitle: '不可变的序列',
      l7_concept_title: '认识元组',
      l7_concept_body: `
        <p><strong>元组</strong>用圆括号 <code>()</code> 包裹，和列表很像，但<strong>元素不可修改</strong>。</p>
        <h3>为什么需要元组？</h3>
        <ul>
          <li>保护数据不被意外修改</li>
          <li>作为字典的键（列表不能作为键）</li>
          <li>函数返回多个值时实际上返回的就是元组</li>
          <li>比列表占用内存更小</li>
        </ul>
        <h3>元组解包</h3>
        <p>可以把元组的元素一次性赋值给多个变量：<code>a, b, c = (1, 2, 3)</code></p>`,
      l7_exercise_title: '练习：元组解包',
      l7_exercise_desc: '有一个元组 <code>info = ("张三", 20, "北京")</code>，分别代表姓名、年龄、城市。请用<strong>元组解包</strong>的方式把三个值分别赋给 <code>name</code>、<code>age</code>、<code>city</code>，然后用 f-string 打印："张三今年20岁，来自北京"。',
      l7_exercise_hint: 'name, age, city = info\nprint(f"{name}今年{age}岁，来自{city}")',

      // Lesson 8
      l8_title: '集合 set',
      l8_subtitle: '去重利器，数学集合',
      l8_concept_title: '认识集合',
      l8_concept_body: `
        <p><strong>集合</strong>用花括号 <code>{}</code> 或 <code>set()</code> 创建，特点是<strong>元素不重复、无序</strong>。</p>
        <h3>基本操作</h3>
        <ul>
          <li><code>s.add(x)</code> — 添加元素</li>
          <li><code>s.remove(x)</code> — 移除元素（不存在会报错）</li>
          <li><code>s.discard(x)</code> — 安全移除（不存在不报错）</li>
          <li><code>x in s</code> — 判断是否存在</li>
        </ul>
        <h3>集合运算（交并差）</h3>
        <ul>
          <li><code>A & B</code> 或 <code>A.intersection(B)</code> — 交集</li>
          <li><code>A | B</code> 或 <code>A.union(B)</code> — 并集</li>
          <li><code>A - B</code> 或 <code>A.difference(B)</code> — 差集</li>
        </ul>
        <p>集合最实用的场景：<strong>给列表去重</strong>。</p>`,
      l8_exercise_title: '练习：集合去重与运算',
      l8_exercise_desc: '两个班级的参赛学生：<code>class_a = {"小明","小红","小刚","小丽"}</code>，<code>class_b = {"小刚","小丽","小华","小雪"}</code>。请找出：<br>1) 两个班级都参赛的学生（交集）<br>2) 所有参赛的学生（并集，不重复）<br>3) 只有A班参赛的学生（差集）',
      l8_exercise_hint: '交集: class_a & class_b\n并集: class_a | class_b\n差集: class_a - class_b',

      // Lesson 9
      l9_title: '字典 dict',
      l9_subtitle: '键值配对，高效查找',
      l9_concept_title: '认识字典',
      l9_concept_body: `
        <p><strong>字典</strong>存储<strong>键值对</strong>（key → value），用花括号 <code>{}</code> 包裹。通过键快速查找对应的值。</p>
        <h3>基本操作</h3>
        <ul>
          <li><code>d[key]</code> — 通过键取值（键不存在会报错）</li>
          <li><code>d.get(key, default)</code> — 安全取值（不存在返回默认值）</li>
          <li><code>d[key] = value</code> — 添加或修改键值对</li>
          <li><code>del d[key]</code> — 删除键值对</li>
          <li><code>key in d</code> — 判断键是否存在</li>
          <li><code>d.keys()</code> / <code>d.values()</code> / <code>d.items()</code> — 遍历</li>
        </ul>
        <p>字典的键必须是<strong>不可变类型</strong>（字符串、数字、元组），列表不能作为键。</p>`,
      l9_exercise_title: '练习：字典操作',
      l9_exercise_desc: '创建一个字典 <code>book</code>，包含以下信息：书名(title)="Python入门"、作者(author)="李老师"、价格(price)=59。然后完成：<br>1) 打印书名<br>2) 把价格改为 49<br>3) 添加出版社(press)="教育出版社"<br>4) 打印完整字典',
      l9_exercise_hint: 'print(book["title"])\nbook["price"] = 49\nbook["press"] = "教育出版社"\nprint(book)',

      // Lesson 10
      l10_title: 'if 条件判断',
      l10_subtitle: '让程序学会做决定',
      l10_concept_title: '分支结构',
      l10_concept_body: `
        <p><code>if</code> 语句让程序根据不同条件执行不同的代码。</p>
        <h3>三种形式</h3>
        <ul>
          <li><code>if 条件:</code> — 如果条件成立就执行</li>
          <li><code>if 条件: ... else:</code> — 二选一</li>
          <li><code>if 条件: ... elif 条件: ... else:</code> — 多选一</li>
        </ul>
        <h3>比较运算符</h3>
        <p><code>== != > < >= <=</code></p>
        <h3>逻辑运算符</h3>
        <p><code>and</code>（且）、<code>or</code>（或）、<code>not</code>（非）</p>
        <p class="tip-block"><strong>注意：</strong>Python 用<strong>缩进</strong>表示代码块，通常缩进 4 个空格。冒号 <code>:</code> 不要忘记！</p>`,
      l10_exercise_title: '练习：成绩等级',
      l10_exercise_desc: '变量 <code>score = 78</code> 已经给出。请用 if-elif-else 判断等级：<br>≥90 → "A"<br>≥80 → "B"<br>≥70 → "C"<br>≥60 → "D"<br>＜60 → "E"<br>最后打印等级。',
      l10_exercise_hint: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("E")',

      // Lesson 11
      l11_title: 'while 循环',
      l11_subtitle: '条件成立就一直跑',
      l11_concept_title: 'while 循环结构',
      l11_concept_body: `
        <p><code>while</code> 循环在条件为 <code>True</code> 时反复执行代码块，直到条件变为 <code>False</code>。</p>
        <h3>关键要素</h3>
        <ul>
          <li>循环条件 — 控制循环何时停止</li>
          <li>循环体 — 每次重复执行的代码</li>
          <li>条件更新 — 必须改变条件中的变量，否则会<strong>死循环</strong>！</li>
        </ul>
        <h3>break 和 continue</h3>
        <ul>
          <li><code>break</code> — 立即退出整个循环</li>
          <li><code>continue</code> — 跳过本次循环剩余代码，进入下一次</li>
        </ul>`,
      l11_exercise_title: '练习：while 求和',
      l11_exercise_desc: '用 while 循环计算 <strong>1 到 50 之间所有奇数的和</strong>，并打印结果。（奇数即不能被 2 整除的数）',
      l11_exercise_hint: 'n = 1\ntotal = 0\nwhile n <= 50:\n    total += n\n    n += 2\nprint(total)',

      // Lesson 12
      l12_title: 'for 循环',
      l12_subtitle: '遍历一切可迭代对象',
      l12_concept_title: 'for 循环与 range',
      l12_concept_body: `
        <p><code>for</code> 循环用于遍历序列（列表、字符串、元组等）中的每个元素。</p>
        <h3>range() 函数</h3>
        <ul>
          <li><code>range(n)</code> — 0 到 n-1</li>
          <li><code>range(start, end)</code> — 含头不含尾</li>
          <li><code>range(start, end, step)</code> — 指定步长</li>
        </ul>
        <h3>enumerate()</h3>
        <p>同时获取索引和值：<code>for i, val in enumerate(lst):</code></p>
        <p class="tip-block"><strong>for vs while：</strong>知道循环次数用 for，依赖于条件用 while。</p>`,
      l12_exercise_title: '练习：for 循环统计',
      l12_exercise_desc: '给定列表 <code>scores = [88, 92, 76, 65, 83, 90, 59, 72]</code>，用 for 循环遍历，统计：<br>1) 及格（≥60）的人数<br>2) 优秀（≥90）的人数<br>打印两个统计结果。',
      l12_exercise_hint: 'pass_count = 0\nexcellent = 0\nfor s in scores:\n    if s >= 60:\n        pass_count += 1\n    if s >= 90:\n        excellent += 1\nprint("及格:", pass_count, "人")\nprint("优秀:", excellent, "人")',

      // Lesson 13
      l13_title: '函数定义与调用',
      l13_subtitle: '封装代码，重复利用',
      l13_concept_title: '定义自己的函数',
      l13_concept_body: `
        <p><strong>函数</strong>把一段代码封装起来，给它一个名字，需要时调用即可。</p>
        <h3>定义语法</h3>
        <pre><code>def 函数名(参数):\n    """文档字符串（可选）"""\n    函数体\n    return 返回值（可选）</code></pre>
        <h3>为什么用函数？</h3>
        <ul>
          <li>避免重复写相同的代码（DRY 原则）</li>
          <li>把复杂问题拆解为小步骤</li>
          <li>代码更清晰易读</li>
        </ul>
        <h3>作用域</h3>
        <p>函数内定义的变量是<strong>局部变量</strong>，函数外无法访问。</p>`,
      l13_exercise_title: '练习：编写函数',
      l13_exercise_desc: '编写一个函数 <code>is_even(n)</code>，接收一个整数参数，如果是偶数返回 <code>True</code>，奇数返回 <code>False</code>。<br>然后调用该函数分别测试 10 和 7，并打印结果。',
      l13_exercise_hint: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(10))\nprint(is_even(7))',

      // Lesson 14
      l14_title: '函数参数',
      l14_subtitle: '灵活传参的艺术',
      l14_concept_title: '各种参数类型',
      l14_concept_body: `
        <h3>参数类型一览</h3>
        <ul>
          <li><strong>位置参数</strong> — 按顺序传入，最常用</li>
          <li><strong>默认参数</strong> — <code>def f(name, age=18)</code>，不传则用默认值</li>
          <li><strong>关键字参数</strong> — 调用时指定参数名 <code>f(age=20, name="小明")</code></li>
          <li><strong>*args</strong> — 接收任意数量的位置参数，打包成元组</li>
          <li><strong>**kwargs</strong> — 接收任意数量的关键字参数，打包成字典</li>
        </ul>
        <p class="tip-block"><strong>注意：</strong>默认参数的值不要在函数定义中直接用可变对象（如列表），会导致意外行为。</p>`,
      l14_exercise_title: '练习：使用参数',
      l14_exercise_desc: '编写函数 <code>describe_person(name, age, **kwargs)</code>：<br>1) 必须打印 name 和 age<br>2) 如果有额外的关键字参数，也一并打印<br>然后用 <code>describe_person("小明", 18, city="北京", hobby="编程")</code> 调用。',
      l14_exercise_hint: 'def describe_person(name, age, **kwargs):\n    print(f"姓名: {name}, 年龄: {age}")\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\n\ndescribe_person("小明", 18, city="北京", hobby="编程")',

      // Lesson 15
      l15_title: '返回值',
      l15_subtitle: '函数计算的结果',
      l15_concept_title: 'return 详解',
      l15_concept_body: `
        <p><code>return</code> 语句将函数的结果返回给调用者。</p>
        <h3>关键特性</h3>
        <ul>
          <li>函数执行到 <code>return</code> 就立即结束</li>
          <li>可以返回任意类型：数字、字符串、列表、字典...</li>
          <li><code>return a, b</code> 实际上返回的是一个元组 <code>(a, b)</code></li>
          <li>没有 <code>return</code> 的函数默认返回 <code>None</code></li>
          <li>可以用 <code>return</code> 提前退出函数</li>
        </ul>`,
      l15_exercise_title: '练习：带返回值的函数',
      l15_exercise_desc: '编写函数 <code>filter_pass(scores, pass_line=60)</code>，接收分数列表和及格线（默认60），<strong>返回</strong>一个只包含及格分数的新列表。<br>用 <code>[55, 70, 42, 88, 91, 60, 33]</code> 测试并打印结果。',
      l15_exercise_hint: 'def filter_pass(scores, pass_line=60):\n    result = []\n    for s in scores:\n        if s >= pass_line:\n            result.append(s)\n    return result\n\nscores = [55, 70, 42, 88, 91, 60, 33]\nprint(filter_pass(scores))',

      // Lesson 16
      l16_title: 'Lambda 表达式',
      l16_subtitle: '一行搞定简单函数',
      l16_concept_title: '匿名函数',
      l16_concept_body: `
        <p><strong>lambda</strong> 是创建小型匿名函数的关键字，语法简洁。</p>
        <pre><code>lambda 参数: 表达式</code></pre>
        <h3>适用场景</h3>
        <ul>
          <li>作为 <code>sorted()</code> 的排序键</li>
          <li>配合 <code>map()</code>、<code>filter()</code> 使用</li>
          <li>回调函数只需要一行代码时</li>
        </ul>
        <p class="tip-block"><strong>注意：</strong>lambda 只能包含<strong>一个表达式</strong>，不能包含多行语句或赋值操作。复杂逻辑还是用 def。</p>`,
      l16_exercise_title: '练习：lambda 排序',
      l16_exercise_desc: '给定单词列表 <code>words = ["apple", "banana", "kiwi", "grape", "pear"]</code>，请用 <code>sorted()</code> 配合 lambda，<strong>按单词长度</strong>从小到大排序，打印排序后的列表。',
      l16_exercise_hint: 'sorted(words, key=lambda w: len(w))',

      // Lesson 17
      l17_title: '闭包',
      l17_subtitle: '函数带着记忆',
      l17_concept_title: '理解闭包',
      l17_concept_body: `
        <p><strong>闭包</strong>是指内部函数引用了外部函数的变量，并且外部函数返回了内部函数。这个内部函数就"记住"了外部变量的值。</p>
        <h3>三个条件</h3>
        <ol>
          <li>有嵌套函数（函数里面定义函数）</li>
          <li>内部函数引用了外部函数的变量</li>
          <li>外部函数返回内部函数</li>
        </ol>
        <h3>nonlocal 关键字</h3>
        <p>如果要在内部函数中<strong>修改</strong>外部变量，需要用 <code>nonlocal</code> 声明。</p>`,
      l17_exercise_title: '练习：创建闭包',
      l17_exercise_desc: '编写函数 <code>make_greeter(greeting)</code>，返回一个函数，该函数接收 <code>name</code> 参数并打印 "{greeting}, {name}！"。<br>创建两个 greeter：一个中文一个英文，分别调用并打印。',
      l17_exercise_hint: 'def make_greeter(greeting):\n    def greeter(name):\n        print(f"{greeting}, {name}！")\n    return greeter\n\nhi = make_greeter("你好")\nhello = make_greeter("Hello")\nhi("小明")\nhello("Tom")',

      // Lesson 18
      l18_title: '装饰器',
      l18_subtitle: '给函数加点料',
      l18_concept_title: '装饰器原理',
      l18_concept_body: `
        <p><strong>装饰器</strong>本质上是一个函数，它接收一个函数作为参数，返回一个新的函数。用 <code>@</code> 语法糖使用。</p>
        <h3>为什么需要装饰器？</h3>
        <ul>
          <li>在不修改原函数的前提下增加功能</li>
          <li>日志记录、性能计时、权限检查等通用功能</li>
          <li>遵循"开闭原则"：对扩展开放，对修改关闭</li>
        </ul>
        <h3>基本结构</h3>
        <pre><code>def decorator(func):\n    def wrapper(*args, **kwargs):\n        # 前置操作\n        result = func(*args, **kwargs)\n        # 后置操作\n        return result\n    return wrapper</code></pre>`,
      l18_exercise_title: '练习：编写装饰器',
      l18_exercise_desc: '编写一个装饰器 <code>@double_result</code>，让被装饰函数的返回值<strong>翻倍</strong>。<br>然后用它装饰函数 <code>add(a, b)</code>（返回 a+b），测试 <code>add(3, 5)</code> 并打印结果（期望得到 16）。',
      l18_exercise_hint: 'def double_result(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs) * 2\n    return wrapper\n\n@double_result\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))',

      // Lesson 19
      l19_title: '递归',
      l19_subtitle: '函数自己调用自己',
      l19_concept_title: '递归思想',
      l19_concept_body: `
        <p><strong>递归</strong>是指函数在内部调用自身。适合解决可以分解为相同子问题的问题。</p>
        <h3>递归两要素</h3>
        <ul>
          <li><strong>基线条件</strong>（base case）— 何时停止递归，防止无限调用</li>
          <li><strong>递归条件</strong> — 将问题缩小后调用自身</li>
        </ul>
        <h3>优缺点</h3>
        <ul>
          <li>优点：代码简洁优雅，适合树形结构、分治算法</li>
          <li>缺点：深度过大可能导致栈溢出，性能通常不如迭代</li>
        </ul>
        <p class="tip-block"><strong>注意：</strong>Python 默认递归深度限制约 1000 层。每个递归调用都占用栈空间。</p>`,
      l19_exercise_title: '练习：递归求和',
      l19_exercise_desc: '编写递归函数 <code>recursive_sum(n)</code>，返回 1+2+...+n 的和。<br>提示：<code>recursive_sum(n) = n + recursive_sum(n-1)</code>，基线条件是 n=1 时返回 1。<br>计算并打印 n=100 的结果。',
      l19_exercise_hint: 'def recursive_sum(n):\n    if n == 1:\n        return 1\n    return n + recursive_sum(n - 1)\n\nprint(recursive_sum(100))',

      // Lesson 20
      l20_title: '列表推导式',
      l20_subtitle: '一行生成列表',
      l20_concept_title: '列表推导式语法',
      l20_concept_body: `
        <p><strong>列表推导式</strong>用一行代码创建列表，简洁且性能优于普通循环。</p>
        <h3>基本语法</h3>
        <pre><code>[表达式 for 变量 in 可迭代对象 if 条件]</code></pre>
        <h3>变体</h3>
        <ul>
          <li>不带条件：<code>[x*2 for x in range(5)]</code></li>
          <li>带条件过滤：<code>[x for x in range(10) if x%2==0]</code></li>
          <li>if-else 三元：<code>["偶数" if x%2==0 else "奇数" for x in range(5)]</code></li>
          <li>嵌套循环：<code>[(x,y) for x in "AB" for y in "12"]</code></li>
        </ul>
        <p>字典和集合也有推导式：<code>{k:v for k,v in ...}</code>、<code>{x for x in ...}</code></p>`,
      l20_exercise_title: '练习：列表推导式',
      l20_exercise_desc: '用<strong>列表推导式</strong>生成一个列表，包含 1 到 30 中所有<strong>能被 3 整除但不能被 5 整除</strong>的数。打印结果。',
      l20_exercise_hint: '[x for x in range(1, 31) if x % 3 == 0 and x % 5 != 0]',

      // Lesson 21
      l21_title: '迭代器',
      l21_subtitle: '统一遍历的接口',
      l21_concept_title: '迭代器协议',
      l21_concept_body: `
        <p><strong>迭代器</strong>是实现了 <code>__iter__()</code> 和 <code>__next__()</code> 方法的对象。</p>
        <h3>核心概念</h3>
        <ul>
          <li><strong>可迭代对象</strong>（Iterable）：可以被 for 循环遍历，如列表、元组、字符串</li>
          <li><strong>迭代器</strong>（Iterator）：记住遍历位置，每次调用 <code>next()</code> 返回下一个元素</li>
          <li><code>iter(obj)</code> 把可迭代对象转为迭代器</li>
          <li>迭代到末尾时抛出 <code>StopIteration</code> 异常（for 循环自动处理）</li>
        </ul>
        <p>优点：惰性计算，不一次性加载所有数据，节省内存。</p>`,
      l21_exercise_title: '练习：使用迭代器',
      l21_exercise_desc: '给定列表 <code>data = [10, 20, 30, 40, 50]</code>，用 <code>iter()</code> 创建迭代器，然后用 <code>next()</code> 依次取出前 3 个元素并打印。',
      l21_exercise_hint: 'it = iter(data)\nprint(next(it))\nprint(next(it))\nprint(next(it))',

      // Lesson 22
      l22_title: '生成器',
      l22_subtitle: '惰性生成数据流',
      l22_concept_title: 'yield 关键字',
      l22_concept_body: `
        <p><strong>生成器</strong>是一种特殊的迭代器，用 <code>yield</code> 关键字定义。</p>
        <h3>与普通函数的区别</h3>
        <ul>
          <li>普通函数用 <code>return</code>，一次返回，函数结束</li>
          <li>生成器用 <code>yield</code>，可以<strong>多次产出</strong>值，函数状态被"暂停-恢复"</li>
        </ul>
        <h3>生成器表达式</h3>
        <p>类似列表推导式，但用圆括号：<code>(x*2 for x in range(10))</code></p>
        <h3>优点</h3>
        <p><strong>惰性求值</strong>——只在需要时才计算下一个值，处理大数据时极省内存。</p>`,
      l22_exercise_title: '练习：编写生成器',
      l22_exercise_desc: '编写一个生成器函数 <code>even_numbers(n)</code>，生成前 n 个偶数（从 0 开始）。然后用 for 循环打印前 10 个偶数。',
      l22_exercise_hint: 'def even_numbers(n):\n    for i in range(n):\n        yield i * 2\n\nfor num in even_numbers(10):\n    print(num, end=" ")',

      // Lesson 23
      l23_title: '模块导入',
      l23_subtitle: '站在巨人的肩膀上',
      l23_concept_title: 'import 用法',
      l23_concept_body: `
        <p>Python 有丰富的<strong>标准库</strong>和第三方库。通过 <code>import</code> 导入模块来使用它们。</p>
        <h3>导入方式</h3>
        <ul>
          <li><code>import math</code> — 导入整个模块，使用时加前缀 <code>math.sqrt(16)</code></li>
          <li><code>from math import sqrt</code> — 只导入指定函数，直接用 <code>sqrt(16)</code></li>
          <li><code>from math import *</code> — 导入全部（不推荐，可能命名冲突）</li>
          <li><code>import numpy as np</code> — 给模块起别名</li>
        </ul>
        <h3>常用标准库</h3>
        <ul>
          <li><code>math</code> — 数学函数</li>
          <li><code>datetime</code> — 日期时间</li>
          <li><code>random</code> — 随机数</li>
          <li><code>json</code> — JSON 处理</li>
          <li><code>os</code> — 操作系统接口</li>
          <li><code>sys</code> — 系统相关</li>
        </ul>
        <h3>自定义模块</h3>
        <p>你可以把自己写的 .py 文件当作模块导入。例如把函数写在 <code>mytools.py</code> 里，然后用 <code>import mytools</code> 导入。</p>`,
      l23_concept_note: '💡 本关卡只有概念介绍，阅读完毕后即可进入下一关。',

      // Lesson 24
      l24_title: '文件操作',
      l24_subtitle: '读写文件入门',
      l24_concept_title: 'open() 与 with',
      l24_concept_body: `
        <p>Python 用 <code>open()</code> 函数打开文件，支持读（r）、写（w）、追加（a）等模式。</p>
        <h3>推荐方式：with 语句</h3>
        <p><code>with open(...) as f:</code> 会自动关闭文件，即使发生异常也不会忘记关闭。</p>
        <h3>常用操作</h3>
        <ul>
          <li><code>f.read()</code> — 读取全部内容</li>
          <li><code>f.readline()</code> — 读取一行</li>
          <li><code>f.readlines()</code> — 读取所有行，返回列表</li>
          <li><code>f.write(text)</code> — 写入字符串</li>
        </ul>
        <h3>文件模式</h3>
        <table>
          <tr><td><code>'r'</code></td><td>只读（默认），文件不存在会报错</td></tr>
          <tr><td><code>'w'</code></td><td>写入，会覆盖已有内容，文件不存在则创建</td></tr>
          <tr><td><code>'a'</code></td><td>追加，在末尾添加，文件不存在则创建</td></tr>
          <tr><td><code>'r+'</code></td><td>读写模式</td></tr>
        </table>
        <p class="tip-block"><strong>注意：</strong>由于浏览器安全限制，本平台无法实际运行文件操作代码。请在本地 Python 环境中练习。</p>`,
      l24_concept_note: '💡 本关卡只有概念介绍，阅读完毕后即可进入下一关。',

      // Lesson 25
      l25_title: '异常处理',
      l25_subtitle: '让程序更健壮',
      l25_concept_title: 'try-except 机制',
      l25_concept_body: `
        <p>程序运行时可能出错。用 <code>try-except</code> 捕获异常，防止程序崩溃。</p>
        <h3>完整语法</h3>
        <pre><code>try:\n    可能出错的代码\nexcept 异常类型 as e:\n    处理异常的代码\nelse:\n    没有异常时执行\nfinally:\n    无论是否异常都执行</code></pre>
        <h3>常见异常类型</h3>
        <ul>
          <li><code>ZeroDivisionError</code> — 除以零</li>
          <li><code>TypeError</code> — 类型错误</li>
          <li><code>ValueError</code> — 值错误</li>
          <li><code>IndexError</code> — 索引越界</li>
          <li><code>KeyError</code> — 字典键不存在</li>
          <li><code>FileNotFoundError</code> — 文件不存在</li>
        </ul>`,
      l25_exercise_title: '练习：异常处理',
      l25_exercise_desc: '编写一个安全的除法函数 <code>safe_divide(a, b)</code>，如果 b 为 0 则返回 <code>"除数不能为0"</code>，否则返回 a/b 的结果。<br>分别测试 <code>safe_divide(10, 2)</code> 和 <code>safe_divide(10, 0)</code> 并打印结果。',
      l25_exercise_hint: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "除数不能为0"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',

      // Lesson 26
      l26_title: '随机数',
      l26_subtitle: '给程序加点「意外」',
      l26_concept_title: 'random 模块',
      l26_concept_body: `
        <p><code>random</code> 是 Python 内置的随机数模块，功能丰富。</p>
        <h3>常用函数</h3>
        <ul>
          <li><code>random.randint(a, b)</code> — [a, b] 范围内的随机整数</li>
          <li><code>random.random()</code> — [0, 1) 的随机浮点数</li>
          <li><code>random.uniform(a, b)</code> — [a, b] 的随机浮点数</li>
          <li><code>random.choice(seq)</code> — 从序列中随机选一个</li>
          <li><code>random.shuffle(lst)</code> — 随机打乱列表（原地修改）</li>
          <li><code>random.sample(pop, k)</code> — 随机抽取 k 个不重复的元素</li>
          <li><code>random.seed(n)</code> — 设置随机种子，让结果可复现</li>
        </ul>`,
      l26_exercise_title: '练习：随机密码',
      l26_exercise_desc: '用 <code>random.sample()</code> 从字符串 <code>"abcdefghijklmnopqrstuvwxyz0123456789"</code> 中随机抽取 8 个字符，<strong>用 join 拼接成字符串</strong>作为随机密码。打印生成的密码。<br>（由于每次结果不同，本题只检查代码结构是否正确）',
      l26_exercise_hint: 'password = "".join(random.sample(chars, 8))\nprint(password)',
    },

    // ==================== ENGLISH ====================
    en: {
      // ---- UI ----
      ui_title: '🐍 Python Adventure',
      ui_subtitle: 'Choose a level, write code, beat the challenge!<br>26 levels to conquer, from beginner to master.',
      ui_progress_label: 'Progress',
      ui_progress_fmt: '{count} / {total} Levels',
      ui_search: 'Search levels...',
      ui_ready: '✅ Engine ready! Choose a level to begin your adventure!',
      ui_not_ready: '⚠️ Python engine not ready, code execution unavailable',
      ui_back_home: '🏠 Lobby',
      ui_back: '◀ Back',
      ui_next_card: 'Enter Challenge ▶',
      ui_locked: '🔒 Complete the challenge first',
      ui_all_done: '🎉 All Clear!',
      ui_next_lesson: 'Next Level ▶',
      ui_level: 'Level',
      ui_only_concept: '📖',
      ui_go_challenge: '💡 Read the concept then click "Enter Challenge" to begin',
      ui_loading: 'Loading Python environment...',
      ui_loading_sub: 'First load downloads ~20MB, please wait',
      ui_run: '▶ Run Code',
      ui_submit: '⚔ Submit',
      ui_submitted: '✅ Completed',
      ui_output: 'Output',
      ui_no_code: '(Write some code first)',
      ui_no_output: '(Code ran successfully, no output)',
      ui_example_code: 'Example Code',
      ui_output_result: 'Output Result',
      ui_hint: '💡 Hint: ',
      ui_level_unit: 'Level',
      ui_clear: '🗑 Clear',
      ui_back_btn: '🏠 Home',
      ui_toast_xp: '<span style="font-size:28px;">🎉</span><br><strong>+30 XP</strong><br><span style="font-size:13px;opacity:.8;">Level {id} cleared!</span>',
      ui_toast_levelup: '<div style="font-size:36px;margin-bottom:4px;">⬆</div><strong>Level Up!</strong><br>{title}',
      ui_toast_badge: '<span style="font-size:32px;">{icon}</span><br><strong>Achievement Unlocked!</strong><br>{label}<br><span style="font-size:12px;opacity:.8;">{desc}</span>',
      ui_feedback_correct: 'Correct! Well done!',
      ui_feedback_no_code: 'Please write some code before submitting',
      ui_feedback_error: 'Runtime error, please check your code and try again',
      ui_feedback_missing: 'Missing required elements: {missing}',
      ui_feedback_mismatch: 'Output mismatch.\nExpected: {expected}\nActual: {actual}',
      ui_card: 'Card',
      ui_judge_correct: '✅ Correct! Great job!',

      // ---- Achievements ----
      ach_first_label: '🎯 First Blood',
      ach_first_desc: 'Complete 1st level',
      ach_five_label: '🔥 Getting Started',
      ach_five_desc: 'Complete 5 levels',
      ach_ten_label: '🚀 On a Roll',
      ach_ten_desc: 'Complete 10 levels',
      ach_half_label: '⚡ Halfway Hero',
      ach_half_desc: 'Complete 13 levels',
      ach_twenty_label: '💎 Diamond Coder',
      ach_twenty_desc: 'Complete 20 levels',
      ach_all_label: '👑 Python Master',
      ach_all_desc: 'Complete all 26 levels',

      // ---- Levels ----
      lvl_0: '🐣 Python Beginner',
      lvl_1: '🐍 Python Apprentice',
      lvl_2: '⚡ Python Adept',
      lvl_3: '🔥 Python Expert',
      lvl_4: '💎 Python Master',
      lvl_5: '👑 Python Grandmaster',

      // ---- Regions ----
      region_forest_name: '🌿 Forest of Fundamentals',
      region_forest_desc: 'First steps into the Python world — master the basic tools',
      region_valley_name: '💎 Data Valley',
      region_valley_desc: 'Explore data containers — learn to organize and store information',
      region_mountain_name: '🏔️ Logic Mountains',
      region_mountain_desc: 'Conquer conditionals and loops — teach your program to think and repeat',
      region_temple_name: "🏛️ Master's Temple",
      region_temple_desc: 'Master advanced techniques — from functions to generators',
      region_domain_name: '⭐ Final Domain',
      region_domain_desc: 'Bring it all together — modules, files, and exception handling',
      region_locked: '🔒 Locked',

      // ---- Character ----
      char_greeting_0: 'Hello! Ready to start your adventure?',
      char_greeting_1: 'Keep going, you\'re getting stronger!',
      char_greeting_2: 'Well coded! The next challenge awaits!',
      char_greeting_3: 'You\'re already a Python expert!',
      char_greeting_4: 'Just one step away from Master!',
      char_greeting_5: 'Incredible, you are the Python Master!',
      char_greeting_done: 'All clear! You\'re a legend! 🎉',

      // ---- Cards ----
      card_challenge: '⚔ Challenge',
      card_done: '✅ Cleared',

      // ---- Copyright ----
      copyright: '© 2026 PythonStudy — Learn Python by Playing',

      // ======== LESSONS ========
      // Lesson 1
      l1_title: 'print() Function',
      l1_subtitle: 'First step — say hello to the world',
      l1_concept_title: 'Getting to Know print()',
      l1_concept_body: `
        <p><code>print()</code> is Python\'s most basic and commonly used function for <strong>outputting content to the screen</strong>.</p>
        <h3>Basic Usage</h3>
        <ul>
          <li>Put content to output inside parentheses; strings need quotes</li>
          <li>Numbers and variables can go directly without quotes</li>
          <li>Output multiple items separated by commas</li>
        </ul>
        <h3>Common Parameters</h3>
        <ul>
          <li><code>sep</code> — separator between items, default is a space</li>
          <li><code>end</code> — character at the end, default is newline <code>\\n</code></li>
        </ul>`,
      l1_exercise_title: 'Practice: Using print',
      l1_exercise_desc: 'Use <code>print()</code> to output <strong>three things you like</strong> on one line, separated by <code> - </code> (space dash space).',
      l1_exercise_hint: 'Use sep=" - " to set the separator, e.g.: print("A", "B", "C", sep=" - ")',

      // Lesson 2
      l2_title: 'Variables & Assignment',
      l2_subtitle: 'Label your data',
      l2_concept_title: 'What is a Variable?',
      l2_concept_body: `
        <p>A <strong>variable</strong> is like a labeled box for storing data. In Python, creating a variable is simple: write a name and use <code>=</code> to assign a value.</p>
        <h3>Naming Rules</h3>
        <ul>
          <li>Only letters, numbers, and underscores; cannot start with a number</li>
          <li>Case-sensitive: <code>name</code> and <code>Name</code> are different variables</li>
          <li>Cannot use Python keywords (if, for, while, etc.)</li>
          <li>Use meaningful English words, separate words with underscores</li>
        </ul>
        <h3>Dynamic Typing</h3>
        <p>Python is dynamically typed — variables don\'t need type declarations and can hold different types at any time.</p>`,
      l2_exercise_title: 'Practice: Creating Variables',
      l2_exercise_desc: 'Create three variables: <code>name</code> for your name, <code>age</code> for your age, and <code>city</code> for your city. Print each one on its own line.',
      l2_exercise_hint: 'name = "Your name"\nage = your_age\ncity = "Your city"\nprint(name)\nprint(age)\nprint(city)',

      // Lesson 3
      l3_title: 'Data Types Overview',
      l3_subtitle: 'The four basic elements of Python',
      l3_concept_title: 'Four Basic Data Types',
      l3_concept_body: `
        <p>Python has four fundamental data types:</p>
        <ul>
          <li><code>int</code> (integer) — e.g. 1, 100, -5</li>
          <li><code>float</code> (floating-point) — e.g. 3.14, -0.5, 1.0</li>
          <li><code>str</code> (string) — e.g. "hello", \'Python\'</li>
          <li><code>bool</code> (boolean) — only <code>True</code> and <code>False</code></li>
        </ul>
        <p>Use <code>type()</code> to check the type of a value or variable.</p>
        <p>Convert between types with built-in functions: <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code>.</p>`,
      l3_exercise_title: 'Practice: Checking Types',
      l3_exercise_desc: 'Create an integer <code>x = 25</code> and a float <code>y = 7.5</code>. Use <code>type()</code> to print each one\'s type. Then compute <code>x + y</code> and print the result and its type.',
      l3_exercise_hint: 'print(type(x))\nprint(type(y))\nz = x + y\nprint(z)\nprint(type(z))',

      // Lesson 4
      l4_title: 'Numbers & Operations',
      l4_subtitle: 'Add, subtract, multiply, divide',
      l4_concept_title: 'Arithmetic Operators',
      l4_concept_body: `
        <h3>Basic Operators</h3>
        <ul>
          <li><code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide (result is float)</li>
          <li><code>//</code> floor division, <code>%</code> modulo (remainder)</li>
          <li><code>**</code> exponentiation (e.g. 2³ = 2**3)</li>
        </ul>
        <h3>Operator Precedence</h3>
        <p>Parentheses <code>()</code> > Exponentiation <code>**</code> > Multiplication/Division <code>* / // %</code> > Addition/Subtraction <code>+ -</code></p>
        <h3>Compound Assignment</h3>
        <p><code>x += 5</code> is equivalent to <code>x = x + 5</code>. Also <code>-=</code>, <code>*=</code>, <code>/=</code>.</p>`,
      l4_exercise_title: 'Practice: Number Operations',
      l4_exercise_desc: 'Xiao Ming has 128 yuan and buys 3 books at 35 yuan each. Calculate <strong>how much money is left</strong> and <strong>how many 2-yuan pens he can buy with the remainder</strong>. Use variables and print the results.',
      l4_exercise_hint: 'left = money - book_price * book_count\npens = left // pen_price\nprint("Remaining:", left, "yuan")\nprint("Pens:", pens)',

      // Lesson 5
      l5_title: 'String Operations',
      l5_subtitle: 'Text games, flexible and fun',
      l5_concept_title: 'Playing with Strings',
      l5_concept_body: `
        <h3>Indexing & Slicing</h3>
        <p>Each character has a position number (starting from 0). <code>s[0]</code> gets the first char, <code>s[-1]</code> gets the last.<br>
        <code>s[start:end]</code> slices a substring, inclusive of start, exclusive of end.</p>
        <h3>Common Methods</h3>
        <ul>
          <li><code>len(s)</code> — get length</li>
          <li><code>s.upper()</code> / <code>s.lower()</code> — case conversion</li>
          <li><code>s.strip()</code> — remove leading/trailing whitespace</li>
          <li><code>s.replace(old, new)</code> — replace substrings</li>
          <li><code>s.split(sep)</code> — split by separator into a list</li>
        </ul>
        <h3>f-string Formatting</h3>
        <p><code>f"My name is {name}, I am {age} years old"</code> — prefix with f, put variables in braces.</p>`,
      l5_exercise_title: 'Practice: String Processing',
      l5_exercise_desc: 'Given <code>s = "PythonLearning"</code>:<br>1) Slice the first 6 characters<br>2) Slice the last 3 characters<br>3) Print the string length<br>4) Use f-string to output: "I am learning XXX, feeling XXX" (fill in with the slices)',
      l5_exercise_hint: 'first_6: s[:6], last_3: s[-3:], length: len(s)\nf-string: f"I am learning {first}, feeling {last}"',

      // Lesson 6
      l6_title: 'Lists',
      l6_subtitle: 'The most flexible data container',
      l6_concept_title: 'Getting to Know Lists',
      l6_concept_body: `
        <p>A <strong>list</strong> is wrapped in square brackets <code>[]</code>, elements separated by commas. It\'s an ordered, mutable collection.</p>
        <h3>Basic Operations</h3>
        <ul>
          <li><code>lst[i]</code> — access by index, supports negative indexing</li>
          <li><code>lst.append(x)</code> — add element to the end</li>
          <li><code>lst.insert(i, x)</code> — insert at position</li>
          <li><code>lst.pop()</code> — remove and return last element</li>
          <li><code>lst.remove(x)</code> — remove first matching value</li>
          <li><code>len(lst)</code> — list length</li>
          <li><code>lst.sort()</code> — sort in place</li>
        </ul>
        <p>Lists can contain elements of different types and can be nested.</p>`,
      l6_exercise_title: 'Practice: List Operations',
      l6_exercise_desc: '1) Create an empty list <code>nums</code><br>2) Append 10, 20, 30 to it<br>3) Insert 15 at index 1<br>4) Print the final list and its length',
      l6_exercise_hint: 'nums.append(10)\nnums.append(20)\nnums.append(30)\nnums.insert(1, 15)\nprint(nums)\nprint(len(nums))',

      // Lesson 7
      l7_title: 'Tuples',
      l7_subtitle: 'Immutable sequences',
      l7_concept_title: 'Getting to Know Tuples',
      l7_concept_body: `
        <p>A <strong>tuple</strong> is wrapped in parentheses <code>()</code>. Similar to lists, but <strong>elements cannot be modified</strong>.</p>
        <h3>Why Tuples?</h3>
        <ul>
          <li>Protect data from accidental modification</li>
          <li>Can serve as dictionary keys (lists cannot)</li>
          <li>Functions returning multiple values actually return a tuple</li>
          <li>Smaller memory footprint than lists</li>
        </ul>
        <h3>Tuple Unpacking</h3>
        <p>Assign tuple elements to multiple variables at once: <code>a, b, c = (1, 2, 3)</code></p>`,
      l7_exercise_title: 'Practice: Tuple Unpacking',
      l7_exercise_desc: 'Given <code>info = ("Alice", 20, "Beijing")</code> representing name, age, city. Use <strong>tuple unpacking</strong> to assign them to <code>name</code>, <code>age</code>, <code>city</code>, then use f-string to print: "Alice is 20 years old, from Beijing".',
      l7_exercise_hint: 'name, age, city = info\nprint(f"{name} is {age} years old, from {city}")',

      // Lesson 8
      l8_title: 'Sets',
      l8_subtitle: 'Deduplication master, math sets',
      l8_concept_title: 'Getting to Know Sets',
      l8_concept_body: `
        <p>A <strong>set</strong> is created with curly braces <code>{}</code> or <code>set()</code>. Features: <strong>no duplicates, unordered</strong>.</p>
        <h3>Basic Operations</h3>
        <ul>
          <li><code>s.add(x)</code> — add an element</li>
          <li><code>s.remove(x)</code> — remove an element (raises error if not found)</li>
          <li><code>s.discard(x)</code> — safely remove (no error if missing)</li>
          <li><code>x in s</code> — check membership</li>
        </ul>
        <h3>Set Operations</h3>
        <ul>
          <li><code>A & B</code> or <code>A.intersection(B)</code> — intersection</li>
          <li><code>A | B</code> or <code>A.union(B)</code> — union</li>
          <li><code>A - B</code> or <code>A.difference(B)</code> — difference</li>
        </ul>
        <p>The most practical use of sets: <strong>deduplicating a list</strong>.</p>`,
      l8_exercise_title: 'Practice: Set Operations',
      l8_exercise_desc: 'Students from two classes: <code>class_a = {"Alice","Bob","Charlie","Diana"}</code>, <code>class_b = {"Charlie","Diana","Eve","Frank"}</code>. Find:<br>1) Students in both classes (intersection)<br>2) All students (union, no duplicates)<br>3) Students only in class A (difference)',
      l8_exercise_hint: 'Intersection: class_a & class_b\nUnion: class_a | class_b\nDifference: class_a - class_b',

      // Lesson 9
      l9_title: 'Dictionaries',
      l9_subtitle: 'Key-value pairs, fast lookup',
      l9_concept_title: 'Getting to Know Dictionaries',
      l9_concept_body: `
        <p>A <strong>dictionary</strong> stores <strong>key-value pairs</strong> (key → value) in curly braces <code>{}</code>. Look up values quickly by key.</p>
        <h3>Basic Operations</h3>
        <ul>
          <li><code>d[key]</code> — get value by key (errors if key missing)</li>
          <li><code>d.get(key, default)</code> — safe get (returns default if missing)</li>
          <li><code>d[key] = value</code> — add or update a key-value pair</li>
          <li><code>del d[key]</code> — delete a key-value pair</li>
          <li><code>key in d</code> — check if key exists</li>
          <li><code>d.keys()</code> / <code>d.values()</code> / <code>d.items()</code> — iteration</li>
        </ul>
        <p>Dictionary keys must be <strong>immutable types</strong> (strings, numbers, tuples); lists cannot be keys.</p>`,
      l9_exercise_title: 'Practice: Dictionary Operations',
      l9_exercise_desc: 'Create a dictionary <code>book</code> with: title="Python Basics", author="Mr. Li", price=59. Then:<br>1) Print the title<br>2) Change price to 49<br>3) Add publisher="Education Press"<br>4) Print the complete dictionary',
      l9_exercise_hint: 'print(book["title"])\nbook["price"] = 49\nbook["publisher"] = "Education Press"\nprint(book)',

      // Lesson 10
      l10_title: 'if Conditionals',
      l10_subtitle: 'Teach your program to make decisions',
      l10_concept_title: 'Branching Structures',
      l10_concept_body: `
        <p>The <code>if</code> statement lets your program execute different code based on different conditions.</p>
        <h3>Three Forms</h3>
        <ul>
          <li><code>if condition:</code> — execute if condition is True</li>
          <li><code>if condition: ... else:</code> — two-way choice</li>
          <li><code>if condition: ... elif condition: ... else:</code> — multi-way choice</li>
        </ul>
        <h3>Comparison Operators</h3>
        <p><code>== != > < >= <=</code></p>
        <h3>Logical Operators</h3>
        <p><code>and</code>, <code>or</code>, <code>not</code></p>
        <p class="tip-block"><strong>Note:</strong> Python uses <strong>indentation</strong> to denote code blocks, typically 4 spaces. Don\'t forget the colon <code>:</code>!</p>`,
      l10_exercise_title: 'Practice: Grade Classification',
      l10_exercise_desc: 'Variable <code>score = 78</code> is given. Use if-elif-else to determine the grade:<br>≥90 → "A"<br>≥80 → "B"<br>≥70 → "C"<br>≥60 → "D"<br><60 → "F"<br>Print the grade.',
      l10_exercise_hint: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")',

      // Lesson 11
      l11_title: 'while Loop',
      l11_subtitle: 'Keep running while condition holds',
      l11_concept_title: 'while Loop Structure',
      l11_concept_body: `
        <p>The <code>while</code> loop repeatedly executes a code block as long as the condition is <code>True</code>.</p>
        <h3>Key Elements</h3>
        <ul>
          <li>Loop condition — controls when the loop stops</li>
          <li>Loop body — code executed each iteration</li>
          <li>Condition update — must change the condition variable, otherwise <strong>infinite loop</strong>!</li>
        </ul>
        <h3>break and continue</h3>
        <ul>
          <li><code>break</code> — immediately exit the loop</li>
          <li><code>continue</code> — skip the rest of this iteration, go to next</li>
        </ul>`,
      l11_exercise_title: 'Practice: while Summation',
      l11_exercise_desc: 'Use a while loop to calculate the <strong>sum of all odd numbers from 1 to 50</strong> and print the result. (Odd numbers are those not divisible by 2)',
      l11_exercise_hint: 'n = 1\ntotal = 0\nwhile n <= 50:\n    total += n\n    n += 2\nprint(total)',

      // Lesson 12
      l12_title: 'for Loop',
      l12_subtitle: 'Iterate over everything iterable',
      l12_concept_title: 'for Loop & range',
      l12_concept_body: `
        <p>The <code>for</code> loop iterates over each element in a sequence (list, string, tuple, etc.).</p>
        <h3>range() Function</h3>
        <ul>
          <li><code>range(n)</code> — 0 to n-1</li>
          <li><code>range(start, end)</code> — inclusive start, exclusive end</li>
          <li><code>range(start, end, step)</code> — with step size</li>
        </ul>
        <h3>enumerate()</h3>
        <p>Get both index and value: <code>for i, val in enumerate(lst):</code></p>
        <p class="tip-block"><strong>for vs while:</strong> Use for when you know the number of iterations, while when it depends on a condition.</p>`,
      l12_exercise_title: 'Practice: for Loop Statistics',
      l12_exercise_desc: 'Given <code>scores = [88, 92, 76, 65, 83, 90, 59, 72]</code>, use a for loop to count:<br>1) How many passed (≥60)<br>2) How many are excellent (≥90)<br>Print both counts.',
      l12_exercise_hint: 'passed = 0\nexcellent = 0\nfor s in scores:\n    if s >= 60:\n        passed += 1\n    if s >= 90:\n        excellent += 1\nprint("Passed:", passed)\nprint("Excellent:", excellent)',

      // Lesson 13
      l13_title: 'Functions',
      l13_subtitle: 'Encapsulate code, reuse it',
      l13_concept_title: 'Defining Your Own Functions',
      l13_concept_body: `
        <p>A <strong>function</strong> wraps up a piece of code, gives it a name, and you call it whenever needed.</p>
        <h3>Definition Syntax</h3>
        <pre><code>def function_name(parameters):\n    """docstring (optional)"""\n    function body\n    return value (optional)</code></pre>
        <h3>Why Functions?</h3>
        <ul>
          <li>Avoid repeating the same code (DRY principle)</li>
          <li>Break complex problems into smaller steps</li>
          <li>Code is cleaner and more readable</li>
        </ul>
        <h3>Scope</h3>
        <p>Variables defined inside a function are <strong>local variables</strong> and cannot be accessed outside.</p>`,
      l13_exercise_title: 'Practice: Writing a Function',
      l13_exercise_desc: 'Write a function <code>is_even(n)</code> that takes an integer, returns <code>True</code> if even, <code>False</code> if odd.<br>Then test it with 10 and 7, and print the results.',
      l13_exercise_hint: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(10))\nprint(is_even(7))',

      // Lesson 14
      l14_title: 'Function Parameters',
      l14_subtitle: 'The art of flexible arguments',
      l14_concept_title: 'Parameter Types',
      l14_concept_body: `
        <h3>Parameter Types Overview</h3>
        <ul>
          <li><strong>Positional parameters</strong> — passed in order, most common</li>
          <li><strong>Default parameters</strong> — <code>def f(name, age=18)</code>, uses default if not passed</li>
          <li><strong>Keyword arguments</strong> — specify parameter name when calling: <code>f(age=20, name="Alice")</code></li>
          <li><strong>*args</strong> — accept any number of positional arguments, packed into a tuple</li>
          <li><strong>**kwargs</strong> — accept any number of keyword arguments, packed into a dictionary</li>
        </ul>
        <p class="tip-block"><strong>Note:</strong> Don\'t use mutable objects (like lists) as default parameter values — it can cause unexpected behavior.</p>`,
      l14_exercise_title: 'Practice: Using Parameters',
      l14_exercise_desc: 'Write a function <code>describe_person(name, age, **kwargs)</code>:<br>1) Must print name and age<br>2) If there are extra keyword arguments, print them too<br>Then call with <code>describe_person("Alice", 18, city="Beijing", hobby="coding")</code>.',
      l14_exercise_hint: 'def describe_person(name, age, **kwargs):\n    print(f"Name: {name}, Age: {age}")\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\n\ndescribe_person("Alice", 18, city="Beijing", hobby="coding")',

      // Lesson 15
      l15_title: 'Return Values',
      l15_subtitle: 'The result of function computation',
      l15_concept_title: 'return Explained',
      l15_concept_body: `
        <p>The <code>return</code> statement sends a function\'s result back to the caller.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Function execution stops immediately at <code>return</code></li>
          <li>Can return any type: numbers, strings, lists, dictionaries...</li>
          <li><code>return a, b</code> actually returns a tuple <code>(a, b)</code></li>
          <li>Functions without <code>return</code> default to returning <code>None</code></li>
          <li>Can use <code>return</code> to exit a function early</li>
        </ul>`,
      l15_exercise_title: 'Practice: Functions with Return Values',
      l15_exercise_desc: 'Write a function <code>filter_pass(scores, pass_line=60)</code> that takes a list of scores and a pass threshold (default 60), <strong>returns</strong> a new list containing only passing scores.<br>Test with <code>[55, 70, 42, 88, 91, 60, 33]</code> and print the result.',
      l15_exercise_hint: 'def filter_pass(scores, pass_line=60):\n    result = []\n    for s in scores:\n        if s >= pass_line:\n            result.append(s)\n    return result\n\nscores = [55, 70, 42, 88, 91, 60, 33]\nprint(filter_pass(scores))',

      // Lesson 16
      l16_title: 'Lambda Expressions',
      l16_subtitle: 'One-liner simple functions',
      l16_concept_title: 'Anonymous Functions',
      l16_concept_body: `
        <p><strong>lambda</strong> is a keyword for creating small anonymous functions with concise syntax.</p>
        <pre><code>lambda parameters: expression</code></pre>
        <h3>Use Cases</h3>
        <ul>
          <li>As the sort key for <code>sorted()</code></li>
          <li>With <code>map()</code> and <code>filter()</code></li>
          <li>When a callback only needs one line of code</li>
        </ul>
        <p class="tip-block"><strong>Note:</strong> lambda can only contain <strong>a single expression</strong>, not multiple statements or assignments. Use def for complex logic.</p>`,
      l16_exercise_title: 'Practice: Lambda Sorting',
      l16_exercise_desc: 'Given <code>words = ["apple", "banana", "kiwi", "grape", "pear"]</code>, use <code>sorted()</code> with a lambda to sort <strong>by word length</strong> (shortest first) and print the result.',
      l16_exercise_hint: 'sorted(words, key=lambda w: len(w))',

      // Lesson 17
      l17_title: 'Closures',
      l17_subtitle: 'Functions with memory',
      l17_concept_title: 'Understanding Closures',
      l17_concept_body: `
        <p>A <strong>closure</strong> is an inner function that references variables from its outer function, and the outer function returns the inner function. The inner function "remembers" the outer variables.</p>
        <h3>Three Conditions</h3>
        <ol>
          <li>Nested functions (function defined inside a function)</li>
          <li>Inner function references variables from the outer function</li>
          <li>Outer function returns the inner function</li>
        </ol>
        <h3>nonlocal Keyword</h3>
        <p>To <strong>modify</strong> an outer variable inside the inner function, use the <code>nonlocal</code> declaration.</p>`,
      l17_exercise_title: 'Practice: Creating Closures',
      l17_exercise_desc: 'Write a function <code>make_greeter(greeting)</code> that returns a function. The returned function takes a <code>name</code> parameter and prints "{greeting}, {name}!".<br>Create two greeters: one in English, one in Chinese, and call each.',
      l17_exercise_hint: 'def make_greeter(greeting):\n    def greeter(name):\n        print(f"{greeting}, {name}!")\n    return greeter\n\nhi = make_greeter("Hello")\nhello = make_greeter("你好")\nhi("Tom")\nhello("小明")',

      // Lesson 18
      l18_title: 'Decorators',
      l18_subtitle: 'Add spice to your functions',
      l18_concept_title: 'Decorator Principles',
      l18_concept_body: `
        <p>A <strong>decorator</strong> is essentially a function that takes a function as an argument and returns a new function. Use the <code>@</code> syntax sugar.</p>
        <h3>Why Decorators?</h3>
        <ul>
          <li>Add functionality without modifying the original function</li>
          <li>Logging, timing, permission checks, and other cross-cutting concerns</li>
          <li>Follows the "Open-Closed Principle": open for extension, closed for modification</li>
        </ul>
        <h3>Basic Structure</h3>
        <pre><code>def decorator(func):\n    def wrapper(*args, **kwargs):\n        # before\n        result = func(*args, **kwargs)\n        # after\n        return result\n    return wrapper</code></pre>`,
      l18_exercise_title: 'Practice: Writing a Decorator',
      l18_exercise_desc: 'Write a decorator <code>@double_result</code> that <strong>doubles</strong> the return value of the decorated function.<br>Then use it on <code>add(a, b)</code> (returns a+b), test <code>add(3, 5)</code> and print the result (expect 16).',
      l18_exercise_hint: 'def double_result(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs) * 2\n    return wrapper\n\n@double_result\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))',

      // Lesson 19
      l19_title: 'Recursion',
      l19_subtitle: 'Functions that call themselves',
      l19_concept_title: 'Recursive Thinking',
      l19_concept_body: `
        <p><strong>Recursion</strong> is when a function calls itself. It\'s suitable for problems that can be broken down into identical sub-problems.</p>
        <h3>Two Essential Elements</h3>
        <ul>
          <li><strong>Base case</strong> — when to stop recursion, prevents infinite calls</li>
          <li><strong>Recursive case</strong> — shrink the problem and call itself</li>
        </ul>
        <h3>Pros and Cons</h3>
        <ul>
          <li>Pros: elegant code, great for tree structures and divide-and-conquer algorithms</li>
          <li>Cons: deep recursion can cause stack overflow, usually slower than iteration</li>
        </ul>
        <p class="tip-block"><strong>Note:</strong> Python\'s default recursion depth limit is about 1000. Each recursive call consumes stack space.</p>`,
      l19_exercise_title: 'Practice: Recursive Sum',
      l19_exercise_desc: 'Write a recursive function <code>recursive_sum(n)</code> that returns 1+2+...+n.<br>Hint: <code>recursive_sum(n) = n + recursive_sum(n-1)</code>, base case: n=1 returns 1.<br>Calculate and print the result for n=100.',
      l19_exercise_hint: 'def recursive_sum(n):\n    if n == 1:\n        return 1\n    return n + recursive_sum(n - 1)\n\nprint(recursive_sum(100))',

      // Lesson 20
      l20_title: 'List Comprehensions',
      l20_subtitle: 'Generate lists in one line',
      l20_concept_title: 'List Comprehension Syntax',
      l20_concept_body: `
        <p><strong>List comprehensions</strong> create lists in one line of code. They\'re concise and more performant than regular loops.</p>
        <h3>Basic Syntax</h3>
        <pre><code>[expression for variable in iterable if condition]</code></pre>
        <h3>Variations</h3>
        <ul>
          <li>No condition: <code>[x*2 for x in range(5)]</code></li>
          <li>With filter: <code>[x for x in range(10) if x%2==0]</code></li>
          <li>if-else ternary: <code>["even" if x%2==0 else "odd" for x in range(5)]</code></li>
          <li>Nested loops: <code>[(x,y) for x in "AB" for y in "12"]</code></li>
        </ul>
        <p>Dict and set comprehensions also exist: <code>{k:v for k,v in ...}</code>, <code>{x for x in ...}</code></p>`,
      l20_exercise_title: 'Practice: List Comprehension',
      l20_exercise_desc: 'Use a <strong>list comprehension</strong> to generate a list of numbers from 1 to 30 that are <strong>divisible by 3 but NOT by 5</strong>. Print the result.',
      l20_exercise_hint: '[x for x in range(1, 31) if x % 3 == 0 and x % 5 != 0]',

      // Lesson 21
      l21_title: 'Iterators',
      l21_subtitle: 'A unified interface for traversal',
      l21_concept_title: 'The Iterator Protocol',
      l21_concept_body: `
        <p>An <strong>iterator</strong> is an object that implements the <code>__iter__()</code> and <code>__next__()</code> methods.</p>
        <h3>Core Concepts</h3>
        <ul>
          <li><strong>Iterable</strong>: can be traversed by a for loop, e.g. lists, tuples, strings</li>
          <li><strong>Iterator</strong>: remembers traversal position, each <code>next()</code> call returns the next element</li>
          <li><code>iter(obj)</code> converts an iterable to an iterator</li>
          <li>When exhausted, raises <code>StopIteration</code> (for loops handle this automatically)</li>
        </ul>
        <p>Advantage: lazy evaluation — doesn\'t load all data at once, saves memory.</p>`,
      l21_exercise_title: 'Practice: Using Iterators',
      l21_exercise_desc: 'Given <code>data = [10, 20, 30, 40, 50]</code>, use <code>iter()</code> to create an iterator, then use <code>next()</code> to fetch and print the first 3 elements.',
      l21_exercise_hint: 'it = iter(data)\nprint(next(it))\nprint(next(it))\nprint(next(it))',

      // Lesson 22
      l22_title: 'Generators',
      l22_subtitle: 'Lazy data stream generation',
      l22_concept_title: 'The yield Keyword',
      l22_concept_body: `
        <p>A <strong>generator</strong> is a special kind of iterator, defined with the <code>yield</code> keyword.</p>
        <h3>Difference from Regular Functions</h3>
        <ul>
          <li>Regular functions use <code>return</code> — return once and end</li>
          <li>Generators use <code>yield</code> — can <strong>produce multiple values</strong>, function state is "paused and resumed"</li>
        </ul>
        <h3>Generator Expressions</h3>
        <p>Similar to list comprehensions but use parentheses: <code>(x*2 for x in range(10))</code></p>
        <h3>Advantages</h3>
        <p><strong>Lazy evaluation</strong> — only computes the next value when needed, extremely memory-efficient for large data.</p>`,
      l22_exercise_title: 'Practice: Writing Generators',
      l22_exercise_desc: 'Write a generator function <code>even_numbers(n)</code> that yields the first n even numbers (starting from 0). Then use a for loop to print the first 10.',
      l22_exercise_hint: 'def even_numbers(n):\n    for i in range(n):\n        yield i * 2\n\nfor num in even_numbers(10):\n    print(num, end=" ")',

      // Lesson 23
      l23_title: 'Module Imports',
      l23_subtitle: 'Standing on the shoulders of giants',
      l23_concept_title: 'import Usage',
      l23_concept_body: `
        <p>Python has a rich <strong>standard library</strong> and third-party packages. Use <code>import</code> to bring modules into your code.</p>
        <h3>Import Styles</h3>
        <ul>
          <li><code>import math</code> — import entire module, prefix with module name: <code>math.sqrt(16)</code></li>
          <li><code>from math import sqrt</code> — import specific function, use directly: <code>sqrt(16)</code></li>
          <li><code>from math import *</code> — import everything (not recommended, may cause name conflicts)</li>
          <li><code>import numpy as np</code> — give the module an alias</li>
        </ul>
        <h3>Common Standard Libraries</h3>
        <ul>
          <li><code>math</code> — mathematical functions</li>
          <li><code>datetime</code> — dates and times</li>
          <li><code>random</code> — random numbers</li>
          <li><code>json</code> — JSON processing</li>
          <li><code>os</code> — operating system interface</li>
          <li><code>sys</code> — system-related functions</li>
        </ul>
        <h3>Custom Modules</h3>
        <p>You can import your own .py files as modules. For example, put functions in <code>mytools.py</code> and import with <code>import mytools</code>.</p>`,
      l23_concept_note: '💡 This level is concept-only. Read through, then proceed to the next level.',

      // Lesson 24
      l24_title: 'File Operations',
      l24_subtitle: 'Reading and writing files',
      l24_concept_title: 'open() and with',
      l24_concept_body: `
        <p>Python uses the <code>open()</code> function to open files, supporting read (r), write (w), append (a), and other modes.</p>
        <h3>Recommended: with Statement</h3>
        <p><code>with open(...) as f:</code> automatically closes the file, even if an exception occurs.</p>
        <h3>Common Operations</h3>
        <ul>
          <li><code>f.read()</code> — read entire content</li>
          <li><code>f.readline()</code> — read one line</li>
          <li><code>f.readlines()</code> — read all lines, returns a list</li>
          <li><code>f.write(text)</code> — write a string</li>
        </ul>
        <h3>File Modes</h3>
        <table>
          <tr><td><code>'r'</code></td><td>Read only (default), error if file doesn\'t exist</td></tr>
          <tr><td><code>'w'</code></td><td>Write, overwrites existing content, creates if missing</td></tr>
          <tr><td><code>'a'</code></td><td>Append at end, creates if missing</td></tr>
          <tr><td><code>'r+'</code></td><td>Read and write mode</td></tr>
        </table>
        <p class="tip-block"><strong>Note:</strong> Due to browser security restrictions, file operations cannot run on this platform. Please practice in a local Python environment.</p>`,
      l24_concept_note: '💡 This level is concept-only. Read through, then proceed to the next level.',

      // Lesson 25
      l25_title: 'Exception Handling',
      l25_subtitle: 'Make your programs robust',
      l25_concept_title: 'The try-except Mechanism',
      l25_concept_body: `
        <p>Programs can encounter errors at runtime. Use <code>try-except</code> to catch exceptions and prevent crashes.</p>
        <h3>Complete Syntax</h3>
        <pre><code>try:\n    code that might error\nexcept ExceptionType as e:\n    handle the error\nelse:\n    runs if no exception\nfinally:\n    always runs</code></pre>
        <h3>Common Exception Types</h3>
        <ul>
          <li><code>ZeroDivisionError</code> — division by zero</li>
          <li><code>TypeError</code> — type mismatch</li>
          <li><code>ValueError</code> — invalid value</li>
          <li><code>IndexError</code> — index out of bounds</li>
          <li><code>KeyError</code> — dictionary key not found</li>
          <li><code>FileNotFoundError</code> — file does not exist</li>
        </ul>`,
      l25_exercise_title: 'Practice: Exception Handling',
      l25_exercise_desc: 'Write a safe division function <code>safe_divide(a, b)</code>. If b is 0, return <code>"Cannot divide by zero"</code>; otherwise return a/b.<br>Test with <code>safe_divide(10, 2)</code> and <code>safe_divide(10, 0)</code> and print the results.',
      l25_exercise_hint: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',

      // Lesson 26
      l26_title: 'Random Numbers',
      l26_subtitle: 'Add some "surprise" to your programs',
      l26_concept_title: 'The random Module',
      l26_concept_body: `
        <p><code>random</code> is Python\'s built-in random number module with rich functionality.</p>
        <h3>Common Functions</h3>
        <ul>
          <li><code>random.randint(a, b)</code> — random integer in [a, b]</li>
          <li><code>random.random()</code> — random float in [0, 1)</li>
          <li><code>random.uniform(a, b)</code> — random float in [a, b]</li>
          <li><code>random.choice(seq)</code> — pick a random element from a sequence</li>
          <li><code>random.shuffle(lst)</code> — shuffle a list in place</li>
          <li><code>random.sample(pop, k)</code> — pick k unique random elements</li>
          <li><code>random.seed(n)</code> — set the random seed for reproducibility</li>
        </ul>`,
      l26_exercise_title: 'Practice: Random Password',
      l26_exercise_desc: 'Use <code>random.sample()</code> to pick 8 random characters from <code>"abcdefghijklmnopqrstuvwxyz0123456789"</code>, <strong>join them into a string</strong> as a random password. Print the generated password.<br>(Since results vary each time, this only checks code structure)',
      l26_exercise_hint: 'password = "".join(random.sample(chars, 8))\nprint(password)',
    }
  },

  /** 初始化语言 */
  init() {
    try {
      const stored = localStorage.getItem('python-study-lang');
      if (stored === 'en' || stored === 'zh') this._lang = stored;
    } catch (e) { /* */ }
    this._updateButton();
    return this._lang;
  },

  /** 获取翻译 */
  t(key, replacements) {
    const dict = this._data[this._lang] || this._data.zh;
    let text = dict[key];
    if (text === undefined) {
      // fallback to Chinese
      text = (this._data.zh[key]) || key;
    }
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
    }
    return text;
  },

  /** 切换语言 */
  toggle() {
    this._lang = this._lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('python-study-lang', this._lang); } catch (e) { /* */ }
    this._updateButton();
    return this._lang;
  },

  /** 设置语言 */
  setLang(lang) {
    if (lang === 'zh' || lang === 'en') {
      this._lang = lang;
      try { localStorage.setItem('python-study-lang', lang); } catch (e) { /* */ }
      this._updateButton();
    }
    return this._lang;
  },

  /** 获取当前语言 */
  get lang() { return this._lang; },

  _updateButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = this._lang === 'zh' ? '中' : 'EN';
  }
};
