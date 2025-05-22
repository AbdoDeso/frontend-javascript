namespace Subjects {
  
export class Subject  implements Teacher{
    firstname: string

    public teacherName: Teacher
    
 setTeacher(teacher:Teacher) {
   return teacher.firstname = "Ahmed"
}
}

}