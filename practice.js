  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBoR5NwHzdhDwDOiMMnJAfI2bkfDMUpbks",
    authDomain: "practise-activity-72940.firebaseapp.com",
    databaseURL: "https://practise-activity-72940-default-rtdb.firebaseio.com",
    projectId: "practise-activity-72940",
    storageBucket: "practise-activity-72940.appspot.com",
    messagingSenderId: "608280216634",
    appId: "1:608280216634:web:cf8fe0cc224cb9f38c2103"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser()
  {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").chid(user_name).update({
        purpose : "adding user"
    });
}