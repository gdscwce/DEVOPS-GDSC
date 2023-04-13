const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      const ext=file.mimetype.split('/')[1];
      const name=file.originalname.split('.')[0];
      cb(null,`${name}-${Date.now()}.${ext}`);
    }
    
})
const upload = multer({ storage: multerStorage });
const uploadsettings=upload.single('myFile');

app.get('/', (req, res) => {
    res.json({'msg': 'Hi HOME'})
  });
app.get('/about', (req, res) => {
    res.json({'msg': 'Hi ABOUT'})
  });
app.get('/contact', (req, res) => {
    res.json({'msg': 'Hi CONTACT'})
  });
app.post('/upload', uploadsettings,(req, res) => {
    const file=req.file;
    console.log(file);
   
    res.json({'msg': 'File uploaded successfully'})


  });

  app.listen('3001', () => { 
    console.log('Server is running on port 3001');
  })
