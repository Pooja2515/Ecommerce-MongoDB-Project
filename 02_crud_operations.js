
db = db.getSiblingDB("ecommerce");

// READ
print("\n--- All Products ---");
db.products.find().forEach(printjson);

// CREATE: Add a new product
print("\n--- Adding a New Product ---");
db.products.insertOne({
  name: "Keyboard",
  category: "Accessories",
  price: 1500,
  stock: 30
});
print("Product added successfully!");

// UPDATE
db.products.updateOne(
  { name: "Keyboard" },
  { $set: { price: 1800 } }
);
print("Product price updated!");

// DELETE
db.products.deleteOne({ name: "Keyboard" });
print("Product deleted!");

// RESULT
print("\n--- Final Product List ---");
db.products.find().forEach(printjson);
