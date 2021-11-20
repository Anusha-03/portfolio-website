const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
     title: {
required: true,
required: String
     },
     description: {
         type: String
     },
     markdown: {
         type: String,
         required: true
     },
     createdAt: {
         type: Date,
         default: Date.now
     }
});

module.exports = mongoose.model('Article', articleSchema);