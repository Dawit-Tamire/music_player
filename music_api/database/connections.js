const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/songDb';

// Create a new MongoClient
const client = new MongoClient(uri);

async function mongoose() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to MongoDB');

        // Use a database
        const database = client.db('songDb');
        return database;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = mongoose;
