"use strict"

// Место для первой задачи
function calculateVolumeAndArea(cubeSide) {

    if (cubeSide < 0 || typeof cubeSide != 'number' || !Number.isInteger(cubeSide)) {
        return "При вычислении произошла ошибка";

    }

    let cubeArea = 6 * Math.pow(cubeSide, 2);
    let cubeVolume = Math.pow(cubeSide, 3);
    return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

calculateVolumeAndArea(15.5);

// Место для второй задачи
function getCoupeNumber(numb) {
    if (numb < 0 || typeof numb !== 'number' || !Number.isInteger(numb)) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    if (numb === 0 || numb > 36) {
        return console.log("Таких мест в вагоне не существует");
    }

    for (let i = 1; i <= 36; i++) {
        if (i === numb) {
            return console.log(Math.ceil(numb / 4));
        }
    }

}
getCoupeNumber(37);
getCoupeNumber(7);
getCoupeNumber(300);
getCoupeNumber(0);
getCoupeNumber(7.7);
getCoupeNumber(-10);
getCoupeNumber('Hello');