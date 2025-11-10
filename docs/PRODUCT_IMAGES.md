# 产品图片命名指南

## 当前产品图片名称

产品图片名称在 `pages/products.jsx` 文件中定义。以下是当前6个产品的图片路径：

| 产品名称 | 当前图片路径 | 说明 |
|---------|------------|------|
| 电视支架 | `/products/tv-stand.jpg` | 必须匹配代码中的路径 |
| 电视移动推车 | `/products/tv-mobile-cart.jpg` | 必须匹配代码中的路径 |
| 音响支架 | `/products/speaker-stand.jpg` | 必须匹配代码中的路径 |
| 空调支架 | `/products/ac-bracket.jpg` | 必须匹配代码中的路径 |
| 显示器支架 | `/products/monitor-stand.jpg` | 必须匹配代码中的路径 |
| 电视吊架 | `/products/tv-wall-mount.jpg` | 必须匹配代码中的路径 |

## 自定义图片名称的方法

### 方法一：使用推荐的名称（推荐）

**直接使用代码中已定义的名称**，这样最简单：
- 将图片命名为代码中指定的名称
- 放在 `public/products/` 目录下
- 无需修改代码

**推荐名称列表：**
```
tv-stand.jpg
tv-mobile-cart.jpg
speaker-stand.jpg
ac-bracket.jpg
monitor-stand.jpg
tv-wall-mount.jpg
```

### 方法二：自定义名称（需要修改代码）

如果您想使用自定义的图片名称，需要：

1. **修改代码**：编辑 `pages/products.jsx` 文件
2. **更新图片路径**：修改每个产品的 `image` 字段
3. **确保文件名匹配**：图片文件名必须与代码中的路径匹配

**示例：**
如果您想将电视支架的图片命名为 `tv-support.jpg`，需要：

1. 将图片命名为 `tv-support.jpg` 并放在 `public/products/` 目录
2. 在 `pages/products.jsx` 中修改：
   ```javascript
   {
     id: 1,
     name: '电视支架',
     // ... 其他字段
     image: '/products/tv-support.jpg',  // 修改这里
   }
   ```

## 命名建议

### 推荐命名规则
- ✅ 使用小写字母
- ✅ 使用连字符 `-` 分隔单词
- ✅ 使用有意义的名称（与产品相关）
- ✅ 保持简洁（不超过30个字符）

### 命名示例
```
✅ 好的命名：
- tv-stand.jpg
- speaker-stand-2024.jpg
- ac-bracket-steel.jpg

❌ 不推荐的命名：
- TV Stand.jpg（包含空格和大写）
- 电视支架.jpg（中文文件名）
- product_1.jpg（无意义）
- tvstand.jpg（无分隔符，不易读）
```

## 快速操作指南

### 使用推荐名称（最简单）
1. 准备6张产品图片
2. 按照上方的"推荐名称列表"命名
3. 放在 `public/products/` 目录
4. 完成！

### 使用自定义名称
1. 准备6张产品图片，按您的喜好命名
2. 打开 `pages/products.jsx` 文件
3. 找到 `products` 数组
4. 修改每个产品的 `image` 字段，使其指向您的图片文件名
5. 保存文件

## 注意事项

⚠️ **重要提示：**
- 图片文件名必须与代码中的路径**完全匹配**（包括大小写）
- 图片必须放在 `public/products/` 目录下
- 如果图片不存在，页面会显示占位符（产品首字母图标）
- 建议使用 `.jpg` 格式，文件大小 < 200KB

## 需要帮助？

如果您想使用自定义名称但不确定如何修改代码，可以：
1. 告诉我您想要的图片名称
2. 我可以帮您修改代码中的路径


