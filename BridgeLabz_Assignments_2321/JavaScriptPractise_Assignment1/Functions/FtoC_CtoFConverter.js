let choice = Number.parseInt(prompt("Enter 1 for degC to degF or 2 for degF to degC: "));

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter the temprature in °C: "));
        if (degC >= 0 && degC <= 100) {
            let degF = (degC * 9 / 5) + 32;
            console.log(`${degC}°C is equal to ${degF}°F`);
        } else {
            console.log("Temperature must be within the range 0°C to 100°C.");
        }
        break;

    case 2:
        let degF = parseFloat(prompt("Enter temperature in °F: "));
        if (degF >= 32 && degF <= 212) {
            let degC = (degF - 32) * 5 / 9;
            console.log(`${degF}°F is equal to ${degC}°C`);
        } else {
            console.log("Temperature must be within the range 32°F to 212°F.");
        }
        break;

    default:
        console.log("Invalid choice. Please select 1 or 2.");

}