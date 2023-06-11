# MERN-Auth Exploration

MERN-Auth Exploration is a full-stack web application built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This project serves as a starting point for exploring user authentication and authorization in a MERN-based application. It provides functionality for user login, signup, and interest form submission, and implements JWT (JSON Web Tokens) for user authentication.

## Note
Please note that the MongoDB cluster previously used for this project has been shut down. As a result, the steps provided below for installation and setup may no longer work as intended

## Features

- User authentication and authorization
- User login and signup
- Interest form submission
- JWT-based authentication

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mern-auth-exploration.git
```

2. Navigate to the project directory:

```bash
cd mern-auth-exploration
```

3. Install the dependencies for the backend:

```bash
cd backend
npm install
```

4. Configure the environment variables:

   - Create a `.env` file in the `backend` directory.
   - Specify the required environment variables in the `.env` file. For example:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern_auth
   JWT_SECRET=mysecretkey
   ```

5. Start the backend server:

```bash
npm start
```

6. Install the dependencies for the frontend:

```bash
cd ../frontend
npm install
```

7. Configure the API endpoint:

   - Open `src/config.js` file.
   - Set the `API_BASE_URL` variable to the backend server URL. For example:

   ```javascript
   export const API_BASE_URL = 'http://localhost:5000/api';
   ```

8. Start the frontend development server:

```bash
npm start
```

9. Open your web browser and visit `http://localhost:3000` to see the application in action.

## Usage

### User Signup

1. Navigate to the landing page.
2. Click on the "Signup" button.
3. Fill in the required information in the signup form.
4. Click on the "Signup" button to create a new user account.

### User Login

1. Navigate to the landing page.
2. Click on the "Login" button.
3. Enter your login credentials in the login form.
4. Click on the "Login" button to log in to your account.

### Interest Form Submission

1. Navigate to the interest form.
2. Fill in the required information in the interest form.
3. Click on the "Submit" button to submit the form.

## Contact

For any inquiries or feedback, please contact me at ashmurali77@gmail.com -- I'd love to chat and learn more!
