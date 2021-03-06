<p align="center"><img src="./src/images/conpanion_logo.png" alt="ConPanion" title="ConPanion" width="500px"></p>

<img src="./src/images/conpanion.png" alt="ConPanion" title="ConPanion" width="1000px">

# ConPanion
ConPanion is a single-page convention-planning application intended for cosplayers and costumers. In this app, a user can make a list of conventions they’re attending, create costume pages, and participate in groups. For each convention, the user can add their planned costumes, manage packing lists, and create a lineup/calendar.

## Testing Locally
To run ConPanion locally:

1. Clone this repo: `git clone git@github.com:megcruzen/capstone_conpanion.git`
1. To install all libraries and their dependencies, run `npm install`
1. Set up Auth0 (see below)
1. In the `/api` directory, run `json-server -p 5002 database.json`
1. Run `npm start` in root directory to start react server
1. If you would like to demo a user account populated with data, use `test@test.com` as the email address on the Auth0 login screen (any password will work)

### Set Up Auth0
1. Sign up or log in to Auth0 - https://auth0.com/
1. Once in your account, click the "Create Application" button
1. Choose "Single Page Web Application", then choose "React"
1. Inside your Application, click on "Settings"
1. Add `http://localhost:3000/callback` to the "Allowed Callback URLs"
1. You will need to copy the "Domain" and "Client ID" and place these into the `Auth0Variables.js.example` file
1. Rename the file to `Auth0Variables.js`


## Planning and Creation
### Technologies Used
<img src="./src/images/html5.png" alt="HTML5" title="HTML5" height="60px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/CSS3.png" alt="CSS3" title="CSS3" height="60px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/js.jpg" alt="Javascript" title="Javascript" height="60px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/react.png" alt="React" title="React" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/bootstrap.png" alt="Bootstrap" title="Bootstrap" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/reactstrap-purple.png" alt="Reactstrap" title="Reactstrap" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/npm.png" alt="NPM" title="NPM" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./src/images/auth0.png" alt="NPM" title="Auth0" height="50px">

### ERD
<img src="./src/images/ERD.jpg" alt="ERD" title="ERD" width="1000px">
