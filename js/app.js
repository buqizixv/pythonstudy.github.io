/**
 * Python 学习平台 — 主应用逻辑
 * 依赖：Pyodide, CodeMirror, LESSONS, Judge, Confetti, I18N
 */

// ==================== 成就 & 等级定义 ====================
const ACHIEVEMENT_DEFS = [
  { id: 'first',     icon: '🎯', zhLabel: '初出茅庐',  enLabel: 'First Blood',       check: (s) => s.completedCount >= 1 },
  { id: 'five',      icon: '🔥', zhLabel: '渐入佳境',  enLabel: 'Getting Started',   check: (s) => s.completedCount >= 5 },
  { id: 'ten',       icon: '🚀', zhLabel: '勇往直前',  enLabel: 'On a Roll',         check: (s) => s.completedCount >= 10 },
  { id: 'half',      icon: '⚡', zhLabel: '半程高手',  enLabel: 'Halfway Hero',      check: (s) => s.completedCount >= 13 },
  { id: 'twenty',    icon: '💎', zhLabel: '炉火纯青',  enLabel: 'Diamond Coder',     check: (s) => s.completedCount >= 20 },
  { id: 'all',       icon: '👑', zhLabel: 'Python 大师', enLabel: 'Python Master',   check: (s) => s.completedCount >= 26 },
];

const LEVEL_DEFS = [
  { maxXp: 0,    zhTitle: '🐣 Python 新手',       enTitle: '🐣 Python Beginner' },
  { maxXp: 100,  zhTitle: '🐍 Python 学徒',       enTitle: '🐍 Python Apprentice' },
  { maxXp: 300,  zhTitle: '⚡ Python 进阶者',      enTitle: '⚡ Python Adept' },
  { maxXp: 600,  zhTitle: '🔥 Python 高手',       enTitle: '🔥 Python Expert' },
  { maxXp: 1000, zhTitle: '💎 Python 专家',       enTitle: '💎 Python Master' },
  { maxXp: 1500, zhTitle: '👑 Python 大师',       enTitle: '👑 Python Grandmaster' },
];

const LESSON_ICONS = ['📢','📦','🧬','🔢','📝','📋','🔗','🎒','📖','🔀','🔄','🔁','🏗','⚙','📤','⚡','🧩','🎀','🪜','📐','🎏','🔮','📚','💾','🛡','🎲'];

