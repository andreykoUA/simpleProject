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

// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
        return console.log("Ошибка, проверьте данные");
    }

    let timeInHours = Math.floor(minutes / 60);
    let timeInMinutes = minutes % 60;
    let strHours = '';

    switch (timeInHours) {
        case 1:
            strHours = 'час';
            break;
        case 2:
            strHours = 'часа';
            break;
        case 3:
            strHours = 'часа';
            break;
        case 4:
            strHours = 'часа';
            break;
        default:
            strHours = 'часов';
    }

    // if (timeInHours === 1) {
    //     strHours = 'chas';
    // } else if (timeInHours === 2 || timeInHours === 3 || timeInHours === 4) {
    //     strHours = 'chasa';
    // } else {
    //     strHours = 'chasov';
    // }

    // for (let i = 1; i <= 91; i += 10) {
    //     if (timeInHours === 11) {
    //         continue;
    //     }
    //     if (timeInHours === i) {
    //         strHours = 'chas';
    //     }
    // }

    return console.log(`Это ${timeInHours} ${strHours} и ${timeInMinutes} минут`);
}
getTimeFromMinutes(65);
getTimeFromMinutes(128);
getTimeFromMinutes(193);
getTimeFromMinutes(283);
getTimeFromMinutes(349);
getTimeFromMinutes(384);
getTimeFromMinutes(444);
getTimeFromMinutes(500);
getTimeFromMinutes(576);
getTimeFromMinutes(600);



// Место для второй задачи
function findMaxNumber() {

}