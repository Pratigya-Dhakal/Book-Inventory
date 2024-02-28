const express = require('express');
const app = express();
require('dotenv');

const port = process.env.PORT || 5000;
const cors = require('cors');


//middleware
app.use(cors());
app.use(express.json());

//mongodb cconfigurations

const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
const uri = "mongodb+srv://mern-book-store:JmoGKvpS7I27BRdm@cluster0.zrimkd2.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //create a collection of documents
        const bookCollections = client.db("bookInventory").collection("books");
        // Insert a new book to the database using post method

        app.post('/upload-book',async (req, res) => { 
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
        });

        //get data from database

        app.get('/get-books', async(req,res)=>{
            const books = bookCollections.find();
            const result = await books.toArray();
            res.send(result);
        })
        // get single book from the database
        app.get( '/book/:id', async(req, res)=> {
            const id = req.params.id;
            const filter = {_id : new ObjectId(id)};
            const result = await bookCollections.findOne(filter);
            res.send(result);

        })


        //update data in the database : put or patch

        app.patch('/book/:id', async(req,res)=>{
            const id = req.params.id;
            const updateBookData = req.body;
            console.log(id);
            const filter = {_id  : new ObjectId(id)};
            const  option ={upsert : true};

            const updateDoc = {
                $set: {
                    ...updateBookData
                }
            }

            const result= await bookCollections.updateOne(filter, updateDoc, option);
            res.send(result);
        });

        //delete data from the database
        app.delete('/book/:id', async(req,res)=>{
            const id = req.params.id;
            const filter = {_id : new ObjectId(id)};
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        });


        //filter data from the database :find by category
        app.get('/filter-books', async(req, res)=>{
            let query = {};
            if(req.query?.category){
                query = {category :req.query.category};

            }  
            const result = await bookCollections.find(query).toArray();
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {  
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

