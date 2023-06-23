const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNumber = (number) =>{
    return parseInt(number) < 10 ? "0"+number: number
}


const getNoWDate = () =>{
    const nowDate = new Date();
    const week = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day])
}

const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`
}

const getNowTime = () =>{
    const nowDate = new Date();
    const hour = modifyNumber(nowDate.getHours());
    const minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute)
}

const setNowTime = (hour, minute) =>{
    timeElement.textContent = `${hour} : ${minute}`
}

getNowTime();
getNoWDate();
setInterval(getNowTime, 1000)