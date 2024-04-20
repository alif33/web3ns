import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from "../../../firebaseClient";

const fetchData = async () => {
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
};

export default fetchData;