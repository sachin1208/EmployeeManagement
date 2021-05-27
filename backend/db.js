const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log('EMS Database Connection successful');
    } else {
        console.log(`Error in connection ${err}`);
    }
});

module.exports = mongoose;