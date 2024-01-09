// Questions: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/


const p2 = (num = 5) => {
    for (let index = 0; index < num; index++) {
        let str = ''
        for (let j = 0; j < index + 1; j++) {
            str += '*';
        }
        console.log(str);
    }
}

const p3 = (num = 5) => {
    for (let index = 0; index < num; index++) {
        let str = ''
        for (let j = 0; j < index + 1; j++) {
            str += (j + 1).toString();
        }
        console.log(str);
    }
}

const p4 = (num = 5) => {
    for (let index = 0; index < num; index++) {
        let str = ''
        for (let j = 0; j < index + 1; j++) {
            str += (index + 1).toString();
        }
        console.log(str);
    }
}

const p5 = (num = 5) => {
    for (let index = num; index > 0; index--) {
        let str = ''
        for (let j = index; j > 0; j--) {
            str += '*';
        }
        console.log(str);
    }
}

const p6 = (num = 5) => {
    console.log('p6');
    for (let index = num; index > 0; index--) {
        let str = ''
        for (let j = 1; j <= index; j++) {
            str += j;
        }
        console.log(str);
    }
}

const p7 = (num = 5) => {
    console.log('p7');
    for (let i = 1; i <= num; i++) {
        let str1 = '';
        for (let j = 0; j < num - i; j++) {
            str1 += ' ';
        }
        let str2 = '*'.repeat(2 * i - 1);

        console.log(str1 + str2);
    }
}

const p8 = (num = 5) => {
    console.log('p8');
    for (let i = 1; i <= num; i++) {
        let str = ' '.repeat(i - 1) + '*'.repeat(2 * num - (2 * i - 1));
        console.log(str);
    }
}

const p9 = (num = 5) => {
    console.log('p9');
    for (let i = 1; i <= num; i++) {
        let str = ' '.repeat(num - i) + '*'.repeat(2 * i - 1);
        console.log(str);
    }
    for (let i = 1; i <= num; i++) {
        let str = ' '.repeat(i - 1) + '*'.repeat(2 * num - (2 * i - 1));
        console.log(str);
    }
}

const p10 = (num = 5) => {
    console.log('p10');
    for (let i = 0; i < num; i++) {
        let str = '*'.repeat(i + 1);
        console.log(str);
    }
    for (let i = num - 1; i > 0; i--) {
        let str = '*'.repeat(i);
        console.log(str);
    }
}
const p11 = (num = 5) => {
    console.log('p11');
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str = str + ((j + i) % 2);
        }
        console.log(str);
    }
}

const p12 = (num = 4) => {
    console.log('p12')
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str = str + j;
        }
        str = str + ' '.repeat((num - i) * 2);
        for (let j = i; j > 0; j--) {
            str = str + j;
        }

        console.log(str);
    }
}

const p13 = (num = 5) => {
    console.log('p13');
    let count = 1;
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str = str + ' ' + (count);
            count++;
        }
        console.log(str);

    }
}

const p14 = (num = 5) => {
    console.log('p14');
    for (i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str = str + String.fromCharCode(65 + j);
        }
        console.log(str);
    }
}
const p15 = (num = 5) => {
    console.log('p15');
    for (i = num; i >= 0; i--) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str = str + String.fromCharCode(65 + j);
        }
        console.log(str);
    }
}
const p16 = (num = 5) => {
    console.log('p16');
    for (i = 0; i < num; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str = str + String.fromCharCode(65 + i);
        }
        console.log(str);
    }
}
const p17 = (num = 4) => {
    console.log('p17');
    for (i = 1; i <= num; i++) {
        let str = '';
        let count = 65;
        str = str + ' '.repeat(num - i);
        for (let j = 0; j < i; j++) {
            str = str + String.fromCharCode(count);
            count++;
        }
        for (let j = 1; j < i; j++) {
            str = str + String.fromCharCode(count - j - 1);
        }
        str = str + ' '.repeat(num - i);
        console.log(str);
    }
}

const p21 = (num = 4) => {
    console.log('p21');
    for (let i = 0; i < num; i++) {
        let str = '';
        for (let j = 0; j < num; j++) {
            if (i == 0 || j == 0 || i == num - 1 || j == num - 1) {
                str += '*';
                continue;
            }
            str += ' ';
        }
        console.log(str);
    }
}

const p22 = (num = 4) => {
    console.log('p22');
    let count = 1;
    for (let i = 1; i <= num * 2 - 1; i++) {
        let str = '';
        for (let j = 1; j <= num * 2 - 1; j++) {
            let top = i;
            let bottom = 2 * num - i;
            let left = j;
            let right = 2 * num - j;

            str += (num - Math.min(Math.min(left, right), Math.min(top, bottom)) + 1);
        }
        console.log(str);
    }
}



// p2();
// p3();
// p4();
// p5();
// p6();
// p7();
// p8();
// p9();
// p10();
// p11();
// p12();
// p13();
// p14();
// p15();
// p16();
// p17();
// p21();
p22();