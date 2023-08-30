module.exports = function toReadable (number) {
    
    const digits = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    const tens = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    const arrayOfDigits = Array.from(String(number), Number);
    
    switch (arrayOfDigits.length) {
        case 1:
            return digits.at(number);
        case 2:
            return getTwoDigitNumber(arrayOfDigits);
        case 3:
            return getThreeDigitNumber(arrayOfDigits);
        default:
            return 'Не число!';
    }

    function getTwoDigitNumber(n) {  // Параметр - массив цифр
        const firstDigit = n.at(-1);
        const secondDigit = n.at(0);
        const int = Number(n.join(''));

        if (firstDigit === 0 && secondDigit === 0) {
            return '';
        } else if (secondDigit === 0 || secondDigit === 1) {
            return digits.at(int)
        } else if (firstDigit === 0) {
            return tens[int]
        } else {
            return `${tens[secondDigit * 10]} ${digits.at(firstDigit)}`
        }
    }

    function getThreeDigitNumber(n) {
        const thirdDigit = n.at(0);
        const secondDigit = n.at(1);
        const firstDigit = n.at(-1);

        if (secondDigit === 0 && firstDigit === 0) {
            return `${digits.at(thirdDigit)} hundred`
        } else {
            return `${digits.at(thirdDigit)} hundred ${getTwoDigitNumber([secondDigit, firstDigit])}`
        }
    }
}
