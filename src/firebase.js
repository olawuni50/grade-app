import firebase from  "firebase";

const firebaseConfig = {
apiKey: "AIzaSyA8h86uxVFgiz-UoDA-06-uyD_P_mmGt6s",
authDomain: "excelapp-62fb6.firebaseapp.com",
databaseURL: "https://excelapp-62fb6-default-rtdb.firebaseio.com",
projectId: "excelapp-62fb6",
storageBucket: "excelapp-62fb6.appspot.com",
messagingSenderId: "17402636474",
appId: "1:17402636474:web:7e94c041696a57bc8dfa83",
measurementId: "G-BNR1RBJF95"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics();

export default firebase