# Express MongoDB User API

A RESTful API for user management built with Node.js, Express.js, and MongoDB. This project demonstrates CRUD operations, database connectivity, and HTTP request handling.

## Features

- Retrieve all users
- Retrieve a single user by ID
- Create a new user
- Update an existing user
- Delete a user
- Connect to MongoDB using the official MongoDB Node.js driver
- Configure environment variables with dotenv
- Handle cross-origin requests with CORS

## Tech Stack

- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- dotenv
- CORS

## API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| GET    | `/`          | Check server status   |
| GET    | `/users`     | Retrieve all users    |
| GET    | `/users/:id` | Retrieve a user by ID |
| POST   | `/users`     | Create a new user     |
| PATCH  | `/users/:id` | Update a user         |
| DELETE | `/users/:id` | Delete a user         |

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account or MongoDB instance

### Installation

Clone the repository:

```bash
git clone YOUR_SERVER_REPOSITORY_URL
cd express-mongodb-user-api
npm install
```

Create a `.env` file in the project root:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=5000
```

Configure your MongoDB connection string in `index.js` to use these environment variables securely. Never commit your actual credentials.

### Run the Server

```bash
npm start
```

The server uses port `5000` by default unless another port is configured through the `PORT` environment variable.

## Example Requests

Create a user:

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Mehedi Hasan",
  "email": "mehedi@example.com"
}
```

Update a user:

```http
PATCH /users/USER_ID
Content-Type: application/json
```

```json
{
  "name": "Updated Name"
}
```

Replace `USER_ID` with a valid MongoDB document ID.

## Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| `DB_USER` | MongoDB database username       |
| `DB_PASS` | MongoDB database password       |
| `PORT`    | Server port; defaults to `5000` |

## Learning Objectives

This project was built as part of REST API and CRUD practice, focusing on Express.js routing, MongoDB integration, environment configuration, and HTTP methods.

## License

This project is available for learning and educational purposes.
