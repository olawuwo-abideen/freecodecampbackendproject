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

app.get("/api", function (req, res) {
  res.json({
    unix: (new Date()).getTime(),
    utc:  (new Date()).toUTCString()  
  });
});

app.get("/api/:date", function (req, res) {
  const date = req.params.date;
  let unix, utc

  if ((new Date(parseInt(date))).toString() === "Invalid Date")
  {
    res.json({error: "Invalid Date"});
    return;
  }

  if ((new Date(parseInt(date))).getTime()=== parseInt(date) &&
  date.indexOf("-") === -1 && date.indexOf(" ") === -1){
    unix = parseInt(date);
    utc = (new Date(parseInt(date))).toUTCString();
  } else{
    unix = (new Date(date)).getTime()
    utc = (new Date(parseInt(unix))).toUTCString();
  
  }
  
  res.json({unix, utc})
  });
  
 

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
