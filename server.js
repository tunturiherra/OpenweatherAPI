import express, { response } from 'express';


const app = express();

// Set static folder
app. use(express.static('public')) ;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.listen(3000, ()=>{
    console.log('HTTP Server is running on port http://localhost:3000')
})