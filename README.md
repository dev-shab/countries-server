# 🌐 Country Explorer Backend

This is the backend service for the Country Explorer app. It uses **Node.js**, **Express**, and **TypeScript** to serve country data via RESTful APIs. It fetches data from the [REST Countries API](https://restcountries.com/v3.1/all), caches it, and provides custom filtering and search capabilities.

## 📦 Features

- 📡 Fetches and caches country data from REST Countries API
- 🧭 Endpoints to list, search, and filter countries by:
  - Name
  - Capital
  - Region
  - Timezone
- 🧠 In-memory caching to reduce API calls
- 🔒 Graceful error handling and validation
- ⚙️ Built with **Express** and **TypeScript**

---

## 🚀 Tech Stack

| Backend    | Language   | Features          |
| ---------- | ---------- | ----------------- |
| Express.js | TypeScript | REST API, Caching |

---

## 📁 Project Structure

```
├── src/
│   ├── controllers/      # Logic for routes
│   ├── routes/           # Express route definitions
│   ├── services/         # External API + Caching
│   ├── types/            # TypeScript interfaces
│   └── index.ts          # Entry point
├── tsconfig.json         # TypeScript configuration
├── package.json
├── README.md
```

---

## 📦 Installation

```bash
git clone https://github.com/your-username/country-explorer-backend.git
cd country-explorer-backend
npm install
```

---

## 🧪 Scripts

```bash
# Start dev server
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint                    | Description                                                               |
| ------ | --------------------------- | ------------------------------------------------------------------------- |
| GET    | `/countries`                | Get all countries                                                         |
| GET    | `/countries/:code`          | Get a specific country by code (e.g., US)                                 |
| GET    | `/countries/region/:region` | Get countries in a specific region                                        |
| GET    | `/countries/search`         | Search with query params: `?name=`, `?capital=`, `?region=`, `?timezone=` |

Example:

```
/countries/search?name=India&region=Asia
```

---

## ⚠️ Error Handling

- `404` – Not found
- `500` – Server error
- Validation for invalid query parameters

Make sure to run this backend on `http://localhost:3000` for local frontend integration.
