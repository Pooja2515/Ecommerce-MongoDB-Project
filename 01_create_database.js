// E-commerce Database Management System

db = db.getSiblingDB("ecommerce");

db.products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    stock: 10
  },
  {
    name: "Mobile",
    category: "Electronics",
    price: 20000,
    stock: 25
  },
  {
    name: "Headphones",
    category: "Accessories",
    price: 3000,
    stock: 40
  }
]);

print("E-commerce database initialized!");
print("Products inserted successfully!");