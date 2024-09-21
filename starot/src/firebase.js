import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDb_s2ughwJZDPdqUcNhlClCwYZSTw24lQ',
  authDomain: 'starot-aa9da.firebaseapp.com',
  projectId: 'starot-aa9da',
  storageBucket: 'starot-aa9da.appspot.com',
  messagingSenderId: '1087834875487',
  appId: '1:1087834875487:web:a87907597b3740a75d9dea',
  measurementId: 'G-QS7LC6S1GT'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage(app)
