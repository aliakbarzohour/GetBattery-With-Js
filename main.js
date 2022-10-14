const BatteryLevel = document.querySelector('button'),
    Container = document.querySelector(".container");

BatteryLevel.addEventListener('click', () => {
    navigator.getBattery().then((battery) => {
        let batteryLevel = battery.level * 100 + "%";
        console.log("Your Battery Level Is ", batteryLevel);
        Container.innerHTML = `<h2 class="batteryLevel">${batteryLevel}</h2>`;
    });
});