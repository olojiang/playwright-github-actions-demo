import { test, expect } from '@playwright/test';

test.describe('网站访问和截图演示', () => {
  
  test('访问 httpbin.org 并截图', async ({ page }) => {
    // 访问网站
    await page.goto('https://httpbin.org/html');
    
    // 等待页面加载完成
    await page.waitForLoadState('networkidle');
    
    // 截取全屏
    await page.screenshot({ 
      path: 'screenshots/httpbin-fullpage.png',
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
      path: 'screenshots/github-homepage.png' 
    });
    
    console.log('✅ GitHub 访问成功，已截图');
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
      path: 'screenshots/mobile-view.png' 
    });
    
    await context.close();
    
    console.log('✅ 移动端视口演示成功');
  });

});