   // Create web server 
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080 
   app.listen(8080); 
   // Load the comments data 
   var comments = require('./comments.json');  
   // Set up the path for the comments data 
   app.get('/comments.json', function(req, res) {  
       res.setHeader('Cache-Control', 'no-cache');  
       res.json(comments); 
   });  
   // Set up the path for the comments data 
   app.post('/comments.json', function(req, res) {  
       comments.push(req.body);  
       res.setHeader('Cache-Control', 'no-cache');  
       res.json(comments); 
   }); 
   // Path: server.js
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080 
   app.listen(8080); 
   // Path: server.js
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080 
   app.listen(8080); 
   // Path: server.js
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080 
   app.listen(8080); 
   // Path: server.js
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080 
   app.listen(8080); 
   // Path: server.js
   var express = require('express');  
   var app = express();  
   // Set up the path for the static files 
   app.use(express.static(__dirname + '/public'));  
   // Start the web server on port 8080