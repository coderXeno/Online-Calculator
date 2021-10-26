import Big, { RoundingMode } from "big.js";

const operate=(number1,number2,operation)=>{
    const num1=Big(number1);
    const num2=Big(number2);

    switch(operation){
        case '+':
            return num1.plus(num2).toString();

        case '-':
            return num1.minus(num2).toString();

        case 'X':
            return num1.mul(num2).toString();

        case '/':
            if(num2.eq(0)){
                return "Imagine trying to divide by 0!"
            }
            return num1.div(num2).toString();

        case '%':
            return num1/RoundingMode(num2).toString();

        default:
            return 0;
    }
};

export default operate;