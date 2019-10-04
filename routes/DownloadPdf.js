const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const pdfTemplate = require('../document');

//@route         POST api/downloadpdf
//@desc          Download PDF
//@access        Public
router.post('/', async (req, res) => {
  await pdf.create(pdfTemplate(), {}).toFile('./routes/result.pdf', err => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

//@route         GET api/downloadpdf
//@desc          Get Download PDF
//@access        Public
router.get('/', async (req, res) => {
  await res.sendFile(`${__dirname}/result.pdf`);
});

module.exports = router;
