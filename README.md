# SDE API Round

## Setup

1. Clone the repository:
2. Install dependencies:
3. Create a `.env` file in the root directory and add the following environment variables:

```
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=cricbuzz
   JWT_SECRET=your_jwt_secret
```

4. Create the MySQL database:

```
    mysql -u root -p

    CREATE DATABASE cricbuzz;
    USE cricbuzz;
```

5. Run the server:

   `npm start`
