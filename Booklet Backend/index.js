const express = require('express')
const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
const app = express()
const port = 5000
// middle ware
app.use(cors())
app.use(express.json())
///Q1zFEuFIxOXw7rPG    =>password
const uri =
  'mongodb+srv://booklet:Q1zFEuFIxOXw7rPG@cluster0.jjmmeug.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function run() {
  try {
    await client.connect()
    const database = client.db('booklet')
    const bookCollection = database.collection('books')
    const ReviewCollection = database.collection('Reviews')
    console.log('database connected')
    // send books to the database
    app.post('/books', async (req, res) => {
      const book = req.body
      const result = await bookCollection.insertOne(book)
      console.log(result)
      res.json(result)
    })
    //review to database
    app.post('/Reviews', async (req, res) => {
      const Review = req.body
      const result = await ReviewCollection.insertOne(Review)
      console.log(result)
      res.json(result)
    })

    // update data into products collection
    app.put('/books/:id([0-9a-fA-F]{24})', async (req, res) => {
      const id = req.params.id.trim()
      console.log('updating', id)
      const updateBook = req.body
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updateDoc = {
        $set: {
          name: updateBook.name,
          price: updateBook.price,
          author: updateBook.author,
          img: updateBook.img,
        },
      }
      const result = await bookCollection.updateOne(
        filter,
        updateDoc,
        options,
      )
      console.log('updating', id)
      res.json(result)
    })

    // get all books
    app.get('/books', async (req, res) => {
      const cursor = bookCollection.find({})
      const book = await cursor.toArray()
      res.send(book)
    })

    //comment get
    app.get('/Reviews', async (req, res) => {
      const cursor = ReviewCollection.find({})
      const Review = await cursor.toArray()
      res.send(Review)
    })
    // get a single book from book collection
    app.get('/books/:id([0-9a-fA-F]{24})', async (req, res) => {
      const id = req.params.id.trim()
      const query = { _id: ObjectId(id) }
      const book = await bookCollection.findOne(query)
      res.json(book)
    })

    // delete a data from book collection
    app.delete('/books/:id([0-9a-fA-F]{24})', async (req, res) => {
      const id = req.params.id.trim()
      const query = { _id: new ObjectId(id) }
      const result = await bookCollection.deleteOne(query)
      res.json('result')
    })
  } finally {
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Booklet App is running')
})

app.listen(port, () => {
  console.log(`Booklet  on port ${port}`)
})

