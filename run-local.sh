#!/bin/bash

echo "🎭 Playwright Demo 本地运行脚本"
echo "================================"
echo ""

# 检查是否安装了 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 请先安装 Node.js"
    echo "   访问: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm install

# 安装 Playwright 浏览器
echo "🌐 安装 Playwright 浏览器..."
npx playwright install chromium

# 创建结果目录
mkdir -p test-results

# 运行测试
echo ""
echo "🚀 运行测试..."
echo ""

npx playwright test --project=chromium

# 检查结果
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 测试通过！"
    echo ""
    echo "📸 生成的截图:"
    ls -lh test-results/*.png 2>/dev/null || echo "   暂无截图"
    echo ""
    echo "📊 查看报告:"
    echo "   npx playwright show-report"
else
    echo ""
    echo "❌ 测试失败"
    echo "   请检查 test-results/ 目录中的截图和日志"
fi