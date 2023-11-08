import mongoose from 'mongoose';

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.URI);
        if(conn){
            console.log('mongodb connected successfully');
        }
    }catch (e){
        console.log(`mongodb C+connection failed  ${e}`);
    }
}

export default dbConnect;