const express = require('express');
const connectDB = require('./config/db');
let cors = require('cors');


//routes
const books = require('./routes/api/books');
const app = express();

// Connect to MongoDB
connectDB();


//CORS
app.use(cors({origin: true, creadentials: true}));

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
