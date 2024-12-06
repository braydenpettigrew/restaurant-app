# Essential System Environments
Our database application is a web app designed for customers and employees to make or manage orders for a chain sushi restaurant. The application requires Node.js and Node Package Manager (npm), which can be downloaded and installed from their website. Additionally, the app is designed to be compatible with MySQL, so installing both the MySQL server and MySQL Workbench from their website is also necessary.
The frontend was developed using React, while the backend utilizes the Express.js framework. Additional packages used to develop the frontend include styled-components for styling HTML elements and creating components and axios for making HTTP requests from a web browser. Additional packages used to develop the backend include cors for managing cross-origin resource sharing, nodemon for automatic server restarts during development, mysql2 for interacting with the database, dotenv for environment variables, faker to populate the database with accounts, and bcrypt for hashing passwords, all of which can be installed via npm.

# Deployment
1. Ensure Node.js, node package manager, and MySQL server and workbench are installed on your system.
2. Clone the GitHub repository containing the application’s source code. 
3. Using the provided database file that is included in the GitHub repository, import the schema into an existing database using MySQL workbench. 
4. Some code in “backend.js” must be changed:
   
![Alt text](https://github.com/braydenpettigrew/restaurant-app/blob/main/readme-image.png)

Add the root password for MySQL on your machine and the database name you chose when uploading the database template file.
6. Using a terminal, navigate to the “backend” directory and run the command “npm install”. This installs necessary packages for the backend. 
7. Once the necessary packages have been installed, run “npm start” in the backend directory. The message “Connected to backend!” should be displayed in the terminal.
8. Repeat steps 5 and 6 for the “client” directory. This installs necessary packages and starts the frontend. 
9. Navigate to http://localhost:3000/ to use the application.


# Application Functionality
Our web app supports two types of users, customers and employees, each having their own unique permissions. The following descriptions outline the functionality available to the two types of users.

## Customer Functionalities

### Account Creation (Saving Address and Payment Information)
A customer first must create an account in order to use the app. Customer account creation is accessed on the login page of the app by pressing the “Create Account” button. Since this is a customer account, “Customer” should be chosen as the account type. The customer will be asked to enter their first name, last name, username, and password. After this, the customer will be asked to enter an address (street address, city, state, and ZIP) and payment information (card number, expiration date, CVC, and card type). Once all fields have been filled, press “Create” to make the account or press “Login” to return to the login page.

### Account Login and Logout
Once a customer has an account, they are able to login to their account using the same username and password they entered on account creation. On the login page, fill the username and password fields and press “Login” to access a customer account. Once logged in, the customer will be moved to the home screen. Customers can press “Logout” at the top right corner of the screen to log out at any time.

### Viewing the Menu
Once a customer has successfully logged in, they can press the “View the menu!” button on the home page to view the current selection of menu items. On the menu screen, customers can see the name, category, price, and description of every item currently on the menu. To return to the home page, press the “Exit Menu” button in the top left corner of the menu screen.

### Placing and Canceling Orders
On the menu screen, customers are able to place orders of one or more items available from the menu. To add an item to an order, press the “Add” button on the desired menu item. The “Add” button can be pressed multiple times to increase the quantity of that item in the order. To remove an item from an order, press the “Remove” button as many times as necessary. When the order is ready to be placed, the customer can select at which restaurant they would like to place their order using the dropdown menu under the “Restaurant” label. Finally, they can press the “Place Order” button at the bottom of the screen to finalize their order. The customer’s payment information must be valid, otherwise, the order cannot be placed. Note that only one order can be placed at a time. Attempting to place multiple orders will give an error message. Orders can be cancelled by pressing the “Cancel my order!” button on the home page.

### Updating Payment Information
To update payment information, the customer can press the “Update payment method!” on the home page. They will be redirected to a screen where they can input their new card number, expiration date, CVC, and card type. Once these fields have been filled out, they can press “Update” to make the changes or “Cancel and Go Back” to keep their original payment method.

## Employee Functionalites

### Account Creation
Like customer account creation, employee account creation is accessed on the login page of the app by pressing the “Create Account” button. Since this is an employee account, “Employee” should be chosen as the account type. The employee will be asked to enter their first name, last name, username, and password. After this, the employee will be asked to choose their employment location from a dropdown list. Once all fields have been filled, press “Create” to make the account or press “Login” to return to the login page.

### Account Login and Logout
Once an employee has an account, they are able to login to their account using the same username and password they entered on account creation. On the login page, fill the username and password fields and press “Login” to access the account. Once logged in, the employee will be moved to the home screen. Employees can press “Logout” at the top right corner of the screen to log out at any time.

### Viewing the Menu
Once an employee has successfully logged in, they can press the “View the menu!” button on the home page to view the current selection of menu items. On the menu screen, employees can see the name, category, price, and description of every item currently on the menu. To return to the home page, press the “Exit Menu” button in the top left corner of the menu screen.

### Editing and Deleting Menu Items
In addition to seeing the regular information, every menu item has an “Edit” and “Delete” button on the menu screen. Pressing “Delete” will immediately remove an item from the menu, deleting all of its data. Pressing “Edit” will redirect the employee to a page where they can change the item’s name, price, category and/or description. Pressing “Edit” on this page will finalize the changes, but pressing “Cancel and Go Back” will leave the item in its original state. If an employee tries to finalize edits for an item or tries to delete an item that is currently in an ongoing order, they will receive an error message indicating that they cannot perform that action at that time.

### Adding Menu Items
Employees can add menu items by pressing the “Add menu item!” button on the home page. Once pressed, they will be redirected to a page where they can input the new item’s name, price, category, and description. Once these fields have been filled, the employee can press “Add” to finalize the addition. At any time, the employee can press “Go Back” at the left to cancel the addition.
Viewing Order Report and Closing Orders
An informational report of current orders at their restaurant can be generated by employees. Pressing the “View ongoing orders!” button will take employees to a page where all current orders are displayed. Every order is displayed with the customer’s username, full name, time placed, customer address, total price, and the items included in the order. Buttons at the top can be pressed to organize the orders based on values like price and time placed. Each order also has a “Complete Order” button. Pressing this closes the order, indicating that it has been successfully delivered. Additionally, the total number of orders, the total price of all orders combined, and the total number of each menu item in all orders can be displayed by pressing the “View Report” button on the right of the screen. At any time, the employee can press “Go Back” to return to the home page. 
