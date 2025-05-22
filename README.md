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
4. code.devpilot.org "to create appointment calendar"  "https://code.daypilot.org"



# Clinic Appointment Booking System BACK-END 

This is the **Back-end API** for the Clinic Appointment Booking system developed using **ASP.NET Core 8** and **Entity Framework Core**, with a **MySQL** database.

It allows patients to book appointments with doctors without authentication, following REST principles.

---

## Technologies Used

- ASP.NET Core 8
- Entity Framework Core
- MySQL
- Swagger (API Documentation)
- LINQ
- CORS

---

##  Setup & Configuration

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/clinic-booking-backend.git
cd clinic-booking-backend
```

### 2. Add `appsettings.json`
Create a new file named `appsettings.json` in the root folder:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=medicalclinics;user=root;password=yourpassword"
  }
}
```

>  This file is excluded from version control using `.gitignore`. Use `appsettings.json.sample.txt` for reference.

### 3. Run the Application
```bash
dotnet build
dotnet ef database update
dotnet run
```

The Swagger UI will be available at: https://localhost:{PORT}/swagger

---

##  Endpoints Overview

###  Appointments
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/appointments`    | Get all appointments            |
| GET    | `/api/appointments/{id}` | Get an appointment by ID      |
| POST   | `/api/appointments`    | Create a new appointment        |
| PUT    | `/api/appointments/{id}` | Update an appointment         |
| DELETE | `/api/appointments/{id}` | Delete an appointment         |

### Patients
| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/patients`    | Get all patients             |
| GET    | `/api/patients/{id}` | Get patient by ID         |
| POST   | `/api/patients`    | Create a patient             |
| PUT    | `/api/patients/{id}` | Update a patient           |
| DELETE | `/api/patients/{id}` | Delete a patient           |

###  Doctors
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/doctors`   | Get all doctors          |
| GET    | `/api/doctors/{id}` | Get doctor by ID     |
| POST   | `/api/doctors`   | Create a doctor          |
| PUT    | `/api/doctors/{id}` | Update a doctor       |
| DELETE | `/api/doctors/{id}` | Delete a doctor       |

###  Clinics
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/clinics`   | Get all clinics          |
| GET    | `/api/clinics/{id}` | Get clinic by ID     |
| POST   | `/api/clinics`   | Create a clinic          |
| PUT    | `/api/clinics/{id}` | Update a clinic       |
| DELETE | `/api/clinics/{id}` | Delete a clinic       |

###  Specialities
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/specialities`  | Get all specialities         |
| GET    | `/api/specialities/{id}` | Get by ID               |
| POST   | `/api/specialities`  | Create a new speciality      |
| PUT    | `/api/specialities/{id}` | Update a speciality     |
| DELETE | `/api/specialities/{id}` | Delete a speciality     |

###  Doctor Search
| Method | Endpoint               | Description                                  |
|--------|------------------------|----------------------------------------------|
| POST   | `/api/search/doctors`  | Search by first name or last name (no auth) |

Sample POST Body:
```json
{
  "firstName": "John",
  "lastName": "Doe"
}
```

---

##  Swagger
Visit the Swagger UI:
```
https://localhost:{PORT}/swagger
```
This shows request/response schemas, example requests, and testing tools.

---

##  CORS Configuration
All origins, headers, and methods are allowed:
```csharp
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", builder => {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
```
---

##  Front-end
To be implemented using **Next.js**. API is designed to be consumed directly with fetch/axios.

---

##  Notes
- Only non-sensitive PII (Personal Identifiable Information) is stored.
- DTOs are used to shape responses and avoid entity leakage.
- XML comments included for Swagger documentation.

------------------------------------------------------------------------------------------


# Clinic Appointment Booking System - Frontend

This is the **frontend** part of the **Clinic Appointment Booking System**, built with **Next.js v14.0.1**.

> ⚠️ Make sure the backend is active and running **before** starting the frontend.

##  Overview

This application enables users to book medical appointments, search for doctors, and provides an admin interface for managing data. Below is a breakdown of available pages and features.

### 1. Book Appointment Page

 `http://localhost:3000/`

- Allows users to create a new appointment.
- Appointments can only be made within working hours and not before the current date.
- Booking rules are displayed on the page.

### 2. Search Doctor Page

 `http://localhost:3000/search`

- Users can search for any doctor or view all doctors.
- Includes functionality to clear search results.

### 3. Admin Page

 `http://localhost:3000/admin`

- A special admin panel with its own navbar.
- Admin can manage:
  - Clinics
  - Doctors
  - Patients
  - Appointments
  - Specialities
- Full CRUD functionality available.
- ❗ No authentication/authorization is currently implemented.
- Future plans include role-based access control to comply with personal data protection laws.
- Admin **cannot** delete a patient who has an appointment.

### 4. Appointment Calendar

 `http://localhost:3000/calendar`

- View appointments in **monthly** and **daily** format.
- Based on [DayPilot Calendar](https://code.daypilot.org/62886/next-js-calendar-day-week-month-open-source).
- Ensure the following dependency is installed and appears in your `package.json`:

```json
"dependencies": {
  "@daypilot/daypilot-lite-react": "^3.33.1"
}
```

### 5. Footbar

- Includes:
  - Dummy contact form
  - About Us
  - Privacy Policy
- For realistic use, patients should accept the privacy policy before booking.

### 6. Naming

- The application name was randomly generated via ChatGPT.
- It has no relation to any real entity.

### 7. Images and Texts

- Generated via ChatGPT.
- Includes placeholders for loading, 404 pages, About Us, and Privacy sections.

### 8. Libraries Used

- `@daypilot/daypilot-lite-react` for calendar.
- `lucide-react` for icons.
- `animate.css` for animations.

### 9. Styling

- **Tailwind CSS** is used for styling.
- The main styling configuration is handled in `tailwind.config.ts`.

---

##  Getting Started

```bash
npm install
npm run dev
```

Make sure the backend is running and properly connected.

---




