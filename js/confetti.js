/**
 * 轻量级五彩纸屑庆祝动画
 */
const Confetti = {
  _colors: ['#4f46e5', '#7c3aed', '#f59e0b', '#10b981', '#ef4444', '#06b6d4', '#ec4899', '#f97316'],

  /** 发射一次庆祝动画 */
  fire(duration = 3000) {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.backgroundColor = this._colors[Math.floor(Math.random() * this._colors.length)];
      particle.style.animationDelay = Math.random() * 0.8 + 's';
      particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
      particle.style.width = (Math.random() * 8 + 6) + 'px';
      particle.style.height = (Math.random() * 8 + 6) + 'px';
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(particle);
    }

    setTimeout(() => container.remove(), duration + 1000);
  },

  /** 小规模庆祝（答对题目时） */
  small() {
    this.fire(2000);
  },

  /** 大规模庆祝（完成里程碑时） */
  big() {
    this.fire(4000);
    // 再延迟一小下追加一波
    setTimeout(() => this.fire(3000), 600);
  }
};
