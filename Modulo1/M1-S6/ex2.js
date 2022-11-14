function displayTime(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time)
}


setInterval(displayTime, 2000);
