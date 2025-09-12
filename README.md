## Assignment 3 - To-Do Application

Link: http://a3-joshua-cuneo.render.me
//////////////////////////////////////////////////////////////////
Goal of app: The goal of this project is a task manager, in which a user can set a task description, Priority of the task (High, Medium, Low), and set a creation date(Defaulted to the day of access). It means to help organize your life.

Express Middleware Packages:
express.json(): Parses incoming JSON request bodies.
express.static(): Serves static files from the public directory.
cookie-parser: Parses and signs cookies attached to the client request.
dotenv: Loads environment variables from a .env file into process.env.

Custom Middleware/Functions:
requireAuth: Checks for a valid session cookie and ensures the user is authenticated before allowing access to protected routes.
hashPassword: Hashes user passwords using SHA-256 for secure storage.
generateSessionToken: Generates a random session token for user authentication.
calculateDeadline: Calculates a task's deadline based on its creation date and priority.

The auth strategy I used is a custom username and password authentication strategy. Its easier than githib oath. Users log in or register with a username and password, which are hashed and stored in the MongoDB database. Sessions are managed using signed cookies and an in-memory session store. No third-party OAuth or external authentication provider is used.

For CSS, I used Bootstrap, The current implementation is using Bootstrap only for the login/register button on the login form. This is done by adding the Bootstrap class btn btn-success to the button in the showLoginForm function in the /public/main.js file. This applies Bootstrap's green button styling (btn-success) and general button styles (btn). However, no other elements or layout are using Bootstrap classes or components. This is because I already had all this custom styling done and its a shame to remove. 

Input tags and form fields used: 
input type="text"
input type="password"
input type="date"
select
button (type="submit" and type="button")
//////////////////////////////////////////////////////////////////////

## Technical Achievements
- **Tech Achievement 1**: I used OAuth authentication via the GitHub strategy

### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative...
