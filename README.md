# Call of Duty Ranked Matchmaking Assistant

## 🧠 Project Overview
The Call of Duty Ranked Matchmaking Assistant is a web application that helps players find compatible teammates for ranked matches based on their rank, playstyle, and preferences. This tool is designed to enhance the multiplayer gaming experience by matching users with teammates who are similarly skilled and communicative.

## 🌐 Target Browsers & Devices
The application is optimized for:
- Desktop Browsers: Chrome, Firefox, Safari, Edge (latest versions)
- Mobile Browsers: iOS Safari, Android Chrome (responsive design via Tailwind CSS)

## 📘 Developer Manual
See the **Developer Manual** section below for full technical instructions.

---

# 🛠 Developer Manual

## 📦 Install & Setup

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

Make sure to add a `.env` file in `server/`:

```
SUPABASE_URL=https://yourproject.supabase.co
SUPABASE_KEY=your_public_anon_key
PORT=5050
```

## 🚀 Running Locally

In one terminal:
```bash
cd server
node server.js
```

In another terminal:
```bash
cd client
npm start
```

Then visit: `http://localhost:3000`

## 🧪 Testing (Manual)

- Submit a profile via `/profile`
- Matchmaking results via `/matchmaking`
- View rank distribution pie chart via `/about`

## 📡 API Endpoints

### POST `/api/users`
Creates a new user in Supabase with:
```json
{
  "username": "PlayerName",
  "rank": "Gold",
  "playstyle": "Support"
}
```

### GET `/api/matchmaking/:userId`
Returns all users from Supabase (basic logic, demo implementation).

### GET `/api/rank/distribution`
Returns an object like:
```json
{
  "Gold": 3,
  "Diamond": 2,
  "Master": 1
}
```

### POST `/api/verify-phone`
(Stub) Returns a success message for future phone verification.

## 🐛 Known Bugs

- Matchmaking is not filtered — future logic should compare playstyle/rank.
- No auth system — backend should enforce user identity for profile edit/delete.
- Verify phone endpoint is a placeholder (needs NumVerify integration).

## 🚧 Roadmap

- Add real-time chat/invite system
- Filter teammates based on availability
- Display user match history or reputation

---

**File generated for deployment-ready final submission**
