import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Enterprise cloud infrastructure and DevOps consulting for CTOs, Engineering Managers, and Cloud Architects."
    >
      <div>
        {/* Hero Section */}
        <section className="container-custom py-20 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Cloud Infrastructure Consulting for Engineering Leaders
            </h1>
            <p className="text-body mb-8">
              MarifahOps helps CTOs and Engineering Managers build scalable, reliable cloud infrastructure. 
              We deliver enterprise-grade solutions with minimal marketing fluff—just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-primary">
                Get Started
              </Link>
              <Link href="/case-studies/" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="heading-2 text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-devops-darker border border-devops-cyan/30 p-6 rounded-lg hover:border-devops-cyan/60 transition-all">
                <h3 className="heading-3 mb-4">Cloud Architecture</h3>
                <p className="text-gray-300">
                  Design and implement scalable cloud infrastructure on AWS, Azure, or GCP. 
                  From initial architecture to production deployment.
                </p>
              </div>
              <div className="bg-devops-darker border border-devops-cyan/30 p-6 rounded-lg hover:border-devops-cyan/60 transition-all">
                <h3 className="heading-3 mb-4">DevOps & CI/CD</h3>
                <p className="text-gray-300">
                  Streamline your development workflow with modern CI/CD pipelines, 
                  infrastructure as code, and automated deployments.
                </p>
              </div>
              <div className="bg-devops-darker border border-devops-cyan/30 p-6 rounded-lg hover:border-devops-cyan/60 transition-all">
                <h3 className="heading-3 mb-4">Infrastructure Review</h3>
                <p className="text-gray-300">
                  Comprehensive audits of your existing infrastructure with actionable 
                  recommendations for cost optimization and reliability.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/services/" className="btn-primary">
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Approach Preview */}
        <section className="container-custom py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Our Approach</h2>
            <p className="text-body mb-8">
              We work directly with engineering leadership to understand your unique challenges. 
              Our process is transparent, results-driven, and focused on delivering value from day one.
            </p>
            <Link href="/approach/" className="btn-secondary">
              Learn About Our Approach
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

