const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("VideSpan HomePage Tests", () => {
  let driver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("http://localhost:3000");
  }, 15000);

  afterAll(async () => {
    await driver.quit();
  });
  test("Should Check UI Rendered Correctly", async () => {
    // Get the Page title
    const title = await driver.getTitle();
    expect(title).toBe("VideSpan Test");

    // Check the Heading
    const heading = await driver.findElement(By.css("h1")).getText();
    expect(heading).toBe("Example Heading");

    //end
  }, 10000);

  test("Should Check if Link Texts are Present in H2", async () => {
    // Extract all <h2> elements text
    const subheadingElements = await driver.findElements(By.css("h2"));
    const subheadingTexts = await Promise.all(
      subheadingElements.map(async (element) => await element.getText())
    );

    // Extract link texts from #list-of-content
    const listItems = await driver.findElements(By.css("#list-of-content li"));
    const linkTexts = await Promise.all(
      listItems.map(async (item) => {
        const linkElement = await item.findElement(By.css("a"));
        return await linkElement.getText();
      })
    );

    // Ensure all navigation link texts exist in the H2 elements
    linkTexts.forEach((linkText) => {
      expect(subheadingTexts).toContain(linkText);
    });
  }, 10000);

  test("Should Navigate to Upload Page", async () => {
    // Find the navigation link using href
    const uploadLink = await driver.findElement(
      By.css('nav a[href="/upload"]')
    );

    await uploadLink.click();
    await driver.wait(until.urlContains("/upload"), 5000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe("http://localhost:3000/upload");
  }, 10000);
});
