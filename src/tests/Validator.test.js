import CardValidator from "../js/Validator";

describe("CardValidator", () => {
  describe("luhnCheck", () => {
    it("should return true for valid card numbers", () => {
      expect(CardValidator.luhnCheck("4532015112830366")).toBe(true);
      expect(CardValidator.luhnCheck("6011514433546201")).toBe(true);
      expect(CardValidator.luhnCheck("6771549495586802")).toBe(true);
    });

    it("should return false for invalid card numbers", () => {
      expect(CardValidator.luhnCheck("1234567890123456")).toBe(false);
      expect(CardValidator.luhnCheck("1111111111111111")).toBe(false);
    });
  });

  describe("isValidCard", () => {
    it("should return true for valid card numbers", () => {
      expect(CardValidator.isValidCard("4532015112830366")).toBe(true);
      expect(CardValidator.isValidCard("6011514433546201")).toBe(true);
      expect(CardValidator.isValidCard("6771549495586802")).toBe(true);
    });

    it("should return false for invalid card numbers", () => {
      expect(CardValidator.isValidCard("1234567890123456")).toBe(false);
      expect(CardValidator.isValidCard("1111111111111111")).toBe(false);
    });

    it("should return false for non-numeric input", () => {
      expect(CardValidator.isValidCard("abcd")).toBe(false);
      expect(CardValidator.isValidCard("4532a511b830c366")).toBe(false);
    });
  });
});
