import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout
      title="About"
      description="Learn about MarifahOps Consulting and our mission to help engineering leaders build better cloud infrastructure."
    >
      <div>
        <section className="container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">About MarifahOps</h1>
            <p className="text-body mb-8">
              MarifahOps is a cloud infrastructure and DevOps consulting firm focused on 
              helping engineering leaders build scalable, reliable systems. We work with 
              CTOs, Engineering Managers, and Cloud Architects who need expert guidance 
              without the overhead of large consulting firms.
            </p>
            <p className="text-body mb-8">
              Our approach is straightforward: understand your context, design practical solutions, 
              and deliver results that matter. We believe in building capability within your team, 
              not creating dependency on consultants.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="text-body">
                To help engineering leaders make informed decisions about cloud infrastructure 
                and DevOps practices. We provide the expertise and guidance needed to build 
                systems that scale, perform, and maintain reliability as your business grows.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Who We Work With</h2>
              <p className="text-body mb-4">
                We specialize in working with engineering leadership at companies that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Are scaling their cloud infrastructure and need expert guidance</li>
                <li>Want to modernize their DevOps practices and CI/CD pipelines</li>
                <li>Need an objective assessment of their current infrastructure</li>
                <li>Are planning a cloud migration or multi-cloud strategy</li>
                <li>Value transparency, results, and practical solutions</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                  <p className="text-gray-300">
                    Clear communication, honest assessments, and no hidden agendas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Practicality</h3>
                  <p className="text-gray-300">
                    Solutions that work in the real world, not just in theory.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Results</h3>
                  <p className="text-gray-300">
                    We measure success by the value we deliver to your business.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Independence</h3>
                  <p className="text-gray-300">
                    No vendor partnerships or technology preferences—just what's best for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

