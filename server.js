const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://namal:namal2000@store.ckvt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

.then(()=>{
    console.log("MongoDB connected");
});

app.get('/', (req, res) =>{
  res.send("<b> Store Backend API </b>")
});

//http://localhost:5000/api/store
app.use("/api/store",require("./routes/Store.routes"));

//cerating port
app.listen(PORT, () => {
  console.log(`Server is running on port number:${PORT}`);

});