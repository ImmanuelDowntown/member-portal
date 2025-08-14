# Immanuel Members Portal
- Auth-first app; public entry is /login. All other pages require auth.
- Email/Password and Google Sign-In enabled.

## Quick start
npm i
cp .env.example .env.local   # fill Firebase web app keys
npm run dev

## Deploy (Firebase Hosting)
firebase use --add
npm run build
firebase deploy --only hosting

## Admin claim
Use Admin SDK to set { admin: true } for an admin user, then reauth.
