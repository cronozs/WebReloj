setInterval(function Timer() {
    day = new Date();
    hour = day.getHours();
    minutes = day.getMinutes();
    seconds = day.getSeconds();
    if (hour < 10) {
        hour = (`0${hour}`);
    }
    if (minutes < 10) {
        minutes = (`0${minutes}`);
    }
    if (seconds < 10) {
        seconds = (`0${seconds}`);
    }
    if (hour < 13) {
        console.log(`La hora es ${hour}:${minutes}:${seconds} am`)
    }
    else {
        hour -= 12;
        console.log(`La hora es ${hour}:${minutes}:${seconds} pm`)
    }
}, 1000);