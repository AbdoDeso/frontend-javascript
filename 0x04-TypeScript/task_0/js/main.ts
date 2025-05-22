interface Student {
    firstname: string;
    lastname?: string;
    age?: number;
    location: string;
}
    let student1: Student  = { 
        firstname: "Ahmed",
        lastname: "Saeed",
        age: 28,
        location: "cairo",    
     }
    let student2: Student  = { 
        firstname: "Abdullah",
        lastname: "Eldesoky",
        age: 30,
        location: "suez",    
     }
let studentslist: Student[] = [student1, student2]

let table = document.createElement('table')


studentslist.forEach(student => {
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = student.firstname
    cell2.innerHTML = student.location

});


document.body.appendChild(table)