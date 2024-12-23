function step1() {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Starting...");
        setTimeout(() => {
            console.log("Step 1: Done");
            resolve();
            // reject("Step 1 failed!");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        console.log("Step 2: Starting...");
        setTimeout(() => {
            console.log("Step 2: Done");
            resolve();
            // reject("Step 2 failed!"); 
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        console.log("Step 3: Starting...");
        setTimeout(() => {
            let isSuccess = false;
            if (isSuccess) {
                resolve("Step 3: Done");
            } else {
                reject("Step 3 failed!");
            }
        }, 1000);
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(() => console.log("All steps completed!"))
    .catch((error) => console.error("Error:", error));
