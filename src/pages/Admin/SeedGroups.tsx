import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import defaultGroups from "@/data/defaultGroups";
export default function SeedGroups(){
  async function seed(){
    const col = collection(db, "groups");
    const ops = defaultGroups.map(g => setDoc(doc(col, g.slug), { ...g, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true }));
    await Promise.all(ops);
    alert("Groups seeded!");
  }
  return (<div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Seed Groups</h1>
      <p className="text-text2 mt-2">Click once to upsert the default groups and subgroups.</p>
      <button className="btn btn-primary mt-6" onClick={seed}>Run seeder</button>
    </div>);
}
