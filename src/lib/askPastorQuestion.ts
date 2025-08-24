import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase";

const fn = httpsCallable(getFunctions(app, "us-central1"), "askPastorQuestion");

export async function askPastorQuestion(text: string) {
  await fn({ text });
}
