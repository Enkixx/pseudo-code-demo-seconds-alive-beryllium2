let birthYear = parseFloat(prompt("What year were you born?"));
let birthMonth = parseFloat(prompt("What number month were you born?"));
let birthDay = parseFloat(prompt("What day were you born?"));

let currentDate = new Date();

let birthDate = new Date(
    birthYear,
    birthMonth,
    birthDay
);

let seconds = (currentDate.valueOf() - birthDate.valueOf()) / 1000;
let secondsClean = Math.floor(seconds)

if (isNaN(secondsClean)) {
    alert("Please refresh and enter numbers for the date info requested");
    document.write(`<h2 style="color:red;">Please Refresh</h2>`)
} else {
    
    document.write(
        `<h2 style="color:blue;">Your life in seconds is<br>`
        + secondsClean
        + ` seconds<br><em>...and may you have many more!</em></h2>`
    )
}