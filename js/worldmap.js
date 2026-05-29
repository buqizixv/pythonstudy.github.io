/**
 * 世界地图组件 — RPG 风格关卡地图
 */
const WorldMap = {
  _container: null,
  _onLessonClick: null,

  /** 区域背景图映射 */
  _regionBgMap: {
    forest:   'image/章节一.jpg',
    valley:   'image/章节二 .jpg',
    mountain: 'image/章节三.jpg',
    temple:   'image/章节四.jpg',
    domain:   'image/章节五.jpg'
  },

  /**
   * 渲染世界地图
   * @param {Array} regions - REGIONS 数据
   * @param {Set} completedLessons - 已完成的课时 ID
   * @param {number} xp - 当前经验值
   * @param {string} lang - 当前语言 'zh' | 'en'
   */
  render(regions, completedLessons, xp, lang) {
    this._container = document.getElementById('world-map');
    if (!this._container) return;

    // 找出下一个可用的课时（第一个未完成的）
    const nextAvailable = this._findNextAvailable(regions, completedLessons);

    // 判断哪些区域已解锁
    const unlockedRegions = this._getUnlockedRegions(regions, completedLessons);

    let html = '';
    regions.forEach((region, ri) => {
      const isUnlocked = unlockedRegions.has(region.id);
      html += this._buildRegion(region, completedLessons, nextAvailable, lang, isUnlocked);
    });

    this._container.innerHTML = html;
    this._bindClicks();
  },

  /** 找出第一个未完成的课时 */
  _findNextAvailable(regions, completed) {
    for (const region of regions) {
      for (const lid of region.lessons) {
        if (!completed.has(lid)) return lid;
      }
    }
    return null; // 全部完成
  },

  /** 返回已解锁的区域 ID Set */
  _getUnlockedRegions(regions, completed) {
    const unlocked = new Set();
    let allPrevDone = true;
    for (const region of regions) {
      if (allPrevDone) {
        unlocked.add(region.id);
        // 当前区域所有课程都完成才能解锁下一个
        const allDone = region.lessons.every(lid => completed.has(lid));
        if (!allDone) allPrevDone = false;
      }
    }
    return unlocked;
  },

  /** 构建一个区域块 */
  _buildRegion(region, completed, nextAvailable, lang, isUnlocked) {
    const zh = lang === 'zh';
    const name = zh ? region.zhName : region.enName;
    const desc = zh ? region.zhDesc : region.enDesc;
    const icon = region.icon;
    const completedAll = region.lessons.every(lid => completed.has(lid));
    const totalDone = region.lessons.filter(lid => completed.has(lid)).length;

    // 节点 HTML
    const nodesHtml = region.lessons.map((lid, i) => {
      // 需要从 LESSONS 获取课时数据
      const lesson = LESSONS.find(l => l.id === lid);
      if (!lesson) return '';
      const title = I18N.t(`l${lid}_title`) || lesson.title;
      const lessonIcon = LESSON_ICONS[lid - 1] || '📝';

      let state = 'locked';
      if (completed.has(lid)) {
        state = 'completed';
      } else if (lid === nextAvailable) {
        state = 'available';
      }

      const connector = i > 0 ? `<div class="node-connector" style="background:${region.color};opacity:${state==='locked'?'0.2':'0.6'}"></div>` : '';

      return `${connector}
        <div class="map-node ${state}" data-lesson="${lid}" data-region="${region.id}"
             style="${state === 'completed' ? 'border-color:' + region.color + ';box-shadow:0 0 12px rgba(' + region.colorRGB + ',0.3);' : ''}
                    ${state === 'available' ? 'border-color:' + region.color + ';box-shadow:0 0 16px rgba(' + region.colorRGB + ',0.5);' : ''}">
          <span class="node-icon">${lessonIcon}</span>
          <span class="node-num">Lv${lid}</span>
          <span class="node-tooltip">${title}</span>
        </div>`;
    }).join('');

    const lockedOverlay = !isUnlocked
      ? `<div class="region-locked-overlay"><span class="region-locked-text">${I18N.t('region_locked')}</span></div>`
      : '';

    const bgImage = this._regionBgMap[region.id] || '';
    const bgStyle = bgImage ? `background: linear-gradient(rgba(6,6,15,0.5), rgba(6,6,15,0.5)), url('${bgImage}') fixed center top / 100vw 100vh no-repeat;` : '';

    return `
      <div class="region-block" data-region="${region.id}" style="${bgStyle}${isUnlocked ? '' : 'opacity:0.5;'}">
        ${lockedOverlay}
        <div class="region-header">
          <span class="region-icon">${icon}</span>
          <div class="region-info">
            <h3 style="color:${region.color}">${name}</h3>
            <p>${desc} &nbsp;<span style="font-size:11px;opacity:0.7;">(${totalDone}/${region.lessons.length})</span></p>
          </div>
        </div>
        <div class="node-row">
          ${nodesHtml}
        </div>
      </div>`;
  },

  /** 绑定节点点击 */
  _bindClicks() {
    if (!this._container) return;
    this._container.querySelectorAll('.map-node:not(.locked)').forEach(node => {
      node.addEventListener('click', () => {
        const lessonId = parseInt(node.dataset.lesson);
        if (this._onLessonClick) this._onLessonClick(lessonId);
      });
    });
  },

  /** 设置点击回调 */
  setClickHandler(fn) { this._onLessonClick = fn; },

  /** 高亮搜索匹配节点 */
  highlightNode(lessonId) {
    this.clearHighlight();
    const node = this._container?.querySelector(`.map-node[data-lesson="${lessonId}"]`);
    if (node) {
      node.classList.add('highlight');
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  /** 清除所有高亮 */
  clearHighlight() {
    this._container?.querySelectorAll('.map-node.highlight').forEach(n => n.classList.remove('highlight'));
  },

  /** 获取节点 DOM */
  getNode(lessonId) {
    return this._container?.querySelector(`.map-node[data-lesson="${lessonId}"]`);
  },

  /** 获取下一个可用节点的 DOM */
  getNextAvailableNode() {
    return this._container?.querySelector('.map-node.available');
  }
};
