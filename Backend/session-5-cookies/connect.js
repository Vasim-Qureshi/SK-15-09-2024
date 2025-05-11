import mongoose from 'mongoose'

export const connect = async()=>{
    try {
        await mongoose.connect('your_mongoDB_connection_string_here')
        console.log('connected...')
    } catch (error) {
        console.log('error while connecting DB',error)
    }
}