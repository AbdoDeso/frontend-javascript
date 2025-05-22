import { Cpp } from "./subjects/Cpp"
import { Java } from "./subjects/Java"
import { React } from "./subjects/React"
import { Teacher } from "./subjects/Teacher"

const cTeacher: Teacher = { firstname: "John", experienceTeachingC: 10 };

const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log(react.getRequirements(), react.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements(), java.getAvailableTeacher());