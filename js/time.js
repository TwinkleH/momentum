const clock = document.querySelector(".js-clock"); //const는 변수를 생성할 때 붙이는 것. 이와 반대되는 것은 let. queryselecter는 안에 있는 객체를 이용해 html문서를 가져오는 것

function setClock(hour, minute, second){
    clock.innerHtml = `${hour}: ${minute}: ${second}`;
}

function formatNumber(num){
    if (num < 10) return `0${num}`;
    return `${num}`;
}

function handleInterval(){
    const date= new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const fmHour = formatNumber(hour);
    const fmMinute = formatNumber(minute);
    const fmSecond = formatNumber(second);

    setClock(fmHour,fmMinute,fmSecond);


 //     console.log(`hour: ${hour}, minute: ${minute}`); ``는 물결을 shift 안누른 키. 백팁은 문자열을 합쳐주는구나,
 //     시간이 0-9일때는 한자리 수 만 나온다. -> 이런 역할을 하는 함수는 format
 //     css에서 사용하는 class가 자바스크립트에서 사용하는 class가 겹치게 되면 사용하기 어려워짐
}

function init() {
    handleInterval();
    setInterval (handleInterval, 1000);
}

init();
