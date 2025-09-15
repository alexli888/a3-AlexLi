## Assignment 3 - To-Do Application

Link: https://a3-alexli.onrender.com/
//////////////////////////////////////////////////////////////////
Goal of app: The goal of this project is a task manager, in which a user can set a task description, Priority of the task (High, Medium, Low), and set a creation date(Defaulted to the day of access). It means to help organize your life.

Hardest part of project was trying to deploy. Stressful. Figured out need to specificy for all ip addresses can access the database, that fixed it, since we are deploying on an external serrvice.,

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
- **Tech Achievement 1**: 
Instead of Render, host your site on a different service. ( 5 pts)
- For this technical achievment I chose Vercel to host my website. However, as you can see in the top of the README, I still have render as my primary website submission, why? Well that is because I ran into some issues with Vercel that I will now explain. Take this website I host: https://a3-alex-li-2f8g.vercel.app/. It may seem all good, as its deployed, connected to MongoDB, but it skips the 'login' page whereas on Render it does start on the login page. I tried to make it start at login page but to no avail. A positive about Vercel, is that persoanllu, I found it easier work with given that I have used Vercel many times before, and I have vercel application on github, so deploying is very easy, until it doesnt work like in this situation. Overall, I will prefer Vercel, if it works, so if I were to give a recommendation, I will say try Vercel first, then if its not working, use Render. 


### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative... ( 5 pts)

CRAP Principles:  least 125 words for each of four principles              NEED MAKE LONGER 

- Which element received the most emphasis (contrast) on each page? 
On every page of my site, the element that received the most emphasis is the bold purple border framing the main components like the login form, “Add New Task,” “Recent Tasks,” and the “All Tasks” list. I chose this purple because it stands out sharply against the clean white background, creating a vivid break that immediately draws the user’s eyes to what matters most. I didn’t want a flat or lifeless interface, so I used a thick, bright outline rather than subtle gray dividers. Some people might think the purple is a little intense or even distracting, but I feel that the stark contrast helps users—including myself—focus on actionable elements like buttons and forms. It gives the pages personality while also guiding attention in a deliberate way.


- How did you use proximity to organize the visual information on your page? 
To use proximity, the strategy I used is to grouping related items together, and those items that are not related, apart from each other. A clear instance where you can see this design principle in use is the home page, the page you see when login. On the left side we have "Add New Task" in which we have elements like 'task description', 'priority level', 'creation date' and the 'Add task' button all in this "Block of elements". Whereas on the righthand side, we can see the recent tasks, and a clear seperator from the New tasks, and the posted, or already made tasks. We can also see this in the 'All tasks' page, so overall this seperation allows a user to have a more simple, a clear vision on what the website is intended to do.  

- What design elements (colors, fonts, layouts, etc.) did you use repeatedly throughout your site? 
I intentionally used repetition across the entire site to create a consistent, professional look. I stuck with a single primary font for all headers and body text to keep everything visually unified. The purple accent color I selected appears throughout—on borders, buttons, and highlighted text—so the interface has a cohesive identity. Each page follows the same basic layout: a header bar with three navigation links at the top, two balanced blocks of content (the left for creating or adding tasks, the right for viewing lists or summaries), and a simple footer. Even small details like button shapes, rounded corners, and hover effects repeat everywhere. By reusing these elements, I made sure users don’t have to re-learn the layout on each page, which reduces confusion and makes the site feel polished.

- How did you use alignment to organize information and/or increase contrast for particular elements. 
Alignment was one of my priorities to make the site organized and easy to scan. I aligned all major blocks—navigation links, task creation forms, and task lists—to consistent vertical and horizontal guides. In the “Add New Task” form, for example, all input fields are neatly left-aligned with each other, which makes the form quicker to scan and fill out. On the “Recent Tasks” and “All Tasks” lists, task names, dates, and priority labels line up in clean columns, avoiding a cluttered look. I also used alignment to enhance contrast: section headers are centered and bolded to stand apart from regular text, while buttons align directly with their associated fields so the user’s eye naturally follows the flow of information. This attention to alignment makes the site feel intentional, professional, and user-friendly.

