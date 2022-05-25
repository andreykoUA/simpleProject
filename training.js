const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'User'];

function sortStudentsByGroups(arr) {
    let a = [],
        b = [],
        c = [];
    let str = 'Remaining: ';

    arr.sort().forEach((element, i) => {
        if (i < 3) {
            a.push(element);
        } else if (i < 6) {
            b.push(element);
        } else if (i < 9) {
            c.push(element);
        } else if (i >= 9) {
            if (i === (arr.length - 1)) {
                str += `${element}`;
            } else {
                str += `${element}, `;
            }
        }
    });
    if (arr.length === 9) {
        str += '-';
    }

    console.log([a, b, c, str]);
}

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let a = [],
//         b = [],
//         c = [],
//         left = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             left.push(arr[i]);
//         }
//     }

//     return console.log([a, b, c, `Remaining students: ${left.length === 0 ? '-' : left.join(', ')}`]);
// }
sortStudentsByGroups(students);