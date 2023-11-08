import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    summery:{
        type:String,
        required:true
    }
})

const book = mongoose.model('Book', bookSchema);

export default book;