const studentData = getStudentData();
// console.log(studentData);

const teacherData = getTeacherData();
// console.log(teacherData);

// Chart Generation 
//Student list PIE Chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawStudentPieChart);


function drawStudentPieChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].university === 'nsu'){
      nsuC+=1;
    }
    else if(studentData[i].university === 'iub'){
      iubC+=1;
    }else if(studentData[i].university === 'aiub'){
      aiubC+=1;
    }else if(studentData[i].university === 'uiu'){
      uiuC+=1;
    }
    else if(studentData[i].university === 'diu'){
      diuC+=1;
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Student\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Students rate in private University\'s'
  };

  var chart = new google.visualization.PieChart(document.getElementById('studentsPieChart'));

  chart.draw(data, options);
}

// google.charts.load('current', {'packages':['corechart']});

// Teacher's list piechart
google.charts.setOnLoadCallback(drawTeacherPieChart);
function drawTeacherPieChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_uni === 'nsu'){
      nsuC+=1;
    }
    else if(teacherData[i].teachers_uni === 'iub'){
      iubC+=1;
    }else if(teacherData[i].teachers_uni === 'aiub'){
      aiubC+=1;
    }else if(teacherData[i].teachers_uni === 'uiu'){
      uiuC+=1;
    }
    else if(teacherData[i].teachers_uni === 'diu'){
      diuC+=1;
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Teacher\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Teachers rate in private University\'s'
  };

  var chart = new google.visualization.PieChart(document.getElementById('teachersPieChart'));

  chart.draw(data, options);
}

// Bar Chart

google.charts.setOnLoadCallback(drawPhdBarChart);
function drawPhdBarChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_rank === 'phd'){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
      }
  }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Phd teacher\'s per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Phd teacher\'s in private University\'s'
  };

  var chart = new google.visualization.BarChart(document.getElementById('phdBarChart'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawLecturerBarChart);
function drawLecturerBarChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<teacherData.length; i++){
    if(teacherData[i].teachers_rank === 'lecturer'){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
      }
    }
}
  var data = google.visualization.arrayToDataTable([
    ['University', 'Lecturer\'s per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Lecturer\'s in private University\'s'
  };

  var chart = new google.visualization.BarChart(document.getElementById('lecturerBarChart'));

  chart.draw(data, options);
}

// Column Chart
google.charts.setOnLoadCallback(drawAvgSalaryColumnChart);
function drawAvgSalaryColumnChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  let iubS = nsuS = aiubS = uiuS = diuS = 0;
  for(let i=0; i<teacherData.length; i++){
      if(teacherData[i].teachers_uni === 'nsu'){
        nsuC+=1;
        nsuS+=teacherData[i].income;
      }
      else if(teacherData[i].teachers_uni === 'iub'){
        iubC+=1;
        iubS+=teacherData[i].income;
      }else if(teacherData[i].teachers_uni === 'aiub'){
        aiubC+=1;
        aiubS+=teacherData[i].income;
      }else if(teacherData[i].teachers_uni === 'uiu'){
        uiuC+=1;
        uiuS+=teacherData[i].income;
      }
      else if(teacherData[i].teachers_uni === 'diu'){
        diuC+=1;
        diuS+=teacherData[i].income;
      }
}
  var data = google.visualization.arrayToDataTable([
    ['University', 'Average income per university', { role: 'style' } ],
    ["IUB", parseFloat(iubS/iubC), 'color: red'],
    ["NSU", parseFloat(nsuS/nsuC), 'color: #76A7FA'],
    ["AIUB", parseFloat(aiubS/aiubC), 'opacity: 0.2'],
    ["UIU", parseFloat(uiuS/uiuC), 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
    ["DIU", parseFloat(diuS/diuC), 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
  ]);

  var options = {
    title: 'Average income for faculty\'s in private University\'s',
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('avgSalaryColumnChart'));

  chart.draw(data, options);
}

// Engineering Studnents Donut Chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawEngStudentDonutChart);


function drawEngStudentDonutChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].dept.endsWith("e")){
      if(studentData[i].university === 'nsu'){
        nsuC+=1;
      }
      else if(studentData[i].university === 'iub'){
        iubC+=1;
      }else if(studentData[i].university === 'aiub'){
        aiubC+=1;
      }else if(studentData[i].university === 'uiu'){
        uiuC+=1;
      }
      else if(studentData[i].university === 'diu'){
        diuC+=1;
      }
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Engineering Student\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Engineering Students rate in private University\'s',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('studentsEngDonutChart'));

  chart.draw(data, options);
}


// BBA Studnents Donut Chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBbaStudentDonutChart);


function drawBbaStudentDonutChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].dept === 'bba'){
      if(studentData[i].university === 'nsu'){
        nsuC+=1;
      }
      else if(studentData[i].university === 'iub'){
        iubC+=1;
      }else if(studentData[i].university === 'aiub'){
        aiubC+=1;
      }else if(studentData[i].university === 'uiu'){
        uiuC+=1;
      }
      else if(studentData[i].university === 'diu'){
        diuC+=1;
      }
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'BBA Student\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'BBA Students rate in private University\'s',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('studentsBbaDonutChart'));

  chart.draw(data, options);
}

