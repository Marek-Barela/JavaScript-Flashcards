import uuid from "uuid";

class Flashcard {
  constructor(title, question, answer) {
    this.id = uuid()
    this.title = title;
    this.question = question;
    this.answer = answer;
    this.isFliped = false;
  }

  switchFlipedFlashcard(isFliped) {
    this.isFliped = !isFliped
  }
}

export default Flashcard;