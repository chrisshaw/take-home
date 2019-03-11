export class Course {
  id: number;
  courseName: String;
  studentsCreditMap?: Map<number, number> = new Map<number, number>(); // <studentID, credit>
}