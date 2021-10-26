import operate from './operate';

const calculate = (calcData, btnName) => {
    const { total, next, operation } = calcData;

    switch (btnName) {
        case '+/-':
            return {
                total: total * -1,
                next: next * -1,
                operation,
            };
        case 'AC':
            return {
                total: 0,
                next: 0,
                operation,
            };
        case '.':
            return {
                total: `${total}.`,
                operation,
            };
        case '=':
            if (operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        case '+':
            if (next && operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        case '-':
            if (next && operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        case 'X':
            if (next && operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        case '÷':
            if (next && operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        case '%':
            if (next && operation) {
                return {
                    total: operate(total, next, operation),
                    next: null,
                    operation: null
                };
            }
            return {
                total,
                next: null,
                operation: null
            };

        default:
            if (operation) {
                return {
                    total, next:
                        next ? next + btnName : btnName, operation
                };
            }
            return {
                total: total ? total + btnName : btnName,
                next,
                operation
            };
    }
};

export default calculate;