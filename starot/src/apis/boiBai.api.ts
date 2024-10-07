import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'
import { BoiBai } from '../types/BoiBai.type'

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
