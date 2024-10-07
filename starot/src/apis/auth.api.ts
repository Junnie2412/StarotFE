import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { Admin } from '../types/Admin.type'

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
