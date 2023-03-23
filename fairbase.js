// SETTING A firebaseApp

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWPSmjo2WkIDOIeSeJl1cqUfDxyMYwGgs",
    authDomain: "auth-form-cd3ca.firebaseapp.com",
    projectId: "auth-form-cd3ca",
    storageBucket: "auth-form-cd3ca.appspot.com",
    messagingSenderId: "352738314507",
    appId: "1:352738314507:web:1d3d2d850d0f5a6538fa0e"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are signed up");
            console.log(result);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });

 }

//  sign in function

const signin = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // firebaseApp function
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
            document.write("You are signed Ip");
            console.log(result);
    
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
   });
}