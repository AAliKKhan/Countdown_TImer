// import inquirer from 'inquirer';
// // Function to perform the countdown
// const countdown = (seconds: number) => {
//   const interval = setInterval(() => {
//     console.clear();
//     console.log(`Time left: ${seconds}s`);
//     seconds--;
//     if (seconds < 0) {
//       clearInterval(interval);
//       console.log("Time's up!");
//     }
//   }, 1000);
// };
// // Prompt the user for the countdown time
// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'seconds',
//     message: 'Enter countdown time in seconds:',
//     validate: (input) => {
//       const num = parseInt(input);
//       if (isNaN(num) || num <= 0) {
//         return 'Please enter a positive number';
//       }
//       return true;
//     },
//   },
// ])
// .then(answers => {
//   const seconds = parseInt(answers.seconds);
//   countdown(seconds);
// });
// make a countdown timer
const countdown = (seconds, callback) => {
    let countdown = seconds;
    let timer = setInterval(() => {
        callback(`T-minus ${countdown} seconds!`);
        countdown--;
        if (countdown === 0) {
            clearInterval(timer);
            callback("Blast off!");
        }
    }, 1000);
};
countdown(10, (msg) => {
    console.log(msg);
});
export {};
