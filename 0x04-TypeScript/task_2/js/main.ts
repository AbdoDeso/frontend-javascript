//Advanced types Part
interface DirectorInterface {
    workFromHome():string
    getCoffeeBreak():string
    workDirectorTasks():string
}
interface TeacherInterface {
    workFromHome():string
    getCoffeeBreak():string
    workTeacherTasks():string
}

class Director implements DirectorInterface {
    workFromHome(){
        return "Working from home"
    }
    getCoffeeBreak(){
        return "Getting a coffee break"
    }
    workDirectorTasks(){
        return "Getting to director tasks"
    }
}
class Teacher implements TeacherInterface {
      workFromHome(){
        return "Cannot work from home"
    }
    getCoffeeBreak(){
        return "Cannot have a break"
    }
    workTeacherTasks(){
        return "Getting to work"
    }
}


//Creating functions specific to employees
function createEmployee (salary: string|number):string{

    const salaryValue = typeof salary == 'string' ? parseFloat(salary): salary;

    if(salaryValue<500){
        return "Teacher";
    }
        else{
            return "Director";
        }
}

//String literal types

type Subjects = 'History' | 'Math'


function teachClass (todayClass:Subjects): string{

    if(todayClass === 'History'){
        return "Teaching History"
    }
      else if(todayClass === 'Math'){
        return "Teaching Math"
    }

}