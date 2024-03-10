import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { apiConstants } from "./components/Constant/constants";

var firebaseConfig = {
    apiKey: apiConstants.REACT_APP_FIREBASE_API_KEY,
    authDomain: apiConstants.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: apiConstants.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: apiConstants.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: apiConstants.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: apiConstants.REACT_APP_FIREBASE_APP_ID,
    measurementId: apiConstants.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const publicKey = apiConstants.REACT_APP_FIREBASE_PUBLIC_KEY;

initializeApp(firebaseConfig);

// let messaging

// try {
//   messaging = getMessaging();
// } catch (error) {
//   console.error(error.message)
// }

export const requestForToken = () => {
    return getToken(getMessaging(), { vapidKey: publicKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

export const getFcmToken = async (setTokenFound) => {
    let currentToken = '';
    try {
        currentToken = await getToken(getMessaging(), { vapidKey: publicKey })
        .then((currentToken) => {
            if (currentToken) {
                return currentToken;
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })

        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    } catch (error) {
      console.log('An error occurred while retrieving token.', error);
    }
    return currentToken;
};

export const onMessageListener = () => {
    new Promise((resolve) => {
        onMessage(getMessaging(), (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });
}