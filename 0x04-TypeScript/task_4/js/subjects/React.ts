namespace Subjects {
import { cTeacher } from "../main"

    export class React{
        
        getRequirements(){
            return "Here is the list of requirements for React"
        }
        getAvailableTeacher(){
            if (cTeacher.experienceTeachingC > 0) {
            return ` Available React Teacher: ${cTeacher.firstName}`
            }else {
                return "No available React Teacher"
            }
            
        }
    }
   
}