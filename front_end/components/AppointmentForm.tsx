"use client";

import { useEffect, useState } from "react";
import FormButton from "@/components/ui/FormButton";
import Alert from "@/components/ui/Alert";
import { bookAppointmentWithPatient } from "@/modules/actions";
import { GET_ALL_CLINICS, GET_ALL_DOCTORS } from "@/lib/constants";

interface Clinic {
  id: number;
  name: string;
}

interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
}

export default function AppointmentForm() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    patient: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      gender: "",
    },
    appointment: {
      appointmentDateTime: "",
      category: "",
      doctorId: 0,
      clinicId: 0,
      durationInMinutes: 30,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const [clinicsRes, doctorsRes] = await Promise.all([
        fetch(GET_ALL_CLINICS),
        fetch(GET_ALL_DOCTORS),
      ]);
      const clinicData = await clinicsRes.json();
      const doctorData = await doctorsRes.json();

      setClinics(clinicData.clinics || []);
      setDoctors(doctorData.doctors || []);
    }
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name in formData.patient) {
      setFormData((prev) => ({
        ...prev,
        patient: {
          ...prev.patient,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        appointment: {
          ...prev.appointment,
          [name]:
            name === "doctorId" ||
            name === "clinicId" ||
            name === "durationInMinutes"
              ? Number(value)
              : value,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      await bookAppointmentWithPatient(formData);
      setMessage("Appointment successfully booked!");
      setFormData({
        patient: {
          firstName: "",
          lastName: "",
          email: "",
          birthDate: "",
          gender: "",
        },
        appointment: {
          appointmentDateTime: "",
          category: "",
          doctorId: 0,
          clinicId: 0,
          durationInMinutes: 30,
        },
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-0 p-6 bg-white rounded-xl shadow-lg border border-border">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {message && <Alert message={message} type="success" onClose={() => setMessage("")} />}
        {error && <Alert message={error} type="error" onClose={() => setError("")} />}

        {/* Patient Info */}
        <fieldset className="space-y-4">
          <legend className="text-xl font-semibold text-secondary mb-2">
            Patient Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.patient.firstName}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.patient.lastName}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.patient.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={formData.patient.birthDate}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={formData.patient.gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Appointment Info */}
        <fieldset className="space-y-4">
          <legend className="text-xl font-semibold text-secondary mb-2">
            Appointment Details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Select Clinic</label>
              <select
                name="clinicId"
                value={formData.appointment.clinicId}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select Clinic</option>
                {clinics.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Select Doctor</label>
              <select
                name="doctorId"
                value={formData.appointment.doctorId}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select Doctor</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.id}>
                    Dr. {d.firstName} {d.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Date & Time</label>
              <input
                type="datetime-local"
                name="appointmentDateTime"
                value={formData.appointment.appointmentDateTime}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input
                type="text"
                name="category"
                value={formData.appointment.category}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="form-label">Duration (minutes)</label>
              <input
                type="number"
                name="durationInMinutes"
                value={formData.appointment.durationInMinutes}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>
        </fieldset>

        {/* Actions */}
        <div className="flex gap-4 justify-end">
          <FormButton text="Book Appointment" type="submit" color="primary" />
          <FormButton
            text="Cancel"
            type="button"
            color="danger"
            onClick={() =>
              setFormData({
                patient: {
                  firstName: "",
                  lastName: "",
                  email: "",
                  birthDate: "",
                  gender: "",
                },
                appointment: {
                  appointmentDateTime: "",
                  category: "",
                  doctorId: 0,
                  clinicId: 0,
                  durationInMinutes: 30,
                },
              })
            }
          />
        </div>

        {loading && (
          <p className="text-blue-600 text-center">Booking appointment...</p>
        )}
      </form>
    </section>
  );
}
