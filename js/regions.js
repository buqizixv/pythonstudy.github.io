/**
 * 区域/章节定义 — 5 个主题区域，将 26 个课时分组
 */
const REGIONS = [
  {
    id: 'forest',
    icon: '🌿',
    zhName: '基础之森',
    enName: 'Forest of Fundamentals',
    zhDesc: '踏入 Python 世界的第一步，掌握最基本的工具',
    enDesc: 'First steps into the Python world — master the basic tools',
    color: '#22c55e',
    colorRGB: '34, 197, 94',
    lessons: [1, 2, 3, 4, 5]
  },
  {
    id: 'valley',
    icon: '💎',
    zhName: '数据山谷',
    enName: 'Data Valley',
    zhDesc: '探索数据的容器，学会组织和存储信息',
    enDesc: 'Explore data containers — learn to organize and store information',
    color: '#3b82f6',
    colorRGB: '59, 130, 246',
    lessons: [6, 7, 8, 9]
  },
  {
    id: 'mountain',
    icon: '🏔️',
    zhName: '逻辑山脉',
    enName: 'Logic Mountains',
    zhDesc: '翻越条件与循环的高峰，让程序学会思考和重复',
    enDesc: 'Conquer conditionals and loops — teach your program to think and repeat',
    color: '#f59e0b',
    colorRGB: '245, 158, 11',
    lessons: [10, 11, 12, 13, 14]
  },
  {
    id: 'temple',
    icon: '🏛️',
    zhName: '大师殿堂',
    enName: "Master's Temple",
    zhDesc: '掌握高阶技巧，从函数进阶到生成器的终极修炼',
    enDesc: 'Master advanced techniques — from functions to generators',
    color: '#8b5cf6',
    colorRGB: '139, 92, 246',
    lessons: [15, 16, 17, 18, 19, 20, 21, 22]
  },
  {
    id: 'domain',
    icon: '⭐',
    zhName: '终极领域',
    enName: 'Final Domain',
    zhDesc: '融会贯通，掌握模块、文件与异常处理',
    enDesc: 'Bring it all together — modules, files, and exception handling',
    color: '#ef4444',
    colorRGB: '239, 68, 68',
    lessons: [23, 24, 25, 26]
  }
];

/** 根据课时 ID 查找所属区域 */
function getRegionForLesson(lessonId) {
  return REGIONS.find(r => r.lessons.includes(lessonId));
}

/** 根据课时 ID 获取在区域内的索引 (0-based) */
function getLessonIndexInRegion(lessonId) {
  const region = getRegionForLesson(lessonId);
  if (!region) return -1;
  return region.lessons.indexOf(lessonId);
}
