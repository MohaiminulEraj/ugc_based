<h2 align=center>
UNIVERSITY DATA COLLECTION AND DISPLAY (UGC BASED)
</h2>
<p align=center>
<img src="client/public/screenshot/0.png" height="200"/>
</p>

---

## **PROJECT INTRODUCTION**
#### **University Grant Comission of Bangladesh (UGC Based)** is a prototype website for the student and faculty members. 
Admin users can add, remove and compare Data. Users can view charts and also compare charts and print pdf.


## **HOW TO SETUP**
#### 1. Install Node.js and MongoDB on your computer.

#### 2. Download this code, and from command prompt run:

        npm init

        npm install --save body-parser express http mongodb mongoose

        npm install passport passport-local passport-local-mongoose express-session

        npm install -g nodemon

#### 3. To run the code, run:

        nodemon server.js

#### 4. In the browser open http://localhost:3000/, and you should see the index page


## **PROJECT DOCUMENTAION**
Admin users can add, remove and compare Data.
Students can view stduent data and campare.(university provided id required)
Faculty  members can view teacher data and compare. (universtity provided id required)

* This is the home page of the website where only admin can login by pressing the **LOGIN** button to add new data for any univerisity. We used **Passport** authentication middlewire for authentication & security purpose to add cookies & sessions.
<img src="client/public/screenshot/3.png">

* Admin can add individual data or use a csv file to add multiple data 
<img src="client/public/screenshot/4.png">
 
 * In the Dashboard user can view and compare each universites data.
<img src="client/public/screenshot/2.png">