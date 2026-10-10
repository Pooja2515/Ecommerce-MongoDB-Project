
db = db.getSiblingDB("ecommerce");

db.orders.deleteMany({});

db.orders.insertMany([
  {
    orderId: 101,
    product: "Laptop",
    quantity: 2,
    price: 50000,
    month: "January"
  },
  {
    orderId: 102,
    product: "Mobile",
    quantity: 5,
    price: 20000,
    month: "January"
  },
  {
    orderId: 103,
    product: "Laptop",
    quantity: 1,
    price: 50000,
    month: "February"
  },
  {
    orderId: 104,
    product: "Headphones",
    quantity: 10,
    price: 3000,
    month: "February"
  }
]);

print("\n--- Total Revenue ---");
db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  }
]).forEach(printjson);

print("\n--- Revenue by Product ---");
db.orders.aggregate([
  {
    $group: {
      _id: "$product",
      totalRevenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  },
  { $sort: { totalRevenue: -1 } }
]).forEach(printjson);

print("\n--- Revenue by Month ---");
db.orders.aggregate([
  {
    $group: {
      _id: "$month",
      revenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  },
  { $sort: { _id: 1 } }
]).forEach(printjson);
