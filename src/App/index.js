import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Authenticated from '../views/Authenticated';
import SignIn from '../views/SignIn';
import { checkUserExists, createUser } from '../api/users';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
         // TO DO: To create users on login...
         // MAKE A QUERY TO THE DB TO SEE IF USER EXISTS
        checkUserExists(authed.uid).then((response) => {
          const user = {
            fullName: authed.displayName,
            email: authed.email,
            photo: authed.photoURL,
            phone: authed.phoneNumber,
            uid: authed.uid,
            dateVisited: new Date(),
          };
          if (response === "create user") {
            // IF NOT, CREATE A POST TO USERS THEN SET STATE
            createUser(user);
            console.log('Authenticated User Created', user);
          }
          setLoggedInUser(user);
        });
        
      } else {
        console.log('NO Authenticated User');
        setLoggedInUser(null);
      }
    });
  }, []);

  return <>{loggedInUser ? <Authenticated user={loggedInUser}/> : <SignIn />}</>;
}

export default App;
