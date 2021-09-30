import express from "express";
import Mongoose from "mongoose";


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));



const connectionUrl = "mongodb+srv://memories:memories@cluster0.ibcgb.mongodb.net/MEMORIES?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

Mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
.catch((error) => console.log(error.message));
