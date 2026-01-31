
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
    // Determine artifacts dir from arg or default
    const artifactsDir = process.argv[2] || '.';

    console.log(`Starting mobile verification...`);
    try {
        const browser = await chromium.launch({ headless: true });
        // iPhone X viewport
        const context = await browser.newContext({
            viewport: { width: 375, height: 812 },
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            isMobile: true
        });
        const page = await context.newPage();

        console.log('Navigating to http://localhost:8000');
        await page.goto('http://localhost:8000');
        await page.waitForTimeout(1000); // Wait for load

        // 1. Check Obi Section (Best Man)
        console.log('Checking Obi section...');
        const bestman = await page.$('#bestman');
        if (bestman) {
            await bestman.scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000); // Animations
            await page.screenshot({ path: path.join(artifactsDir, 'verify_mobile_obi.png') });
            console.log('Saved verify_mobile_obi.png');
        } else {
            console.error('#bestman section not found!');
        }

        // 2. Check Timeline Section (Details)
        console.log('Checking Details section...');
        const details = await page.$('#details');
        if (details) {
            await details.scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000);
            await page.screenshot({ path: path.join(artifactsDir, 'verify_mobile_timeline.png') });
            console.log('Saved verify_mobile_timeline.png');
        }

        await browser.close();
        console.log('Mobile verification complete.');
    } catch (e) {
        console.error('Mobile verification failed:', e);
        process.exit(1);
    }
})();
