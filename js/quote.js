const API_URL = "https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/";
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem('quote')

const nowDate = new Date();
const month  = nowDate.getMonth();
const date = nowDate.getDate();


const setQuote = (result) => {
    let quote = {createDate : `${month}-${date}`, quoteDate: result}
    localStorage.setItem("quote", JSON.stringify(quote))
    quoteElement.textContent = result;
}


const getQuote = async () => {
    try{
        const data = await fetch(API_URL).then((res) => res.json());
        const result = data[1].respond;
        setQuote(result)
    }catch(err){
        console.log(`err${err}`);
        setQuote('신은 인간에게 선물을 줄 때 시련이라는 포장지에 싸서 준다. 선물이 클수록 더 큰 포장지에 싸여있다. -브라이언 트레이시-')
    }
}

if(quoteItem){
    let {createDate, quoteDate} = JSON.parse(quoteItem);
    if(createDate === `${month}-${date}`){
        quoteElement.textContent = `"${quoteDate}"`;
    }
    else{
        getQuote();
    }
}else{
    getQuote();
}