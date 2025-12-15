import Layout from '@/components/Layout';

export default function Approach() {
  return (
    <Layout
      title="Our Approach"
      description="How MarifahOps works with engineering leaders to deliver cloud infrastructure solutions."
    >
      <div>
        <section className="container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Approach</h1>
            <p className="text-body mb-12">
              We believe in transparent, results-driven consulting. Our approach is designed 
              to deliver value quickly while building long-term capabilities within your team.
            </p>
          </div>

          <div className="space-y-16 mt-16">
            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">1. Understand Your Context</h2>
              <p className="text-body">
                Every organization is unique. We start by understanding your business objectives, 
                technical constraints, team capabilities, and existing infrastructure. This deep 
                understanding ensures our recommendations are practical and aligned with your goals.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">2. Design with Engineering Leaders</h2>
              <p className="text-body">
                We work directly with CTOs, Engineering Managers, and Cloud Architects. 
                No layers of account management—just direct collaboration with decision-makers 
                who understand both the technical and business implications.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">3. Deliver Incrementally</h2>
              <p className="text-body">
                We break down large initiatives into manageable phases. Each phase delivers 
                tangible value, allowing you to see progress quickly and adjust course as needed. 
                This iterative approach reduces risk and ensures alignment.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">4. Build Capability, Not Dependency</h2>
              <p className="text-body">
                Our goal is to make your team self-sufficient. We document everything, provide 
                training, and ensure knowledge transfer. You shouldn't need us forever—you should 
                be able to maintain and evolve what we build together.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">5. Measure and Iterate</h2>
              <p className="text-body">
                We establish clear metrics for success and regularly review progress. 
                Whether it's deployment frequency, infrastructure costs, or system reliability, 
                we measure what matters and adjust our approach based on data.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-devops-darker border border-devops-purple/30 p-8 rounded-lg max-w-4xl">
            <h2 className="heading-3 mb-4">What Sets Us Apart</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">✓</span>
                <span><strong>No vendor lock-in:</strong> We recommend tools and platforms based on your needs, not our partnerships.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">✓</span>
                <span><strong>Transparent communication:</strong> Regular updates, clear documentation, and honest assessments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">✓</span>
                <span><strong>Enterprise experience:</strong> We've worked with teams from startups to Fortune 500 companies.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">✓</span>
                <span><strong>Focus on results:</strong> We measure success by the value we deliver, not the hours we bill.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

