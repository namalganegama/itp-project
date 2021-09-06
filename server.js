const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://namal:namal2000@store.ckvt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

.then(()=>{
    console.log("MongoDB connected");
});
//app.get('/', (req, res) => {
 // res.send('Hello World!')
//})

app.listen(PORT, () => {
  console.log(`Server is running on port number:${PORT}`);
});