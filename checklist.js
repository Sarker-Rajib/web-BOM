// setTimeout(() => {
//     console.log('its just 3.5sec over');
// }, 3500);

const prom = () => {
    const number = prompt('give a number');
    const addedNumber = parseFloat(number) + 1; 1
    alert(addedNumber);
}

const confirmation = () => {
    const response = confirm('Do you want to see the location');
    if (response === true) {
        alert('this page location is ' + window.location.href);
    }
    else {
        alert('thanks')
    }
}

const getValueById = (id) => {
    const intialNumberElement = document.getElementById(id);
    const initialNumberString = intialNumberElement.innerText;
    const initialNumber = parseFloat(initialNumberString);
    return initialNumber;
}

const setValue = (id, value) => {
    const intialNumberElement = document.getElementById(id);
    const newNumber = intialNumberElement.innerText = value + 1;
    localStorage.setItem('Current-number', newNumber);
}

document.getElementById('increase-button').addEventListener('click', function () {
    const number = getValueById('count-number');
    setValue('count-number', number)
})

const setValueFromLocalStorage = (id) => {
    const localnumber = localStorage.getItem('Current-number');
    const intialNumberElement = document.getElementById(id);

    // console.log(isNaN(localnumber) ===);
    if(localnumber !== null) {
        intialNumberElement.innerText = localnumber;
    }
    else{
        intialNumberElement.innerText = 0;
    }
}

setValueFromLocalStorage('count-number');

