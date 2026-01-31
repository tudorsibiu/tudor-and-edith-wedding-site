
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
    // Determine artifacts dir from arg or default
    const artifactsDir = process.argv[2] || '.';

    console.log(`Starting verification...`);
    const browser = await chromium.launch({ headless: true }); // Run headless for speed/stability
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        console.log('Navigating to http://localhost:8000');
        await page.goto('http://localhost:8000');

        // 1. Hero Section
        console.log('Checking Hero section...');
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(artifactsDir, 'verify_hero.png'), fullPage: false });
        console.log('Saved verify_hero.png');

        // 2. Scroll to middle of page for body background
        console.log('Checking Programul zilei section...');
        const details = await page.$('#details');
        if (details) {
            await details.evaluate(el => el.scrollIntoView());
            await page.waitForTimeout(500); // Wait for animations
            await page.screenshot({ path: path.join(artifactsDir, 'verify_program.png') });
            console.log('Saved verify_program.png');
        } else {
            console.error('Programul zilei section not found!');
        }

        console.log('Checking for deleted sections...');
        const menu = await page.$('#menu');
        const dresscode = await page.$('#dresscode');
        const gallery = await page.$('#gallery');
        const accommodation = await page.$('#accommodation');
        if (menu) console.error('ERROR: Menu section still exists!');
        if (dresscode) console.error('ERROR: Dress Code section still exists!');
        if (gallery) console.error('ERROR: Gallery section still exists!');
        if (accommodation) console.error('ERROR: Accommodation section still exists!');

        console.log('Checking body background...');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(artifactsDir, 'verify_body_bg.png'), fullPage: false });
        console.log('Saved verify_body_bg.png');

        console.log('Verification complete.');
    } catch (e) {
        console.error('Verification failed:', e);
    } finally {
        await browser.close();
    }
})();
