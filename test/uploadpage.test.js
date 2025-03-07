const path = require("path");
const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("VideSpan Upload Page Tests", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("http://localhost:3000/upload");
  }, 15000);

  afterAll(async () => {
    await driver.quit();
  });

  test("Should not allow submit before upload", async () => {
    const submitButton = await driver.findElement(
      By.css("button[type='submit']")
    );
    await submitButton.click();

    const errorAlertElement = await driver.wait(
      until.elementLocated(By.id("errorMsg")),
      2000
    );

    await driver.wait(until.elementIsVisible(errorAlertElement), 2000);

    expect(await errorAlertElement.getText()).toBe(
      "Please upload a CSV file before submitting."
    );
  });

  test("Should Upload CSV File and Get Feedback", async () => {
    await driver.manage().setTimeouts({ implicit: 1000 });
    const testCsvFile = path.resolve("./test/testdata.csv");
    await driver.manage().setTimeouts({ implicit: 1000 });

    await driver
      .findElement(By.css("input[type='file']"))
      .sendKeys(testCsvFile);
    await driver.findElement(By.css("button[type='submit']")).click();

    const successAlertElement = await driver.wait(
      until.elementLocated(By.id("successMsg")),
      3000
    );

    await driver.wait(until.elementIsVisible(successAlertElement), 1000);
    expect(await successAlertElement.getText()).toBe(
      "testdata.csv got successfully!"
    );
  });

  test("Should Show Appropriate Headings and Update on Button Click", async () => {
    // Wait for the initial heading to appear
    const heading = await driver.findElement(By.css("h1"));
    await driver.wait(until.elementIsVisible(heading), 2000);
    expect(await heading.getText()).toBe("Upload Your CSV here");

    // Click the button
    const toggleButton = await driver.findElement(By.id("button-toggle-tabs"));
    await toggleButton.click();

    // Wait for new heading text
    await driver.wait(until.elementLocated(By.css("h1")), 2000);
    const newHeading = await driver.findElement(By.css("h1"));

    // Verify new text
    expect(await newHeading.getText()).toBe("Uploaded CSV Files");
  });

  test("Should Fetch and Show the CSV File Details", async () => {
    // await driver.manage().setTimeouts({ implicit: 1000 });
    // const toggleButton = await driver.findElement(By.id("button-toggle-tabs"));
    // await toggleButton.click();
    await driver.manage().setTimeouts({ implicit: 4000 });

    const sampleFilesRecords = [
      { name: "file1.csv", size: 1024 },
      { name: "testdata1.csv", size: 2048 },
      { name: "info.csv", size: 512 },
    ];

    for (let i = 0; i < sampleFilesRecords.length; i++) {
      const currRow = await driver.findElement(By.id(`table-row-${i}`));
      const rowText = await currRow.getText();

      console.log(rowText);

      expect(rowText).toContain(sampleFilesRecords[i].name);
      expect(rowText).toContain(sampleFilesRecords[i].size.toString());
    }
  });
});
