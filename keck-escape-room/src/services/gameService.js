import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

export async function createNewGame({ title }) {
  const data = { title, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "games"), data);
  return { id: docRef.id, ...data };
}

export async function fetchGames() {
  const snapshot = await getDocs(
    query(collection(db, "games"), orderBy("date", "desc"), limit(10))
  );

  let snapshotDocs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const formattedDate = snapshotDocs[0].date.toDate();
  snapshotDocs[0].date = formattedDate;
  return snapshotDocs;
}
