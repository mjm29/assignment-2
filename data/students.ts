export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

export const Students: Student[] = [
  { id: 1, firstName: "John", lastName: "Doe", grade: 9, average: 81 },
  { id: 2, firstName: "Zara", lastName: "Ahmed", grade: 10, average: 89 },
  { id: 3, firstName: "Alice", lastName: "Smith", grade: 11, average: 71 },
  { id: 4, firstName: "Tyson", lastName: "Ferguson", grade: 12, average: 77 },
  { id: 5, firstName: "Luke", lastName: "Mitchell", grade: 12, average: 91 },
  { id: 6, firstName: "Cheryl", lastName: "Wallace", grade: 9, average: 99 },
  { id: 7, firstName: "Steven", lastName: "Stone", grade: 11, average: 63 },
  { id: 8, firstName: "Ash", lastName: "Majors", grade: 10, average: 68 },
  { id: 9, firstName: "Johnny", lastName: "Flowers", grade: 12, average: 83 },
];
