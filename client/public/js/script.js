$('#submitTeacherCSV').click(function(){
  const readData = getTeacherViaCSV();
  console.log(readData);
  if(readData){
    for(let i=0; i<readData.length; i++){
      readData[i].firstname = readData[i].firstname.trim().toLowerCase();
      readData[i].lastname = readData[i].lastname.trim().toLowerCase();
      readData[i].teachers_uni = readData[i].teachers_uni.trim().toLowerCase();
      readData[i].teachers_rank = readData[i].teachers_rank.trim().toLowerCase();
    let newTeacher = {firstname:readData[i].firstname, lastname:readData[i].lastname, teacherId: parseInt(readData[i].teacherId), teachers_uni: readData[i].teachers_uni, income:parseInt(readData[i].income), teachers_rank:readData[i].teachers_rank};
    addTeachersViaCSV(newTeacher);
    }
  }
  location.replace('/dashboard');
})


$('#submitStdCSV').click(function(){
    const readData = getStudentViaCSV();
    if(readData){
      for(let i=0; i<readData.length; i++){
        readData[i].university = readData[i].university.trim().toLowerCase();
        readData[i].school = readData[i].school.trim().toLowerCase();
        readData[i].dept = readData[i].dept.trim().toLowerCase();
        readData[i].major = readData[i].major.trim().toLowerCase();
        readData[i].semester = readData[i].semester.trim().toLowerCase();

      let newStudent = {year:readData[i].year, studentId:readData[i].studentId, university: readData[i].university, school: readData[i].school, dept:readData[i].dept, major: readData[i].major, semester: readData[i].semester};
      addStudentsViaCSV(newStudent);
      }
    }
    location.replace('/dashboard');
})



