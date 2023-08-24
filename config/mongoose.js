require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url (i.e. Mondodb Atlas)
const db = "mongodb+srv://mohitrohitbro2040:abcdabcd@cluster0.dtkrqae.mongodb.net/issue_track";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> console.log('Failed to connect to the database', err));
 

