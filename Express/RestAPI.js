const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let products = [
    {
        "id": 0,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
    },
    {
        "id": 1,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",

    },
    {
        "id": 2,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
    },
    {
        "id": 3,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
    },
    {
        "id": 4,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
    }
]

let dummy=products;

app.get('/', (req, res) => {
    res.send(`<a href="/new">Go To Product Page</a>`)
    // res.send('Home Page , Go To New Route');
})

app.get('/new', (req, res) => {
    res.render("RestApi", { products });
})

app.get('/new:id', (req, res) => {
    let { id } = req.params
    let newData = products.find((a) => {
        return a.id == id;
    })
    res.render("RestNew", { newData });
})

app.get('/new/form', (req, res) => {
    // res.send("From")
    res.render('Form');
})

app.post('/new', (req, res) => {
    let { title, category, description } = req.body;
    // console.log(title);
    products.push({ title, category, description, id: products.length });
    res.redirect('/new')
})

app.get('/new/edit:id', (req, res) => {
    let { id } = req.params;
    let editData = products.find((a) => {
        return a.id == id;
    })
    res.render("Edit", { editData });
})


app.post('/new/update:id', (req, res) => {
    let { title, category, description } = req.body;
    // console.log({ title, category, description });
    let { id } = req.params;
    let upData = products.find((a) => {
        return a.id == id
    })
    upData.title=title;
    upData.category=category;
    upData.description=description;
    res.redirect("/new");
})

// Edit Data 
app.get('/new/remove:id',(req,res)=>{
   let {id}= req.params;
  let newProducts= products.filter((a)=>{
    return a.id!=id;
   })

   products=newProducts;
   res.redirect("/new")
})

app.get('/new/return',(req,res)=>{
    products = dummy;
    res.redirect('/new')
})

app.listen(8000, () => {
    console.log('Server Started on port 8000');
})