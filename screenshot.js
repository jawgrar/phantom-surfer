const puppeteer = require("puppeteer");
const fs = require("fs");
const sendEmail = require("./email");
const cron = require("node-cron");

// write function to return cron expression based on the environment variable that has values like x minutes
const cronExpression = () => {
  const minutes = process.env.CRON_MINUTES || 1;
  return `*/${minutes} * * * *`;
};

cron.schedule(cronExpression(), async () => {
  console.log("Running task every minute");

  const browser = await puppeteer.launch({
    headless: true,
    //args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(
    "https://casawe.guichet.ma/match/c8f1fac99dfd6bc292bc68868233f4f0ac2818e8"
  );

  // Set viewport to mimic a typical desktop screen
  await page.setViewport({ width: 1920, height: 1080 });

  // Get current date to use in filename
  const date = new Date();
  const fileName = `${date.getHours()}:${date.getMinutes()}--${date.getDate()}|${
    date.getMonth() + 1
  }.png`;

  // Capture full page screenshot
  // await page.screenshot({ path: `${dateString}.png`, fullPage: true });

  // click the text "click to reveal" in the page. the text in
  const [elem] = await page.$x("//*[contains(., 'Guichet ferm')]");
  // Click on the button
  if (elem) {
    console.info(`${date.toTimeString()}l9adiya ba9a m7ansra`);
  } else {
    // Capture full page screenshot
    await page.screenshot({ path: fileName, fullPage: true });

    await sendEmail(fileName).catch(console.error);

    // delete the file
    fs.unlink(fileName, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
  await browser.close();
});
