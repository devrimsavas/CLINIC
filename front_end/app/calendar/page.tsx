"use client";

import { useEffect, useState } from "react";
import {
  DayPilot,
  DayPilotMonth,
  DayPilotCalendar,
} from "@daypilot/daypilot-lite-react";
import { API_GET_ALL_APPOINTMENTS } from "@/lib/constants";

export default function AppointmentCalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [monthStartDate, setMonthStartDate] = useState(DayPilot.Date.today());
  const [dayStartDate, setDayStartDate] = useState(DayPilot.Date.today());

  useEffect(() => {
    async function fetchAppointments() {
      const res = await fetch(API_GET_ALL_APPOINTMENTS);
      const data = await res.json();

      const formatted = data.appointments.map((appt: any) => {
        const start = new DayPilot.Date(appt.appointmentDateTime);
        const end = start.addMinutes(appt.durationInMinutes || 30);

        return {
          id: appt.id,
          start,
          end,
          text: "",
          data: {
            doctor: appt.doctorName,
            patient: appt.patientName,
            time: start.toString("HH:mm"),
            category: appt.category,
          },
        };
      });

      setEvents(formatted);
    }

    fetchAppointments();
  }, []);

  const goPrevMonth = () => setMonthStartDate(monthStartDate.addMonths(-1));
  const goNextMonth = () => setMonthStartDate(monthStartDate.addMonths(1));

  const goPrevDay = () => setDayStartDate(dayStartDate.addDays(-1));
  const goNextDay = () => setDayStartDate(dayStartDate.addDays(1));

  return (
    <section className="w-full max-w-[1800px] mx-auto px-6 py-8 bg-white shadow-md border border-border rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-primary">
          Appointment Calendar<hr></hr>
        </h1>
        <div className="flex gap-3">
          <button
            onClick={goPrevMonth}
            className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark"
          >
            Prev Month
          </button>
          <span className="text-lg font-medium">
            {monthStartDate.toString("MMMM yyyy")}
          </span>
          <button
            onClick={goNextMonth}
            className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark"
          >
            Next Month
          </button>
        </div>
      </div>

      {/* ✅ 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left: Month view */}
        <div>
          <DayPilotMonth
            startDate={monthStartDate}
            events={events}
            eventHeight={90}
            cellHeight={200}
            headerHeight={32}
            locale="en-us"
            onBeforeEventRender={(args: any) => {
              const { doctor, patient, time, category } = args.data.data;

              args.data.html = `
                <div class="p-1 leading-tight">
                  <div class="text-xs font-semibold">Dr. ${doctor}</div>
                  <div class="text-xs">Patient: ${patient}</div>
                  <div class="text-xs">Time: ${time}</div>
                  <div class="text-[10px] italic mt-1">${category}</div>
                </div>
              `;
              args.data.backColor = "#e0f2fe";
              args.data.fontColor = "#0c4a6e";
              args.data.borderColor = "#38bdf8";
            }}
          />
        </div>

        {/* Right: Day view (smaller) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-secondary-dark">
              {dayStartDate.toString("dddd, MMMM d")}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={goPrevDay}
                className="bg-secondary text-white px-2 py-1 rounded hover:bg-secondary-dark text-sm"
              >
                Prev Day
              </button>
              <button
                onClick={goNextDay}
                className="bg-secondary text-white px-2 py-1 rounded hover:bg-secondary-dark text-sm"
              >
                Next Day
              </button>
            </div>
          </div>

          <div className="border rounded-lg shadow-sm overflow-hidden">
            <DayPilotCalendar
              viewType="Day"
              startDate={dayStartDate}
              businessBeginsHour={8}
              businessEndsHour={19}
              cellHeight={40}
              events={events}
              durationBarVisible={false}
              onBeforeEventRender={(args: any) => {
                const { doctor, patient, category } = args.data.data;

                args.data.html = `
                  <div class="px-2 py-1 leading-tight">
                    <div class="text-xs font-semibold">Dr. ${doctor}</div>
                    <div class="text-xs">Patient: ${patient}</div>
                    <div class="text-xs italic">${category}</div>
                  </div>
                `;
                args.data.backColor = "#ccfbf1";
                args.data.fontColor = "#064e3b";
                args.data.borderColor = "#2dd4bf";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
