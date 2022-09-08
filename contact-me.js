const getInputByIdSetValueToLocal = (title , id) => {
   const inputField = document.getElementById(id);
   const inputValue = inputField.value;
   inputField.value = '';
   localStorage.setItem(title, inputValue);
}

const displayValue = (keyName, id) => {
   const list = document.getElementById('list');
   const li = document.createElement('li');

   const inputField = document.getElementById(id);
   const inputValue = inputField.value;

   li.innerText = `${keyName} : ${inputValue}`;
   list.appendChild(li);
}

document.getElementById('add-name').addEventListener('click', function(){
   displayValue('Name', 'name');
   getInputByIdSetValueToLocal('Name', 'name');
})

document.getElementById('remove-name').addEventListener('click', function(){
   localStorage.removeItem('Name');
})

document.getElementById('add-email').addEventListener('click', function(){
   displayValue('Email', 'email');
   getInputByIdSetValueToLocal('Email', 'email');
})

document.getElementById('remove-email').addEventListener('click', function(){
   localStorage.removeItem('Email');
})


document.getElementById('add-message').addEventListener('click', function(){
   displayValue('Message', 'message');
   getInputByIdSetValueToLocal('Message', 'message');
})

document.getElementById('remove-message').addEventListener('click', function(){
   localStorage.removeItem('Message');
})

document.getElementById('reset-all').addEventListener('click', function(){
   localStorage.clear();
})