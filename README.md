# Node.js Express API with MongoDB

## Overview
This project is a simple RESTful API built using Node.js, Express, and MongoDB. It provides CRUD operations for managing products.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (Cloud or Local Instance)

### Step 1: Install Dependencies
```sh
npm install
```

### Step 2: Install Express
```sh
npm install express
```

### Step 3: Install MongoDB Driver
```sh
npm install mongodb mongoose
```

### Step 4: Run the Server
```sh
npm run dev
```
Or using nodemon:
```sh
nodemon index.js
```

## Database Setup
1. Create a MongoDB database (either locally or using MongoDB Atlas).
2. Save your database connection URI, including username and password.
3. Install MongoDB package:
   ```sh
   npm install mongodb
   ```
4. Update the connection string in `index.js` by replacing `<password>` with your actual password and appending your database name after `.net/`.

## API Endpoints
### Base URL: `http://localhost:3000/api/products`

| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | `/`           | Retrieve all products |
| GET    | `/:id`        | Retrieve a product by ID |
| POST   | `/`           | Add a new product |
| PUT    | `/:id`        | Update a product by ID |
| DELETE | `/:id`        | Delete a product by ID |

## Project Structure
```
├── models
│   ├── product.model.js
├── controllers
│   ├── product.controller.js
├── routes
│   ├── product.route.js
├── index.js
├── package.json
```

## Code Breakdown

### `index.js`
- Sets up the Express server
- Connects to MongoDB
- Defines middleware to handle JSON requests
- Includes routes for managing products

### `product.model.js`
Defines the Mongoose schema for a Product, including:
- `name` (String, required)
- `quantity` (Number, default: 0)
- `price` (Number, default: 0)
- `image` (String, optional)

### `product.controller.js`
Handles the logic for API requests:
- `getProducts()` - Fetch all products
- `getProductById(id)` - Fetch a specific product by ID
- `addProducts()` - Add a new product
- `updateProductById(id)` - Update an existing product
- `removeProductById(id)` - Delete a product

### `product.route.js`
Defines the API endpoints and maps them to controller functions.

## Running the Application
1. Start your MongoDB database.
2. Run the server using:
   ```sh
   npm run dev
   ```
3. Access API endpoints using Postman or your browser.

## Notes
- Ensure MongoDB is running before starting the app.
- Use `.env` for storing credentials instead of hardcoding them.

## Future Improvements
- Implement authentication
- Add unit tests
- Improve error handling

## License
This project is open-source and free to use.

