const db = require("../models");
const md5 = require("react-native-md5");
const await = require("await");
const path = require("path");

const Product = db.product_model;

exports.addProduct = async function(req, res){
    let data = {
        name:req.body.name,
        description:req.body.des,
        price:req.body.price,
        category:req.body.category,
        image:req.file.filename
    }
    console.log(data);
    const product = await Product.create(data);

    res.send({message:"Product added successfully"});
}


exports.getProducts = async function(req,res){
    const products = await Product.findAll();
    if(products)
    {
        res.status(200).json({
            status : true,
            message: "Products Found.",
            data: products,
        });
    }
    else
    {
        res.status(200).json({
            status : false,
            message: "No Products Found.",
            data: products,
        });     
    }
}


exports.getProduct = async function(req, res){
    const id = req.params.id;
    const product = await Product.findOne({where: {id: id}});
    if(product)
    {
        res.status(200).json({
            status : true,
            message: "Products Found.",
            data: product,
        });
    }
    else
    {
        res.status(200).json({
            status : false,
            message: "No Products Found.",
            data: product,
        });     
    }
}

exports.updateProduct = async function(req, res)
{
    let id = req.params.id;
    console.log(req.body);
    let product = await Product.update(req.body, {where: {id: id}});
    let data = await Product.findOne({where: {id: id}});
    res.status(200).send({message:"Product updated successfully", data:data});
} 


exports.deleteProduct = async function (req, res) {
    const id = req.params.id;

    const product = await Product.destroy({where: {id: id}});
    if (product) {
        
        res.status(200).json({
            status : true,
            message: "Product Deleted Successfully.",
        });

    } else {
        res.status(200).json({
            status : false,
            message: "No Data Found.",
            data: product,
        });
    }
}

exports.upload_file = async function (req,res)  {
    console.log("uploadfileurl", req.file);
    return  res.status(200).json({
        success: true,
        message: "image save in folder Successfully.",
        data: req.file,
      });
}