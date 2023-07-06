import mongoose, { Schema } from "mongoose";

// const Date = mongoose.model('Date',new mongooseSchema)
const date = {
    title:{
        type: String,
        required: true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    }
}

const Calendar = mongoose.model('Date',date)

export default Calendar