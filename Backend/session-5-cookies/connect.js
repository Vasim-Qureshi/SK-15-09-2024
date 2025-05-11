import mongoose from 'mongoose'

export const connect = async()=>{
    try {
        await mongoose.connect('mongodb+srv://Workshop:Workshop123@cluster0.w38h7lp.mongodb.net/Cookies-Manager?retryWrites=true&w=majority&appName=Cluster0');
        console.log('connected...')
    } catch (error) {
        console.log('error while connecting DB',error)
    }
}