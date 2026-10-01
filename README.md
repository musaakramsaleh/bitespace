## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | 18.17.0 or later | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.0.0 or later (comes with Node) | — |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

**Check your versions:**

```bash
node -v      # Should be v18.17.0 or higher
npm -v       # Should be 9.0.0 or higher
git --version
```

> 💡 **Tip:** We recommend using **Node.js 20 LTS** for best compatibility with Next.js 15.

---

### 1️⃣ Clone the Repository

Open your terminal and run:

```bash
# Using HTTPS
git clone https://github.com/your-username/bytespace.git

# Or using SSH
git clone git@github.com:your-username/bytespace.git

# Or using GitHub CLI
gh repo clone your-username/bytespace
```

Navigate into the project folder:

```bash
cd bytespace
```

---

### 2️⃣ Install Dependencies

Choose your preferred package manager:

```bash
# npm
npm install

# yarn
yarn install

# pnpm (recommended — faster)
pnpm install

# bun (fastest)
bun install
```

This will install all packages listed in `package.json`:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- React Icons
- And more...

> ⏱️ **First install takes 1–3 minutes** depending on your connection.

---

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the **project root**:

```bash
# macOS / Linux
touch .env.local

# Windows (PowerShell)
New-Item -Path .env.local -ItemType File
```

Add the following variables (if needed for your setup):

```bash
# .env.local

# Public base URL (only if used in your code)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> ⚠️ **Note:** If your code doesn't reference `NEXT_PUBLIC_BASE_URL`, you can **skip this step entirely**.
>
> 🔒 Never commit `.env.local` to Git — it should already be in `.gitignore`.

---

### 4️⃣ Run the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

You'll see output like:

```
   ▲ Next.js 15.0.0
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.10:3000
   - Environments: .env.local

 ✓ Ready in 2.3s
```

Now open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎉

---

### 5️⃣ Explore the App

Try these pages once it's running:

| URL | What you'll see |
|-----|-----------------|
| [http://localhost:3000](http://localhost:3000) | Home page with hero banner |
| [http://localhost:3000/courses](http://localhost:3000/courses) | Course listing with filters |
| [http://localhost:3000/courses/1](http://localhost:3000/courses/1) | Course detail page |
| [http://localhost:3000/creators](http://localhost:3000/creators) | Creators listing |
| [http://localhost:3000/login](http://localhost:3000/login) | Sign in page |
| [http://localhost:3000/register](http://localhost:3000/register) | Sign up page |
| [http://localhost:3000/anything](http://localhost:3000/anything) | Custom 404 page |

---

### 6️⃣ Development Tips

**Hot Reload** — File save korlei browser auto-update hobe. Manual refresh lagbe na.

**Linting** — Code check korte:

```bash
npm run lint
```

**Type Checking** — TypeScript errors dekhতে:

```bash
npx tsc --noEmit
```

**Format Code** (if Prettier is set up):

```bash
npx prettier --write .
```

---

### 🏗️ Production Build

Build the project locally to test before deploying:

```bash
npm run build
```

This creates an optimized `.next/` folder with:

- ✅ Minified JavaScript
- ✅ Optimized images
- ✅ Static pages pre-rendered
- ✅ Bundle size report

**Run production server locally:**

```bash
npm run start
```

Opens on [http://localhost:3000](http://localhost:3000) — **same as dev, but with production optimizations**.

> ⚠️ **Common build error:** `Environment variable X is not set` — means a variable referenced in your code is missing. Either add it to `.env.local` or remove the reference.

---

### 🧹 Clean Install (if something breaks)

If you run into weird caching issues:

```bash
# 1. Delete dependencies and cache
rm -rf node_modules
rm -rf .next
rm package-lock.json     # or yarn.lock / pnpm-lock.yaml

# 2. Reinstall fresh
npm install

# 3. Restart dev server
npm run dev
```

**Windows PowerShell version:**

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
Remove-Item package-lock.json
npm install
npm run dev
```

---

### 📦 Available Scripts

| Script | Command | What it does |
|--------|---------|--------------|
| **dev** | `npm run dev` | Start dev server with hot reload |
| **build** | `npm run build` | Create production build |
| **start** | `npm run start` | Serve production build |
| **lint** | `npm run lint` | Run ESLint |

---

### 🐛 Troubleshooting

#### Port 3000 already in use

```bash
# Kill the process on port 3000
# macOS / Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or run on a different port:

```bash
npm run dev -- -p 3001
```

#### `Module not found` errors

```bash
rm -rf node_modules .next
npm install
npm run dev
```

#### Images not loading

Check `next.config.js` — remote domains must be whitelisted:

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      // Add your image domains here
    ],
  },
};
```

#### Vercel deploy fails with env variable error

Add the missing variable on **Vercel → Settings → Environment Variables**, then **redeploy** with cache cleared.

---

### ✅ Quick Start (TL;DR)

For the impatient — run these 4 commands and you're done:

```bash
git clone https://github.com/your-username/bytespace.git
cd bytespace
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're ready to go! 🚀