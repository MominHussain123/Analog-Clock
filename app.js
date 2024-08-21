


let seconds = document.querySelector('#seconds');
let minuts = document.querySelector('#minuts');
let hours = document.querySelector('#hours');


let s;
let m;
let h;

const settime = () => {
    let Time = new Date();
    s = Time.getSeconds();
    m = Time.getMinutes();
    h = Time.getHours();
};

const sethands = () => {
    if (h > 12) {
        h = h - 12;
    }

    let sRotation = 6 * s;
    let mRotation = 6 * m;
    let hRotation = h * 30 + m * 0.5;


    seconds.style.transform = `rotate(${sRotation}deg)`;
    minuts.style.transform = `rotate(${mRotation}deg)`;
    hours.style.transform = `rotate(${hRotation}deg)`;

};
setInterval(() => {
    sethands();
    settime();
}, 1000);