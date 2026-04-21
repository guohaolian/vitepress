# VitePress 文档站

基于 VitePress 构建的中文文档站项目，包含首页视觉定制、主题扩展和本地搜索能力。

## 技术栈

- VitePress 1.6.4
- Vue 3.5
- TypeScript

## 主要功能

- 首页 Hero 与卡片区样式自定义
- 深色模式切换过渡动画（View Transitions API）
- 本地全文搜索（local provider）
- 文档结构按指南、组件、示例、其他模块拆分

## 环境要求

- Node.js 18 及以上
- npm / pnpm / yarn 任一包管理器

## 安装依赖

```bash
npm install
```

如果你使用 pnpm：

```bash
pnpm install
```

## 本地开发

```bash
npm run dev
```

默认会启动 VitePress 开发服务，根目录为 docs。

## 构建与预览

构建静态站点：

```bash
npm run build
```

本地预览构建产物：

```bash
npm run serve
```

构建输出目录：docs/.vitepress/dist

## 目录说明

```text
.
├─ docs/
│  ├─ index.md                  # 首页
│  ├─ guide/                    # 指南
│  ├─ components/               # 组件文档
│  ├─ examples/                 # 示例文档
│  ├─ others/                   # 其他页面（FAQ、更新日志）
│  └─ .vitepress/
│     ├─ config.ts              # 站点配置
│     └─ theme/
│        ├─ index.ts            # 主题入口
│        ├─ Layout.vue          # 自定义布局（含外观切换动画）
│        ├─ custom.css          # 全局主题样式
│        └─ env.d.ts            # 主题模块声明
└─ package.json
```

## 常见维护位置

- 修改导航、站点标题、社交链接：docs/.vitepress/config.ts
- 修改首页内容与模块顺序：docs/index.md
- 修改首页视觉样式：docs/.vitepress/theme/custom.css
- 修改深浅色切换动画：docs/.vitepress/theme/Layout.vue
- 增加静态资源（logo、插图）：docs/public

## 许可证

MIT
