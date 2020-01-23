const express = require('express');

//express function
const app = express();

//set up the development server listen method - port number
app.listen(3000);

///served the home route
app.get('/', (req, res) => {
    
    //basic response with the send method
     res.send('<h1>I love Treehouse</h1>');
 });

 ///served the second route
 app.get('/hello', (req, res) => {
     
    //basic response with the send method
     res.send('<h1>Hello JavaScript developer!</h1>');
 });
 
 console.log("server currently running on localhost:3000")