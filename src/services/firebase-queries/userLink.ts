import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../../firebaseClient";

const fetchData = async () => {
  try {
    const db = getFirestore(app);
    // const snapshot = await db.collection("userLink").get();
    // const userLinks = [];
    // snapshot.forEach((doc) => {
    //   userLinks.push(doc.data());
    // });
    return true;
  } catch (error) {
    console.error("Error getting user links: ", error);
    return [];
  }
};

export default fetchData;
