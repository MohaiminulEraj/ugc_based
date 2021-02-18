const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    studentId: {
        type: Number,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    school: String,
    dept: {
        type: String,
        required: true
    },
    major: String,
    semester: {
        type: String,
        required: true
    }
});


const Student = mongoose.model('student', StudentSchema)
module.exports = Student;
