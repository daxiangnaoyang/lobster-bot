# 🦞 OpenClaw 助手 - Claude Code Skill

一个基于费曼学习法的 OpenClaw 学习助手,把"老师"的知识封装成对话式 AI 助手。

## 🎯 项目简介

这个项目是一个 **Claude Code Skill 插件**,旨在帮助任何人快速学习和使用 OpenClaw。核心理念是:

> **学员不需要看教程,直接跟 Claude 对话就能学会**

### 为什么创建这个项目?

- OpenClaw 功能强大但文档分散
- 新手不知道从哪里开始
- 配置和调试困难
- 缺少中文学习资源

### 这个项目解决什么问题?

✅ **个性化引导** - 根据你的环境提供定制化建议
✅ **对话式学习** - 不需要阅读长篇文档
✅ **代劳操作** - 帮你修改配置、排查问题
✅ **持续沉淀** - 知识库在使用中不断优化

## 🚀 快速开始

### 方法 1: 作为 Claude Code Skill 使用

```bash
# 克隆项目
git clone https://github.com/your-username/openclaw-assistant.git
cd openclaw-assistant

# 安装 Skill (假设 Claude Code 已安装)
claude skill install .
```

安装后,你可以直接问 Claude:
- "如何安装 OpenClaw?"
- "帮我配置 Telegram Bot"
- "Agent 是如何工作的?"

### 方法 2: 直接使用知识库

```bash
# 克隆项目
git clone https://github.com/your-username/openclaw-assistant.git
cd openclaw-assistant

# 将知识库路径告诉 Claude
# "我有一个 OpenClaw 项目,知识库在 $(pwd)/refs/"
```

## 📁 项目结构

```
openclaw-assistant/
├── README.md              # 本文件
├── skill.md               # Skill 插件配置
├── CLAUDE.md              # 给 Claude 的指导
│
├── refs/                  # 知识库 (Claude 读这里)
│   ├── openclaw-core/     # 核心概念
│   │   ├── what-is-openclaw.md
│   │   ├── architecture.md
│   │   └── agents.md
│   ├── openclaw-setup/    # 安装配置
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   └── troubleshooting.md
│   ├── openclaw-channels/ # 频道集成
│   │   └── telegram.md
│   └── openclaw-advanced/ # 高级主题
│       ├── skills.md
│       └── plugins.md
│
├── docs/                  # OpenClaw 官方文档
│   └── skills/
│
├── examples/              # 示例和模板
│   ├── quick-start.md
│   └── simple-agent.yaml
│
└── scripts/               # 实用脚本
    ├── setup.sh
    └── doctor.sh
```

## 💡 使用场景

### 场景 1: 新手入门

**你**: "我想学习 OpenClaw,从哪里开始?"

**Claude**: (基于 `refs/openclaw-setup/installation.md`)
"我建议按以下步骤学习:
1. 先安装 OpenClaw
2. 配置一个 LLM 提供商
3. 设置一个聊天频道(如 Telegram)
4. 创建你的第一个 Agent

让我先帮你检查系统环境..."

### 场景 2: 配置问题

**你**: "Gateway 启动失败,提示端口被占用"

**Claude**: (基于 `refs/openclaw-setup/troubleshooting.md`)
"这是常见问题,让我帮你:
1. 检查端口占用情况
2. 修改配置使用其他端口
3. 重启 Gateway

运行这个命令: `lsof -i :3010`"

### 场景 3: 功能开发

**你**: "我想创建一个能搜索网页的 Agent"

**Claude**: (基于 `refs/openclaw-core/agents.md`)
"好的!我来帮你创建:
1. Agent 配置需要包含 web-search 技能
2. 系统提示要说明搜索用途
3. 可能需要配置浏览器

这是配置示例..."

## 🛠️ 开发指南

### 添加新知识

当遇到 OpenClaw 相关问题时,按以下格式添加到 `refs/`:

```markdown
# 问题/主题标题

## 问题描述
用户遇到的典型问题

## 解决方案
详细的解决步骤,包含:
1. 前置条件
2. 具体步骤
3. 验证方法

## 相关命令
\`\`\`bash
# 命令示例
\`\`\`

## 注意事项
- 常见错误
- 最佳实践
- 相关链接
```

### 更新现有知识

1. 找到相关的 `.md` 文件
2. 更新内容
3. 在文件底部添加更新日志:
   ```markdown
   ---
   更新日志:
   - 2025-03-16: 添加了新的配置示例
   - 2025-03-15: 修复了错误信息
   ```

## 📚 学习路径

### 入门级 (1-2 天)
1. [OpenClaw 是什么?](refs/openclaw-core/what-is-openclaw.md)
2. [安装指南](refs/openclaw-setup/installation.md)
3. [快速开始示例](examples/quick-start.md)

### 进阶级 (3-5 天)
1. [架构详解](refs/openclaw-core/architecture.md)
2. [Agent 系统](refs/openclaw-core/agents.md)
3. [配置指南](refs/openclaw-setup/configuration.md)
4. [Telegram 集成](refs/openclaw-channels/telegram.md)

### 高级 (1-2 周)
1. 自定义 Skill 开发
2. 插件系统
3. 多 Agent 协作
4. 生产环境部署

## 🤝 贡献指南

欢迎贡献! 每次添加知识都是在帮助未来的学习者。

### 如何贡献

1. **遇到新问题** → 添加到 `refs/` 对应目录
2. **发现错误** → 修正并标注
3. **有好的案例** → 添加到 `examples/`
4. **改进文档** → 直接提交 PR

### 贡献规范

- 使用清晰的标题和结构
- 提供可执行的命令示例
- 添加故障排查步骤
- 保持语言简洁易懂
- 更新日期和日志

## 🔗 相关资源

- [OpenClaw 官方文档](https://docs.openclaw.ai/)
- [OpenClaw GitHub](https://github.com/openclaw)
- [社区案例](https://docs.openclaw.ai/start/showcase.md)
- [Claude Code 文档](https://docs.anthropic.com/claude-code)

## 📝 许可证

MIT License

## 🙏 致谢

感谢 OpenClaw 团队创建了这个优秀的项目!

---

**开始使用**: "Claude, 帮我安装 OpenClaw" 🚀
