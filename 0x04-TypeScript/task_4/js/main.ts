import { Cpp } from "./subjects/Cpp"
import { Java } from "./subjects/Java"
import { React } from "./subjects/React"
import { Teacher } from "./subjects/Teacher"


export const cTeacher: Teacher = { firstname: "Ahmed", experienceTeachingC: 10 };

const cpp = new Cpp();
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());

const react = new React();
console.log(react.getRequirements(), react.getAvailableTeacher());

const java = new Java();
console.log(java.getRequirements(), java.getAvailableTeacher());