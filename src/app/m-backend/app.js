const app = require('express')();
const http= require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://snehatandale1:WiJISfnO94kOiVBh@clustor0.ahtluap.mongodb.net/MyRentHubDB1?retryWrites=true&w=majority&appName=clustor0')

const login = require('./models/loginmodel');
http.listen(3000,function(){
    console.log('server is running');
});