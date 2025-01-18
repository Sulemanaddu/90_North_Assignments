This repository contains multiple tasks, including a Responsive Webpage, a Chat Application, and AWS Lambda Functions.

Table of Contents
Responsive Webpage
Chat Application
AWS Lambda Functions
Technologies Used
Setup and Installation
Contributing
License
Responsive Webpage
This is a responsive webpage with a fixed navbar, collapsible left menu, main content area, right-side panel, and footer. The design adjusts dynamically based on screen size to optimize user experience.

Features:
Fixed Navbar:

Stays at the top of the page during scrolling.
Three Content Sections Below the Navbar:

Left Menu: Collapsible menu for navigation or additional content.
Main Content Area: Displays primary information.
Right Side Panel: Supplementary information or tools.
Footer:

Fixed at the bottom, displaying site-wide information.
Responsive Design:

Layout adjusts based on screen size using CSS and JavaScript.
Customizable Scaling:

The webpage dynamically scales based on screen width using JavaScript:
992px to 1600px: Shrinks to 90%.
700px to 767px: Shrinks to 80%.
600px to 700px: Shrinks to 75%.
Less than 600px: Shrinks to 50%.
Prerequisites:
A modern web browser.
No additional software required.
Usage:
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/responsive-webpage.git
cd responsive-webpage
Open index.html in your browser.

Interact with the webpage:

Use the toggle button in the left menu to collapse or expand the menu.
Resize the browser window to see scaling adjustments.
How It Works:
HTML Structure:

Navbar, container, and footer sections are defined using semantic tags.
CSS Styling:

Flexbox ensures responsive layout for the left menu, main content, and right panel.
Media queries hide the left menu on small screens.
JavaScript Functions:

toggleMenu: Toggles the visibility of the left menu.
adjustPageWidth: Dynamically scales the webpage based on the screen width.
Customization:
Adjust Scaling Thresholds:

Modify the adjustPageWidth function to change scaling behavior.
Styling:

Update styles directly in the <style> section or move them to an external styles.css file.
Left Menu Content:

Replace the placeholder text in .menu-content with navigation links or other components.
Chat Application
A real-time chat application built with Node.js, Express, Socket.IO, and MongoDB on the backend, and HTML, CSS, and JavaScript on the frontend. The app supports user authentication, real-time messaging, and persistent chat data.

Features:
User Authentication:

Sign up, log in, and log out functionality.
Real-time Messaging:

Chat with other users using Socket.IO.
Persistent Chat Messages:

Messages stored in MongoDB.
Simple and Responsive Interface:

Clean and intuitive UI for users.
Prerequisites:
Ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (local or cloud instance)
npm (Node Package Manager)
Installation:
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/chat-app.git
cd chat-app
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables: Create a .env file in the backend/ folder with the following variables:

plaintext
Copy
Edit
MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret
PORT=5000
Start MongoDB (if running locally):

bash
Copy
Edit
mongod
Run the application:

bash
Copy
Edit
npm start
The backend will be available at http://localhost:5000.

Usage:
Open index.html in the frontend/ folder in a browser to access the application.
Sign up for a new account or log in with existing credentials.
Start chatting by selecting a user from the list.
Scripts:
npm start: Starts the backend server.
npm run dev: Starts the backend server with hot reloading (requires nodemon).
Dependencies:
Backend:

express: Web framework for Node.js.
mongoose: MongoDB object modeling for Node.js.
bcryptjs: For hashing passwords.
jsonwebtoken: For user authentication.
socket.io: For real-time communication.
dotenv: For managing environment variables.
body-parser: To parse request bodies.
Dev Dependencies:

nodemon: Automatically restarts the server during development.
API Endpoints:
Authentication Routes (/api/auth):

POST /signup: Register a new user.
POST /login: Log in a user and return a token.
Chat Routes (/api/chat):

GET /messages/:userId: Fetch chat messages between the logged-in user and another user.
POST /send: Send a new chat message.
AWS Lambda Functions
Two AWS Lambda functions created to explore serverless computing:

Add Two Numbers: A simple Lambda function that adds two numbers and returns the result.
Store Document in S3: A Lambda function that stores a document or PDF file in an S3 bucket.
How to Deploy AWS Lambda Functions:
Go to the AWS Management Console and navigate to Lambda.
Create a new Lambda function, selecting the runtime (Python, Node.js, etc.).
Copy and paste the respective Lambda function code from this repository into the function editor.
For the S3 function, configure the necessary S3 bucket permissions.
Test the Lambda function using AWS CloudWatch or directly from the Lambda Console.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express, MongoDB, Socket.IO
Cloud: AWS Lambda, AWS S3
Version Control: Git, GitHub
Setup and Installation
To get started with the project:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/repository-name.git
For the Chat Application:

Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables as mentioned above.
Run the server:
bash
Copy
Edit
npm start
For AWS Lambda Functions:

Set up your AWS account and Lambda function.
Deploy the functions as described above.
Contributing
Feel free to fork this repository, create a branch, and submit a pull request if you would like to contribute to these projects.

License
This project is licensed under the MIT License - see the LICENSE file for details.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Here is a sample README file for your GitHub projects, structured similarly to the one you mentioned:

---

# **Suleman Anwar Siddiqui's Projects**

This repository contains multiple tasks, including a **Responsive Webpage**, a **Chat Application**, and **AWS Lambda Functions**.

## **Table of Contents**

