const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) =>  {

    const posts = await loadPostsColection();

    // posts query
    res.send(await posts.find({}).toArray());

});


// Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsColection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
});

// Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsColection();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });

    res.status(200).send();
});

async function loadPostsColection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://full-stack-vue-express-user:k66HVgAX7Z2LoT5w@full-stack-vue-express-wkpxk.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('full-stack-vue-express').collection('posts');

}

module.exports = router;