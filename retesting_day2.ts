// --- FUNCTION DEFINITION (The "What" to do) ---
async function typeWithDelay(locator: string, delayMs: number): Promise<void> {
    
    // Using backticks (`) for correct string interpolation and descriptive logging
    console.log(`[START] Typing into locator: "${locator}". Waiting for ${delayMs}ms.`);

    // This is the actual delay logic, wrapped in an awaitable Promise
    await new Promise(resolve => setTimeout(resolve, delayMs));
    
    console.log(`[FINISH] Action completed for locator: "${locator}".`);
}

// -------------------------------------------------------------------
// --- EXECUTION BLOCK (The "How" to run the async function) ---
// -------------------------------------------------------------------
async function runPractice() {
    console.log("--- Script execution started. ---");
    
    // We MUST use 'await' here to pause execution until the 500ms delay is done.
    await typeWithDelay("input#username", 500);

    // After this line, the second function will start running only when the first is complete
    await typeWithDelay("button#submit", 200);
    
    console.log("--- Script execution finished after waiting for all steps. ---");
}

// 4. Call the execution function
runPractice();