import { test, expect } from '@playwright/test';

test('visual', async ({ page }) => {
    await page.goto("https://reloj-alarma.es/hora/");
    expect(await page.screenshot()).toMatchSnapshot('visual.png');
    
});
