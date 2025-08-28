import * as admin from "firebase-admin";

const uid = process.argv[2];
if (!uid) {
  console.error("Usage: node grantSuperAdmin.js <uid>");
  process.exit(1);
}

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

async function main() {
  await db.doc(`users/${uid}`).set(
    {
      isSuperAdmin: true,
      superAdminAddedAt: admin.firestore.FieldValue.serverTimestamp(),
      superAdminAddedBy: "script",
    },
    { merge: true }
  );
  console.log(`User ${uid} granted super admin.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
