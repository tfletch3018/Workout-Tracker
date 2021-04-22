const mongoose = require("mongoose");
const schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
               type: Number 
            }
        }
    ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;