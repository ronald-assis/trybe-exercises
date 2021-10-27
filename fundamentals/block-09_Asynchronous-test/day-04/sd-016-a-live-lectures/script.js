const fetchCurrency = (currency) => {
    fetch(`https://api.exchangerate.host/latest?base=${currency}`)
    .then((response)=> response.json())
    .then((data)=> {
        renderBaseCurrency(data.base);
        renderRates(data.rates)
    })
}

// fetchCurrency();

const renderRates = (ratesObject) => {
    const ratesList = document.querySelector('#currency-list');
    clearList(ratesList);
    // for(const currency in ratesObject){
    //     const rateItem = document.createElement('li');
    //     rateItem.innerText = `${currency}: ${ratesObject[currency].toFixed(2)}`;
    //     ratesList.appendChild(rateItem);
    // }
    const ratesEntries = Object.entries(ratesObject)
    ratesEntries.forEach((entry)=>{
        const currency = entry[0]
        const rates = entry[1]
        const rateItem = document.createElement('li');
        rateItem.innerHTML = `<b>${currency}:</b> ${rates.toFixed(2)}`;
        ratesList.appendChild(rateItem);
    })
}

const renderBaseCurrency = (base) => {
    const titleBase = document.querySelector('#base');
    // const baseInput = document.querySelector('#currency-input');
    titleBase.innerHTML = `Valores referente a 1 ${base}`
}

const setupEventHandlers = () => {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', handleCurrecyValue);
}

const handleCurrecyValue = () => {
    const currencyInput = document.querySelector('#currency-input');
    fetchCurrency(currencyInput.value);
}

const clearList = (list) => {
    list.innerHTML = '';
}

window.onload = () => {
    setupEventHandlers();
}


// const rates = {
//     "AED": 4.279261,
//     "AFN": 104.246359,
//     "ALL": 121.542845,
//     "AMD": 555.231163,
//     "ANG": 2.095138
// }
// const testEntries = Object.entries(rates);

// testEntries.forEach((entrie)=>{
//     const currency = entrie[0]
//     console.log(currency);
//     const rates = entrie[1]
//     console.log(rates);
    
// })
// for(const currency in rates){
//     // console.log(currency);
//     console.log(currency, rates[currency]); //rates.AFN
// }