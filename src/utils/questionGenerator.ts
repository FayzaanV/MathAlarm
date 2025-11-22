// src/utils/questionGenerator.ts
type Question = {
  question: string;
  answer: number;
};

export const generateQuestion = (difficulty: 'easy' | 'medium' | 'hard'): Question => {
  let num1: number;
  let num2: number;
  let operator: string;

  switch (difficulty) {
    case 'easy':
      // Addition (11–30) OR Multiplication (3–12)
      if (Math.random() < 0.5) {
        num1 = Math.floor(Math.random() * 20) + 11; // 11–30
        num2 = Math.floor(Math.random() * 20) + 11; // 11–30
        operator = '+';
      } else {
        num1 = Math.floor(Math.random() * 10) + 3; // 3–12
        num2 = Math.floor(Math.random() * 10) + 3; // 3–12
        operator = '*';
      }
      break;

    case 'medium':
      // Multiplication (5–30, one ≥ 15) OR Addition/Subtraction (111–999)
      if (Math.random() < 0.5) {
        num1 = Math.floor(Math.random() * 26) + 5; // 5–30
        num2 = Math.floor(Math.random() * 26) + 5; // 5–30
        // Ensure at least one number ≥ 15
        if (num1 < 15 && num2 < 15) {
          num1 = 15 + Math.floor(Math.random() * 16); // 15–30
        }
        operator = '*';
      } else {
        num1 = Math.floor(Math.random() * 889) + 111; // 111–999
        num2 = Math.floor(Math.random() * 889) + 111; // 111–999
        operator = Math.random() < 0.5 ? '+' : '-';
      }
      break;

    case 'hard':
      // Multiplication (11–99) OR Addition/Subtraction (1011–9999)
      if (Math.random() < 0.5) {
        num1 = Math.floor(Math.random() * 89) + 11; // 11–99
        num2 = Math.floor(Math.random() * 89) + 11; // 11–99
        operator = '*';
      } else {
        num1 = Math.floor(Math.random() * 8989) + 1011; // 1011–9999
        num2 = Math.floor(Math.random() * 8989) + 1011; // 1011–9999
        operator = Math.random() < 0.5 ? '+' : '-';
      }
      break;

    default:
      num1 = 1;
      num2 = 1;
      operator = '+';
  }

  const question = `${num1} ${operator} ${num2}`;

  let answer: number;
  try {
    answer = eval(question); // safe here since only +, -, *
  } catch {
    answer = 0;
  }

  return { question, answer };
};