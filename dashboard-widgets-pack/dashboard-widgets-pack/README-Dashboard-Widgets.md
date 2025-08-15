# Dashboard Widgets Pack (drop‑in)

This pack gives you **modular widgets** for your existing `src/pages/Dashboard.tsx`.
You can import them into your page without changing your auth setup.

**Files:**
- `src/components/dashboard/Announcements.tsx`
- `src/components/dashboard/MyGroups.tsx`
- `src/components/dashboard/UpcomingEvents.tsx`
- `src/types/models.ts`
- `src/pages/Dashboard.example.tsx` (optional reference layout)

These assume you already export `db` (Firestore) and `auth` from `src/lib/firebase.ts`.
If your exports are named differently, adjust the imports.

## 1) Install peer deps (if missing)
```bash
npm i firebase
```

## 2) Use in your existing Dashboard page
```tsx
import Announcements from '../components/dashboard/Announcements'
import MyGroups from '../components/dashboard/MyGroups'
import UpcomingEvents from '../components/dashboard/UpcomingEvents'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        <Announcements />
        <MyGroups />
        <UpcomingEvents />
      </div>
    </div>
  )
}
```

Or copy `src/pages/Dashboard.example.tsx` over your `src/pages/Dashboard.tsx` if you prefer.

## 3) Suggested Firestore structure

- `announcements/{id}`
  - `title: string`
  - `body: string`
  - `createdAt: Timestamp`

- `groups/{id}`
  - `name: string`
  - `description?: string`
  - `memberIds: string[]`  // or use subcollection: groups/{id}/members/{uid}

- `users/{uid}/memberships/{groupId}`
  - `groupId: string`
  - `role: "admin"|"member"`
  - `unread?: number`

- `events/{id}`
  - `title: string`
  - `startAt: Timestamp`
  - `location?: string`

## 4) Minimal security rules (sketch)
This is **not** a full ruleset—just a starting point. Tighten for your needs.
```
// firestore.rules (fragment)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() { return request.auth != null; }

    match /announcements/{id} {
      allow read: if true;          // public announcements
      allow write: if signedIn();   // restrict further in prod
    }

    match /groups/{groupId} {
      allow read: if signedIn();
      allow write: if signedIn();   // limit to admins in prod
      match /members/{uid} {
        allow read, write: if request.auth.uid == uid;
      }
    }

    match /users/{uid}/memberships/{mid} {
      allow read, write: if request.auth.uid == uid;
    }

    match /events/{id} {
      allow read: if true;
      allow write: if signedIn();   // restrict in prod
    }
  }
}
```

## 5) Seeding quick data (optional)
Use your existing `pages/Admin/SeedGroups.tsx` or add some docs manually in Firebase Console so the widgets have data to render.