// Other than engineering and bba Studnents Donut Chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawOtherStudentDonutChart);


function drawOtherStudentDonutChart() {

  let nsuC = 0;
  let iubC = 0;
  let aiubC = 0;
  let uiuC = 0;
  let diuC = 0;
  for(let i=0; i<studentData.length; i++){
    if(!studentData[i].dept.endsWith("e") && studentData[i].dept != 'bba'){
      if(studentData[i].university === 'nsu'){
        nsuC+=1;
      }
      else if(studentData[i].university === 'iub'){
        iubC+=1;
      }else if(studentData[i].university === 'aiub'){
        aiubC+=1;
      }else if(studentData[i].university === 'uiu'){
        uiuC+=1;
      }
      else if(studentData[i].university === 'diu'){
        diuC+=1;
      }
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['University', 'Other than Engineering and BBA Student\'s rate per university'],
    ["IUB", iubC],
    ["NSU", nsuC],
    ["AIUB", aiubC],
    ["UIU", uiuC],
    ["DIU", diuC]
  ]);
  var options = {
    title: 'Other than Engineering and BBA Students rate in private University\'s',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('studentsOtherDeptDonutChart'));

  chart.draw(data, options);
}



// Yearly data Column Chart
google.charts.setOnLoadCallback(drawYearlyStdAreaChart);
function drawYearlyStdAreaChart() {
  let nsuY15 = nsuY16 = nsuY17 = nsuY18 = nsuY19 = nsuY20 = 0;
  let iubY15 = iubY16 = iubY17 = iubY18 = iubY19 = iubY20 = 0;
  let aiubY15 = aiubY16 = aiubY17 = aiubY18 = aiubY19 = aiubY20 = 0;
  let uiuY15 = uiuY16 = uiuY17 = uiuY18 = uiuY19 = uiuY20 = 0;
  let diuY15 = diuY16 = diuY17 = diuY18 = diuY19 = diuY20 = 0;
  for(let i=0; i<studentData.length; i++){
    if(studentData[i].university === 'nsu'){
      if(studentData[i].year === 2015){
        nsuY15+=1;
      }else if(studentData[i].year === 2016){
        nsuY16+=1;
      }else if(studentData[i].year === 2017){
        nsuY17+=1;
      }else if(studentData[i].year === 2018){
        nsuY18+=1;
      }else if(studentData[i].year === 2019){
        nsuY19+=1;
      }else if(studentData[i].year === 2020){
        nsuY20+=1;
      }
    }
    else if(studentData[i].university === 'iub'){
      if(studentData[i].year === 2015){
        iubY15+=1;
      }else if(studentData[i].year === 2016){
        iubY16+=1;
      }else if(studentData[i].year === 2017){
        iubY17+=1;
      }else if(studentData[i].year === 2018){
        iubY18+=1;
      }else if(studentData[i].year === 2019){
        iubY19+=1;
      }else if(studentData[i].year === 2020){
        iubY20+=1;
      }
    }else if(studentData[i].university === 'aiub'){
      if(studentData[i].year === 2015){
        aiubY15+=1;
      }else if(studentData[i].year === 2016){
        aiubY16+=1;
      }else if(studentData[i].year === 2017){
        aiubY17+=1;
      }else if(studentData[i].year === 2018){
        aiubY18+=1;
      }else if(studentData[i].year === 2019){
        aiubY19+=1;
      }else if(studentData[i].year === 2020){
        aiubY20+=1;
      }
    }else if(studentData[i].university === 'uiu'){
      if(studentData[i].year === 2015){
        uiuY15+=1;
      }else if(studentData[i].year === 2016){
        uiuY16+=1;
      }else if(studentData[i].year === 2017){
        uiuY17+=1;
      }else if(studentData[i].year === 2018){
        uiuY18+=1;
      }else if(studentData[i].year === 2019){
        uiuY19+=1;
      }else if(studentData[i].year === 2020){
        uiuY20+=1;
      }
    }
    else if(studentData[i].university === 'diu'){
      if(studentData[i].year === 2015){
        diuY15+=1;
      }else if(studentData[i].year === 2016){
        diuY16+=1;
      }else if(studentData[i].year === 2017){
        diuY17+=1;
      }else if(studentData[i].year === 2018){
        diuY18+=1;
      }else if(studentData[i].year === 2019){
        diuY19+=1;
      }else if(studentData[i].year === 2020){
        diuY20+=1;
      }
    }
  }
  var data = google.visualization.arrayToDataTable([
    ['Year', 'IUB', 'NSU', 'AIUB', 'UIU', 'DIU'],
    ['2015', iubY15, nsuY15, aiubY15, uiuY15, diuY15],
    ['2016', iubY16, nsuY16, aiubY16, uiuY16, diuY16],
    ['2017', iubY17, nsuY17, aiubY17, uiuY17, diuY17],
    ['2018', iubY18, nsuY18, aiubY18, uiuY18, diuY18],
    ['2019', iubY19, nsuY19, aiubY19, uiuY19, diuY19],
    ['2020', iubY20, nsuY20, aiubY20, uiuY20, diuY20]
  ]);
  var options = {
    title: 'Yearly Student enrolled in private University\'s',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('yearlyStdAreaChart'));

  chart.draw(data, options);
}
