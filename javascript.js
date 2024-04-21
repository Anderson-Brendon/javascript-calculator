let expression = '';

let input = document.querySelector('input');

let getValuetoInput = (value) => {
    expression += value
    input.value = expression;
}

let calculateExpression = () => {
    if (expression != '') {
        expression = eval(expression);
        if(!isFinite(expression) || isNaN(expression)){
            cleanData();
        }
        else{
           input.value = expression
        }
    }
}

let cleanData = () => {
    expression = '';
    input.value = '';
}