import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getPageViewsByMonthAndYear = async () => {
  try {
    const viewsRef = collection(db, "pageViews");
    const snapshot = await getDocs(viewsRef);

    const views = snapshot.docs.map(doc => doc.data());

    const groupedData: Record<string, number> = {};

    views.forEach(({ viewedAt }) => {
      const date = viewedAt.toDate(); // Convert Firestore Timestamp to JS Date
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are 0-indexed

      const key = `Month ${month} ${year}`;
      groupedData[key] = (groupedData[key] || 0) + 1;

      const yearKey = `${year} Yearly`;
      groupedData[yearKey] = (groupedData[yearKey] || 0) + 1;
    });

    return groupedData;
  } catch (error) {
    console.error("Error grouping page views: ", error);
    return {};
  }
};
