# BeWellTEC - 外贸展示型官网

一个基于 Next.js + React + Tailwind CSS 构建的现代化外贸展示型官网项目。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ SEO 优化，每个页面都包含完整的 meta 标签
- ✅ Markdown 博客系统，支持自动生成文章列表和详情页
- ✅ 现代化 UI 设计，使用 Tailwind CSS
- ✅ 动态 Sitemap 生成，自动包含所有页面和博客文章
- ✅ 联系表单支持 Formspree 集成
- ✅ Next.js Image 组件优化图片加载
- ✅ 可部署到 Vercel

## 技术栈

- **Next.js 14** - React 框架
- **React 18** - UI 库
- **Tailwind CSS** - 样式框架
- **gray-matter** - Markdown 解析
- **remark** - Markdown 转 HTML

## 项目结构

```
BeWellTEC/
├── components/          # 组件目录
│   ├── Layout.jsx      # 布局组件
│   ├── Navbar.jsx      # 导航栏
│   ├── Footer.jsx      # 页脚
│   ├── BlogCard.jsx    # 博客卡片
│   └── SEO.jsx         # SEO 组件
├── lib/                # 工具函数
│   └── markdown.js     # Markdown 处理
├── pages/              # 页面目录
│   ├── _app.js         # App 入口
│   ├── index.jsx       # 首页
│   ├── about.jsx       # 关于我们
│   ├── products.jsx    # 产品页
│   ├── contact.jsx     # 联系我们
│   └── blog/           # 博客
│       ├── index.jsx   # 博客列表
│       └── [slug].jsx  # 博客详情
├── posts/              # Markdown 文章
│   ├── first-post.md
│   └── seo-tips-for-exporters.md
├── public/             # 静态资源
│   ├── robots.txt
│   └── sitemap.xml
├── styles/             # 样式文件
│   └── globals.css
└── package.json
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并完成部署

或者使用 Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 自定义配置

### 修改网站信息

- 编辑 `components/SEO.jsx` 中的 `siteName` 和 `siteUrl`
- 编辑 `components/Navbar.jsx` 和 `components/Footer.jsx` 中的公司信息
- 更新 `public/robots.txt` 和 `public/sitemap.xml` 中的域名

### 添加博客文章

在 `posts/` 目录下创建新的 `.md` 文件，格式如下：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要"
description: "文章描述"
---

# 文章内容
```

### 自定义样式

编辑 `tailwind.config.js` 和 `styles/globals.css` 来自定义主题和样式。

## SEO 优化

- ✅ 每个页面都有独立的 SEO meta 标签
- ✅ 支持 Open Graph 和 Twitter Card
- ✅ 包含 robots.txt 和 sitemap.xml
- ✅ 语义化 HTML 结构
- ✅ 响应式设计，移动端友好

## 环境变量配置

创建 `.env.local` 文件并配置以下变量：

```bash
# 网站 URL (用于 SEO 和 Sitemap)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Formspree 表单提交端点 (可选)
# 获取方式：访问 https://formspree.io/ 注册账号并创建表单
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## 图片添加指南

### 图片格式和大小要求

**支持的格式**：`.jpg` / `.jpeg`、`.png`、`.webp`

**产品图片** (`public/products/`)：
- 推荐尺寸：800x600 像素
- 文件大小：< 200KB
- 命名格式：`产品英文名-小写.jpg`（如：`tv-stand.jpg`）

**Hero 主图** (`public/images/hero/`)：
- 推荐尺寸：1920x1080 像素
- 文件大小：< 500KB

**页面封面图** (`public/images/covers/`)：
- 推荐尺寸：1600x900 像素
- 文件大小：< 300KB

详细说明请查看 [图片添加指南](docs/IMAGE_GUIDELINES.md)

## 注意事项

1. **域名配置**：请在 `.env.local` 中设置 `NEXT_PUBLIC_SITE_URL` 为您的实际域名
2. **图片资源**：产品页面已使用 Next.js Image 组件优化，建议将图片放在 `public/products/` 目录下，详细要求见上方
3. **表单提交**：联系表单已支持 Formspree，在 `.env.local` 中配置 `NEXT_PUBLIC_FORMSPREE_ENDPOINT` 即可启用
4. **动态 Sitemap**：✅ 已实现，通过 `/api/sitemap.xml` 动态生成，自动包含所有页面和博客文章

## 许可证

MIT License

## 支持

如有问题或建议，请联系：info@bewelltec.com

"# BeWellTEC" 
