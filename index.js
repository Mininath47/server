const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meninathhonmane2355:Meni4765@test.iq88b.mongodb.net/e-com');


const productSchema = new mongoose.Schema({
    name:String,
    age:Number,
    mob:Number
});


const product = mongoose.model('products',productSchema);
const app = express();
app.use(express.json());

app.post('/create', async (req,res)=>{
    const data = new product(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result);
});

app.get('/list',async (req,res)=>{
    const data = await product.find();
    res.send(data)
});


app.put('/update/:_id', async (req,res)=>{
    const data = await product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    console.log(req.params);
    res.send(data);
})


app.delete('/delete/:_id', async (req,res)=>{
    const data = await product.deleteOne(req.params)
    console.log(req.params);
    res.send(data);
})

app.listen(5000);
