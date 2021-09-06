const Store = require('../models/Store.models');

//Add Item record
const addItem = (req,res) =>{
    //const name = req.body.name;
    //const sliitID = req.body.sliitID;
    const{code, name, category, quentity, type, price} = req.body;

    const newItem = new Store({
        code,
        name,
        category,
        quentity,
        type,
        price
    });

    newItem.save().then((items)=>{
        res.json(items)
    })
    .catch((err)=>{
        res.json(err)
    });
   };

   //Get all store records
   const getAllItems = (req,res)=>{
       Store.find().then((items)=>{
           res.json(items)
     })
     .catch((err)=>{
         res.json(err)
     });
   };


   module.exports = {
       addItem,
       getAllItems,

   };