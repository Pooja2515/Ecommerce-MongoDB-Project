
db = db.getSiblingDB("ecommerce");

print("\n--- Products Above ₹10,000 ---");
db.products.find({
  price: { $gt: 10000 }
}).forEach(printjson);


print("\n--- Electronics Products ---");
db.products.find({
  category: "Electronics"
}).forEach(printjson);


print("\n--- Products Sorted by Price ---");
db.products.find().sort({
  price: 1
}).forEach(printjson);


print("\n--- Top 2 Products by Price ---");
db.products.find().sort({
  price: -1
}).limit(2).forEach(printjson);


print("\n--- Products with Stock Above 15 ---");
db.products.find({
  stock: { $gt: 15 }
}).forEach(printjson);
