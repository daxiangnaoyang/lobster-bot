/**
 * 病毒式朋友圈文案创作师
 *
 * 核心能力：创作具有传播力的社交媒体文案
 * 风格特点：短段落、反常识观点、深度洞察、鲜明立场
 */

module.exports = {
  name: "viral-moments",
  description: "创作病毒式传播的社交媒体文案（朋友圈、Twitter、微博）",

  // 参数定义
  parameters: {
    topic: {
      type: "string",
      description: "文案主题",
      required: true
    },
    stance: {
      type: "string",
      description: "你的立场观点（可选，不填则帮你构思）",
      required: false
    },
    style: {
      type: "string",
      enum: ["deep", "reflection", "contrarian", "qa"],
      description: "风格变体：deep=深度思考, reflection=自我反思, contrarian=反常识, qa=问答型",
      required: false
    },
    keywords: {
      type: "array",
      items: { type: "string" },
      description: "关键词列表（可选）",
      required: false
    }
  },

  // 核心处理逻辑
  handler: async ({ topic, stance, style, keywords }, { logger }) => {
    logger.info(`开始创作文案，主题: ${topic}, 风格: ${style || '默认'}`);

    // 文案结构模板
    const templates = {
      deep: [
        "当所有人都在[热点/现象]\n\n我发现了一个相反的事实\n\n[支撑观察]\n\n[深度洞察/原理]\n\n[结尾留白]",
        "很多人认为[主流观点]\n\n但我并不这么认为\n\n[反常识观点]\n\n[案例/证据]\n\n[结论]"
      ],
      reflection: [
        "这周我[行动/观察]\n\n结果很意外\n\n[发现1]\n\n[发现2]\n\n不是[表面原因]\n是[深层原因]",
        "当我[经历/看到]\n\n我开始意识到\n\n[感悟1]\n\n[感悟2]\n\n[行动启示]"
      ],
      contrarian: [
        "[热点事件]引发了巨大震动\n\n很多人在问：[主流疑问]\n\n舆论哗然，大家都在说[主流观点]\n\n但我并不这么认为\n\n[反常识观点]\n\n[原理/案例支撑]\n\n[结尾]",
        "大家都说[主流观点]\n\n但[反常识观察]\n\n[证据1]\n\n[证据2]\n\n[结论]"
      ],
      qa: [
        "学员问：[问题]\n\n我的回答：\n\n第一，[观点1]\n\n第二，[观点2]\n\n第三，[观点3]\n\n[总结]",
        "很多人问：[问题]\n\n我的回答很简单\n\n[核心观点]\n\n[支撑论据]\n\n[行动建议]"
      ]
    };

    // 如果没有指定风格，自动选择
    const selectedStyle = style || "deep";
    const template = templates[selectedStyle];

    // 生成多个变体
    const variations = [];

    // 变体 1：直接应用模板
    variations.push({
      version: 1,
      style: selectedStyle,
      template: template[0],
      note: "标准模板"
    });

    // 变体 2：备用模板
    if (template[1]) {
      variations.push({
        version: 2,
        style: selectedStyle,
        template: template[1],
        note: "备选结构"
      });
    }

    // 如果没有提供立场，生成建议立场
    let suggestedStance = stance;
    if (!stance) {
      suggestedStance = generateStance(topic, selectedStyle);
    }

    logger.info("文案创作完成");

    return {
      topic,
      stance: suggestedStance,
      style: selectedStyle,
      keywords: keywords || [],
      variations,
      tips: [
        "每段 1-3 句话，不超过 3 行",
        "用'但我发现'、'相反的是'制造转折",
        "数字、对比、排比增强说服力",
        "结尾留白，不要说尽"
      ]
    };
  }
};

/**
 * 根据主题和风格生成建议立场
 */
function generateStance(topic, style) {
  const stancePatterns = {
    deep: `反常识视角：从${topic}的相反面思考，找到被忽视的真相`,
    reflection: `自我反思：${topic}让我意识到了什么`,
    contrarian: `反向观点：主流观点对${topic}的看法是错的`,
    qa: `直接回答：关于${topic}的核心真相`
  };

  return stancePatterns[style] || stancePatterns.deep;
}

/**
 * 使用示例
 */
module.exports.examples = [
  {
    name: "深度思考型",
    input: {
      topic: "AI 让人变懒",
      style: "deep"
    },
    output: {
      variations: [
        {
          version: 1,
          content: `当所有人都在担心 AI 会让人变懒\n\n我发现了一个相反的现象\n\nAI 淘汰的不是懒人\n\n而是那些\n\n不愿意思考\n\n只想当"工具人"的人`
        }
      ]
    }
  },
  {
    name: "反常识型",
    input: {
      topic: "上四休三",
      stance: "上四休三可能是陷阱",
      style: "contrarian"
    },
    output: {
      variations: [
        {
          version: 1,
          content: `张雪峰推行"上四休三"\n\n他的离去引发了巨大震动\n\n很多人在问：为什么\n\n舆论哗然，大家都在骂"资本太黑"\n\n但我并不这么认为\n\n谁也逃不过一个\n\n用效率提升来不断加码的机制\n\n杰文斯悖论\n\n你、我皆如此`
        }
      ]
    }
  }
];
