const express = require("express");
require("dotenv").config();
const router = new express.Router({ mergeParams: true });

const {base64Encode} = require("../controllers/mainController")


router.post('/base64Encode', base64Encode);

router.get('/base64Encode/docs', (req, res) => {
    const docs = {
      name: 'base64Encode',
      description: 'Encode anything to base64',
      input: {
        type: 'string',
        description: 'Input the data you would like to encode to base64',
        example: 'Hello, world',
      },
      output: {
        type: 'string',
        description: 'Base64 encoded string',
        example: 'SGVsbG8sIHdvcmxk',
      },
    };
    res.json(docs);
  });
  

module.exports = router;