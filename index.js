import puppeteer from "puppeteer-core";

async function run(){
    let browser;
    try{
        let auth = 'USERNAME:PASSWORD';

        browser = await puppeteer.connect({
            browserWSEndpoint: 'wss://${auth}@brd.superproxy.io:9222'
        });
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto('https://www.amazon.in/');
        const body = await page.$(body);
        const html = await page.evaluate(()=>
          document.documentElement.outerHTML
        );
        console.log(html);





    }catch(e){
        console.error('failed scrapping',e);

    }finally{
        await browser?.close();
    }

}
run();