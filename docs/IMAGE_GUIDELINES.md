# 图片添加指南

## 图片格式要求

### 支持的格式
- **推荐格式**：`.jpg` / `.jpeg`（适合照片、产品图）
- **可选格式**：`.png`（适合透明背景、图标）
- **现代格式**：`.webp`（更小的文件大小，Next.js 会自动优化）

### 格式选择建议
- **产品图片**：使用 `.jpg` 格式，文件更小，加载更快
- **Logo/图标**：使用 `.png` 格式（如需透明背景）
- **Hero/封面图**：使用 `.jpg` 或 `.webp` 格式

## 图片大小要求

### 产品图片 (`public/products/`)
- **推荐尺寸**：800x600 像素（4:3 比例）
- **最小尺寸**：600x450 像素
- **最大尺寸**：1200x900 像素
- **文件大小**：建议 < 200KB（单张图片）
- **用途**：产品列表页和详情页展示

### Hero 主图 (`public/images/hero/`)
- **推荐尺寸**：1920x1080 像素（16:9 比例）
- **最小尺寸**：1280x720 像素
- **最大尺寸**：2560x1440 像素
- **文件大小**：建议 < 500KB
- **用途**：首页和各页面顶部大图

### 页面封面图 (`public/images/covers/`)
- **推荐尺寸**：1600x900 像素（16:9 比例）
- **最小尺寸**：1200x675 像素
- **文件大小**：建议 < 300KB
- **用途**：关于我们、产品中心、联系我们等页面封面

## 图片命名规范

### 产品图片命名
```
产品英文名-小写-连字符.jpg
例如：
- tv-stand.jpg
- tv-mobile-cart.jpg
- speaker-stand.jpg
- ac-bracket.jpg
- monitor-stand.jpg
- tv-wall-mount.jpg
```

### Hero 和封面图命名
```
页面名-hero.jpg 或 页面名-cover.jpg
例如：
- home-hero.jpg
- products-cover.jpg
- about-cover.jpg
```

## 图片优化建议

### 1. 压缩图片
在添加图片前，建议使用工具压缩：
- **在线工具**：TinyPNG、Squoosh
- **软件**：Photoshop、GIMP、ImageOptim

### 2. 使用 Next.js Image 组件
项目已使用 Next.js Image 组件，会自动：
- 响应式加载（根据设备加载合适尺寸）
- 懒加载（滚动到图片时才加载）
- 自动优化格式（支持 WebP）
- 防止布局偏移

### 3. 图片质量
- **产品图**：质量 80-85%（平衡文件大小和清晰度）
- **Hero 图**：质量 75-80%（文件较大，适当降低）
- **封面图**：质量 80-85%

## 目录结构

```
public/
├── products/              # 产品图片
│   ├── tv-stand.jpg
│   ├── tv-mobile-cart.jpg
│   ├── speaker-stand.jpg
│   ├── ac-bracket.jpg
│   ├── monitor-stand.jpg
│   └── tv-wall-mount.jpg
├── images/
│   ├── hero/              # 主图
│   │   └── home-hero.jpg
│   └── covers/            # 封面图
│       ├── about-cover.jpg
│       ├── products-cover.jpg
│       └── contact-cover.jpg
```

## 快速检查清单

添加图片前请确认：
- [ ] 图片格式为 `.jpg`、`.png` 或 `.webp`
- [ ] 图片尺寸符合要求
- [ ] 文件大小已优化（< 推荐大小）
- [ ] 图片命名符合规范
- [ ] 图片已放在正确的目录
- [ ] 图片清晰度足够（无模糊）

## 注意事项

1. **不要使用过大的图片**：会影响页面加载速度
2. **保持图片比例一致**：同一类型的图片使用相同比例
3. **使用有意义的文件名**：便于管理和 SEO
4. **定期优化图片**：删除未使用的图片
5. **考虑移动端**：确保图片在手机上也能清晰显示

## 工具推荐

- **压缩工具**：https://tinypng.com/
- **格式转换**：https://squoosh.app/
- **批量处理**：ImageOptim、Photoshop 批处理


