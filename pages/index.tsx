import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Enterprise cloud infrastructure and DevOps consulting for CTOs, Engineering Managers, and Cloud Architects."
    >
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container-custom py-20 sm:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="heading-1 mb-6">
                Cloud Infrastructure Consulting for Engineering Leaders
              </h1>
              <p className="text-body mb-8">
                MarifahOps helps CTOs and Engineering Managers build scalable, reliable cloud infrastructure. 
                We deliver enterprise-grade solutions with minimal marketing fluff—just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-primary animate-pulse-glow">
                  Get Started
                </Link>
                <Link href="/case-studies/" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right animate-delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-devops-cyan/20 blur-3xl rounded-full animate-pulse-glow"></div>
                <img 
                  src="/images/cloud-architecture.svg" 
                  alt="Cloud Architecture" 
                  className="relative w-full h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 relative z-10">
          <div className="container-custom">
            <h2 className="heading-2 text-center mb-12 animate-fade-in-up">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-devops-darker border border-devops-cyan/30 p-6 rounded-lg hover:border-devops-cyan/60 transition-all group animate-fade-in-up animate-delay-200">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/cloud-architecture.svg" 
                    alt="Cloud Architecture" 
                    className="w-32 h-24 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="heading-3 mb-4">Cloud Architecture</h3>
                <p className="text-gray-300">
                  Design and implement scalable cloud infrastructure on AWS, Azure, or GCP. 
                  From initial architecture to production deployment.
                </p>
              </div>
              <div className="bg-devops-darker border border-devops-purple/30 p-6 rounded-lg hover:border-devops-purple/60 transition-all group animate-fade-in-up animate-delay-400">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/devops-pipeline.svg" 
                    alt="DevOps Pipeline" 
                    className="w-32 h-24 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="heading-3 mb-4">DevOps & CI/CD</h3>
                <p className="text-gray-300">
                  Streamline your development workflow with modern CI/CD pipelines, 
                  infrastructure as code, and automated deployments.
                </p>
              </div>
              <div className="bg-devops-darker border border-devops-green/30 p-6 rounded-lg hover:border-devops-green/60 transition-all group animate-fade-in-up animate-delay-600">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/infrastructure-monitor.svg" 
                    alt="Infrastructure Monitoring" 
                    className="w-32 h-24 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
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
        <section className="container-custom py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left animate-slide-in-left">
                <h2 className="heading-2 mb-6">Our Approach</h2>
                <p className="text-body mb-8">
                  We work directly with engineering leadership to understand your unique challenges. 
                  Our process is transparent, results-driven, and focused on delivering value from day one.
                </p>
                <Link href="/approach/" className="btn-secondary">
                  Learn About Our Approach
                </Link>
              </div>
              <div className="animate-slide-in-right animate-delay-400">
                <div className="relative">
                  <div className="absolute inset-0 bg-devops-purple/20 blur-3xl rounded-full animate-pulse-glow"></div>
                  <img 
                    src="/images/devops-pipeline.svg" 
                    alt="DevOps Process" 
                    className="relative w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-devops-cyan/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-devops-purple/10 rounded-full blur-3xl animate-float animate-delay-400"></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-devops-green/10 rounded-full blur-3xl animate-float animate-delay-600"></div>
        </div>
      </div>
    </Layout>
  );
}

