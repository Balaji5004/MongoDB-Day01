//(QUES:1) Find all the information about each products??
     step1: db.products.insertMany({})
     step2: db.products.find().toArray()

//(QUES:2) Find the product price which are between 400 to 800??
     db.products.find({product_price:{$gt:400,$lt:800}}).sort({product_price:1})

//(QUES:3) Find the product price which are not between 400 to 600??
     db.products.find({product_price:{$not:{$gt:400,$lt:600}}}).sort({product_price:1}).toArray()

//(QUES:4) List the four product which are grater than 500 in price ??
     db.products.find({product_price:{$gt:500}}).limit(4)

//(QUES:5) Find the product name and product material of each products??
     db.products.find().forEach(function(prod){print("Product-Name::",prod.product_name,"Material::",prod.product_material)})

//(QUES:6) Find the product with a row id of 10??
     db.products.find({id:"10"})

//(QUES:7) Find only the product name and product material??
     db.products.find({product_name:"Generic Wooden Pizza",product_material:"Frozen"})

//(QUES:8) Find all products which contain the value of soft in product material??
     db.products.aggregate([{$match:{product_material:"Soft"}}])

//(QUES:9) Find products which contain product color indigo  and product price 492.00??
     db.products.find({$or:[{product_color:"indigo"},{product_price:492.00}]})

//(QUES:10) Delete the products which product price value are same??
    db.products.find({product_price:{$gt:0}}).sort({product_price:1})

    db.products.deleteMany({product_price:36})