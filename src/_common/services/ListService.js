import { db } from "./firebase";
import {
  collection,
  where,
  query,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "@firebase/firestore";

export default class ListDataService {
  async getAll(uuid) {
    let rows = [];
    const listRef = collection(db, "list");

    const q = query(listRef, where("user", "==", `${uuid}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      rows.push({ id: doc.id, ...doc.data() });
    });
    return rows;
  }

  async create(uuid, name) {
    const listRef = collection(db, "list");
    const list = {
      user: uuid,
      name: name,
      checked: false,
      create_at: serverTimestamp(),
    };
    await setDoc(doc(listRef), list);
    return list;
  }

  async delete(idDoc) {
    const listRef = collection(db, "list");
    await deleteDoc(doc(listRef, idDoc));
    return true;
  }
}
