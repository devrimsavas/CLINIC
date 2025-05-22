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

