import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const app = express();
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "restaurant_app",
});

// Backend endpoint for a user logging in
app.post("/login", (req, res) => {
  const query = "SELECT username, password FROM account WHERE username = ?";
  const values = [req.body.username];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database query error" });
    }

    if (result.length > 0) {
      const hashedPassword = result[0].password;
      bcrypt.compare(req.body.password, hashedPassword, (err, isMatch) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Error comparing passwords" });
        }

        if (isMatch) {
          res.json({ username: result[0].username });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

// Backend endpoint for a user creating an account
app.post("/account", async (req, res) => {
  const query =
    "INSERT INTO account (`username`, `password`, `type`) VALUES (?, ?, ?);";
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [req.body.username, hashedPassword, req.body.type];

  db.query(query, values, (err, result) => {
    app;
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: err.code });
    } else {
      res.json("Account has been created!");
    }
  });
});

// Backend endpoint for a user adding an address
app.post("/addaddress", (req, res) => {
  const query =
    "INSERT INTO address (`street_addr`, `city`, `state`, `zip`) VALUES (?, ?, ?, ?);";
  const values = [
    req.body.street_addr,
    req.body.city,
    req.body.state,
    req.body.zip,
  ];

  db.query(query, values, (err, result) => {
    app;
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: err.code });
    } else {
      const addressId = result.insertId;
      res.send({ message: "Address has been added!", addressId });
    }
  });
});

// Backend endpoint for a user adding a payment method
app.post("/addpayment", (req, res) => {
  const query =
    "INSERT INTO payment (`card_number`, `expiration`, `cvc`, `type`) VALUES (?, ?, ?, ?);";
  const values = [
    req.body.card_number,
    req.body.expiration,
    req.body.cvc,
    req.body.type,
  ];

  db.query(query, values, (err, result) => {
    app;
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: err.code });
    } else {
      const paymentId = result.insertId;
      res.send({ message: "Payment method has been added!", paymentId });
    }
  });
});

// Backend endpoint for creating a customer out of a user
app.post("/createcustomer", (req, res) => {
  const query =
    "INSERT INTO customer (`cust_username`, `fname`, `lname`, `cust_payment_id`, `address_id`) VALUES (?, ?, ?, ?, ?);";
  const values = [
    req.body.cust_username,
    req.body.fname,
    req.body.lname,
    req.body.cust_payment_id,
    req.body.address_id,
  ];

  db.query(query, values, (err, result) => {
    app;
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: err.code });
    } else {
      res.json("Customer has been created!");
    }
  });
});

// Backend endpoint for creating an employee out of a user
app.post("/createemployee", (req, res) => {
  const query =
    "INSERT INTO employee (`emp_username`, `fname`, `lname`, `emp_restaurant_id`) VALUES (?, ?, ?, ?);";
  const values = [
    req.body.emp_username,
    req.body.fname,
    req.body.lname,
    req.body.emp_restaurant_id,
  ];

  db.query(query, values, (err, result) => {
    app;
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: err.code });
    } else {
      res.json("Employee has been created!");
    }
  });
});

