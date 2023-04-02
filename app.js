// fetching current date

function dateDisplay (){

const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const dateString = (`${currentMonth}/${currentDayOfMonth}/${currentYear}`)
return dateString;
}


// fetching current time

function timeDisplay (){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const adjustedMinute = currentMinute < 10 ?'0' + currentMinute: '' + currentMinute;
    const timeString = (`${currentHour}:${adjustedMinute}`)
    return timeString;
}
