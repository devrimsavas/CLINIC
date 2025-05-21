// app/privacy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg border border-border">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="text-text-muted mb-6 text-center text-lg">
        Your privacy is important to us. This policy outlines how we collect,
        use, and store your data.
      </p>

      <div className="space-y-6 text-text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            1. Information We Collect
          </h2>
          <p>
            When you book an appointment through our application, we collect
            personal information such as:
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm text-text-muted">
            <li>Your full name</li>
            <li>Email address</li>
            <li>Date of birth</li>
            <li>Gender</li>
            <li>Appointment details</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            2. How We Use Your Data
          </h2>
          <p>
            The information collected is strictly used for the purpose of
            managing appointments and improving the clinic experience. We do not
            sell or share your data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            3. Data Storage
          </h2>
          <p>
            All data is securely stored in our medical appointment system and is
            only accessible to authorized personnel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            4. Consent
          </h2>
          <p>
            By booking an appointment, you consent to the collection and use of
            your personal data as outlined in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            5. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or request deletion of your
            data at any time. To make a request, please contact us through our
            support channels.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">
            6. Updates
          </h2>
          <p>
            We may update this privacy policy occasionally. All updates will be
            posted on this page.
          </p>
        </section>
      </div>

      <p className="mt-10 text-sm text-text-muted text-center italic">
        Last updated: May 2025
      </p>
    </section>
  );
}
