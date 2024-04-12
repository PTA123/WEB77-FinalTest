import mongoose from "mongoose";

const url = "mongodb+srv://phanthienan:pta160603@web77.qqcduzt.mongodb.net/web77"

const connectToDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("Connect to db success")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB