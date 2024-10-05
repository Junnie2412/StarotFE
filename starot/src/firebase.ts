// firebase.ts
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { BoiBai } from './types/BoiBai.type'
import { Admin } from './types/Admin.type'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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

export const fetchCongViecDocuments = async () => {
  try {
    const colRef = collection(db, 'StarotID')
    const q = query(colRef, where('Type', '==', 'Công Việc'))
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

export const fetchSucKhoeDocuments = async () => {
  try {
    const colRef = collection(db, 'StarotID')
    const q = query(colRef, where('Type', '==', 'Sức Khỏe'))
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

export const fetchDocumentById = async (id: string): Promise<BoiBai | null> => {
  try {
    const docRef = doc(db, 'StarotID', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<BoiBai, 'id'>
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

export const fetchAdmins = async () => {
  try {
    const colRef = collection(db, 'AdminID')
    const querySnapshot = await getDocs(colRef)

    const adminsList = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data()
        }) as Admin
    )

    return adminsList
  } catch (error) {
    console.error('Error fetching admins:', error)
    throw error
  }
}
