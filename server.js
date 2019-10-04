const express = require('express');
const app = express();

// init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));

// Create Route
app.get('/', (req, res) => res.json({ msg: 'Welcome from Online Store' }));

// Define Routes
app.use('/api/downloadpdf', require('./routes/DownloadPdf'));

