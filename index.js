const mongoose = require('mongoose');
const express = require('express');
const app = express();
const url = "mongodb+srv://torn0611:smgBuffy5!@cluster0.xlugt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

app.use(express.json());

con.on('open', () => {
  console.log('connected');
});

con.on('error', (error) => {
  console.error('Error: ' + error);
});

app.use(express.static('public'));

const port = 9000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const studentRouter = require('C:/Users/Bracco Service/OneDrive/Desktop/SoftwareDevelopment/BackEndFoundations/l10handson2/routes/students.js');
app.use('/students', studentRouter);
