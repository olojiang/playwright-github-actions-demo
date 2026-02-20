import { test, expect } from '@playwright/test';

test.describe('网站访问和截图演示', () => {
  
  test('访问 httpbin.org 并截图', async ({ page }) => {
    // 访问网站
    await page.goto('https://httpbin.org/html');
    
    // 等待页面加载完成
    await page.waitForLoadState('networkidle');
    
    // 验证页面标题
    await expect(page).toHaveTitle(/Herman Melville/);
    
    // 截取全屏
    await page.screenshot({ 
      path: 'test-results/httpbin-fullpage.png',
      fullPage: true 
    });
    
    console.log('✅ httpbin.org 访问成功，已截图');
  });

  test('访问 GitHub 并截图', async ({ page }) => {
    // 访问 GitHub
    await page.goto('https://github.com');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 验证页面包含 GitHub 文字
    await expect(page.locator('body')).toContainText('GitHub');
    
    // 截取首屏
    await page.screenshot({ 
      path: 'test-results/github-homepage.png' 
    });
    
    console.log('✅ GitHub 访问成功，已截图');
  });

  test('搜索功能演示', async ({ page }) => {
    // 访问百度
    await page.goto('https://www.baidu.com');
    
    // 在搜索框输入内容
    await page.fill('#kw', 'Playwright 自动化测试');
    
    // 点击搜索按钮
    await page.click('#su');
    
    // 等待搜索结果加载
    await page.waitForSelector('#content_left', { timeout: 10000 });
    
    // 验证搜索结果
    await expect(page.locator('#content_left')).toContainText('Playwright');
    
    // 截图
    await page.screenshot({ 
      path: 'test-results/baidu-search.png',
      fullPage: true 
    });
    
    console.log('✅ 百度搜索功能演示成功');
  });

  test('表单提交演示', async ({ page }) => {
    // 访问表单测试页面
    await page.goto('https://httpbin.org/forms/post');
    
    // 填写表单
    await page.fill('input[name="custname"]', '张三');
    await page.fill('input[name="custtel"]', '13800138000');
    await page.fill('input[name="custemail"]', 'zhangsan@example.com');
    await page.fill('textarea[name="comments"]', '这是一个测试评论');
    
    // 选择选项
    await page.selectOption('select[name="size"]', 'large');
    
    // 勾选复选框
    await page.check('input[value="bacon"]');
    await page.check('input[value="cheese"]');
    
    // 截图 - 表单填写完成
    await page.screenshot({ 
      path: 'test-results/form-filled.png' 
    });
    
    // 提交表单
    await page.click('input[type="submit"]');
    
    // 等待结果页面
    await page.waitForLoadState('networkidle');
    
    // 验证提交成功
    await expect(page.locator('body')).toContainText('zhangsan@example.com');
    
    // 截图 - 提交结果
    await page.screenshot({ 
      path: 'test-results/form-submitted.png',
      fullPage: true 
    });
    
    console.log('✅ 表单提交演示成功');
  });

  test('移动端视口演示', async ({ browser }) => {
    // 创建移动端上下文
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)'
    });
    
    const page = await context.newPage();
    
    // 访问响应式网站
    await page.goto('https://example.com');
    
    // 等待加载
    await page.waitForLoadState('networkidle');
    
    // 移动端截图
    await page.screenshot({ 
      path: 'test-results/mobile-view.png' 
    });
    
    await context.close();
    
    console.log('✅ 移动端视口演示成功');
  });

});