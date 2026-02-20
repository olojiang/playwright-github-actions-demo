# 🎭 GitHub Actions + Playwright Demo

这个项目演示了如何使用 GitHub Actions 驱动 Playwright 进行自动化测试，包括访问网站、表单操作、截图等功能。

## 📁 项目结构

```
playwright-demo/
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions 工作流配置
├── tests/
│   └── demo.spec.ts          # 测试用例
├── playwright.config.ts      # Playwright 配置文件
├── package.json              # 项目依赖
└── README.md                 # 说明文档
```

## 🚀 功能演示

### 1. 网站访问和截图 (`访问 httpbin.org 并截图`)
- 访问 https://httpbin.org/html
- 验证页面标题
- 截取全屏截图

### 2. 访问知名网站 (`访问 GitHub 并截图`)
- 访问 https://github.com
- 验证页面内容
- 截取首屏截图

### 3. 搜索功能 (`搜索功能演示`)
- 访问百度
- 在搜索框输入内容
- 点击搜索按钮
- 验证搜索结果
- 截图保存

### 4. 表单操作 (`表单提交演示`)
- 访问表单页面
- 填写文本框
- 选择下拉选项
- 勾选复选框
- 提交表单
- 验证提交结果
- 多步骤截图

### 5. 移动端测试 (`移动端视口演示`)
- 模拟 iPhone 视口
- 访问响应式网站
- 移动端截图

## 🛠️ 本地运行

### 安装依赖

```bash
npm install
npx playwright install
```

### 运行测试

```bash
# 运行所有测试
npm test

# 运行特定测试
npx playwright test -g "访问 GitHub"

# 以 UI 模式运行
npm run test:ui

# 查看报告
npm run report
```

## 📊 GitHub Actions 工作流

### 基本测试流程
1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖
4. 安装 Playwright 浏览器
5. 运行测试
6. 上传测试结果和截图

### 分片并发测试
- 使用矩阵策略将测试分成多个分片
- 每个分片并行运行
- 提高测试效率

## 📸 截图保存位置

测试运行后，截图会直接提交到仓库的 `screenshots/` 目录中：

- `httpbin-fullpage.png` - httpbin.org 全屏截图
- `github-homepage.png` - GitHub 首页截图
- `baidu-search.png` - 百度搜索结果页
- `form-filled.png` - 表单填写完成
- `form-submitted.png` - 表单提交结果
- `mobile-view.png` - 移动端视口截图

每次测试运行后，GitHub Actions 会自动将截图提交到仓库。

## 🔧 配置文件说明

### playwright.config.ts
- `fullyParallel: true` - 启用并行测试
- `screenshot: 'on'` - 自动截图
- `video: 'on-first-retry'` - 失败时录制视频
- 支持 Chromium 和 WebKit 浏览器

### GitHub Actions 配置
- 支持 push 和 pull_request 触发
- 支持手动触发 (workflow_dispatch)
- 自动上传测试结果和截图
- 30天保留期

## 📖 参考文档

- [Playwright 官方文档](https://playwright.dev)
- [GitHub Actions 文档](https://docs.github.com/actions)
- [文章原文](https://m.toutiao.com/article/7606164457059861027/)

## 📝 License

MIT