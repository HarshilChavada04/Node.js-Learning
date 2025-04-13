const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    let objData = {
        name: 'Harshil Chavada',
    }
    res.status(200).json(objData);
})

app.listen(PORT, () => {
    console.log(`Server started listing at port: ${PORT}`);
});