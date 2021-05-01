// Options for a new quiz
export type OPTIONS = {
  amount: number;
  difficulty: string;
};

// Quiz difficulty
export enum EDifficulty {
  ALL = " ",
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// Default options for a new quiz
export const DEFAULT_OPTIONS: OPTIONS = {
  amount: 10,
  difficulty: EDifficulty.ALL,
};

// The format for single quiz question and answers
export type QUESTION = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

// Possible states of the app
export enum EAppStates {
  OPTIONS,
  QUIZ,
}
// Possible states of the quiz
export enum EQuizStates {
  LOADING = "Loading...",
  IN_PROGRESS = "In progress",
  DONE = "Done",
  ERROR = "Error",
}
