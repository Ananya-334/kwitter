// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC-oqhmkzGs0Xf5GzS2UC3PAYV9_uGNF-I",
      authDomain: "kwitter-v2-e9fc0.firebaseapp.com",
      databaseURL: "https://kwitter-v2-e9fc0-default-rtdb.firebaseio.com",
      projectId: "kwitter-v2-e9fc0",
      storageBucket: "kwitter-v2-e9fc0.appspot.com",
      messagingSenderId: "340886574575",
      appId: "1:340886574575:web:7ebcedc35f08de4103521a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function send()
{
      msg=document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
            like:0
        });
        document.getElementById("msg").value="";
}