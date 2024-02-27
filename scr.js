function convertMinutesToTimeString(minutes) {
    let maxMinutes = 100 * 60; 
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    let result = "";
    if (isNaN(minutes)) {
        return "Будь ласка, введіть числове значення.";
    }
    if (minutes < 0) {
        return "Введіть додатне число.";
    }
    if (minutes > maxMinutes) {
        return "Введіть значення менше, ніж " + maxMinutes + " хвилин.";
    }
    if (hours > 0) {
        result += hours + " годин ";
    }
    if (remainingMinutes > 0) {
        result += remainingMinutes + " хвилин";
    }
    return result.trim();
}
const userInput = prompt("Введіть кількість хвилин:");
const minutes = parseInt(userInput);
const result = convertMinutesToTimeString(minutes);
alert(result);