1. [Responsive Webpage](#responsive-webpage)
2. [Chat Application](#chat-application)
3. [AWS Lambda Functions](#aws-lambda-functions)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Responsive Webpage**

This is a responsive webpage with a fixed navbar, collapsible left menu, main content area, right-side panel, and footer. The design adjusts dynamically based on screen size to optimize user experience.

### **Features:**

- **Fixed Navbar**: 
  - Stays at the top of the page during scrolling.
  
- **Three Content Sections Below the Navbar**:
  - **Left Menu**: Collapsible menu for navigation or additional content.
  - **Main Content Area**: Displays primary information.
  - **Right Side Panel**: Supplementary information or tools.

- **Footer**: 
  - Fixed at the bottom, displaying site-wide information.

- **Responsive Design**: 
  - Layout adjusts based on screen size using CSS and JavaScript.

- **Customizable Scaling**: 
  - The webpage dynamically scales based on screen width using JavaScript:
    - 992px to 1600px: Shrinks to 90%.
    - 700px to 767px: Shrinks to 80%.
    - 600px to 700px: Shrinks to 75%.
    - Less than 600px: Shrinks to 50%.

### **Prerequisites:**

- A modern web browser.
- No additional software required.

### **Usage:**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/responsive-webpage.git
    cd responsive-webpage
    ```

2. Open `index.html` in your browser.

3. Interact with the webpage:
    - Use the toggle button in the left menu to collapse or expand the menu.
    - Resize the browser window to see scaling adjustments.

### **How It Works:**

- **HTML Structure**: 
  - Navbar, container, and footer sections are defined using semantic tags.

- **CSS Styling**: 
  - Flexbox ensures responsive layout for the left menu, main content, and right panel.
  - Media queries hide the left menu on small screens.

- **JavaScript Functions**:
  - `toggleMenu`: Toggles the visibility of the left menu.
  - `adjustPageWidth`: Dynamically scales the webpage based on the screen width.

### **Customization**:

- **Adjust Scaling Thresholds**: 
  - Modify the `adjustPageWidth` function to change scaling behavior.

- **Styling**: 
  - Update styles directly in the `<style>` section or move them to an external `styles.css` file.

- **Left Menu Content**: 
  - Replace the placeholder text in `.menu-content` with navigation links or other components.

---

## **Chat Application**

A real-time chat application built with **Node.js**, **Express**, **Socket.IO**, and **MongoDB** on the backend, and **HTML**, **CSS**, and **JavaScript** on the frontend. The app supports user authentication, real-time messaging, and persistent chat data.

### **Features:**

- **User Authentication**: 
  - Sign up, log in, and log out functionality.
  
- **Real-time Messaging**: 
  - Chat with other users using **Socket.IO**.

- **Persistent Chat Messages**: 
  - Messages stored in **MongoDB**.

- **Simple and Responsive Interface**: 
  - Clean and intuitive UI for users.

### **Prerequisites:**

Ensure you have the following installed:
1. **Node.js** (v14 or higher)
2. **MongoDB** (local or cloud instance)
3. **npm** (Node Package Manager)

### **Installation**:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the `backend/` folder with the following variables:
    ```plaintext
    MONGO_URI=mongodb://localhost:27017/chat-app
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. **Start MongoDB** (if running locally):
    ```bash
    mongod
    ```

5. **Run the application**:
    ```bash
    npm start
    ```
   The backend will be available at [http://localhost:5000](http://localhost:5000).

### **Usage**:

1. Open `index.html` in the `frontend/` folder in a browser to access the application.
2. Sign up for a new account or log in with existing credentials.
3. Start chatting by selecting a user from the list.

### **Scripts**:

- `npm start`: Starts the backend server.
- `npm run dev`: Starts the backend server with hot reloading (requires `nodemon`).

### **Dependencies**:

**Backend**:
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `bcryptjs`: For hashing passwords.
- `jsonwebtoken`: For user authentication.
- `socket.io`: For real-time communication.
- `dotenv`: For managing environment variables.
- `body-parser`: To parse request bodies.

**Dev Dependencies**:
- `nodemon`: Automatically restarts the server during development.

### **API Endpoints**:

- **Authentication Routes** (`/api/auth`):
  - `POST /signup`: Register a new user.
  - `POST /login`: Log in a user and return a token.

- **Chat Routes** (`/api/chat`):
  - `GET /messages/:userId`: Fetch chat messages between the logged-in user and another user.
  - `POST /send`: Send a new chat message.

---

## **AWS Lambda Functions**

Two AWS Lambda functions created to explore serverless computing:

1. **Add Two Numbers**: A simple Lambda function that adds two numbers and returns the result.
2. **Store Document in S3**: A Lambda function that stores a document or PDF file in an S3 bucket.

### **How to Deploy AWS Lambda Functions**:

1. Go to the **AWS Management Console** and navigate to **Lambda**.
2. Create a new Lambda function, selecting the runtime (Python, Node.js, etc.).
3. Copy and paste the respective Lambda function code from this repository into the function editor.
4. For the **S3 function**, configure the necessary **S3 bucket permissions**.
5. Test the Lambda function using AWS CloudWatch or directly from the Lambda Console.

---

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, MongoDB, Socket.IO
- **Cloud**: AWS Lambda, AWS S3
- **Version Control**: Git, GitHub

---

## **Setup and Installation**

To get started with the project:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```

2. **For the Chat Application**:
    - Install dependencies:
      ```bash
      npm install
      ```
    - Set up environment variables as mentioned above.
    - Run the server:
      ```bash
      npm start
      ```

3. **For AWS Lambda Functions**:
    - Set up your AWS account and Lambda function.
    - Deploy the functions as described above.

---

## **Contributing**

Feel free to fork this repository, create a branch, and submit a pull request if you would like to contribute to these projects.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like any further adjustments!
