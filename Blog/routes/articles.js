const express = require("express");
const Article = require('./../models/article');
const router = express.Router();

router.get("/new", (req, res) => {
    res.render('articles/new');
});

router.get('/:id', (req, res) => {
        
});

router.post('/', (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try{
    (async function() {
        await article.save();
    })();
    
res.rediect(`/articles/${article.id}`); }
    catch(e) {
       res.render('article/new', {article: article});
    }
});

module.exports = router;