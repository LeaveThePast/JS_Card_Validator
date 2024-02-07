import CardValidator from "./Validator";

document.addEventListener("DOMContentLoaded", function () {
  const cardNumberElement = document.getElementById("cardNumber");
  const cardTypeListElement = document.querySelector(".cardTypeList");
  const cardFormElement = document.querySelector(".cardForm");
  const validationResultElement = document.getElementById("validationResult");
  const validationResultTextElement = validationResultElement.querySelector(
    ".validationResultText"
  );
  const closevalidationResultElement = validationResultElement.querySelector(
    ".closeValidationResult"
  );

  function getCardType(cardNumber) {
    if (/^4/.test(cardNumber)) {
      return "visa";
    } else if (/^5[1-5]|^2[2-7][1-2][1-2]/.test(cardNumber)) {
      return "masterCard";
    } else if (/^3[47]/.test(cardNumber)) {
      return "americanExpress";
    }
  }

  cardNumberElement.addEventListener("input", function () {
    const cardType = getCardType(this.value);
    const cardTypeElement = cardTypeListElement.querySelector(`.${cardType}`);
    document
      .querySelectorAll(".cardTypeListElement")
      .forEach((element) => element.classList.remove("cardTypeSelect"));
    cardTypeElement.classList.add("cardTypeSelect");
  });

  cardFormElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value;
    if (cardNumber === "") {
      validationResultTextElement.textContent = "Введите номер карты";
      validationResultElement.classList.add("show");
      closevalidationResultElement.addEventListener("click", () => {
        validationResultElement.classList.remove("show");
      });
    } else if (!CardValidator.isValidCard(cardNumber)) {
      validationResultTextElement.textContent =
        "Номер карты недействителен. Пожалуйста, проверьте и попробуйте снова.";
      validationResultElement.classList.add("show");
      closevalidationResultElement.addEventListener("click", () => {
        validationResultElement.classList.remove("show");
      });
    } else {
      validationResultTextElement.textContent = "Номер карты действителен!";
      validationResultElement.classList.add("show");
      closevalidationResultElement.addEventListener("click", () => {
        validationResultElement.classList.remove("show");
      });
    }
  });
});
