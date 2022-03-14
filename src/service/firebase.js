import {initializeApp} from 'firebase/app'

export class Firebase {
    constructor() {
        this.firebase = initializeApp(this.firebaseConfig)    
    }

    firebase = null
    
    firebaseConfig = {
        apiKey: "AIzaSyA88Y2jOucd4mn6bKSBxuY_wA7Bd2SO-LI",
        authDomain: "cashier-70343.firebaseapp.com",
        projectId: "cashier-70343",
        storageBucket: "cashier-70343.appspot.com",
        messagingSenderId: "794840204696",
        appId: "1:794840204696:web:15775e822cceb1367317ed",
        measurementId: "G-W5B1RLDMMJ"
    }
}