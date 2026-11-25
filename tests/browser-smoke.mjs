import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:8765/');await page.waitForFunction(()=>document.querySelectorAll('#steps button').length===11);
 assert.equal(await page.locator('[data-gw-task]').count(),8);
 await page.locator('#gwConnectionToggle').click();await page.locator('#adapter').selectOption('pro-pwm');assert.equal(await page.locator('#owiBoard').inputValue(),'PRO-MICRO');await page.locator('#adapter').selectOption('offline');await page.locator('#connectionClose').click();
 await page.locator('[data-gw-task="calibration"]').click();await page.locator('#next').click();await page.locator('#next').click();await page.locator('#next').click();
 await page.locator('#example').click();await page.locator('#next').click();await page.locator('#next').click();await page.locator('#exampleCheck').click();
 assert.match(await page.locator('#verifyStats').textContent(),/5 Punkte/);assert.equal(await page.locator('#verifyGraph circle').count(),5);
 await page.locator('#next').click();await page.locator('#next').click();await page.locator('#next').click();await page.locator('#next').click();assert.match(await page.locator('#summary').textContent(),/Keine Hardwarefreigabe/);
 assert.deepEqual(errors,[]);console.log('Browser smoke passed');
}finally{await browser.close()}
