function step1(callback) {
    console.log("Step 1 : Starting....");
    setTimeout(() => {
        console.log("Step 1: Done");
        callback();
    }, 2000);
}

function step2(callback) {
    console.log("Step 2: Starting...");
    setTimeout(() => {
        console.log("Step 2: Done");
        callback();
    }, 1000);
}

function step3(callback) {
    console.log("Step 3: Starting...");
    setTimeout(() => {
        console.log("Step 3: Done");
        callback();
    }, 1000);
}

// CallBack Hell....
step1(() =>{
    step2 (() => {
        step3 ( () => {
            console.log("Completed all of the steps.");
        });
    });
});