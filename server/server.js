const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const sgSendmail = require('sendgrid-mail')
require('dotenv/config');
var cors = require('cors');

const userRoute = require('./routes/users');

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB')
);

mongoose.connection.on('error',(error) => {
    console.log('ERROR '+ error);
})

mongoose.connection.once('open',()=> {
    console.log('The connection to MongoDB Atlas is working')
})

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(path.join(__dirname,'../dist/index.html')))
app.use(cors({origin: 'https://angular-project-44a55.firebaseapp.com'}));
app.use('/api',userRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('Home');
})
  

//Listen Server
app.listen(5000);