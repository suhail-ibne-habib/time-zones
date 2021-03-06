
function findingUTC(dutc, country){
    const date = new Date();
    //local time
    const localTime = date.getTime();
    //local UTC in msec
    const localOffset = date.getTimezoneOffset() * 60000;
    //UTC time in msec
    const utc = localTime + localOffset;
    //destination UTC time
    const dUTC = dutc;
    const dOffset = utc + (dUTC * 3600000);

    const dDate = new Date(dOffset);
    showTime(dDate, country);
}

function showTime(date, country){
    let hour = date.getHours();
    let formattedHour = hour % 12;
    let min = date.getMinutes();
    let indicator = '';

    if(hour >= 12){
        indicator = 'PM';
    }else{
        indicator = 'AM';
    }

    if(formattedHour == 0){
        formattedHour = 12;
    }

    if(formattedHour < 10){
        formattedHour = `0${formattedHour}`;
    }

    if(min < 10){
        min = `0${min}`;
    }

    const dhaka = document.querySelector(country).querySelector('.time-output');
    dhaka.innerHTML = `${formattedHour} : ${min} ${indicator}` ;
}

function showCountryBasedTime(bd, america, uk, canada){
    findingUTC(bd, '.bd');
    findingUTC(america, '.usa');
    findingUTC(uk, '.uk');
    findingUTC(canada, '.canada');

    setInterval( ()=> showCountryBasedTime(bd, america, uk, canada), 60000 );
}

showCountryBasedTime(+6,-4,+1,-4);
