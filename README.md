# React Firebase Template
This template uses Firebase authentication with Google and Realtime Database.

## Get Started
```bash
$ git clone {PROJECT}
$ npm install
$ npm start
```

On initial start, you will get errors. Add your Firebase CDN credentials.
- Rename the `.env.local.sample` to `.env.local`
- Place the values from your Firebase App into the values
- Stop your server and start it again. You should be able to login to your application!

## Things to note:
- API directory are for calls to the database
- The `App/index.js` file contains information and rough logic for adding users to your firebase realtime database. The firebase key and uid are important elements since the firebase key is how you grab a record from firebase and the uid is how you can find a user with database rules to index on attributes.
