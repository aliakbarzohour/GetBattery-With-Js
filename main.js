// Variable's
const BatteryLevel = document.querySelector('button'),
    Container = document.querySelector(".container");

BatteryLevel.addEventListener('click', () => {
    // Get Battery With Navigator
    navigator.getBattery().then((battery) => {
        // Battery Level
        let batteryLevel = battery.level * 100 + "%";
        // console.log("Your Battery Level Is ", batteryLevel);
        // And Show Battery Level On Html Preview
        Container.innerHTML = `<h2 class="batteryLevel">${batteryLevel}</h2>`;
    });
});