// Backend endpoint for getting a user's type (customer or employee)
app.get("/getusertype", (req, res) => {
  const query = "SELECT type FROM account WHERE username = ?";
  const values = [req.query.username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint for getting the customer's address and payment method
app.get("/getaddressandpayment", (req, res) => {
  const query =
    "SELECT address_id, cust_payment_id FROM customer WHERE cust_username = ?";
  const values = [req.query.username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint for getting the customer's payment method
app.get("/getpaymentid", (req, res) => {
  const query = "SELECT cust_payment_id FROM customer WHERE cust_username = ?";
  const values = [req.query.username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint for getting the available restaurants
app.get("/getrestaurants", (req, res) => {
  const query = "SELECT restaurant_id FROM restaurant";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint for getting the restaurant ID of an employee
app.get("/getrestaurant", (req, res) => {
  const query = "SELECT emp_restaurant_id FROM employee WHERE emp_username = ?";
  const values = [req.query.username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Check if an item is in an order
app.get("/checkorderitem", (req, res) => {
  const query = "SELECT * FROM order_item WHERE item_name = ?";
  const values = [req.query.item_name];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint for adding items to the menu
app.post("/addmenuitem", (req, res) => {
  const query =
    "INSERT INTO menu_item (`name`, `price`, `category`, `description`) VALUES (?, ?, ?, ?);";
  const values = [
    req.body.name,
    req.body.price,
    req.body.category,
    req.body.description,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Menu item added!");
    }
  });
});

// Backend endpoint for getting the menu
app.get("/getmenu", (req, res) => {
  const query = "SELECT * FROM menu_item";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint to check if a customer has an order
app.get("/checkorder", (req, res) => {
  const query = "SELECT * FROM customer_order WHERE username = ?";
  const values = [req.query.username];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Backend endpoint to update a menu item
app.put("/editmenuitem", (req, res) => {
  const query =
    "UPDATE menu_item SET `name` = ?, `price` = ?, `category` = ?, `description` = ? WHERE `name` = ?;";
  const values = [
    req.body.name,
    req.body.price,
    req.body.category,
    req.body.description,
    req.body.oldName,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Menu item updated!");
    }
  });
});

// Backend endpoint to update a payment method
app.put("/updatepayment", (req, res) => {
  const query =
    "UPDATE payment SET `card_number` = ?, `expiration` = ?, `cvc` = ?, `type` = ? WHERE `payment_id` = ?;";
  const values = [
    req.body.card_number,
    req.body.expiration,
    req.body.cvc,
    req.body.type,
    req.body.payment_id,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Payment method updated!");
    }
  });
});

// Backend endpoint to delete a menu item
app.delete("/deletemenuitem", (req, res) => {
  const query = "DELETE FROM menu_item WHERE name = ?;";
  const values = [req.query.name];
  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Menu item deleted!");
    }
  });
});

// Backend endpoint to place an order
app.post("/placeorder", (req, res) => {
  const { username, address_id, payment_id, restaurant_id, items } = req.body;
  const time_placed = new Date().toISOString().slice(0, 19).replace("T", " ");

  const orderQuery = `
    INSERT INTO customer_order (username, time_placed, address_id, payment_id, restaurant_id)
    VALUES (?, ?, ?, ?, ?);
  `;

  const paymentCheckQuery = `
    SELECT 1 FROM payment WHERE payment_id = ? AND expiration > CURRENT_DATE;
  `;

  // First, begin the transaction
  db.beginTransaction((err) => {
    // If the transaction fails to start, return an error
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).json({ error: "Transaction error" });
    }

    // Next, check the users payment method
    db.query(paymentCheckQuery, [payment_id], (err, results) => {
      // If the payment check fails, rollback the transaction and return an error
      if (err) {
        return db.rollback(() => {
          console.error("Error checking payment:", err);
          res.status(500).json({ error: "Payment check error" });
        });
      }

      // If the payment method is invalid or expired, return an error
      if (results.length === 0) {
        return db.rollback(() => {
          res.status(400).json({ error: "Invalid or expired payment" });
        });
      }

      // If the payment method is valid, insert the order into the customer_order table
      db.query(
        orderQuery,
        [username, time_placed, address_id, payment_id, restaurant_id],
        (err, result) => {
          if (err) {
            // The customer has an ongoing order already, return this specific error
            if (err.code === "ER_DUP_ENTRY") {
              return db.rollback(() => {
                console.error("Duplicate entry error:", err);
                res.status(400).json({ error: "Duplicate entry" });
              });
            }
            // If the order insertion fails for another reason, rollback the transaction and return an error
            return db.rollback(() => {
              console.error("Error inserting order:", err);
              res.status(500).json({ error: "Order insertion error" });
            });
          }

          // Set up promises to insert each item into the order_item table
          const insertOrderItems = () => {
            const promises = Object.entries(items).map(([item, quantity]) => {
              return new Promise((resolve, reject) => {
                const orderItemQuery = `
                INSERT INTO order_item (username, item_name, quantity)
                VALUES (?, ?, ?);
              `;
                db.query(orderItemQuery, [username, item, quantity], (err) => {
                  if (err) {
                    return reject(err);
                  }
                  resolve();
                });
              });
            });

            return Promise.all(promises);
          };

          // Execute the promises to insert each item into the order_item table
          insertOrderItems()
            .then(() => {
              // Commit and if successful, return a success message, else rollback and return an error
              db.commit((err) => {
                if (err) {
                  return db.rollback(() => {
                    console.error("Error committing transaction:", err);
                    res.status(500).json({ error: "Transaction commit error" });
                  });
                }

                res.json({ message: "Order placed successfully!" });
              });
            })
            .catch((err) => {
              db.rollback(() => {
                console.error("Error inserting order items:", err);
                res.status(500).json({ error: "Order items insertion error" });
              });
            });
        }
      );
    });
  });
});

// Backend endpoint to get aggregate information about a restaurant
app.get("/aggregate", (req, res) => {
  const restaurant_id = req.query.restaurant_id;
  // Get the total number of orders for a restaurant
  const ordersQuery = `
    SELECT COUNT(*) AS total_orders
    FROM customer_order
    WHERE restaurant_id = ?;
  `;

  // Get the total revenue for a restaurant
  const revenueQuery = `
    SELECT SUM(oi.quantity * mi.price) AS total_revenue
    FROM order_item oi
    JOIN menu_item mi ON oi.item_name = mi.name
    JOIN customer_order co ON oi.username = co.username
    WHERE co.restaurant_id = ?;
  `;

  // Get all current order item counts
  const orderItemsQuery = `
    SELECT item_name, SUM(quantity) AS total_ordered
    FROM order_item
    JOIN customer_order ON order_item.username = customer_order.username
    WHERE customer_order.restaurant_id = ?
    GROUP BY item_name;
  `;

  db.query(ordersQuery, [restaurant_id], (err, orders) => {
    if (err) {
      console.error("Error executing orders query:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    db.query(revenueQuery, [restaurant_id], (err, revenue) => {
      if (err) {
        console.error("Error executing revenue query:", err);
        return res.status(500).json({ error: "Database query error" });
      }

      db.query(orderItemsQuery, [restaurant_id], (err, orderItems) => {
        if (err) {
          console.error("Error executing order items query:", err);
          return res.status(500).json({ error: "Database query error" });
        }

        res.json({
          total_orders: orders[0]["total_orders"],
          revenue: revenue[0]["total_revenue"],
          orderItems,
        });
      });
    });
  });
});

// Backend endpoint to get order details
app.get("/orderdetails", (req, res) => {
  const order = req.query.order;
  const restaurant_id = req.query.restaurant_id;

  let value = "";
  if (order === "lname") {
    value = "c.lname";
  } else if (order === "fname") {
    value = "c.fname";
  } else if (order === "newest") {
    value = "co.time_placed DESC";
  } else if (order === "oldest") {
    value = "co.time_placed ASC";
  } else if (order === "expensive") {
    value = "total_price DESC";
  } else if (order === "cheap") {
    value = "total_price ASC";
  }

  const query = `
    SELECT co.username, c.fname, c.lname, co.time_placed, a.street_addr, a.city, a.state, a.zip, 
           SUM(oi.quantity * mi.price) AS total_price
    FROM customer_order co 
    JOIN order_item oi ON co.username = oi.username
    JOIN customer c ON co.username = c.cust_username
    JOIN menu_item mi ON oi.item_name = mi.name
    JOIN address a ON co.address_id = a.address_id
    WHERE co.restaurant_id = ?
    GROUP BY co.username, c.fname, c.lname, co.time_placed, a.street_addr, a.city, a.state, a.zip
    ORDER BY ${value};
  `;

  const orderItemsQuery = `
  SELECT oi.username, oi.item_name, oi.quantity
  FROM order_item oi
`;

  db.query(query, [restaurant_id], (err, orderDetails) => {
    if (err) {
      console.error("Error executing order details query:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    db.query(orderItemsQuery, (err, orderItems) => {
      if (err) {
        console.error("Error executing order items query:", err);
        return res.status(500).json({ error: "Database query error" });
      }

      // Add the order items to the order details
      const ordersWithItems = orderDetails.map((order) => {
        const items = orderItems.filter(
          (item) => item.username === order.username
        );
        return { ...order, items };
      });

      res.json(ordersWithItems);
    });
  });
});

// Complete an order (delete the order from the customer_order table)
app.post("/completeorder", (req, res) => {
  const username = req.body.username;

  // This will do a cascading deletion and delete order_items where the username matches too
  const query = "DELETE FROM customer_order WHERE username = ?;";
  db.query(query, [username], (err, result) => {
    if (err) {
      console.error("Error completing order:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    res.json("Order completed!");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
