class CardValidator {
  static luhnCheck(cardNumber) {
    let len = cardNumber.length;
    let parity = len % 2;
    let sum = 0;

    for (let i = len - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);

      if (i % 2 == parity) {
        digit *= 2;
      }

      if (digit > 9) {
        digit -= 9;
      }

      sum += digit;
    }

    return sum % 10 == 0;
  }

  static isValidCard(cardNumber) {
    if (/^\d+$/.test(cardNumber)) {
      return CardValidator.luhnCheck(cardNumber);
    }
    return false;
  }
}

export default CardValidator;
