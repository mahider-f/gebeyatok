# Gebeya Tok (scaffold)

This is a scaffolded Next.js (full-stack) project for **Gebeya Tok** — an Instagram-style social + e-commerce platform for Ethiopia with Chapa integration.

**What is included**
- Next.js pages & API route stubs
- MongoDB connection helper and Mongoose-like model files (plain Mongo)
- Tailwind + ShadCN-compatible structure (UI components as placeholders)
- Cloudinary upload helper placeholders (square resizing note)
- Chapa payment integration placeholders
- Basic folder structure for posts, products, orders, auth routes
- A small seed of UI pages (Feed, Shop, Auth, Profile, Supplier Dashboard)

**How to use**
1. Extract the zip.
2. Install dependencies: `npm install`
3. Create environment variables (.env.local) as described in `.env.example`.
4. Run dev: `npm run dev`

**ENV (create .env.local)**
```
MONGODB_URI=your_mongo_uri
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CHAPA_API_KEY=...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
JWT_SECRET=replace_with_secret
```

Notes:
- Authentication uses BetterAuth in the spec — here we provide auth route stubs and JWT placeholders. Replace with actual BetterAuth integration per your setup.
- Cloudinary: media should be uploaded using unsigned/upload presets configured to perform square resizing on upload.
- Chapa payment routes are included as stubbed integrations — implement real network calls with Chapa docs and proper server-side keys.
