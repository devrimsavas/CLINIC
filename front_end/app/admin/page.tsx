//admin/page
//app/admin/page

export default function AdminPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh] relative">
      <div className="absolute w-[800px] h-[700px] bg-white/20 blur-3xl  z-0" />

      {/* Actual card in front */}
      <div className="relative z-10 bg-primary p-10 rounded-lg shadow-lg w-full max-w-xl text-white">
        <h1 className="text-4xl font-bold mb-6" >Admin Dashboard</h1>
        <p className="text-lg mb-4">
          Welcome to the Admin Panel.
          <br />
          Use the navigation above to manage Clinics,Doctors,Patients and Appointments
        </p>
      </div>
    </section>
  );
}
