import firebase from 'firebase/app'
 

const firebaseConfig = {
    apiKey: "AIzaSyBkdC5a3puQ_GTKcko9oXzxT9ZY_dAsQI0",
    authDomain: "react-vercel-abe1d.firebaseapp.com",
    databaseURL: "https://react-vercel-abe1d.firebaseio.com",
    projectId: "react-vercel-abe1d",
    storageBucket: "react-vercel-abe1d.appspot.com",
    messagingSenderId: "390624377099",
    appId: "1:390624377099:web:8f02a69b7738b557c9ca0e"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase