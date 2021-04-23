export type OPTIONS = {
  amount: number;
  difficulty: string;
};

export enum EDifficulty {
  ALL = " ",
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const DEFAULT_OPTIONS: OPTIONS = {
  amount: 10,
  difficulty: EDifficulty.ALL,
};
