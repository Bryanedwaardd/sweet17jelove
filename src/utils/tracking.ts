import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// List of pages to track
const trackedPages = ["/", "/products"]; 

// Function to record page views
export const recordPageView = async (pageUrl: string) => {
  if (!trackedPages.includes(pageUrl)) return; 

  try {
    await addDoc(collection(db, "pageViews"), {
      url: pageUrl,
      viewedAt: serverTimestamp(), 
    });
  } catch (error) {
    console.error("Error recording page view: ", error);
  }
};
