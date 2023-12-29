import mongoose from 'mongoose'
import  Express  from 'express'
import boqolhaji from './models/tasksmodel.js';

const app=Express()
app.use(Express.json())
const port=5554;
app.get('/',async(req ,res)=>{
    const tasks=await boqolhaji.find()
    res.status(200).json(tasks)

}),
app.post('/',async(req ,res)=>{
    const {title,date,finished}= req.body;

    const newtasks=new tasks({
        title,date,finished
    });
    const tasks= await newtasks.save();
    res.status(201).json(tasks)
    
}),
app.put('/:id',async(req ,res)=>{
    const {title,date,finished}= req.body;
    const task= await boqolhaji.findBId(req.params.id)
    if(boqolhaji){
        boqolhaji.title=title,
        boqolhaji.date=date,
        boqolhaji.finished=finished

        const update= await task.save();
        req.status(200).json(update)

    }

   
    
}),
app.delete('/:id',async(req ,res)=>{

    const task = await boqolhaji.findBIdAndDelete(rwq.params.id)
    req.status(200).json({message:"task deleted"})
    
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
mongoose.connect("mongodb+srv://Ayaanle:Ayaanle@cluster0.25zk0fm.mongodb.net/boqolhaji?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to the database')
})











