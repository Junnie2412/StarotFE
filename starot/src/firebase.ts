// firebase.ts
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { BoiBaiType } from './@types/BoiBaiType.type'

const firebaseConfig = {
  apiKey: 'AIzaSyDb_s2ughwJZDPdqUcNhlClCwYZSTw24lQ',
  authDomain: 'starot-aa9da.firebaseapp.com',
  projectId: 'starot-aa9da',
  storageBucket: 'starot-aa9da.appspot.com',
  messagingSenderId: '1087834875487',
  appId: '1:1087834875487:web:a87907597b3740a75d9dea',
  measurementId: 'G-QS7LC6S1GT'
}

initializeApp(firebaseConfig)

export const storage = getStorage()
export const db = getFirestore()

const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const fetchTinhYeuDocuments = async () => {
  try {
    const colRef = collection(db, 'StarotID')
    const q = query(colRef, where('Type', '==', 'Tình Yêu'))
    const querySnapshot = await getDocs(q)

    const itemsList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const shuffledItemsList = shuffleArray(itemsList)

    return shuffledItemsList
  } catch (error) {
    console.error('Error fetching documents:', error)
    throw error
  }
}

export const fetchTinhYeuDocumentById = async (id: string): Promise<BoiBaiType | null> => {
  try {
    const docRef = doc(db, 'StarotID', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<BoiBaiType, 'id'>
      return {
        id: docSnap.id,
        ...data
      }
    } else {
      console.error('No such document!')
      return null
    }
  } catch (error) {
    console.error('Error fetching document:', error)
    throw error
  }
}
