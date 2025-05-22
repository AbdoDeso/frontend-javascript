namespace Subjects {
    export interface Teacher {
        experienceTeachingC?:number
    }
import { cTeacher } from "../main";
    export class Cpp extends Subject{
    
        getRequirements(){
            return "Here is the list of requirements for Cpp"
        }
        getAvailableTeacher(){
            if (cTeacher>0) {
            return ` Available Cpp Teacher: ${this.setTeacher}`
            }else {
                return "No available Cpp Teacher"
            }
            
        }
    }
   
}