const App = {
  currentLessonId: null,
  currentCardIndex: 0,
  submitted: false,
  pyodide: null,
  editor: null,
  completedLessons: new Set(),
  xp: 0,
  earnedBadges: new Set(),
  soundOn: true,

  // ==================== 翻译辅助 ====================
  /** 获取课时翻译后的标题 */
  _lt(id) { return I18N.t(`l${id}_title`) || this._getLessonRaw(id).title; },
  /** 获取课时翻译后的副标题 */
  _ls(id) { return I18N.t(`l${id}_subtitle`) || this._getLessonRaw(id).subtitle; },
  /** 获取概念卡片标题 */
  _ct(id) { return I18N.t(`l${id}_concept_title`); },
  /** 获取概念卡片内容 */
  _cc(id) { return I18N.t(`l${id}_concept_body`); },
  /** 获取习题标题 */
  _et(id) { return I18N.t(`l${id}_exercise_title`); },
  /** 获取习题描述 */
  _ed(id) { return I18N.t(`l${id}_exercise_desc`); },
  /** 获取习题提示 */
  _eh(id) { return I18N.t(`l${id}_exercise_hint`); },
  /** 获取概念笔记 */
  _cn(id) { return I18N.t(`l${id}_concept_note`); },

  // ---- 初始化 ----
  async init() {
    I18N.init();
    this._loadProgress();
    this._initTheme();
    this._initSound();
    this._initCharacter();
    this._renderHomePage();
    this._bindSearch();
    this._bindThemeToggle();
    this._bindSoundToggle();
    this._bindLangToggle();
    this._showLoading();
    await this._initPyodide();
    this._hideLoading();
    this._updatePyodideStatus();
  },

  // ---- Toast ----
  _showToast(html, duration = 2500) {
    const existing = document.querySelector('.game-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'game-toast';
    toast.innerHTML = html;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { if (toast.parentNode) toast.remove(); }, 400);
    }, duration);
  },

  _floatXp(amount) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = `+${amount} XP`;
    el.style.left = (30 + Math.random() * 40) + '%';
    el.style.top = '45%';
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('fly'));
    setTimeout(() => { if (el.parentNode) el.remove(); }, 1500);
  },

  // ---- Pyodide ----
  async _initPyodide() {
    const startTime = performance.now();
    const cdns = [
      'https://fastly.jsdelivr.net/pyodide/v0.25.0/full/',
      'https://gcore.jsdelivr.net/pyodide/v0.25.0/full/',
      'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
      'https://pyodide-cdn2.iodide.io/v0.25.0/full/'
    ];
    console.log('⏳ Pyodide loading...');
    let loaded = false;
    for (const cdn of cdns) {
      try {
        console.log('   Trying:', cdn);
        // 每个 CDN 30 秒超时
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 30000);
        this.pyodide = await loadPyodide({ indexURL: cdn, fullStdLib: false });
        clearTimeout(timer);
        const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);
        console.log(`✅ Pyodide loaded (${elapsed}s) from ${cdn}`);
        loaded = true; break;
      } catch (e) {
        console.warn('   Failed:', cdn, e.message || e);
      }
    }
    if (!loaded) console.error('❌ All CDNs failed');
  },

  _showLoading() {
    const overlay = document.createElement('div');
    overlay.id = 'pyodide-loading';
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
      <div class="loading-box"><div class="spinner"></div>
        <p>${I18N.t('ui_loading')}</p>
        <p style="font-size:12px;color:#94a3b8;margin-top:4px;">${I18N.t('ui_loading_sub')}</p>
        <button id="skip-pyodide" style="margin-top:16px;padding:8px 24px;border-radius:8px;border:1px solid #555;background:transparent;color:#94a3b8;cursor:pointer;font-size:13px;">跳过，先浏览课程 →</button>
      </div>`;
    document.body.appendChild(overlay);
    document.getElementById('skip-pyodide').addEventListener('click', () => {
      this._hideLoading();
      this._updatePyodideStatus();
    });
  },

  _hideLoading() {
    const el = document.getElementById('pyodide-loading');
    if (el) el.remove();
  },

  _updatePyodideStatus() {
    const tip = document.querySelector('.home-tip');
    if (!tip) return;
    if (this.pyodide) {
      tip.innerHTML = I18N.t('ui_ready'); tip.style.color = '#22c55e';
    } else {
      tip.innerHTML = I18N.t('ui_not_ready'); tip.style.color = '#ef4444';
    }
  },

  async runCode(code) {
    if (!this.pyodide) return { stdout: '', stderr: '', error: 'Pyodide not ready' };
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

  // ---- 音效 ----
  _initSound() {
    try { const s = localStorage.getItem('python-study-sound'); if (s !== null) this.soundOn = s === 'true'; } catch (e) { /* */ }
    this._updateSoundButton();
  },
  _bindSoundToggle() {
    document.getElementById('sound-toggle').addEventListener('click', () => {
      this.soundOn = !this.soundOn;
      try { localStorage.setItem('python-study-sound', this.soundOn); } catch (e) { /* */ }
      this._updateSoundButton();
    });
  },
  _updateSoundButton() {
    const btn = document.getElementById('sound-toggle');
    if (btn) btn.textContent = this.soundOn ? '🔊' : '🔇';
  },

  _playSound(type) {
    if (!this.soundOn) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination); gain.gain.value = 0.12;
      if (type === 'correct') {
        osc.frequency.value = 660; osc.type = 'sine';
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
        const o2 = ctx.createOscillator(), g2 = ctx.createGain();
        o2.connect(g2); g2.connect(ctx.destination);
        o2.frequency.value = 880; o2.type = 'sine'; g2.gain.value = 0.10;
        g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        o2.start(ctx.currentTime + 0.1); o2.stop(ctx.currentTime + 0.35);
      } else if (type === 'click') {
        osc.frequency.value = 440; osc.type = 'sine';
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'milestone') {
        [523, 659, 784].forEach((freq, i) => {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.connect(g); g.connect(ctx.destination);
          o.frequency.value = freq; o.type = 'triangle'; g.gain.value = 0.15;
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35 + i * 0.12);
          o.start(ctx.currentTime + i * 0.12); o.stop(ctx.currentTime + 0.4 + i * 0.12);
        });
      }
    } catch (e) { /* */ }
  },

  // ---- 暗色模式 ----
  _initTheme() {
    try { if (localStorage.getItem('python-study-theme') === 'light') document.body.classList.remove('dark'); } catch (e) { /* */ }
    this._updateThemeButton();
  },
  _bindThemeToggle() {
    document.getElementById('theme-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark');
      try { localStorage.setItem('python-study-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (e) { /* */ }
      this._updateThemeButton();
    });
  },
  _updateThemeButton() {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  },

  // ---- 语言切换 ----
  _bindLangToggle() {
    document.getElementById('lang-toggle').addEventListener('click', () => {
      I18N.toggle();
      this._refreshAll();
    });
  },

  /** 全量刷新（语言切换时调用） */
  _refreshAll() {
    const onLesson = !document.getElementById('lesson-page').classList.contains('hidden');
    if (onLesson) {
      this._renderCard();
      this._updateNavButtons();
    } else {
      this._renderHomePage();
    }
    this._updatePyodideStatus();
  },

  // ---- 角色系统 ----
  _initCharacter() {
    if (typeof Character === 'undefined') return;
    Character.init();
  },

  _updateCharacter() {
    if (typeof Character === 'undefined') return;
    const levelIdx = LEVEL_DEFS.indexOf(this._getLevel());
    Character.setLevel(Math.max(0, levelIdx));
  },

  // ---- 成就 & XP ----
  _getCompletedCount() { return this.completedLessons.size; },

  _getLevel() {
    let lvl = LEVEL_DEFS[0];
    for (const l of LEVEL_DEFS) { if (this.xp >= l.maxXp) lvl = l; }
    return lvl;
  },

  _getNextLevel() {
    for (const l of LEVEL_DEFS) { if (this.xp < l.maxXp) return l; }
    return LEVEL_DEFS[LEVEL_DEFS.length - 1];
  },

  _addXp(amount) {
    const oldLevel = this._getLevel();
    this.xp += amount;
    this._floatXp(amount);
    const newLevel = this._getLevel();
    if (newLevel.maxXp > oldLevel.maxXp) {
      const title = I18N.lang === 'zh' ? newLevel.zhTitle : newLevel.enTitle;
      setTimeout(() => {
        this._showToast(I18N.t('ui_toast_levelup', { title }));
        this._playSound('milestone'); Confetti.big();
        if (typeof Character !== 'undefined') Character.celebrate();
      }, 400);
    }
    this._saveProgress();
    this._renderAchievements();
  },

  _checkBadges() {
    const state = { completedCount: this._getCompletedCount() };
    const newBadges = [];
    for (const b of ACHIEVEMENT_DEFS) {
      if (!this.earnedBadges.has(b.id) && b.check(state)) {
        this.earnedBadges.add(b.id); newBadges.push(b);
      }
    }
    return newBadges;
  },

  _renderAchievements() {
    const badgeList = document.getElementById('badge-list');
    if (badgeList) {
      badgeList.innerHTML = ACHIEVEMENT_DEFS.map(b => {
        const earned = this.earnedBadges.has(b.id);
        const label = I18N.lang === 'zh' ? b.zhLabel : b.enLabel;
        return `<span class="badge-item${earned ? ' earned' : ' locked'}" title="${earned ? '✅ ' + label : '🔒 ' + label}">${b.icon} ${label}</span>`;
      }).join('');
    }
  },

  // ---- 首页 ----
  _renderHomePage() {
    const count = this._getCompletedCount();
    const level = this._getLevel();
    const nextLevel = this._getNextLevel();
    const nextMax = nextLevel.maxXp === 0 ? 100 : nextLevel.maxXp;
    const xpInLevel = this.xp - level.maxXp;
    const xpNeeded = nextMax - level.maxXp;
    const xpPct = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));
    const gold = this.xp; // gold = total XP

    // HUD 元素
    const avatarEl = document.getElementById('hud-avatar');
    const rankEl = document.getElementById('rank-title');
    const xpBarEl = document.getElementById('xp-bar-fill');
    const xpTextEl = document.getElementById('xp-text');
    const levelBadge = document.getElementById('hud-level');
    const goldDisp = document.getElementById('gold-display');
    const questText = document.getElementById('quest-text');
    const questProg = document.getElementById('quest-progress');
    const searchInput = document.getElementById('search-input');
    const rankName = I18N.lang === 'zh' ? level.zhTitle : level.enTitle;

    if (avatarEl) avatarEl.textContent = ['🐣','🐍','🦎','🐉','🐲','👑'][Math.min(5, LEVEL_DEFS.indexOf(level))];
    if (rankEl) rankEl.textContent = rankName;
    if (xpBarEl) xpBarEl.style.width = xpPct + '%';
    if (xpTextEl) xpTextEl.textContent = `${xpInLevel} / ${xpNeeded}`;
    if (levelBadge) levelBadge.textContent = `Lv.${LEVEL_DEFS.indexOf(level) + 1}`;
    if (goldDisp) goldDisp.textContent = gold;
    if (searchInput) searchInput.placeholder = I18N.t('ui_search');

    // 任务文本
    const nextId = this._findNextLessonId();
    if (nextId && questText) {
      const nextTitle = I18N.t(`l${nextId}_title`) || LESSONS.find(l => l.id === nextId)?.title || '';
      questText.textContent = `击败关卡 ${nextId}：${nextTitle}`;
    } else if (questText) {
      questText.textContent = I18N.t('ui_all_done');
    }
    if (questProg) questProg.textContent = `${count}/${LESSONS.length}`;

    // HP bar (完成率映射)
    const hpEl = document.getElementById('hp-bar-fill');
    const hpTextEl = document.getElementById('hp-text');
    const hpPct = Math.max(1, Math.round((count / LESSONS.length) * 100));
    if (hpEl) hpEl.style.width = hpPct + '%';
    if (hpTextEl) hpTextEl.textContent = `${hpPct} / 100`;

    // 世界地图
    if (typeof WorldMap !== 'undefined' && typeof REGIONS !== 'undefined') {
      WorldMap.setClickHandler((lessonId) => {
        this._playSound('click');
        this._enterLesson(lessonId);
      });
      WorldMap.render(REGIONS, this.completedLessons, this.xp, I18N.lang);
    }

    // 标题等
    document.querySelector('.home-desc').innerHTML = I18N.t('ui_subtitle');
    document.querySelector('.home-header h1').textContent = I18N.t('ui_title');
    document.title = I18N.t('ui_title');
    document.querySelector('.footer-copyright').textContent = I18N.t('copyright');

    this._renderAchievements();
    this._updateCharacter();
  },

  _findNextLessonId() {
    for (const lesson of LESSONS) {
      if (!this.completedLessons.has(lesson.id)) return lesson.id;
    }
    return null;
  },

  _bindSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (typeof WorldMap === 'undefined') return;
      if (!q) { WorldMap.clearHighlight(); return; }
      const match = LESSONS.find(l =>
        this._lt(l.id).toLowerCase().includes(q) ||
        this._ls(l.id).toLowerCase().includes(q)
      );
      if (match) WorldMap.highlightNode(match.id);
      else WorldMap.clearHighlight();
    });
  },

  // ---- 章节背景图映射 ----
  _chapterBgMap: {
    forest:   'image/章节一.jpg',
    valley:   'image/章节二 .jpg',
    mountain: 'image/章节三.jpg',
    temple:   'image/章节四.jpg',
    domain:   'image/章节五.jpg'
  },

  /** 根据课时 ID 获取章节背景图 */
  _getChapterBg(lessonId) {
    const region = getRegionForLesson(lessonId);
    return region ? this._chapterBgMap[region.id] : null;
  },

  // ---- 页面切换 ----
  _showPage(pageName) {
    document.getElementById('home-page').classList.toggle('hidden', pageName !== 'home');
    document.getElementById('lesson-page').classList.toggle('hidden', pageName !== 'lesson');
    document.body.classList.toggle('home-bg', pageName === 'home');
    if (pageName !== 'lesson') {
      document.body.classList.remove('lesson-bg');
      document.body.style.backgroundImage = '';
    }
  },

  _enterLesson(lessonId) {
    this.currentLessonId = lessonId;
    this.currentCardIndex = 0;
    this.submitted = false;
    this._showPage('lesson');
    // 设置章节背景：直接设置 backgroundImage 确保兼容
    const chapterBg = this._getChapterBg(lessonId);
    if (chapterBg) {
      const isDark = document.body.classList.contains('dark');
      const overlay = isDark ? 'rgba(6,6,15,0.5)' : 'rgba(224,229,236,0.5)';
      document.body.style.backgroundImage = `linear-gradient(${overlay}, ${overlay}), url('${chapterBg}')`;
      document.body.style.backgroundPosition = 'center top';
      document.body.style.backgroundSize = '100vw 100vh';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.classList.add('lesson-bg');
    }
    this._renderCard();
    this._updateNavButtons();
    if (typeof Character !== 'undefined') Character.hide();
  },

  _goHome() {
    this._destroyEditor();
    this._showPage('home');
    this._renderHomePage();
    if (typeof Character !== 'undefined') Character.show();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ---- 课时原始数据 ----
  _getLessonRaw(id) { return LESSONS.find(l => l.id === id); },

  // ---- 卡片渲染 ----
  _renderCard() {
    this._destroyEditor();
    const lesson = this._getLessonRaw(this.currentLessonId);
    if (!lesson) return;
    const card = lesson.cards[this.currentCardIndex];
    const container = document.getElementById('card');
    const lid = lesson.id;

    document.getElementById('lesson-badge').textContent = `${I18N.t('ui_level')} ${lid} · ${this._lt(lid)}`;
    if (lesson.cards.length > 1) {
      document.getElementById('card-indicator').textContent = `${this.currentCardIndex + 1}/${lesson.cards.length}`;
    } else {
      document.getElementById('card-indicator').textContent = I18N.t('ui_only_concept');
    }

    container.style.animation = 'none';
    container.offsetHeight;
    container.style.animation = 'fadeIn .3s ease';

    if (card.type === 'concept') {
      this._renderConceptCard(container, card, lesson);
    } else {
      this._renderExerciseCard(container, card, lesson);
    }
    this._updateNavButtons();
  },

  _renderConceptCard(container, card, lesson) {
    const hasExample = card.example && card.example.trim();
    const hasOutput = card.exampleOutput && card.exampleOutput.trim();
    const title = this._ct(lesson.id) || card.title;
    const body = this._cc(lesson.id) || card.content;
    const note = this._cn(lesson.id);

    container.innerHTML = `
      <h2>📖 ${title}</h2>
      <div class="concept-body">${body}</div>
      ${hasExample ? `<div class="code-block"><span class="code-label">${I18N.t('ui_example_code')}</span><pre>${this._escapeHtml(card.example)}</pre></div>` : ''}
      ${hasOutput ? `<div class="output-block"><span class="output-label">${I18N.t('ui_output_result')}</span><pre>${this._escapeHtml(card.exampleOutput)}</pre></div>` : ''}
      ${lesson.cards.length > 1 ? `<p style="margin-top:16px;color:#94a3b8;font-size:13px;">${I18N.t('ui_go_challenge')}</p>` : (note ? `<p style="margin-top:16px;color:#94a3b8;font-size:13px;">${note}</p>` : '')}
    `;
  },

  _renderExerciseCard(container, card, lesson) {
    const lid = lesson.id;
    const title = this._et(lid) || card.title;
    const desc = this._ed(lid) || card.description;
    const hint = this._eh(lid) || card.hint;

    container.innerHTML = `
      <h2>⚔ ${title}</h2>
      <div class="exercise-desc">${desc}</div>
      ${hint ? `<div class="tip-block"><strong>${I18N.t('ui_hint')}</strong>${hint}</div>` : ''}
      <div id="exercise-area"><textarea id="code-editor">${card.template || '# Write your code here\n'}</textarea></div>
      <div class="exercise-actions">
        <button class="btn btn-secondary" id="btn-run">${I18N.t('ui_run')}</button>
        <button class="btn btn-game" id="btn-submit">${I18N.t('ui_submit')}</button>
      </div>
      <div class="output-panel" id="output-panel" style="display:none">
        <div class="output-header">${I18N.t('ui_output')}</div>
        <pre id="output-content"></pre>
      </div>
      <div id="feedback-area"></div>
    `;
    this._initEditor();
    this._bindExerciseButtons(card);
  },

  // ---- CodeMirror ----
  _initEditor() {
    this._destroyEditor();
    const textarea = document.getElementById('code-editor');
    if (!textarea) return;
    this.editor = CodeMirror.fromTextArea(textarea, {
      mode: 'python', theme: 'monokai', lineNumbers: true,
      indentUnit: 4, tabSize: 4, indentWithTabs: false,
      matchBrackets: true, autoCloseBrackets: true, lineWrapping: true,
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
  _getUserCode() { return this.editor ? this.editor.getValue() : ''; },

  // ---- 习题交互 ----
  _bindExerciseButtons(card) {
    document.getElementById('btn-run').addEventListener('click', () => this._handleRun());
    document.getElementById('btn-submit').addEventListener('click', () => this._handleSubmit());
  },

  async _handleRun() {
    this._playSound('click');
    const code = this._getUserCode();
    if (!code.trim()) { this._showOutput(I18N.t('ui_no_code'), 'idle'); return; }
    const result = await this.runCode(code);
    if (result.error) { this._showOutput(result.error, 'error'); }
    else { this._showOutput(result.stdout || I18N.t('ui_no_output'), 'ok'); }
  },

  async _handleSubmit() {
    const lesson = this._getLessonRaw(this.currentLessonId);
    const card = lesson.cards[this.currentCardIndex];
    const code = this._getUserCode();

    if (!code.trim()) { this._showFeedback(false, I18N.t('ui_feedback_no_code')); return; }

    const runResult = await this.runCode(code);
    if (runResult.error) {
      this._showOutput(runResult.error, 'error');
      this._showFeedback(false, I18N.t('ui_feedback_error')); return;
    }
    this._showOutput(runResult.stdout || I18N.t('ui_no_output'), 'ok');

    const evaluation = await Judge.evaluate(code, card, (c) => this.runCode(c), runResult);
    // 翻译 judge 反馈
    if (!evaluation.pass && evaluation.details) {
      if (evaluation.details.keywordMissing) {
        evaluation.feedback = I18N.t('ui_feedback_missing', { missing: evaluation.details.keywordMissing.join(', ') });
      }
    }
    if (evaluation.pass) evaluation.feedback = I18N.t('ui_judge_correct');

    if (evaluation.pass) {
      this._showFeedback(true, evaluation.feedback);
      this.submitted = true;
      const wasNew = !this.completedLessons.has(lesson.id);
      this._markCompleted(lesson.id);
      this._updateNavButtons();
      this._playSound('correct');
      Confetti.small();

      if (wasNew) {
        this._showToast(I18N.t('ui_toast_xp', { id: lesson.id }));
      }
      const btn = document.getElementById('btn-submit');
      if (btn) { btn.disabled = true; btn.textContent = I18N.t('ui_submitted'); }
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
    area.innerHTML = `<div class="feedback feedback-${pass ? 'correct' : 'wrong'}">${pass ? '✅ ' : '❌ '}${this._escapeHtml(message)}</div>`;
  },

  // ---- 导航按钮 ----
  _updateNavButtons() {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const lesson = this._getLessonRaw(this.currentLessonId);
    if (!lesson) return;

    const totalCards = lesson.cards.length;
    const isConcept = lesson.cards[this.currentCardIndex].type === 'concept';
    const hasExercise = totalCards > 1;
    const isLastLesson = this.currentLessonId >= LESSONS.length;

    if (this.currentCardIndex === 0) {
      btnLeft.textContent = I18N.t('ui_back_home');
      btnLeft.className = 'btn btn-secondary';
      btnLeft.onclick = () => this._goHome();
    } else {
      btnLeft.textContent = I18N.t('ui_back');
      btnLeft.className = 'btn btn-secondary';
      btnLeft.onclick = () => { this.currentCardIndex--; this.submitted = false; this._renderCard(); };
    }

    if (isConcept && hasExercise) {
      btnRight.textContent = I18N.t('ui_next_card');
      btnRight.className = 'btn btn-game'; btnRight.disabled = false;
      btnRight.onclick = () => { this.currentCardIndex++; this.submitted = false; this._renderCard(); };
    } else if (!isConcept && !this.submitted) {
      btnRight.textContent = I18N.t('ui_locked');
      btnRight.className = 'btn btn-primary'; btnRight.disabled = true; btnRight.onclick = null;
    } else if (isLastLesson) {
      btnRight.textContent = I18N.t('ui_all_done');
      btnRight.className = 'btn btn-game'; btnRight.disabled = false;
      btnRight.onclick = () => this._goHome();
    } else {
      btnRight.textContent = I18N.t('ui_next_lesson');
      btnRight.className = 'btn btn-game'; btnRight.disabled = false;
      btnRight.onclick = () => this._enterLesson(this.currentLessonId + 1);
    }
  },

  // ---- 进度持久化 ----
  _markCompleted(lessonId) {
    const wasNew = !this.completedLessons.has(lessonId);
    this.completedLessons.add(lessonId);
    if (wasNew) {
      this._addXp(30);
      const newBadges = this._checkBadges();
      if (newBadges.length > 0) {
        setTimeout(() => {
          newBadges.forEach(b => {
            const label = I18N.lang === 'zh' ? b.zhLabel : b.enLabel;
            const desc = I18N.lang === 'zh'
              ? `完成第${ACHIEVEMENT_DEFS.indexOf(b) > 0 ? '5个' : '1个'}关卡`
              : b.enLabel;
            this._showToast(I18N.t('ui_toast_badge', { icon: b.icon, label, desc: '' }), 3000);
          });
          this._playSound('milestone'); Confetti.big();
        }, 800);
      }
    }
    this._saveProgress();
  },

  _loadProgress() {
    try {
      const raw = localStorage.getItem('python-study-progress');
      if (raw) this.completedLessons = new Set(JSON.parse(raw));
      const rawXp = localStorage.getItem('python-study-xp');
      if (rawXp) this.xp = parseInt(rawXp) || 0;
      const rawBadges = localStorage.getItem('python-study-badges');
      if (rawBadges) this.earnedBadges = new Set(JSON.parse(rawBadges));
    } catch (e) { /* */ }
  },

  _saveProgress() {
    try {
      localStorage.setItem('python-study-progress', JSON.stringify([...this.completedLessons]));
      localStorage.setItem('python-study-xp', String(this.xp));
      localStorage.setItem('python-study-badges', JSON.stringify([...this.earnedBadges]));
    } catch (e) { /* */ }
  },

  _escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
