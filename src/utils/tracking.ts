import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Function to record a page view
export const recordPageView = async (pageUrl: string) => {
  try {
    await addDoc(collection(db, "pageViews"), {
      url: pageUrl,
      timestamp: Timestamp.now()
    });
    console.log(`Page view recorded for ${pageUrl}`);
  } catch (error) {
    console.error("Error recording page view: ", error);
  }
};
