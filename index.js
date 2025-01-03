
require('dotenv-flow').config();

// Import the Express.js framework to create a web server
const express = require('express');
const app = express();

// Import middleware for security and logging
const cors = require('cors'); // Allows cross-origin requests
const mainRouter = require("./routes/mainRouter");

// Configure Express to parse JSON and URL-encoded data
app.use(express.json()); // Automatically parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Enable Cross-Origin Resource Sharing (CORS) for handling requests from different domains
app.use(cors());


app.disable('x-powered-by');

// Define your application routes here
// Example: app.get('/api/example', (req, res) => { ... });

// Catch-all route for unhandled requests, responds with a simple message
app.use(mainRouter)

// Get the port number from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
	// Log a message to indicate the server is running
	console.log(`App Listening on port ${port}`);
});
