const express = require('express');
const CustomMiddleware = require('./Middleware/CustomMiddleware');
const app = express();
const PORT = 3000;


app.use(CustomMiddleware);

const productData = [
    {
        id: 1,
        productName: 'Product 1'
    },
    {
        id: 2,
        productName: 'Product 2'
    },
    {
        id: 3,
        productName: 'Product 3'
    }
];

app.get('/', (req, res) => {
    let objData = {
        name: 'Harshil Chavada',
    }
    res.status(200).json(objData);
});

app.get('/test', (req, res) => {
    res.status(200).json({message: 'Data received successfully'});
})

app.get('/product/:id', (req, res) => {
    let productId = Number(req.params.id);
    let productDataAccordingToId = productData.find((data) => data.id === productId);
    if(productDataAccordingToId){
        console.log('API Here')
        res.status(200).json(productDataAccordingToId);
    }
    else{
        console.log('Here')
        res.status(404).json({message: 'Data not found'});
    }
})

app.listen(PORT, () => {
    console.log(`Server started listing at port: ${PORT}`);
});
