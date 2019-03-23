export default {
    calculate : function (num1, num2, operation) {
        var total;
        switch (operation) {
            case '+' : 
                total = (+num1) + (+num2);
                return total;
            case '-': 
                total = (+num1) - (+num2);
                return total;
            case 'x': 
                total = (+num1) * (+num2);
                return total;
            case '/': 
                total =  (+num1) / (+num2);
                return total;
        }
    }
}