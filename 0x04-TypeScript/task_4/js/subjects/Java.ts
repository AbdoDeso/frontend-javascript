namespace Subjects {
import { cTeacher } from "../main"

    export class Java {
    
        getRequirements(){
            return "Here is the list of requirements for Java"
        }
        getAvailableTeacher(){
            if (cTeacher.experienceTeachingC>0) {
            return ` Available Java Teacher: ${cTeacher.firstName}`
            }else {
                return "No available Java Teacher"
            }
            
        }
    }
   
}