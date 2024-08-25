const express = require('express');
const app = express();

app.use(express.json()); // parse JSON bodies

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid input data' });
    }
  
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter((item) => item === item.toLowerCase()).pop();
  
    res.json({
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers,
      alphabets,
      highest_lowercase_alphabet: [highestLowercaseAlphabet],
    });
  });

  app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
  });