import Flashcard from "./js/models/Flashcard";
import { handleFlashcardUpdate, flipFlashcard, deleteFlashcard } from "./js/views/flashcardsView";
import DOMElements from "./js/views/DOMSelectors";
import "./styles/style.sass";

// Global state
const state = {
  flashcards: []
};

const formController = () => {
  const title = DOMElements.title.value,
    question = DOMElements.question.value,
    answer = DOMElements.answer.value;

  return {
    title,
    question,
    answer
  };
};

const flashcardController = e => {
  e.preventDefault();
  const formData = formController();
  const { title, question, answer } = formData;
  const newFlashcard = new Flashcard(title, question, answer);
  state.flashcards.push(newFlashcard);
  handleFlashcardUpdate(state.flashcards);
};

DOMElements.flashcardForm.addEventListener("submit", flashcardController);

DOMElements.flashcardsWrapper.addEventListener("click", (e) => {
  if(e.target.className === "front-bottom--button" || e.target.className === "back-bottom--button") {
    const flipId = e.target.dataset.flip;
    const findFlashcard = state.flashcards.find(card => card.id === flipId);
    findFlashcard.switchFlipedFlashcard(findFlashcard.isFliped);
    flipFlashcard(flipId);
  }

  else if(e.target.className === "flashcard--delete-button") {
    const delteId = e.target.dataset.delete;
    state.flashcards = state.flashcards.filter(card => card.id !== delteId);
    handleFlashcardUpdate(state.flashcards);
  }
})
