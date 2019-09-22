import Flashcard from "./js/models/Flashcard";
import { handleFlashcardUpdate } from "./js/views/flashcardsView";
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
