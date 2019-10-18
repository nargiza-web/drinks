//Bismillah her hayirin basidir
const express = require('express');
const app = express();
const models = require('./models'); //HAVE TO PUT THIS WAY!!!!!WEIRD and it will find the categories.js


app.set('view engine', 'pug');

app.get("/", async (req, res) =>{
    let data={};
    data.categories = await models.Categories.findAll();
    res.render('index', data);
});

app.get("/categories/:id",async (req, res) => {
    let data = {};
    data.category = await models.Categories.findOne({
        where: { id: req.params.id}
    });
    res.render("category", data);
});

// app.listen(PORT, () =>{ 
    // console.log(`Listening to port ${PORT}, running succesfully`);
// });
app.listen(process.env.PORT);