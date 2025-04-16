const express = require('express');
const app = express();

let booksData = [
  { "id": 1, "title": "To Kill a Mockingbird" },
  { "id": 2, "title": "1984" },
  { "id": 3, "title": "The Great Gatsby" },
  { "id": 4, "title": "Pride and Prejudice" },
  { "id": 5, "title": "Moby Dick" }
];

app.use(express.json());

/** Get all the books */
app.get('/v1/api/get', (req, res) => {
    if(booksData.length > 0){
        return res.status(200).json(
            {
                data: booksData,
                total: booksData.length,
            }
        )
    }
    return res.status(200).json(
        {
            message: 'No data found'
        }
    )
});

/** Get a book by it's id */
app.get('/v1/api/get/:id', (req, res) => {
    if(booksData.length > 0){
        const id = req.params.id;
        
        const arrIdData = booksData.find(data => data.id == id);
        if(arrIdData){
            return res.status(200).json(
                {
                    data: arrIdData,
                }
            )
        }
        return res.status(200).json(
            {
                message: 'No data found'
            }
        )
    }
})

/** Add new book */
app.post('/v1/api/add', (req, res) => {
    if(req.body.title){
        let newBooksDataId = booksData.length + 1;
        booksData = [...booksData, {id: newBooksDataId, title: req.body.title}];
        return res.status(200).json(
            {
                message: 'New Book added successfully',
                data: booksData,
                total: booksData.length,
            }
        )
    }
    return res.status(404).json(
        {
            message: 'Title not found',
        }
    )
});

/** Delete a book */
app.delete('/v1/api/delete/:id', (req, res) => {
    let id = req.params.id;
    if(id){
        let findIndex = booksData.findIndex(data => data.id == id);
        if(findIndex !== -1){
            booksData.splice(findIndex, 1);
            return res.status(200).json(
                {
                    data: booksData,
                    message: 'Data deleted successfully',
                }
            )
        }
        return res.status(400).json(
            {
                message: 'Book not found',
            }
        )
    }
    return res.status(404).json(
        {
            message: 'Id not found',
        }
    )
});

/** Update the title of a book */
app.put('/v1/api/update/:id', (req, res) => {
    let id = req.params.id;
    if(booksData.length > 0 && req.body.title){
        let updateTitle = req.body.title;
        let booksIdData = booksData.find(data => data.id == id);
        if(booksIdData){
           booksIdData.title = updateTitle
            res.status(200).json({message: 'Book title updated successfully'});
        }
        else{
            res.status(404).json({message: 'Id not found'});
        }
    }
    else{
        res.status(400).json({message: 'No record found'});
    }
})

app.listen((3000), () => {
    console.log('Server started at port 3000');
})