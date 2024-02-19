const express = require('express');
const cors = require('cors');
const  app = express();



app.use(cors); 
app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 
 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami', function (req, res) {
    const ipaddress = req.headers['x-forwarded-for']
    const language = req.headers['accept-language']
    const software = req.headers['user-agent']
      res.json({ipaddress, language, software});
    });
  
 

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
