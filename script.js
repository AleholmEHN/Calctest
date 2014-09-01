var textField = document.getElementById('textField');

var submit = document.getElementById('submitButton');

submit.addEventListener('click', buttonClicked, false);

function buttonClicked(e)
{
    e.preventDefault();   
    x = textField.value;
    x = eval(x);
    textField.value = x;
}

function addToField(n) 
{
    textField.value += n;
}

function power(y)
{
    x = textField.value;
    x = Math.pow(x,y);
    textField.value = x;
}

function powten()
{
    x = textField.value;
    x = Math.pow(10, x);
    textField.value = x;
}


