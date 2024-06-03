import mongoose, { mongo } from "mongoose";
type ConnectionObject = {
    isConnected?: number
}
const connection : ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database")
    }
    try {
       const db =  await mongoose.connect(process.env.MONGODB_URI || "",{})
        connection.isConnected = db.connections[0].readyState
        console.log("Db connected successfully")

        
    } catch (error) {
        console.log("Data base connection failed", error)

        process.exit(1)
    }
}

export default dbConnect;