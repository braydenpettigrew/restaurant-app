import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

// Load environment variables
dotenv.config();

// Create a MySQL connection
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "restaurant_app",
});

// Generate a random card type (C or D)
const randomCardType = () => {
  const cardTypes = ["C", "D"];
  return cardTypes[Math.floor(Math.random() * cardTypes.length)];
};

// Function to generate random customer data
const generateCustomerData = async () => {
  const password = faker.internet.password();
  const hashedPassword = await bcrypt.hash(password, 10);
  return {
    username: faker.internet.username().slice(0, 12),
    password: hashedPassword,
    fname: faker.person.firstName().slice(0, 12),
    lname: faker.person.lastName().slice(0, 12),
    street_addr: faker.location.streetAddress().slice(0, 40),
    city: faker.location.city().slice(0, 20),
    state: "PA",
    zip: faker.location.zipCode().slice(0, 5),
    card_number: faker.finance
      .creditCardNumber()
      .replace(/-/g, "")
      .slice(0, 16),
    expiration: faker.date.future().toISOString().split("T")[0], // YYYY-MM-DD format
    cvc: faker.finance.creditCardCVV(),
    card_type: randomCardType(),
  };
};

// Generate random restaurant id number (1 or 2)
const randomRestaurant = () => {
  return Math.floor(Math.random() * 2) + 1;
};

// Function to generate employee data
const generateEmployeeData = async () => {
  const password = faker.internet.password();
  const hashedPassword = await bcrypt.hash(password, 10);
  return {
    username: faker.internet.username().slice(0, 12),
    password: hashedPassword,
    fname: faker.person.firstName().slice(0, 12),
    lname: faker.person.lastName().slice(0, 12),
    restaurant_id: randomRestaurant(),
  };
};

// Function to insert customer data into the database
const insertCustomerData = async (customer) => {
  const accountQuery = `
    INSERT INTO account (username, password, type)
    VALUES (?, ?, ?);
  `;
  const addressQuery = `
    INSERT INTO address (street_addr, city, state, zip)
    VALUES (?, ?, ?, ?);
  `;
  const paymentQuery = `
    INSERT INTO payment (card_number, expiration, cvc, type)
    VALUES (?, ?, ?, ?);
  `;
  const customerQuery = `
    INSERT INTO customer (cust_username, fname, lname, address_id, cust_payment_id)
    VALUES (?, ?, ?, ?, ?);
  `;

  try {
    await db.beginTransaction();

    const [accountResult] = await db.query(accountQuery, [
      customer.username,
      customer.password,
      "C",
    ]);

    const [addressResult] = await db.query(addressQuery, [
      customer.street_addr,
      customer.city,
      customer.state,
      customer.zip,
    ]);
    const address_id = addressResult.insertId;

    const [paymentResult] = await db.query(paymentQuery, [
      customer.card_number,
      customer.expiration,
      customer.cvc,
      customer.card_type,
    ]);
    const payment_id = paymentResult.insertId;

    await db.query(customerQuery, [
      customer.username,
      customer.fname,
      customer.lname,
      address_id,
      payment_id,
    ]);

    await db.commit();
  } catch (err) {
    await db.rollback();
    throw err;
  }
};

const insertEmployeeData = async (employee) => {
  const accountQuery = `
        INSERT INTO account (username, password, type)
        VALUES (?, ?, ?);
    `;
  const employeeQuery = `
        INSERT INTO employee (emp_username, fname, lname, emp_restaurant_id)
        VALUES (?, ?, ?, ?);
    `;

  try {
    await db.beginTransaction();

    await db.query(accountQuery, [employee.username, employee.password, "E"]);

    await db.query(employeeQuery, [
      employee.username,
      employee.fname.slice(0, 20),
      employee.lname.slice(0, 20),
      employee.restaurant_id,
    ]);

    await db.commit();
  } catch (err) {
    await db.rollback();
    throw err;
  }
};

// Function to create multiple customer accounts
const createCustomers = async (numCustomers) => {
  for (let i = 0; i < numCustomers; i++) {
    const customer = await generateCustomerData();
    try {
      await insertCustomerData(customer);
      console.log(`Customer ${i + 1} created successfully`);
    } catch (err) {
      console.error(`Error creating customer ${i + 1}:`, err);
    }
  }
};

const createEmployees = async (numEmployees) => {
  for (let i = 0; i < numEmployees; i++) {
    const employee = await generateEmployeeData();
    try {
      await insertEmployeeData(employee);
      console.log(`Employee ${i + 1} created successfully`);
    } catch (err) {
      console.error(`Error creating employee ${i + 1}:`, err);
    }
  }
};

// Create 10 random customer accounts
await createCustomers(100);
await createEmployees(20);
await db.end();
