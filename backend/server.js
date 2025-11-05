    const express = require('express');
    const app = express();
    const port = process.env.PORT || 4000;

    // Define a simple route for the root URL
    app.get('/', (req, res) => {
      res.send('Hello, Express!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });