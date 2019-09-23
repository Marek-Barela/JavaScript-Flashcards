import DOMElements from "./DOMSelectors";

export const clearFormInputs = () => {
  DOMElements.title.value = "";
  DOMElements.question.value = "";
  DOMElements.answer.value = "";
}