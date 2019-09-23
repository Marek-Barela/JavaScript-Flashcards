import DOMElements from "./DOMSelectors";

const createFlashcard = flashcard => {
  const { id, title, question, answer, isFliped } = flashcard;
  const flashcardClass = isFliped ? "flashcard__content--fliped" : "flashcard__content";

  const markup = `
    <div class="flashcard" id=${id}>
      <div class="${flashcardClass}">
        <div class="flashcard__back">
          <div class="flashcard__back-top">
            <button class="flashcard--delete-button" data-delete=${id}>
              &times;
            </button>
            <h2>${title}</h2>
          </div>
          <div class="flashcard__back-bottom">
            <p>${answer}</p>
            <div class="back-bottom__button-container">
              <button class="back-bottom--button" data-flip=${id}>
                hide
              </button>
            </div>
          </div>
        </div>
        <div class="flashcard__front">
          <div class="flashcard__front-top">
            <button class="flashcard--delete-button" data-delete=${id}>
              &times;
            </button>
            <h2>${title}</h2>
          </div>
          <div class="flashcard__front-bottom">
            <p>${question}</p>
            <div class="front-bottom__button-container">
              <button class="front-bottom--button" data-flip=${id}>
                show
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  DOMElements.flashcardsWrapper.insertAdjacentHTML("beforeend", markup);
};

const renderFlashcards = flashcards => {
  flashcards.forEach(createFlashcard);
};

const clearFlashcards = () => {
  DOMElements.flashcardsWrapper.innerHTML = "";
};

export const handleFlashcardUpdate = flashcards => {
  clearFlashcards();
  renderFlashcards(flashcards);
};

export const flipFlashcard = id => {
  const listOfFlashcards = DOMElements.flashcardsWrapper.children;
  const findFlashcardById = [...listOfFlashcards].find(card => card.id === id);
  const getFlashcardContent = findFlashcardById.children[0];
  if(getFlashcardContent.className === "flashcard__content") {
    getFlashcardContent.className = "flashcard__content--fliped"
  } else {
    getFlashcardContent.className = "flashcard__content"
  }
}