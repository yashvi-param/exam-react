<img width="1911" height="842" alt="Screenshot 2026-01-29 180556" src="https://github.com/user-attachments/assets/327aaa46-8004-4694-8cfe-dfd079c167a9" />

🍲 Recipe Book Application

A Recipe Book web application built using React, React Router, and Redux.
It supports authentication, protected routes, and CRUD operations for managing recipes.

🚀 Features

🔐 Login authentication

🛡️ Protected routes using PrivateRoute

📋 View all recipes

➕ Add new recipes

📝 View recipe details

🧭 Client-side routing with React Router

🎨 Responsive UI (Bootstrap / CSS)

🧩 Tech Stack

React

React Router DOM

Redux / React-Redux

Bootstrap

Axios (for API calls)

📁 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Login.jsx
│   ├── RecipeList.jsx
│   ├── RecipeForm.jsx
│   ├── RecipeDetails.jsx
│   └── PrivateRoute.jsx
│
├── redux/
│   └── recipeSlice.js
│
├── App.jsx
├── index.js

🔐 Routing Overview
Route	Description	Protected
/login	Login Page	❌ No
/	Recipe List	✅ Yes
/add	Add Recipe	✅ Yes
/details/:id	Recipe Details	✅ Yes
🧠 Authentication Logic

Authentication status is stored in localStorage

PrivateRoute checks if the user is logged in

Unauthorized users are redirected to /login

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-repo/recipe-book.git
cd recipe-book

2️⃣ Install Dependencies
npm install

3️⃣ Start the Application
npm start


App will run at:
👉 http://localhost:3000

🧪 Sample Login (Example)
Username: admin
Password: admin


(You can customize this logic in the Login component)

🛠️ Future Enhancements

✏️ Edit recipe feature

🗑️ Delete recipe

🌐 Backend API integration

🔑 JWT authentication

📌 Author

Yashvi
Full Stack Development Student
Red & White Multimedia Education
