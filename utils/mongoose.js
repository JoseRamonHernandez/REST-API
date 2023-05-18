import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb+srv://clerprem:246856@cluster0.xrxndxj.mongodb.net/?retryWrites=true&w=majority'

export async function connectToDB()
{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('MongoDB Connected')
    } catch (error) {
        console.error(error)
    }
}