/**
 * 角色系统 — 右下角常驻伙伴
 */
const Character = {
  _el: null,
  _bubble: null,
  _levelIndex: 0,

  _forms: ['🐣', '🐍', '🦎', '🐉', '🐲', '👑'],

  /** 初始化角色 DOM */
  init() {
    const old = document.getElementById('map-character');
    if (old) old.remove();

    this._el = document.createElement('div');
    this._el.id = 'map-character';
    this._el.className = 'map-character';
    this._el.title = '点击和我说话';
    this._el.innerHTML = '<span class="char-sprite">🐣</span>';
    document.body.appendChild(this._el);

    this._el.addEventListener('click', () => this._speak());
  },

  setLevel(levelIndex) {
    this._levelIndex = Math.min(5, Math.max(0, levelIndex));
    if (this._el) {
      const sprite = this._el.querySelector('.char-sprite');
      if (sprite) sprite.textContent = this._forms[this._levelIndex];
    }
  },

  place(lessonId) { /* no-op: character is fixed now */ },
  moveTo(lessonId) { /* no-op: character is fixed now */ },

  hide() {
    if (this._el) this._el.style.display = 'none';
  },

  show() {
    if (this._el) this._el.style.display = 'flex';
  },

  /** 随机说话 */
  _speak() {
    const greetings = [
      'char_greeting_0', 'char_greeting_1', 'char_greeting_2',
      'char_greeting_3', 'char_greeting_4', 'char_greeting_5'
    ];
    const key = this._levelIndex >= 5 ? 'char_greeting_done' : greetings[this._levelIndex];
    const text = I18N.t(key);
    this.say(text, 3000);
  },

  say(text, duration = 3000) {
    if (!this._el) return;
    const oldBubble = this._el.querySelector('.char-bubble');
    if (oldBubble) oldBubble.remove();

    const bubble = document.createElement('div');
    bubble.className = 'char-bubble show';
    bubble.textContent = text;
    this._el.appendChild(bubble);

    setTimeout(() => {
      bubble.classList.remove('show');
      setTimeout(() => { if (bubble.parentNode) bubble.remove(); }, 300);
    }, duration);
  },

  celebrate() {
    if (!this._el) return;
    const sprite = this._el.querySelector('.char-sprite');
    if (!sprite) return;
    sprite.style.transition = 'transform .3s ease';
    sprite.style.transform = 'rotate(360deg) scale(1.4)';
    setTimeout(() => {
      sprite.style.transform = 'rotate(0deg) scale(1)';
      setTimeout(() => { sprite.style.transition = ''; }, 300);
    }, 500);
  }
};
