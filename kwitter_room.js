const firebaseConfig = {
    apiKey: "AIzaSyBtA-yk-nHX7N50cSJBskXrn5O17RP8iVY",
    authDomain: "kwitterapp-a5fea.firebaseapp.com",
    databaseURL: "https://kwitterapp-a5fea-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-a5fea",
    storageBucket: "kwitterapp-a5fea.appspot.com",
    messagingSenderId: "554437172751",
    appId: "1:554437172751:web:c0a52625c9687c58b78d7a",
    measurementId: "G-32GN1LGRW4"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
