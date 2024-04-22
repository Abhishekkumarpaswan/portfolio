const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Enable CORS (for development purposes only)
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Endpoint for handling contact form submission
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Simulate processing form data (replace with your actual logic)
  console.log(`Received contact form submission:`);
  console.log(`  - First Name: ${firstName}`);
  console.log(`  - Last Name: ${lastName}`);
  console.log(`  - Email: ${email}`);
  console.log(`  - Phone: ${phone}`);
  console.log(`  - Message: ${message}`);

  // Send a success response
  res.json({ code: 200, message: 'Form submission successful!' });

  // You can also implement logic to:
  // - Send an email notification
  // - Save data to a database
  // - Perform any other actions based on the form data
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
