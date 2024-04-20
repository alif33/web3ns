import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../../../firebaseClient";

export const addDomainName = async (domainName: string, anonymousUserId: string | null,email:string | undefined) => {
  const db = getFirestore(app);


  // Using the domainName.toLowerCase() as the document ID
  const docRef = doc(db, "domainQuery", domainName.toLowerCase());
  
 
  let obj = {
    name: domainName,
    nameLower: domainName.toLowerCase(), // This might be redundant now
    dateCreated: new Date().toUTCString(),
    userId: anonymousUserId,
    isAnonymous: email?false:true, 
    processingStartDate: ""
  };

  try {
    await setDoc(docRef, obj); // Note the use of setDoc here
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
};

