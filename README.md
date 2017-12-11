# Progressive Web App Boilerplate
This boilerplate is created thanks to several articles from Google and answers from StackOverflow.
For PWA's HTTPS requirement, you can login to firebase and deploy your PWA. In order to do that;
- Login to your Google account
- Go to [Firebase Console](https://console.firebase.google.com)
- Click '**Add project**' and give your backend a name

Now you should pass that backend information to your PWA. To do this;
- Open your favorite console
- Make sure that you have installed [**Node**](https://nodejs.org/en/download/)
- To check whether node has installed before, you may run ```node -v``` in your console. If it does not give any error like 'command node is not installed' you are good to go. If it does, install node first.
- Node install its own package manager, npm. Using npm, you will install firebase cli tools. To do this, run ```npm install -g firebase-tools```
- Run ```firebase login```
- It will open a popup for you to login to your google account if you didn't login before. Login using **same google account** that you used for firebase
- Run ```firebase init``` command to stitch your app with firebase
- It will going to ask you about features like security, database. **Hosting** should be enough for an PWA
- Go with default options for other questions.
- Run ```firebase deploy``` to deploy your PWA to firebase
- It will show you deployed URL that you can check your PWA.

