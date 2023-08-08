const express = require('express');

const PORT = 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start application
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
 });
  