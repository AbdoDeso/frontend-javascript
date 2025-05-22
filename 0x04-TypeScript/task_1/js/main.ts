//build a Teacher interface
export interface Teacher {
  readonly  firstname: string;
   readonly lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key:string]: any;
}
//Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}
//Printing teachers
function printName({firstname,lastname}:Teacher): string{
    return `${firstname[0]}. ${lastname}`;
}

//Writing a class

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
interface Student {
  new  (firstName:string, lastName:string): StudentInterface
}


class StudentClass implements StudentInterface{
    firstName:string;
    lastName:string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework():string {
        return "Currently working"
    }
    displayName():string{
       return this.firstName
    }
}
