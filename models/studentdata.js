const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true,    
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= student;