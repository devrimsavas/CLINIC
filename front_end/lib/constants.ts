//constants.ts file

//Base API
//note adjust port according to your backend port
const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5196/api";

//APPOINTMENTS SECTION------

//get all appointments
export const API_GET_ALL_APPOINTMENTS = `${BASE_API_URL}/Appointments`;

//get an appointment
export const API_GET_APPOINTMENT_BY_ID = (id: number) =>
  `${BASE_API_URL}/Appointments/${id}`;

//post an appointment
export const API_CREATE_APPOINTMENT = `${BASE_API_URL}/Appointments`;

//edit an appointment
export const API_UPDATE_APPOINTMENT = `${BASE_API_URL}/Appointments`;

//delete an appointment
export const API_DELETE_APPOINTMENT = (id: number) =>
  `${BASE_API_URL}/Appointments/${id}`;

//create an appointment with patient details
export const API_CREATE_APPOINTMENT_WITHPATIENT = `${BASE_API_URL}/Appointments/with-patient`;

//CLINIC SECTION

//get all clinics
export const GET_ALL_CLINICS = `${BASE_API_URL}/Clinics`;
//get a clinic by id
export const GET_CLINIC = (id: number) => `${BASE_API_URL}/Clinics/${id}`;
//post a clinic (create clinic)
export const CREATE_CLINIC = `${BASE_API_URL}/Clinics`;
//update a clinic (put method)
export const EDIT_CLINIC = `${BASE_API_URL}/Clinics`;
//delete a clinic (delete method)
export const DELETE_CLINIC = `${BASE_API_URL}/Clinics`;

//DOCTOR SECTION
//get all doctors
export const GET_ALL_DOCTORS = `${BASE_API_URL}/Doctors`;

//post (create) a doctor
export const CREATE_DOCTOR = `${BASE_API_URL}/Doctors`;

//get a doctor by id get method
export const GET_DOCTOR_BY_ID = (id: number) => `${BASE_API_URL}/Doctors/${id}`;

//edit a doctor put method
export const UPDATE_DOCTOR = (id: number) => `${BASE_API_URL}/Doctors/${id}`;
//delete a doctor by id
export const DELETE_DOCTOR = (id: number) => `${BASE_API_URL}/Doctors/${id}`;

//SEARCH DOCTOR SECTION POST------------

export const SEARCH_DOCTOR = `${BASE_API_URL}/Search/doctors`;

//SPECIALITIES SECTION
//get all specialities
export const GET_ALL_SPECIALITIES = `${BASE_API_URL}/Specialities`;
//create new speciality
export const CREATE_SPECIALITY = `${BASE_API_URL}/Specialities`;
//get a speciality
export const GET_SPECIALITY_BY_ID = (id: number) =>
  `${BASE_API_URL}/Specialities/${id}`;
//edit  a speciality put method
export const UPDATE_SPECIALITY = (id: number) =>
  `${BASE_API_URL}/Specialities/${id}`;
//delete speciality delete method
export const DELETE_SPECIALITY = (id: number) =>
  `${BASE_API_URL}/Specialities/${id}`;

//PATIENT SECTION
//get all patients
export const GET_ALL_PATIENTS = `${BASE_API_URL}/Patients`;
//create new patient
export const CREATE_PATIENT = `${BASE_API_URL}/Patients`;
//get a patient
export const GET_PATIENT = (id: number) => `${BASE_API_URL}/Patients/${id}`;
//edit a patient update put
export const UPDATE_PATIENT = (id: number) => `${BASE_API_URL}/Patients/${id}`;
//delete a patient delete method
export const DELETE_PATIENT = (id: number) => `${BASE_API_URL}/Patients/${id}`;
