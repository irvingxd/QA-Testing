import { run } from "node:test";

async function typeWithDelay(locator: string, delayMs: number): Promise<void> {
    console.log(`Waiting for ${delayMs}ms before typing into ${locator}`);

    await new Promise(resolve => setTimeout(resolve, delayMs));
    console.log(`Finished waiting action ${locator}`);
}
async function runPractice() { 
    console.log("Script started.");
    await typeWithDelay("Hello World", 500);
}
runPractice();
