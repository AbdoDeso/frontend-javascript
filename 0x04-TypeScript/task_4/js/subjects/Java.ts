namespace Subjects {
    export interface Teacher {
        experienceTeachingC?:number
    }
import { cTeacher } from "../main";
    export class Java extends Subject{
    
        getRequirements(){
            return "Here is the list of requirements for Java"
        }
        getAvailableTeacher(){
            if (cTeacher>0) {
            return ` Available Java Teacher: ${this.setTeacher}`
            }else {
                return "No available Java Teacher"
            }
            
        }
    }
   
}