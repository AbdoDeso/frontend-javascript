namespace Subjects {
    export interface Teacher {
        experienceTeachingC?:number
    }
import { cTeacher } from "../main";
    export class React extends Subject{
    
        getRequirements(){
            return "Here is the list of requirements for React"
        }
        getAvailableTeacher(){
            if (cTeacher>0) {
            return ` Available React Teacher: ${this.setTeacher}`
            }else {
                return "No available React Teacher"
            }
            
        }
    }
   
}