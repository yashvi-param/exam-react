<img width="1917" height="820" alt="Screenshot 2026-01-28 151305" src="https://github.com/user-attachments/assets/bf8230e6-e478-403b-b8a4-a06e3faaed4b" />

🔐 React Login Page (Redux + Bootstrap)

This project contains a Login component built using React, Redux Toolkit, and React Bootstrap.
It authenticates users by matching credentials from a local users API and stores login data in Redux.

🚀 Features

User login with username & password

Authentication using Redux Toolkit

Error handling for invalid credentials

Styled using React Bootstrap

Redirects user after successful login

🛠️ Tech Stack

React

Redux Toolkit

React Redux

React Bootstrap

JavaScript (ES6)

Fetch API

📂 Component Overview

File: Login.jsx

Main Responsibilities:

Collect username and password

Fetch users from API

Validate login credentials

Dispatch login data to Redux store

Redirect user to home page

🔁 Redux Integration

This component uses Redux to store logged-in user data.

Redux Action Used:
loginSuccess({
  id: user.id,
  username: user.username,
  role: user.role,
});


Make sure recipeSlice.js contains a loginSuccess reducer.

🌐 API Requirement

The component fetches users from:

http://localhost:5173/users


⚠️ Note:
Usually, APIs run on ports like 3000 or 5000.
If you are using json-server, your command might look like:

json-server --watch db.json --port 5173

Sample db.json
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "1234",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "user",
      "password": "1234",
      "role": "user"
    }
  ]
}

▶️ How to Run the Project

Install dependencies:

npm install


Start the React app:

npm run dev


Start json-server (if used):

json-server --watch db.json --port 5173

🎨 UI Layout

Centered login card

Bootstrap form fields

Error alert on invalid login

Responsive design

🔐 Login Flow

User enters credentials

App fetches users list

Credentials are validated

Redux state is updated

User is redirected to /

✅ Improvements You Can Add

Password hashing

JWT authentication

Protected routes

Logout functionality

API error handling

Environment variables for API URL
