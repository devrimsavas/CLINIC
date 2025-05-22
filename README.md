# NOVAMED Clinic Appointment Booking System

This application simulates appointment services for an imaginary clinic group called **NOVAMED**, supporting roles such as **patients**, **doctors**, **desk staff**, and **admins**.

Users can **create**, **update**, **delete**, or **view** appointments. It uses a **local MySQL database**, but can work with any relational database using the appropriate .NET packages.

---

## Application Structure

The project is divided into two main parts:

### 🔹 Backend

- Built with **ASP.NET 8**
- Handles all business logic, API routes, and database operations
- Refer to the backend's own `README.md` for detailed instructions on installation, usage, and available endpoints

### 🔹 Frontend

- Built with **Next.js v14**
- Responsible for the user interface
- Uses **Tailwind CSS** for styling
- Detailed documentation provided in the frontend's `README.md`

---

## Install and Run the Application

You can start the full application using either an **automatic** or **manual** method.

### 🚀 A. Automatic Startup

In the **root folder**, the application uses the `concurrently` package to start both backend and frontend.

#### Steps:

1. Navigate to the root folder.
2. Run:

```bash
npm install
```

This installs the `concurrently` package.

3. Ensure your `package.json` in the root folder looks like this:

```json
{
  "name": "your-application-name",
  "version": "1.0.0",
  "scripts": {
    "dev": "concurrently -k -n FRONT,BACK -c green,blue \"npm run front\" \"npm run back\"",
    "front": "npm --prefix front_end run dev",
    "back": "dotnet watch run --project back-end"
  },
  "devDependencies": {
    "concurrently": "^9.1.2"
  }
}
```

---

## Backend Setup

1. Navigate to `back-end/` folder.
2. Run:

```bash
dotnet build
```

3. Create `appsettings.json`. See backend README for details.
4. Apply database migrations as required.
5. Start backend manually if needed. Swagger UI should be available at:

```
http://localhost:<your-port>/swagger/index.html
```

> Default port is `5196`, verify before proceeding.

---

## Frontend Setup

1. Navigate to `front_end/` folder.
2. Create a `.env.local` file. An example format is available in the frontend section.
3. Run:

```bash
npm install
```

This installs all necessary frontend dependencies.

Ensure your frontend `package.json` looks like this:

```json
{
  "name": "front_end",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@daypilot/daypilot-lite-react": "^3.33.1",
    "animate.css": "^4.1.1",
    "lucide-react": "^0.511.0",
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

---

## Run Application (Auto Mode)

Once all dependencies are installed:

1. Ensure you're in the **root** folder.
2. Run:

```bash
npm run dev
```

- Backend and frontend will start simultaneously.
- **Frontend logs** will appear in **green**, and **backend logs** in **blue** in the console.

---

## More Info

Detailed package setup and usage instructions are available in the `README.md` files inside the respective `backend/` and `frontend/` folders.

## REFERENCES

In this section, the external resources and materials used to create this application are listed.Additinally, how and what purpose these resources used are discussed in details in the backend and frontend sections README.md files

1. Noroff Learning Resources, "Front-End Technologies Module4, Back-End Technologies"
2. ChatGPT, OpenAI. Assistance with creating "dummy texts, company name, images and visuals"
3. MovieTheater Project, Developers own project "to use nextjs components and structure"
4. code.devpilot.org "to create appointment calendar"
