import { Course } from './course';

export class Student {
  id: number;
  name: String;
  coursesCreditMap: Map<number, number> = new Map<number, number>(); // <courseID, credit>
  
  mapFromCourse(courseDB: Set<Course>) {
    this.coursesCreditMap.forEach((courseid, studentcredit) => {
      courseDB.forEach(c => {
        if (c.id == courseid) {
          studentcredit = c.studentsCreditMap.get(this.id);
        }
      });
    });
  }
  

}

