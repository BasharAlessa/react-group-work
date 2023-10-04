const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/ref?retryWrites=true&w=majority")
        .then(()=>{
            console.log("Database is:         ---ON");
        })
        .catch((err)=>{
            console.log(err);
        })