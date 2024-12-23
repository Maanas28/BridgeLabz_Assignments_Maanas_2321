function step1() {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Starting...");
        setTimeout(() => {
            console.log("Step 1: Done");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        console.log("Step 2: Starting...");
        setTimeout(() => {
            console.log("Step 2: Done");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        console.log("Step 3: Starting...");
        setTimeout(() => {
            console.log("Step 3: Done");
            resolve();
        }, 1000);
    });
}

async function excuteSteps(){
    console.log("Executing the steps....");
    await step1();
    await step2();
    await step3();
    console.log("Completed all the steps.");
}

excuteSteps();