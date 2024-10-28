const getStudents = async (req, res) => {
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

const getspecStudent = async (req,res) => {
    const roll = req.params.roll;
try {
        const stud = await Student.findOne({roll: roll});
res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

const createstudent =  async (req, res) => {
    console.log(req.body);
    const newstudent = new Student({
        name:req.body.name,
        roll:req.body.roll,
        registration:req.body.registration,
        subjects:req.body.subjects,
        created_on:req.body.created_on
})
    try {
        await newstudent.save();
res.status(201).json(newstudent);
} catch(error) {
        res.status(400).json({ message : error.message});
    };}

    const updatestudent = async (req, res) => {
        const roll = req.params.roll;
        const updates = req.body;
    
        try {
            const updatedStudent = await Student.findOneAndUpdate({ roll: roll }, updates, { new: true });
            if (!updatedStudent) {
                return res.status(404).json({ message: "Student not found" });
            }
            res.status(200).json(updatedStudent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    
    const deletestudent = async (req, res) => {
        const roll = req.params.roll;
    
        try {
            const deletedStudent = await Student.findOneAndDelete({ roll: roll });
            if (!deletedStudent) {
                return res.status(404).json({ message: "Student not found" });
            }
            res.status(200).json({ message: "Student deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    
    // Export all functions
    module.exports = {
        getStudents,
        getspecStudent,
        createstudent,
        updatestudent,
        deletestudent,
    };
    