const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://essa:essa@cluster0.ojodwkh.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("Database is:         ---ON");
        })
        .catch((err)=>{
            console.log(err);

            
        })

        // mongodb+srv://essa:essa@cluster0.ojodwkh.mongodb.net/?retryWrites=true&w=majority
        // mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/ref?retryWrites=true&w=majority

        