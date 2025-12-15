import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Get in touch with MarifahOps Consulting to discuss your cloud infrastructure and DevOps needs."
    >
      <div>
        <section className="container-custom py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="text-body mb-12">
              Ready to discuss your cloud infrastructure needs? Get in touch and we'll schedule 
              a conversation to understand your challenges and explore how we can help.
            </p>

            <div className="bg-devops-darker border border-devops-cyan/30 p-8 rounded-lg mb-12">
              <h2 className="heading-3 mb-6">Get Started</h2>
              <p className="text-gray-300 mb-6">
                The best way to reach us is via email. We typically respond within one business day.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:contact@marifahops.com" 
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <span className="text-devops-cyan">contact@marifahops.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="heading-3 mb-4">What to Include</h2>
              <p className="text-gray-300 mb-4">
                To help us understand your needs quickly, please include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li>Your role and organization</li>
                <li>Brief description of your current infrastructure challenges</li>
                <li>What you're hoping to achieve</li>
                <li>Timeline or urgency (if applicable)</li>
              </ul>

              <h2 className="heading-3 mb-4">Initial Consultation</h2>
              <p className="text-gray-300">
                We offer a complimentary initial consultation to discuss your needs and determine 
                if we're a good fit. This conversation helps us understand your context and allows 
                you to evaluate our approach. There's no obligation, and we'll be transparent about 
                whether we can help or if another firm might be better suited.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

