import express from 'express'
import mongoose from 'mongoose'
import Calendar from './schema.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

const config=async()=>{
try {
    mongoose.connect("mongodb://localhost:27017/calendar")
    .then((res)=>{
        console.log("DB connected");
    })
    .catch((e)=>{
        console.log(e,"err");
    })
} catch (error) {
    
}
}

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/event',async(req,res)=>{
    let data =await Calendar.find()
    res.send(data);
})

app.post('/addevent',async(req,res)=>{
    
    try {
        let data = new Calendar({
            title:req.body.title,
            start:req.body.start,
            end:req.body.end
        })

        let result = data.save()
        res.send("added")
    } catch (error) {
        
    }
})

const port = 5000 || process.env.PORT
config()
app.listen(port,()=>console.log("server running " + port))