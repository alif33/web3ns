import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    setDoc 
} from "firebase/firestore"
import app from "@/db/firebase"

export const addDomainName = async (domainName: string, anonymousUserId: string | null, email:string | undefined) => {
  const db = getFirestore(app)

  const docRef = doc(db, "domainQuery", domainName.toLowerCase())
  
  let obj = {
    name: domainName,
    nameLower: domainName.toLowerCase(), 
    dateCreated: new Date().toUTCString(),
    userId: anonymousUserId,
    isAnonymous: email?false:true, 
    processingStartDate: ""
  };

  try {
    await setDoc(docRef, obj);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export const fetchData = async () => {
  try {
    const db = getFirestore(app);
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
