namespace Subjects {
import { cTeacher } from "../main"

    export class Cpp {
        
        getRequirements(){
            return "Here is the list of requirements for Cpp"
        }
        getAvailableTeacher(){
            if (cTeacher.experienceTeachingC > 0) {
            return ` Available Cpp Teacher: ${cTeacher.firstName}`
            }else {
                return "No available Cpp Teacher"
            }
            
        }
    }
   
}