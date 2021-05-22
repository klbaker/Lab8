# Lab 8: Katherine Baker

## Check your understanding q's
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

In my project development, we use 1 (whenever we push changes to the pipeline).

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because unit testing is used to test individual parts of the project, but the messaging functionality is the primary
part of this project and likely includes multiple parts.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, this would be an individual part of the project because it is a small feature of the whole app.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

It will attempt to run tests without using a browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

>beforeAll(async () => {
>    await page.goto('http://127.0.0.1:5500');
>    await page.waitForTimeout(500);
>    await page.click('img');
>  });