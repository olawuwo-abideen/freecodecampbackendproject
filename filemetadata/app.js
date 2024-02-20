const express = require('express')
const app = express()
const cors = require('cors')
const multer = multer('multer')
const bodyParser = require('body-parser');


const upload = multer({dest: 'public/'})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))


app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
})











const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
