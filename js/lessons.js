const LESSONS = [
  // ==================== 第1课：print() ====================
  {
    id: 1, title: "print() 输出函数", subtitle: "程序的第一步，向世界打个招呼",
    cards: [
      {
        type: "concept",
        title: "认识 print() 函数",
        content: `
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
          </ul>
        `,
        example: 'print("Hello, Python!")\nprint("你好", "世界")\nprint("苹果", "香蕉", "橘子", sep=" | ")\nprint("第一行", end=" → ")\nprint("接在后面")',
        exampleOutput: "Hello, Python!\n你好 世界\n苹果 | 香蕉 | 橘子\n第一行 → 接在后面"
      },
      {
        type: "exercise",
        title: "练习：使用 print 输出",
        description: "请使用 <code>print()</code> 函数，在一行中输出 <strong>三件你喜欢的东西</strong>，用 <code> - </code>（空格短横空格）分隔。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["print", "sep"],
        template: '# 请在这里写代码\n# 提示：使用 sep 参数\n',
        hint: '用 sep=" - " 参数来设置分隔符，例如：print("A", "B", "C", sep=" - ")'
      }
    ]
  },

  // ==================== 第2课：变量与赋值 ====================
  {
    id: 2, title: "变量与赋值", subtitle: "给数据贴上标签",
    cards: [
      {
        type: "concept",
        title: "什么是变量？",
        content: `
          <p><strong>变量</strong>就像一个带标签的盒子，用来存储数据。Python 中创建变量非常简洁：直接写名字，用 <code>=</code> 赋值即可。</p>
          <h3>命名规则</h3>
          <ul>
            <li>只能包含字母、数字、下划线，不能以数字开头</li>
            <li>区分大小写：<code>name</code> 和 <code>Name</code> 是两个不同变量</li>
            <li>不能使用 Python 关键字（如 if、for、while）</li>
            <li>建议使用有意义的英文单词，单词间用下划线连接</li>
          </ul>
          <h3>动态类型</h3>
          <p>Python 是动态类型语言，变量不需要声明类型，可以随时赋不同类型的值。</p>
        `,
        example: 'name = "小明"\nage = 18\nscore = 95.5\nis_pass = True\n\nprint("姓名:", name)\nprint("年龄:", age)\nprint("分数:", score)',
        exampleOutput: "姓名: 小明\n年龄: 18\n分数: 95.5"
      },
      {
        type: "exercise",
        title: "练习：创建变量",
        description: "创建三个变量：<code>name</code> 存你的名字、<code>age</code> 存你的年龄、<code>city</code> 存你所在的城市，然后依次打印它们，每行一个。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["name", "=", "age", "city", "print"],
        template: '# 创建你的变量并打印\n\n',
        hint: 'name = "你的名字"\nage = 你的年龄\ncity = "你的城市"\nprint(name)\nprint(age)\nprint(city)'
      }
    ]
  },

  // ==================== 第3课：数据类型概述 ====================
  {
    id: 3, title: "数据类型概述", subtitle: "Python 世界的四种基本元素",
    cards: [
      {
        type: "concept",
        title: "四种基本数据类型",
        content: `
          <p>Python 有四种最基础的数据类型：</p>
          <ul>
            <li><code>int</code>（整数）— 如 1、100、-5</li>
            <li><code>float</code>（浮点数）— 如 3.14、-0.5、1.0</li>
            <li><code>str</code>（字符串）— 如 "hello"、'Python'</li>
            <li><code>bool</code>（布尔值）— 只有 <code>True</code> 和 <code>False</code></li>
          </ul>
          <p>使用 <code>type()</code> 函数可以查看一个值或变量的类型。</p>
          <p>不同类型之间可以用内置函数转换：<code>int()</code>、<code>float()</code>、<code>str()</code>、<code>bool()</code>。</p>
        `,
        example: 'a = 42\nb = 3.14\nc = "hello"\nd = True\n\nprint(type(a), a)\nprint(type(b), b)\nprint(type(c), c)\nprint(type(d), d)\n\n# 类型转换\nprint(float(10))\nprint(int(3.9))\nprint(str(100) + "分")',
        exampleOutput: "<class 'int'> 42\n<class 'float'> 3.14\n<class 'str'> hello\n<class 'bool'> True\n10.0\n3\n100分"
      },
      {
        type: "exercise",
        title: "练习：查看类型",
        description: "创建一个整数变量 <code>x = 25</code>，一个浮点数 <code>y = 7.5</code>，然后用 <code>type()</code> 打印它们各自的类型。最后计算 <code>x + y</code> 并打印结果和结果的类型。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["type", "x", "y", "print"],
        template: '# 创建变量并查看类型\nx = 25\ny = 7.5\n\n# 打印类型和运算结果\n',
        hint: 'print(type(x))\nprint(type(y))\nz = x + y\nprint(z)\nprint(type(z))'
      }
    ]
  },

  // ==================== 第4课：数字类型与运算 ====================
  {
    id: 4, title: "数字类型与运算", subtitle: "加减乘除，算天算地",
    cards: [
      {
        type: "concept",
        title: "算术运算符",
        content: `
          <h3>基本运算符</h3>
          <ul>
            <li><code>+</code> 加、<code>-</code> 减、<code>*</code> 乘、<code>/</code> 除（结果为浮点数）</li>
            <li><code>//</code> 整除（向下取整）、<code>%</code> 取余（模运算）</li>
            <li><code>**</code> 幂运算（如 2³ = 2**3）</li>
          </ul>
          <h3>运算优先级</h3>
          <p>括号 <code>()</code> > 幂 <code>**</code> > 乘除 <code>* / // %</code> > 加减 <code>+ -</code></p>
          <h3>复合赋值</h3>
          <p><code>x += 5</code> 等价于 <code>x = x + 5</code>，同理还有 <code>-=</code>、<code>*=</code>、<code>/=</code>。</p>
        `,
        example: 'a = 10\nb = 3\n\nprint("加法:", a + b)\nprint("减法:", a - b)\nprint("乘法:", a * b)\nprint("除法:", a / b)\nprint("整除:", a // b)\nprint("取余:", a % b)\nprint("幂:", 2 ** 10)\n\na += 5\nprint("a += 5 →", a)',
        exampleOutput: "加法: 13\n减法: 7\n乘法: 30\n除法: 3.3333333333333335\n整除: 3\n取余: 1\n幂: 1024\na += 5 → 15"
      },
      {
        type: "exercise",
        title: "练习：数字运算",
        description: "小明有 128 元，买了 3 本单价 35 元的书。请计算他<strong>还剩多少钱</strong>，以及<strong>如果剩下的钱全部买 2 元一支的笔，可以买几支</strong>。用变量存储并打印结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["print"],
        template: '# 计算小明的消费\nmoney = 128\nbook_price = 35\nbook_count = 3\npen_price = 2\n\n# 请计算并打印\n',
        hint: 'left = money - book_price * book_count\npens = left // pen_price\nprint("剩余:", left, "元")\nprint("可买笔:", pens, "支")'
      }
    ]
  },

  // ==================== 第5课：字符串操作 ====================
  {
    id: 5, title: "字符串操作", subtitle: "文字游戏，灵活多变",
    cards: [
      {
        type: "concept",
        title: "字符串的玩法",
        content: `
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
          <p><code>f"我叫{name}，今年{age}岁"</code> — 在字符串前加 f，大括号里直接写变量。</p>
        `,
        example: 's = "  Hello Python World  "\n\nprint("长度:", len(s))\nprint("去空格:", s.strip())\nprint("大写:", s.upper())\nprint("替换:", s.replace("Python", "Java"))\nprint("前5个字符:", s[:5])\nprint("倒数第2个:", s[-2])\n\nname = "小明"; age = 18\nprint(f"我叫{name}，明年{age+1}岁")',
        exampleOutput: "长度: 22\n去空格: Hello Python World\n大写:   HELLO PYTHON WORLD  \n替换:   Hello Java World  \n前5个字符:   He\n倒数第2个: d\n我叫小明，明年19岁"
      },
      {
        type: "exercise",
        title: "练习：字符串处理",
        description: "有一个字符串 <code>s = \"Python学习很有趣\"</code>：<br>1) 用切片取出前 6 个字符<br>2) 用切片取出后 3 个字符<br>3) 打印字符串的长度<br>4) 用 f-string 输出：\"我在学XXX，感觉XXX\"（XXX 分别用前6和后3的结果填入）",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["s", "print", "len"],
        template: 's = "Python学习很有趣"\n\n# 请完成上述四个要求\n',
        hint: '前6: s[:6]，后3: s[-3:]，长度: len(s)\nf-string: f"我在学{前}，感觉{后}"'
      }
    ]
  },

  // ==================== 第6课：列表 list ====================
  {
    id: 6, title: "列表 list", subtitle: "最灵活的数据容器",
    cards: [
      {
        type: "concept",
        title: "认识列表",
        content: `
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
          <p>列表可以包含不同类型的元素，也可以嵌套列表。</p>
        `,
        example: 'fruits = ["苹果", "香蕉", "橘子"]\nprint("原始:", fruits)\nprint("第一个:", fruits[0])\nprint("最后一个:", fruits[-1])\n\nfruits.append("葡萄")\nprint("添加后:", fruits)\n\nfruits.pop(1)\nprint("删掉索引1后:", fruits)\n\nprint("长度:", len(fruits))\n\n# 列表中可以混合类型\nmixed = ["hello", 42, 3.14, True]\nprint("混合列表:", mixed)',
        exampleOutput: "原始: ['苹果', '香蕉', '橘子']\n第一个: 苹果\n最后一个: 橘子\n添加后: ['苹果', '香蕉', '橘子', '葡萄']\n删掉索引1后: ['苹果', '橘子', '葡萄']\n长度: 3\n混合列表: ['hello', 42, 3.14, True]"
      },
      {
        type: "exercise",
        title: "练习：操作列表",
        description: "1) 创建一个空列表 <code>nums</code><br>2) 依次往里面添加 10、20、30 三个数<br>3) 在索引 1 的位置插入 15<br>4) 打印最终的列表和它的长度",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["append", "insert", "print", "nums", "len"],
        template: '# 创建并操作列表\nnums = []\n\n# 请完成添加和插入操作\n',
        hint: 'nums.append(10)\nnums.append(20)\nnums.append(30)\nnums.insert(1, 15)\nprint(nums)\nprint(len(nums))'
      }
    ]
  },

  // ==================== 第7课：元组 tuple ====================
  {
    id: 7, title: "元组 tuple", subtitle: "不可变的序列",
    cards: [
      {
        type: "concept",
        title: "认识元组",
        content: `
          <p><strong>元组</strong>用圆括号 <code>()</code> 包裹，和列表很像，但<strong>元素不可修改</strong>。</p>
          <h3>为什么需要元组？</h3>
          <ul>
            <li>保护数据不被意外修改</li>
            <li>作为字典的键（列表不能作为键）</li>
            <li>函数返回多个值时实际上返回的就是元组</li>
            <li>比列表占用内存更小</li>
          </ul>
          <h3>元组解包</h3>
          <p>可以把元组的元素一次性赋值给多个变量：<code>a, b, c = (1, 2, 3)</code></p>
        `,
        example: '# 创建元组\npoint = (3, 4)\nprint("坐标:", point)\nprint("x:", point[0], "y:", point[1])\n\n# 单元素元组注意加逗号\nsingle = (42,)\nprint("单元素:", single, type(single))\n\n# 解包\nx, y = point\nprint(f"x={x}, y={y}")\n\n# 交换变量（利用了元组解包）\na, b = 10, 20\na, b = b, a\nprint(f"交换后 a={a}, b={b}")',
        exampleOutput: "坐标: (3, 4)\nx: 3 y: 4\n单元素: (42,) <class 'tuple'>\nx=3, y=4\n交换后 a=20, b=10"
      },
      {
        type: "exercise",
        title: "练习：元组解包",
        description: "有一个元组 <code>info = (\"张三\", 20, \"北京\")</code>，分别代表姓名、年龄、城市。请用<strong>元组解包</strong>的方式把三个值分别赋给 <code>name</code>、<code>age</code>、<code>city</code>，然后用 f-string 打印：\"张三今年20岁，来自北京\"。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["info", "=", "print"],
        template: 'info = ("张三", 20, "北京")\n\n# 解包并打印\n',
        hint: 'name, age, city = info\nprint(f"{name}今年{age}岁，来自{city}")'
      }
    ]
  },

  // ==================== 第8课：集合 set ====================
  {
    id: 8, title: "集合 set", subtitle: "去重利器，数学集合",
    cards: [
      {
        type: "concept",
        title: "认识集合",
        content: `
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
          <p>集合最实用的场景：<strong>给列表去重</strong>。</p>
        `,
        example: '# 创建集合\nfruits = {"苹果", "香蕉", "橘子"}\nprint("集合:", fruits)\n\n# 自动去重\nnums = [1, 2, 2, 3, 3, 3, 4]\nunique = set(nums)\nprint("去重:", unique)\n\n# 集合运算\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint("交集:", a & b)\nprint("并集:", a | b)\nprint("差集:", a - b)',
        exampleOutput: "集合: {'苹果', '香蕉', '橘子'}\n去重: {1, 2, 3, 4}\n交集: {3, 4}\n并集: {1, 2, 3, 4, 5, 6}\n差集: {1, 2}"
      },
      {
        type: "exercise",
        title: "练习：集合去重与运算",
        description: "两个班级的参赛学生：<code>class_a = {\"小明\",\"小红\",\"小刚\",\"小丽\"}</code>，<code>class_b = {\"小刚\",\"小丽\",\"小华\",\"小雪\"}</code>。请找出：<br>1) 两个班级都参赛的学生（交集）<br>2) 所有参赛的学生（并集，不重复）<br>3) 只有A班参赛的学生（差集）",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["class_a", "class_b", "print", "&", "|", "-"],
        template: 'class_a = {"小明","小红","小刚","小丽"}\nclass_b = {"小刚","小丽","小华","小雪"}\n\n# 计算交集、并集、差集并打印\n',
        hint: '交集: class_a & class_b\n并集: class_a | class_b\n差集: class_a - class_b'
      }
    ]
  },

  // ==================== 第9课：字典 dict ====================
  {
    id: 9, title: "字典 dict", subtitle: "键值配对，高效查找",
    cards: [
      {
        type: "concept",
        title: "认识字典",
        content: `
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
          <p>字典的键必须是<strong>不可变类型</strong>（字符串、数字、元组），列表不能作为键。</p>
        `,
        example: 'student = {"name": "小明", "age": 18, "score": 95}\n\nprint("姓名:", student["name"])\nprint("电话:", student.get("phone", "未填写"))\n\nstudent["city"] = "北京"\nprint("添加城市后:", student)\n\nprint("\\n遍历字典:")\nfor key, value in student.items():\n    print(f"  {key} → {value}")',
        exampleOutput: "姓名: 小明\n电话: 未填写\n添加城市后: {'name': '小明', 'age': 18, 'score': 95, 'city': '北京'}\n\n遍历字典:\n  name → 小明\n  age → 18\n  score → 95\n  city → 北京"
      },
      {
        type: "exercise",
        title: "练习：字典操作",
        description: "创建一个字典 <code>book</code>，包含以下信息：书名(title)=\"Python入门\"、作者(author)=\"李老师\"、价格(price)=59。然后完成：<br>1) 打印书名<br>2) 把价格改为 49<br>3) 添加出版社(press)=\"教育出版社\"<br>4) 打印完整字典",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["book", "print", "title", "price"],
        template: '# 创建并操作字典\nbook = {"title": "Python入门", "author": "李老师", "price": 59}\n\n# 完成上述操作\n',
        hint: 'print(book["title"])\nbook["price"] = 49\nbook["press"] = "教育出版社"\nprint(book)'
      }
    ]
  },

  // ==================== 第10课：if 条件判断 ====================
  {
    id: 10, title: "if 条件判断", subtitle: "让程序学会做决定",
    cards: [
      {
        type: "concept",
        title: "分支结构",
        content: `
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
          <p class="tip-block"><strong>注意：</strong>Python 用<strong>缩进</strong>表示代码块，通常缩进 4 个空格。冒号 <code>:</code> 不要忘记！</p>
        `,
        example: 'score = 85\n\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 复合条件\nage = 22\nhas_ticket = True\nif age >= 18 and has_ticket:\n    print("可以入场")\nelse:\n    print("不能入场")',
        exampleOutput: "良好\n可以入场"
      },
      {
        type: "exercise",
        title: "练习：成绩等级",
        description: "变量 <code>score = 78</code> 已经给出。请用 if-elif-else 判断等级：<br>≥90 → \"A\"<br>≥80 → \"B\"<br>≥70 → \"C\"<br>≥60 → \"D\"<br>＜60 → \"E\"<br>最后打印等级。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["if", "score", "print"],
        template: 'score = 78\n\n# 判断等级并打印\n',
        hint: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("E")'
      }
    ]
  },

  // ==================== 第11课：while 循环 ====================
  {
    id: 11, title: "while 循环", subtitle: "条件成立就一直跑",
    cards: [
      {
        type: "concept",
        title: "while 循环结构",
        content: `
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
          </ul>
        `,
        example: '# 打印 1 到 5\ncount = 1\nwhile count <= 5:\n    print(count)\n    count += 1\n\n# 计算 1+2+...+100\nn = 1\ntotal = 0\nwhile n <= 100:\n    total += n\n    n += 1\nprint("1到100的和:", total)\n\n# break 演示\ni = 0\nwhile True:\n    i += 1\n    if i > 5:\n        break\n    print(i, end=" ")',
        exampleOutput: "1\n2\n3\n4\n5\n1到100的和: 5050\n1 2 3 4 5 "
      },
      {
        type: "exercise",
        title: "练习：while 求和",
        description: "用 while 循环计算 <strong>1 到 50 之间所有奇数的和</strong>，并打印结果。（奇数即不能被 2 整除的数）",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["while", "print"],
        template: '# 计算 1 到 50 的奇数和\n\n',
        hint: 'n = 1\ntotal = 0\nwhile n <= 50:\n    total += n\n    n += 2\nprint(total)'
      }
    ]
  },

  // ==================== 第12课：for 循环 ====================
  {
    id: 12, title: "for 循环", subtitle: "遍历一切可迭代对象",
    cards: [
      {
        type: "concept",
        title: "for 循环与 range",
        content: `
          <p><code>for</code> 循环用于遍历序列（列表、字符串、元组等）中的每个元素。</p>
          <h3>range() 函数</h3>
          <ul>
            <li><code>range(n)</code> — 0 到 n-1</li>
            <li><code>range(start, end)</code> — 含头不含尾</li>
            <li><code>range(start, end, step)</code> — 指定步长</li>
          </ul>
          <h3>enumerate()</h3>
          <p>同时获取索引和值：<code>for i, val in enumerate(lst):</code></p>
          <p class="tip-block"><strong>for vs while：</strong>知道循环次数用 for，依赖于条件用 while。</p>
        `,
        example: '# 遍历列表\nfruits = ["苹果", "香蕉", "橘子"]\nfor f in fruits:\n    print(f"I like {f}")\n\n# range 用法\nprint("\\n0到4:")\nfor i in range(5):\n    print(i, end=" ")\n\nprint("\\n\\n1到10的偶数:")\nfor i in range(2, 11, 2):\n    print(i, end=" ")\n\n# enumerate\nprint("\\n\\n带索引遍历:")\nfor i, f in enumerate(fruits):\n    print(f"  {i}: {f}")',
        exampleOutput: "I like 苹果\nI like 香蕉\nI like 橘子\n\n0到4:\n0 1 2 3 4 \n\n1到10的偶数:\n2 4 6 8 10 \n\n带索引遍历:\n  0: 苹果\n  1: 香蕉\n  2: 橘子"
      },
      {
        type: "exercise",
        title: "练习：for 循环统计",
        description: "给定列表 <code>scores = [88, 92, 76, 65, 83, 90, 59, 72]</code>，用 for 循环遍历，统计：<br>1) 及格（≥60）的人数<br>2) 优秀（≥90）的人数<br>打印两个统计结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["for", "if", "print"],
        template: 'scores = [88, 92, 76, 65, 83, 90, 59, 72]\n\n# 统计及格和优秀人数\n',
        hint: 'pass_count = 0\nexcellent = 0\nfor s in scores:\n    if s >= 60:\n        pass_count += 1\n    if s >= 90:\n        excellent += 1\nprint("及格:", pass_count, "人")\nprint("优秀:", excellent, "人")'
      }
    ]
  },

  // ==================== 第13课：函数定义与调用 ====================
  {
    id: 13, title: "函数定义与调用", subtitle: "封装代码，重复利用",
    cards: [
      {
        type: "concept",
        title: "定义自己的函数",
        content: `
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
          <p>函数内定义的变量是<strong>局部变量</strong>，函数外无法访问。</p>
        `,
        example: 'def greet(name):\n    """向某人打招呼"""\n    return f"你好，{name}！"\n\n# 调用函数\nprint(greet("小明"))\nprint(greet("小红"))\n\n# 无返回值的函数\ndef say_hello():\n    print("Hello World!")\n\nsay_hello()\n\n# 多返回值\ndef min_max(lst):\n    return min(lst), max(lst)\n\nlow, high = min_max([3, 1, 7, 2, 9])\nprint(f"最小值={low}, 最大值={high}")',
        exampleOutput: "你好，小明！\n你好，小红！\nHello World!\n最小值=1, 最大值=9"
      },
      {
        type: "exercise",
        title: "练习：编写函数",
        description: "编写一个函数 <code>is_even(n)</code>，接收一个整数参数，如果是偶数返回 <code>True</code>，奇数返回 <code>False</code>。<br>然后调用该函数分别测试 10 和 7，并打印结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "return", "print"],
        template: '# 定义 is_even 函数并测试\n\n',
        hint: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(10))\nprint(is_even(7))'
      }
    ]
  },

  // ==================== 第14课：函数参数 ====================
  {
    id: 14, title: "函数参数", subtitle: "灵活传参的艺术",
    cards: [
      {
        type: "concept",
        title: "各种参数类型",
        content: `
          <h3>参数类型一览</h3>
          <ul>
            <li><strong>位置参数</strong> — 按顺序传入，最常用</li>
            <li><strong>默认参数</strong> — <code>def f(name, age=18)</code>，不传则用默认值</li>
            <li><strong>关键字参数</strong> — 调用时指定参数名 <code>f(age=20, name="小明")</code></li>
            <li><strong>*args</strong> — 接收任意数量的位置参数，打包成元组</li>
            <li><strong>**kwargs</strong> — 接收任意数量的关键字参数，打包成字典</li>
          </ul>
          <p class="tip-block"><strong>注意：</strong>默认参数的值不要在函数定义中直接用可变对象（如列表），会导致意外行为。</p>
        `,
        example: '# 默认参数\ndef greet(name, greeting="你好"):\n    print(f"{greeting}，{name}！")\n\ngreet("小明")\ngreet("Tom", greeting="Hello")\n\n# *args\ndef sum_all(*nums):\n    return sum(nums)\n\nprint("求和:", sum_all(1, 2, 3, 4, 5))\n\n# **kwargs\ndef show_info(**info):\n    for k, v in info.items():\n        print(f"  {k}: {v}")\n\nshow_info(name="小明", age=18, city="北京")',
        exampleOutput: "你好，小明！\nHello，Tom！\n求和: 15\n  name: 小明\n  age: 18\n  city: 北京"
      },
      {
        type: "exercise",
        title: "练习：使用参数",
        description: "编写函数 <code>describe_person(name, age, **kwargs)</code>：<br>1) 必须打印 name 和 age<br>2) 如果有额外的关键字参数，也一并打印<br>然后用 <code>describe_person(\"小明\", 18, city=\"北京\", hobby=\"编程\")</code> 调用。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "**kwargs", "print"],
        template: '# 编写 describe_person 函数并调用\n\n',
        hint: 'def describe_person(name, age, **kwargs):\n    print(f"姓名: {name}, 年龄: {age}")\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\n\ndescribe_person("小明", 18, city="北京", hobby="编程")'
      }
    ]
  },

  // ==================== 第15课：返回值 ====================
  {
    id: 15, title: "返回值", subtitle: "函数计算的结果",
    cards: [
      {
        type: "concept",
        title: "return 详解",
        content: `
          <p><code>return</code> 语句将函数的结果返回给调用者。</p>
          <h3>关键特性</h3>
          <ul>
            <li>函数执行到 <code>return</code> 就立即结束</li>
            <li>可以返回任意类型：数字、字符串、列表、字典...</li>
            <li><code>return a, b</code> 实际上返回的是一个元组 <code>(a, b)</code></li>
            <li>没有 <code>return</code> 的函数默认返回 <code>None</code></li>
            <li>可以用 <code>return</code> 提前退出函数</li>
          </ul>
          <p>返回多个值实际上是利用元组解包接收的。</p>
        `,
        example: 'def divide(a, b):\n    if b == 0:\n        return "错误：除数不能为0"\n    return a / b\n\nprint(divide(10, 2))\nprint(divide(10, 0))\n\n# 返回多个值\ndef stats(nums):\n    return len(nums), sum(nums), sum(nums)/len(nums)\n\ncount, total, avg = stats([85, 92, 78, 90])\nprint(f"人数:{count}, 总分:{total}, 平均:{avg}")\n\n# 返回列表\ndef evens_up_to(n):\n    result = []\n    for i in range(2, n+1, 2):\n        result.append(i)\n    return result\n\nprint(evens_up_to(10))',
        exampleOutput: "5.0\n错误：除数不能为0\n人数:4, 总分:345, 平均:86.25\n[2, 4, 6, 8, 10]"
      },
      {
        type: "exercise",
        title: "练习：带返回值的函数",
        description: "编写函数 <code>filter_pass(scores, pass_line=60)</code>，接收分数列表和及格线（默认60），<strong>返回</strong>一个只包含及格分数的新列表。<br>用 <code>[55, 70, 42, 88, 91, 60, 33]</code> 测试并打印结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "return", "print", "for", "if"],
        template: '# 编写 filter_pass 函数\n\n\n# 测试\nscores = [55, 70, 42, 88, 91, 60, 33]\n',
        hint: 'def filter_pass(scores, pass_line=60):\n    result = []\n    for s in scores:\n        if s >= pass_line:\n            result.append(s)\n    return result\n\nscores = [55, 70, 42, 88, 91, 60, 33]\nprint(filter_pass(scores))'
      }
    ]
  },

  // ==================== 第16课：Lambda 表达式 ====================
  {
    id: 16, title: "Lambda 表达式", subtitle: "一行搞定简单函数",
    cards: [
      {
        type: "concept",
        title: "匿名函数",
        content: `
          <p><strong>lambda</strong> 是创建小型匿名函数的关键字，语法简洁。</p>
          <pre><code>lambda 参数: 表达式</code></pre>
          <h3>适用场景</h3>
          <ul>
            <li>作为 <code>sorted()</code> 的排序键</li>
            <li>配合 <code>map()</code>、<code>filter()</code> 使用</li>
            <li>回调函数只需要一行代码时</li>
          </ul>
          <p class="tip-block"><strong>注意：</strong>lambda 只能包含<strong>一个表达式</strong>，不能包含多行语句或赋值操作。复杂逻辑还是用 def。</p>
        `,
        example: '# 普通函数\ndef add(x, y):\n    return x + y\n\n# lambda 等价写法\nadd_lambda = lambda x, y: x + y\nprint(add_lambda(3, 5))\n\n# 配合 sorted 使用\nstudents = [\n    {"name": "小明", "score": 85},\n    {"name": "小红", "score": 92},\n    {"name": "小刚", "score": 78}\n]\n\nsorted_by_score = sorted(students, key=lambda s: s["score"], reverse=True)\nfor st in sorted_by_score:\n    print(st["name"], st["score"])\n\n# 配合 filter\nnums = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint("偶数:", evens)',
        exampleOutput: "8\n小红 92\n小明 85\n小刚 78\n偶数: [2, 4, 6]"
      },
      {
        type: "exercise",
        title: "练习：lambda 排序",
        description: "给定单词列表 <code>words = [\"apple\", \"banana\", \"kiwi\", \"grape\", \"pear\"]</code>，请用 <code>sorted()</code> 配合 lambda，<strong>按单词长度</strong>从小到大排序，打印排序后的列表。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["lambda", "sorted", "print"],
        template: 'words = ["apple", "banana", "kiwi", "grape", "pear"]\n\n# 按长度排序\n',
        hint: 'sorted(words, key=lambda w: len(w))'
      }
    ]
  },

  // ==================== 第17课：闭包 ====================
  {
    id: 17, title: "闭包", subtitle: "函数带着记忆",
    cards: [
      {
        type: "concept",
        title: "理解闭包",
        content: `
          <p><strong>闭包</strong>是指内部函数引用了外部函数的变量，并且外部函数返回了内部函数。这个内部函数就"记住"了外部变量的值。</p>
          <h3>三个条件</h3>
          <ol>
            <li>有嵌套函数（函数里面定义函数）</li>
            <li>内部函数引用了外部函数的变量</li>
            <li>外部函数返回内部函数</li>
          </ol>
          <h3>nonlocal 关键字</h3>
          <p>如果要在内部函数中<strong>修改</strong>外部变量，需要用 <code>nonlocal</code> 声明。</p>
        `,
        example: 'def make_multiplier(n):\n    """返回一个把参数乘以 n 的函数"""\n    def multiplier(x):\n        return x * n\n    return multiplier\n\n# 创建两个不同的闭包\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(10))  # 10 * 2\nprint(triple(10))  # 10 * 3\n\n# 用 nonlocal 修改外部变量\ndef make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\ncounter = make_counter()\nprint(counter())  # 1\nprint(counter())  # 2\nprint(counter())  # 3',
        exampleOutput: "20\n30\n1\n2\n3"
      },
      {
        type: "exercise",
        title: "练习：创建闭包",
        description: "编写函数 <code>make_greeter(greeting)</code>，返回一个函数，该函数接收 <code>name</code> 参数并打印 \"{greeting}, {name}！\"。<br>创建两个 greeter：一个说\"你好\"，一个说\"Hello\"，分别调用并打印。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "return", "make_greeter", "print"],
        template: '# 编写 make_greeter 并创建闭包\n\n',
        hint: 'def make_greeter(greeting):\n    def greeter(name):\n        print(f"{greeting}, {name}！")\n    return greeter\n\nhi = make_greeter("你好")\nhello = make_greeter("Hello")\nhi("小明")\nhello("Tom")'
      }
    ]
  },

  // ==================== 第18课：装饰器 ====================
  {
    id: 18, title: "装饰器", subtitle: "给函数加点料",
    cards: [
      {
        type: "concept",
        title: "装饰器原理",
        content: `
          <p><strong>装饰器</strong>本质上是一个函数，它接收一个函数作为参数，返回一个新的函数。用 <code>@</code> 语法糖使用。</p>
          <h3>为什么需要装饰器？</h3>
          <ul>
            <li>在不修改原函数的前提下增加功能</li>
            <li>日志记录、性能计时、权限检查等通用功能</li>
            <li>遵循"开闭原则"：对扩展开放，对修改关闭</li>
          </ul>
          <h3>基本结构</h3>
          <pre><code>def decorator(func):\n    def wrapper(*args, **kwargs):\n        # 前置操作\n        result = func(*args, **kwargs)\n        # 后置操作\n        return result\n    return wrapper</code></pre>
        `,
        example: 'import time\n\ndef timer(func):\n    """计时装饰器"""\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} 耗时: {end-start:.4f}秒")\n        return result\n    return wrapper\n\n@timer\ndef slow_sum(n):\n    total = 0\n    for i in range(1, n+1):\n        total += i\n    return total\n\nprint("结果:", slow_sum(1000000))\n\n@timer\ndef greet(name):\n    return f"你好 {name}"\n\nprint(greet("小明"))',
        exampleOutput: "slow_sum 耗时: 0.0456秒\n结果: 500000500000\ngreet 耗时: 0.0000秒\n你好 小明"
      },
      {
        type: "exercise",
        title: "练习：编写装饰器",
        description: "编写一个装饰器 <code>@double_result</code>，让被装饰函数的返回值<strong>翻倍</strong>。<br>然后用它装饰函数 <code>add(a, b)</code>（返回 a+b），测试 <code>add(3, 5)</code> 并打印结果（期望得到 16）。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "return", "@double_result", "print"],
        template: '# 编写 double_result 装饰器并测试\n\n',
        hint: 'def double_result(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs) * 2\n    return wrapper\n\n@double_result\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))'
      }
    ]
  },

  // ==================== 第19课：递归 ====================
  {
    id: 19, title: "递归", subtitle: "函数自己调用自己",
    cards: [
      {
        type: "concept",
        title: "递归思想",
        content: `
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
          <p class="tip-block"><strong>注意：</strong>Python 默认递归深度限制约 1000 层。每个递归调用都占用栈空间。</p>
        `,
        example: '# 阶乘 n! = n * (n-1)!\ndef factorial(n):\n    if n <= 1:          # 基线条件\n        return 1\n    return n * factorial(n - 1)  # 递归条件\n\nprint("5! =", factorial(5))\nprint("10! =", factorial(10))\n\n# 斐波那契数列\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint("\\n斐波那契前10项:")\nfor i in range(10):\n    print(fib(i), end=" ")',
        exampleOutput: "5! = 120\n10! = 3628800\n\n斐波那契前10项:\n0 1 1 2 3 5 8 13 21 34 "
      },
      {
        type: "exercise",
        title: "练习：递归求和",
        description: "编写递归函数 <code>recursive_sum(n)</code>，返回 1+2+...+n 的和。<br>提示：<code>recursive_sum(n) = n + recursive_sum(n-1)</code>，基线条件是 n=1 时返回 1。<br>计算并打印 n=100 的结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "return", "recursive_sum", "if", "print"],
        template: '# 编写递归求和函数\n\n',
        hint: 'def recursive_sum(n):\n    if n == 1:\n        return 1\n    return n + recursive_sum(n - 1)\n\nprint(recursive_sum(100))'
      }
    ]
  },

  // ==================== 第20课：列表推导式 ====================
  {
    id: 20, title: "列表推导式", subtitle: "一行生成列表",
    cards: [
      {
        type: "concept",
        title: "列表推导式语法",
        content: `
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
          <p>字典和集合也有推导式：<code>{k:v for k,v in ...}</code>、<code>{x for x in ...}</code></p>
        `,
        example: '# 基础推导式\nsquares = [x**2 for x in range(1, 11)]\nprint("平方数:", squares)\n\n# 带条件过滤\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint("偶数:", evens)\n\n# 字符串转换\nwords = ["python", "java", "go"]\nupper_words = [w.upper() for w in words]\nprint("大写:", upper_words)\n\n# 字典推导式\nsquare_dict = {x: x**2 for x in range(1, 6)}\nprint("字典:", square_dict)',
        exampleOutput: "平方数: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n偶数: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n大写: ['PYTHON', 'JAVA', 'GO']\n字典: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
      },
      {
        type: "exercise",
        title: "练习：列表推导式",
        description: "用<strong>列表推导式</strong>生成一个列表，包含 1 到 30 中所有<strong>能被 3 整除但不能被 5 整除</strong>的数。打印结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["for", "if", "print", "["],
        template: '# 用列表推导式生成并打印\n\n',
        hint: '[x for x in range(1, 31) if x % 3 == 0 and x % 5 != 0]'
      }
    ]
  },

  // ==================== 第21课：迭代器 ====================
  {
    id: 21, title: "迭代器", subtitle: "统一遍历的接口",
    cards: [
      {
        type: "concept",
        title: "迭代器协议",
        content: `
          <p><strong>迭代器</strong>是实现了 <code>__iter__()</code> 和 <code>__next__()</code> 方法的对象。</p>
          <h3>核心概念</h3>
          <ul>
            <li><strong>可迭代对象</strong>（Iterable）：可以被 for 循环遍历，如列表、元组、字符串</li>
            <li><strong>迭代器</strong>（Iterator）：记住遍历位置，每次调用 <code>next()</code> 返回下一个元素</li>
            <li><code>iter(obj)</code> 把可迭代对象转为迭代器</li>
            <li>迭代到末尾时抛出 <code>StopIteration</code> 异常（for 循环自动处理）</li>
          </ul>
          <p>优点：惰性计算，不一次性加载所有数据，节省内存。</p>
        `,
        example: '# iter() 和 next()\nnums = [1, 2, 3]\nit = iter(nums)\nprint(next(it))  # 1\nprint(next(it))  # 2\nprint(next(it))  # 3\n# next(it) 会抛出 StopIteration\n\n# 自定义迭代器\nclass CountDown:\n    def __init__(self, start):\n        self.num = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.num < 0:\n            raise StopIteration\n        val = self.num\n        self.num -= 1\n        return val\n\nprint("\\n倒计时:")\nfor n in CountDown(3):\n    print(n, end=" ")',
        exampleOutput: "1\n2\n3\n\n倒计时:\n3 2 1 0 "
      },
      {
        type: "exercise",
        title: "练习：使用迭代器",
        description: "给定列表 <code>data = [10, 20, 30, 40, 50]</code>，用 <code>iter()</code> 创建迭代器，然后用 <code>next()</code> 依次取出前 3 个元素并打印。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["iter", "next", "print"],
        template: 'data = [10, 20, 30, 40, 50]\n\n# 创建迭代器并取前三个元素\n',
        hint: 'it = iter(data)\nprint(next(it))\nprint(next(it))\nprint(next(it))'
      }
    ]
  },

  // ==================== 第22课：生成器 ====================
  {
    id: 22, title: "生成器", subtitle: "惰性生成数据流",
    cards: [
      {
        type: "concept",
        title: "yield 关键字",
        content: `
          <p><strong>生成器</strong>是一种特殊的迭代器，用 <code>yield</code> 关键字定义。</p>
          <h3>与普通函数的区别</h3>
          <ul>
            <li>普通函数用 <code>return</code>，一次返回，函数结束</li>
            <li>生成器用 <code>yield</code>，可以<strong>多次产出</strong>值，函数状态被"暂停-恢复"</li>
          </ul>
          <h3>生成器表达式</h3>
          <p>类似列表推导式，但用圆括号：<code>(x*2 for x in range(10))</code></p>
          <h3>优点</h3>
          <p><strong>惰性求值</strong>——只在需要时才计算下一个值，处理大数据时极省内存。</p>
        `,
        example: '# 生成器函数\ndef fibonacci(n):\n    """生成前 n 个斐波那契数"""\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint("前10个斐波那契数:")\nfor num in fibonacci(10):\n    print(num, end=" ")\n\n# 生成器表达式\nprint("\\n\\n生成器表达式:")\ngen = (x**2 for x in range(5))\nprint(type(gen))\nprint(list(gen))\n\n# 节省内存\ndef read_large():\n    """模拟逐行读取大文件"""\n    for i in range(5):\n        yield f"第{i}行数据"',
        exampleOutput: "前10个斐波那契数:\n0 1 1 2 3 5 8 13 21 34 \n\n生成器表达式:\n<class 'generator'>\n[0, 1, 4, 9, 16]"
      },
      {
        type: "exercise",
        title: "练习：编写生成器",
        description: "编写一个生成器函数 <code>even_numbers(n)</code>，生成前 n 个偶数（从 0 开始）。然后用 for 循环打印前 10 个偶数。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "yield", "for", "print"],
        template: '# 编写 even_numbers 生成器\n\n',
        hint: 'def even_numbers(n):\n    for i in range(n):\n        yield i * 2\n\nfor num in even_numbers(10):\n    print(num, end=" ")'
      }
    ]
  },

  // ==================== 第23课：模块导入（仅概念，无习题） ====================
  {
    id: 23, title: "模块导入", subtitle: "站在巨人的肩膀上",
    cards: [
      {
        type: "concept",
        title: "import 用法",
        content: `
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
          <p>你可以把自己写的 .py 文件当作模块导入。例如把函数写在 <code>mytools.py</code> 里，然后用 <code>import mytools</code> 导入。</p>
        `,
        example: '# 方式一：导入整个模块\nimport math\nprint("π =", math.pi)\nprint("sqrt(25) =", math.sqrt(25))\n\n# 方式二：导入特定函数\nfrom math import sin, cos, radians\nangle = radians(30)\nprint(f"sin(30°) = {sin(angle):.2f}")\n\n# 方式三：取别名\nimport datetime as dt\ntoday = dt.date.today()\nprint("今天是:", today)',
        exampleOutput: "π = 3.141592653589793\nsqrt(25) = 5.0\nsin(30°) = 0.50\n今天是: 2026-05-20"
      }
    ]
  },

  // ==================== 第24课：文件操作（仅概念，无习题） ====================
  {
    id: 24, title: "文件操作", subtitle: "读写文件入门",
    cards: [
      {
        type: "concept",
        title: "open() 与 with",
        content: `
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
          <p class="tip-block"><strong>注意：</strong>由于浏览器安全限制，本平台无法实际运行文件操作代码。请在本地 Python 环境中练习。</p>
        `,
        example: '# 写入文件\nwith open("test.txt", "w", encoding="utf-8") as f:\n    f.write("Hello Python\\n")\n    f.write("第二行内容\\n")\n\n# 读取文件\nwith open("test.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    print(content)\n\n# 逐行读取\nwith open("test.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())',
        exampleOutput: "Hello Python\n第二行内容\n\nHello Python\n第二行内容"
      }
    ]
  },

  // ==================== 第25课：异常处理 ====================
  {
    id: 25, title: "异常处理", subtitle: "让程序更健壮",
    cards: [
      {
        type: "concept",
        title: "try-except 机制",
        content: `
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
          </ul>
        `,
        example: '# 基础异常处理\ntry:\n    num = int(input("输入数字: "))\n    print(10 / num)\nexcept ValueError:\n    print("请输入有效的数字！")\nexcept ZeroDivisionError:\n    print("不能除以0！")\n\n# else 和 finally\ntry:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print("出错了")\nelse:\n    print("计算成功:", x)\nfinally:\n    print("这段总会执行")\n\n# 捕获未知异常\ntry:\n    lst = [1,2,3]\n    print(lst[10])\nexcept Exception as e:\n    print(f"发生错误: {type(e).__name__}: {e}")',
        exampleOutput: "计算成功: 5.0\n这段总会执行\n发生错误: IndexError: list index out of range"
      },
      {
        type: "exercise",
        title: "练习：异常处理",
        description: "编写一个安全的除法函数 <code>safe_divide(a, b)</code>，如果 b 为 0 则返回 <code>\"除数不能为0\"</code>，否则返回 a/b 的结果。<br>分别测试 <code>safe_divide(10, 2)</code> 和 <code>safe_divide(10, 0)</code> 并打印结果。",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["def", "try", "except", "return", "print"],
        template: '# 编写 safe_divide 并测试\n\n',
        hint: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "除数不能为0"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))'
      }
    ]
  },

  // ==================== 第26课：随机数 ====================
  {
    id: 26, title: "随机数", subtitle: "给程序加点「意外」",
    cards: [
      {
        type: "concept",
        title: "random 模块",
        content: `
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
          </ul>
        `,
        example: 'import random\n\n# 随机整数\nprint("骰子:", random.randint(1, 6))\nprint("彩票号:", [random.randint(1, 33) for _ in range(6)])\n\n# 随机选择\ncolors = ["红", "橙", "黄", "绿", "蓝"]\nprint("随机颜色:", random.choice(colors))\n\n# 打乱\ncards = list(range(1, 11))\nrandom.shuffle(cards)\nprint("洗牌:", cards)\n\n# 随机抽样（不重复）\nprint("抽3个:", random.sample(colors, 3))\n\n# 设置种子让结果可复现\nrandom.seed(42)\nprint("固定随机(seed=42):", random.randint(1, 100))',
        exampleOutput: "骰子: 4\n彩票号: [7, 15, 22, 8, 31, 19]\n随机颜色: 蓝\n洗牌: [3, 7, 1, 10, 5, 8, 2, 4, 9, 6]\n抽3个: ['黄', '红', '绿']\n固定随机(seed=42): 82"
      },
      {
        type: "exercise",
        title: "练习：随机密码",
        description: "用 <code>random.sample()</code> 从字符串 <code>\"abcdefghijklmnopqrstuvwxyz0123456789\"</code> 中随机抽取 8 个字符，<strong>用 join 拼接成字符串</strong>作为随机密码。打印生成的密码。<br>（由于每次结果不同，本题只检查代码结构是否正确）",
        judgeType: "output",
        expectedOutput: null,
        requiredKeywords: ["import", "random", "sample", "join", "print"],
        template: 'import random\n\nchars = "abcdefghijklmnopqrstuvwxyz0123456789"\n\n# 生成随机密码\n',
        hint: 'password = "".join(random.sample(chars, 8))\nprint(password)'
      }
    ]
  }
];
