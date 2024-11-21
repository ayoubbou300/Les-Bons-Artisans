const mongoose = require('mongoose');
const Product = require('./models/productModel');

const products = [
  { name: "AC1 Phone1", type: "phone", price: 200.05, rating: 3.8, warranty_years: 1, available: true },
  { name: "AC2 Phone2", type: "phone", price: 147.21, rating: 1, warranty_years: 3, available: false },
  { name: "AC3 Phone3", type: "phone", price: 150, rating: 2, warranty_years: 1, available: true },
  { name: "AC4 Phone4", type: "phone", price: 50.20, rating: 3, warranty_years: 2, available: true }
];

mongoose.connect('mongodb://localhost:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    await Product.insertMany(products);
    console.log('Products inserted');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
