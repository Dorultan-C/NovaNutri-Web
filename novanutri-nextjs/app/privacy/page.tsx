import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-surface min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted mb-12 font-medium">Last Updated: April 2026</p>

        <div className="text-body space-y-8 leading-relaxed">
          <p>
            Welcome to Riov. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &quot;App&quot;).
          </p>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">1. Information We Collect</h2>
            <p className="mb-3">To provide our smart meal planning features, we collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> When you register, we collect your email address, display name, and authentication details.</li>
              <li><strong>Profile and Dietary Data:</strong> We store the preferences you explicitly provide, including dietary types (e.g., Mediterranean, Vegan), food allergies, and ingredients you dislike.</li>
              <li><strong>User-Generated Content:</strong> We store the recipes you import, meal plans you create, photos of recipes you upload for extraction, and your &quot;Virtual Fridge&quot; inventory.</li>
              <li><strong>Usage and Device Data:</strong> We automatically collect diagnostic data, crash reports, and device identifiers to ensure the App functions correctly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect primarily to operate and improve Riov. Specifically, we use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Provide personalized recipe recommendations and filter out allergens based on your profile.</li>
              <li>Process your AI recipe extractions from provided URLs or images.</li>
              <li>Generate accurate shopping lists and estimate grocery costs.</li>
              <li>Send system notifications regarding meal plans or subscription updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">3. Third-Party Services and Data Sharing</h2>
            <p className="mb-3">We do not sell your personal data. We only share information with trusted third-party service providers necessary to operate the App:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Firebase:</strong> Used for secure account authentication, database storage, and crash analytics.</li>
              <li><strong>AI Providers (e.g., OpenAI):</strong> When you use our &quot;Magic Import&quot; or photo extraction tools, the raw text, URL, or image is sent to our AI providers to format the recipe. <em>Your personal identity, dietary profile, and account details are never sent to or used to train these external AI models.</em></li>
              <li><strong>App Stores:</strong> Subscription payments are processed securely by Apple or Google. Riov does not directly collect or store your credit card information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">4. Data Retention and Deletion</h2>
            <p className="mb-3">
              We retain your personal information only for as long as your account is active. <strong>You have the right to request the deletion of your data at any time.</strong>
            </p>
            <p>
              To delete your data, you can use the &quot;Delete Account&quot; option directly within the Riov App settings. Alternatively, you may contact us to request full data erasure. Upon deletion, all your personal information, saved recipes, and dietary profiles will be permanently removed from our active databases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures, including encryption in transit and at rest, to protect your data. However, please be aware that no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">6. Children&apos;s Privacy</h2>
            <p>
              Riov is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will take immediate steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the &quot;Last Updated&quot; date at the top of this policy and, where appropriate, via an in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-3">8. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us through the Riov App support menu.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}