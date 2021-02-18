function addStudentsViaCSV(newStudent){

    $.ajax({
        type: 'POST',
        url: '/student/new',
        data: newStudent,
        success: response => {
            console.log(response);
        },
        error: response => {
            console.log(response);
        }
    })
}

function addTeachersViaCSV(newTeacher){
    // console.log(newTeacher)
    $.ajax({
        type: 'POST',
        url: '/teacher/new',
        data: newTeacher,
        success: response => {
            // alert('success');
            console.log(response);
        },
        error: response => {
            alert('failed');
            // console.log(response);
        }
    })
}

function getStudentViaCSV(){
    let students = []
    $.ajax({
        type: "GET",
        async: false,
        url: "student.csv",
        dataType: "text",
        success: doing = (data) =>{
            // console.log(data);
            let lines =  data.split("\r\n")
            
            let headers = lines[0].split(',')
            for (let i = 1; i < lines.length; i++) {        
                if (!lines[i])
                    continue
                const obj = {}
                const currentline = lines[i].split(',')
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j]
                }
                // creat students object
                students.push(obj)
            }
           }
     });

return students;  
}



function getTeacherViaCSV(){
    let teachers = []
    $.ajax({
        type: "GET",
        async: false,
        url: "teacher.csv",
        dataType: "text",
        success: doing = (data) =>{
            // console.log(data);
            let lines =  data.split("\r\n")
            
            let headers = lines[0].split(',')
            for (let i = 1; i < lines.length; i++) {        
                if (!lines[i])
                    continue
                const obj = {}
                const currentline = lines[i].split(',')
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j]
                }
                // creat teachers object
                teachers.push(obj)
            }
           }
     });

return teachers;  
}

function getStudentData(){
    let student = [];
    $.ajax({
        type:'GET',
        url: '/students/all',
        async: false,
        success: response => {
            student = JSON.parse(response)
            // console.log(student[0]._id);
        },
        error: response => {
            console.log(response);
        }
    })
    return student;
}

function getTeacherData(){
    let teacher = [];
    $.ajax({
        type:'GET',
        url: '/teachers/all',
        async: false,
        success: response => {
            teacher = JSON.parse(response)
            // console.log(teacher[0]._id);
        },
        error: response => {
            console.log(response);
        }
    })
    return teacher;
}


