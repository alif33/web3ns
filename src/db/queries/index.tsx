import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    setDoc,
    query,
    where,
    orderBy,
    limit,
     
} from "firebase/firestore"
import { db } from "@/db/firebase"

export const addDomainName = async (domainName: string, anonymousUserId: string | null, email:string | undefined) => {
  const docRef = doc(db, "domainQuery", domainName.toLowerCase())
  
  let obj = {
    name: domainName,
    nameLower: domainName.toLowerCase(), 
    dateCreated: new Date().toUTCString(),
    userId: anonymousUserId,
    isAnonymous: email?false:true, 
    processingStartDate: ""
  }

  try {
    await setDoc(docRef, obj)
    console.log("Document written with ID: ", docRef.id)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
    return null
  }
}


export const getDomain = async (userId: string) => {
  const q = query(
      collection(db, "domainQuery"),
      where("userId", "==", userId),
      // orderBy("dateCreated", "desc"),
      limit(1)
  )
  // const querySnapshot = await getDocs(q)

  // console.log(querySnapshot.docs[0].data());
  

  try {
      const querySnapshot = await getDocs(q)
      const latestDomain = querySnapshot.docs[0]
      if (latestDomain) {
          return latestDomain.data()
      } else {
          return null
      }
  } catch (error) {
      console.error("Error getting latest domain by user ID:", error)
      return null
  }
}

export const fetchData = async () => {
  try {
    // const db = getFirestore(app);
    console.log("Fetching data from Firestore...");
    const querySnapshot = await getDocs(collection(db, "TESTcrawlUrl"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return null
  }
}
