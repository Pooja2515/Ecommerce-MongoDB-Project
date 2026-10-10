
db = db.getSiblingDB("ecommerce");

// Create indexes
db.products.createIndex({ category: 1 });
db.products.createIndex({ price: 1 });


// Display indexes
print("\n--- Product Indexes ---");
db.products.getIndexes().forEach(printjson);


// Test
print("\n--- Electronics Search ---");
db.products.find({
  category: "Electronics"
}).forEach(printjson);
