exports.base64Encode = async (req, res) => {
    const { input } = req.body;
    if (!input || typeof input !== 'string') {
      return res.status(400).send({ error: 'Input must be a string' });
    }
  
    const output = Buffer.from(input).toString('base64');
    res.send({ output });
  };
  