# Student-Data-Collection-Website-Using-Firebase-and-Vanilla-Javascript
Fitures: CRUD, Searching, Ordering. 

The project simply created a simple system for student data such as attendance numbers and test scores

Tech:
- Firebase
- Vanilla Java Script. Link: https://firebase.google.com/
- JQuery

Firebase:
- Real Time Database (This is for data with type String, int, float, double, etc)
Link Doc:https://firebase.google.com/docs/database
- Storage (Store image data)

Actually if you want to follow our rules for make configurating the Firebase with Java Script, You can open folder <b>How Install</b>

This is a secret key to connect firebase with the website:

<br><b>
const firebaseConfig = { <br>
  apiKey: "", <br>
  authDomain: "", <br>
  databaseURL: "", <br>
  projectId: "", <br>
  storageBucket: "", <br>
  messagingSenderId: "", <br>
  appId: "", <br>
  measurementId: "" <br>
};
</b>

If you use Vanilla Java Script, it will be a little complicated because in each file there must be a secret key that must be placed. And the version from firebase should be the same on every page of its files. Otherwise, it will error

This is how look:
https://pemweb-90f9f.web.app/html/
