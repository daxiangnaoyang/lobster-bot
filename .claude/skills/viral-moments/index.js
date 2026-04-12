/**
 * Viral Moments - 病毒式朋友圈文案创作师
 *
 * 核心质量标准（最高优先级）：
 * 1. 信息密度要高、言之有物，不要有废话
 * 2. 开头10秒内必须告诉用户价值
 * 3. 必须对用户有改变（认知改变 or 行动改变）
 * 4. 去掉所有对原文没有影响的段落
 */

const qualityStandards = {
  // 核心标准（必须全部通过）
  core: [
    "开头10秒内点出价值/洞察/痛点",
    "每段都有信息量，无废话、无情绪堆砌",
    "有明确的认知改变 or 行动改变",
    "删掉任何一段都会影响核心"
  ],
  // 人味儿检查（通过4项以上）
  human: [
    "有真实经历/具体场景",
    "有口语化表达（不是书面语）",
    "有具体数字/时间/细节",
    "有深度洞察（不是常识）",
    "有情感变化/心路历程",
    "有明确结果/改变"
  ]
};

// 去掉的废话清单
const removedFluff = [
  "那一刻我意识到",
  "我才发现",
  "挺意外的",
  "我挺开心的",
  "说实话",
  "那一刻我被XX了",
  "我心里想..."
];

// 六大风格模板
const templates = {
  // 1. 认知改变型
  cognitive: {
    structure: [
      "[发现/洞察] - 有数字支撑",
      "[具体内容]",
      "[为什么重要]",
      "[能解决什么问题]",
      "[从那以后...]",
      "[结果]"
    ],
    examples: [
      "我研究了100多个Skills\n发现了一个让AI能力提升10倍的秘密",
      "SOP是展开的Skill\nSkill是打包的SOP"
    ]
  },

  // 2. 问题解决型
  problem: {
    structure: [
      "[问题/痛点]",
      "[现象描述]",
      "[为什么]",
      "[解决方法]",
      "[结果]"
    ],
    examples: [
      "你的Agent为什么经常'忘记'怎么做？",
      "很多人学AI，被概念搞晕了"
    ]
  },

  // 3. 方法论型
  method: {
    structure: [
      "[一个X倍效率的方法]",
      "[是什么]",
      "[为什么有效]",
      "[具体怎么做]",
      "[结果]"
    ],
    examples: [
      "一个让AI能力提升10倍的方法\n为每个重要能力同时创建SOP和Skill",
      "先试，再问\n而不是先问，再试"
    ]
  },

  // 4. 洞察型
  insight: {
    structure: [
      "[发现一个现象/洞察]",
      "[为什么]",
      "[深层原因]",
      "[结论/改变]"
    ],
    examples: [
      "很多人问问题\n不是在寻求答案\n是在逃避行动",
      "问是安全的，试是有风险的\n所以我们用'问问题'来保护自己"
    ]
  },

  // 5. 价值传递型
  value: {
    structure: [
      "[感谢/触发事件]",
      "[核心价值]",
      "[为什么重要]",
      "[谁来适合]",
      "[结尾]"
    ],
    examples: [
      "有人在文档点赞了\n这篇文章我花了一周时间\n梳理了AI圈最混乱的8个概念",
      "感谢点赞的朋友\n让更多人看到"
    ]
  },

  // 6. 极简价值型
  minimal: {
    structure: [
      "[核心价值/洞察]",
      "[具体内容]",
      "[关键改变]",
      "[行动建议]"
    ],
    examples: [
      "让AI能力提升10倍的秘密\nSOP是展开的Skill，Skill是打包的SOP",
      "先试，再问\n效率提升10倍"
    ]
  }
};

// 质量检查函数
function checkQuality(content) {
  const checks = {
    core: {
      passed: 0,
      total: qualityStandards.core.length,
      items: []
    },
    human: {
      passed: 0,
      total: qualityStandards.human.length,
      items: []
    }
  };

  // 检查核心标准
  // 这里简化实现，实际使用时需要更复杂的分析

  return checks;
}

// 主函数
function createCopy(options = {}) {
  const {
    style = 'cognitive',      // 风格类型
    topic = '',               // 主题
    value = '',               // 核心价值
    cognitiveChange = '',     // 认知改变
    actionChange = '',        // 行动改变
    result = ''               // 结果
  } = options;

  const template = templates[style];

  return {
    template,
    qualityStandards,
    generate: (content) => {
      // 生成文案的逻辑
      // 这里简化实现
      return content;
    },
    check: checkQuality
  };
}

module.exports = {
  createCopy,
  templates,
  qualityStandards,
  removedFluff
};
