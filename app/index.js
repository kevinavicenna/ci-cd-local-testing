const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hello World');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}

module.exports = app;