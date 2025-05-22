// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock');

// setInterval(function () {
//     let date = new Date();
//     console.log(date.toLocaleTimeString());
//     clock.textContent = date.toLocaleTimeString();
// }, 1000);


function updateClock(){
    const clock = document.querySelector('#clock');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Add leading zeroes
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timestring = `${hours}:${minutes}:${seconds}`;
    console.log(timestring);
    clock.textContent = timestring;

}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);


