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
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact/" className="btn-primary animate-pulse-glow">
                  Get Started
                </Link>
                <Link href="/case-studies/" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
              
              {/* Tech Stack Icons with Labels */}
              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-4">Our DevOps Stack:</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="tech-icon-container tech-icon-float flex flex-col items-center">
                    <img src="/images/terraform-icon.svg" alt="Terraform" className="w-14 h-14 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer" />
                    <span className="text-xs text-gray-400 mt-2">IaC</span>
                  </div>
                  <div className="tech-icon-flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-devops-cyan">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-flow-path"/>
                    </svg>
                  </div>
                  <div className="tech-icon-container tech-icon-float-delay-1 flex flex-col items-center">
                    <img src="/images/docker-icon.svg" alt="Docker" className="w-14 h-14 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer" />
                    <span className="text-xs text-gray-400 mt-2">Containers</span>
                  </div>
                  <div className="tech-icon-flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-devops-cyan">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-flow-path"/>
                    </svg>
                  </div>
                  <div className="tech-icon-container tech-icon-float-delay-2 flex flex-col items-center">
                    <img src="/images/kubernetes-icon.svg" alt="Kubernetes" className="w-14 h-14 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer" />
                    <span className="text-xs text-gray-400 mt-2">Orchestration</span>
                  </div>
                  <div className="tech-icon-flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-devops-cyan">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-flow-path"/>
                    </svg>
                  </div>
                  <div className="tech-icon-container tech-icon-float-delay-3 flex flex-col items-center">
                    <img src="/images/aws-icon.svg" alt="AWS" className="w-14 h-14 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer" />
                    <span className="text-xs text-gray-400 mt-2">Observability</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right animate-delay-200">
              <div className="relative min-h-[400px] flex items-center justify-center">
                {/* Main Cloud Architecture Graphic */}
                <div className="relative z-10 w-full max-w-lg">
                  <div className="absolute inset-0 bg-devops-cyan/20 blur-3xl rounded-full animate-pulse-glow"></div>
                  <img 
                    src="/images/cloud-architecture.svg" 
                    alt="Cloud Architecture" 
                    className="relative w-full h-auto animate-float"
                  />
                </div>
                
                {/* Floating Tech Icons around the graphic with labels */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 tech-icon-float">
                  <div className="bg-devops-darker/90 backdrop-blur-sm border border-devops-orange/50 rounded-lg p-2 shadow-lg shadow-devops-orange/30 hover:border-devops-orange transition-all flex flex-col items-center">
                    <img src="/images/terraform-icon.svg" alt="Terraform" className="w-12 h-12" />
                    <span className="text-xs text-gray-400 mt-1">IaC</span>
                  </div>
                </div>
                
                <div className="absolute top-8 right-8 md:top-12 md:right-12 tech-icon-float-delay-1">
                  <div className="bg-devops-darker/90 backdrop-blur-sm border border-devops-cyan/50 rounded-lg p-2 shadow-lg shadow-devops-cyan/30 hover:border-devops-cyan transition-all flex flex-col items-center">
                    <img src="/images/docker-icon.svg" alt="Docker" className="w-12 h-12" />
                    <span className="text-xs text-gray-400 mt-1">Containers</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 tech-icon-float-delay-2">
                  <div className="bg-devops-darker/90 backdrop-blur-sm border border-devops-purple/50 rounded-lg p-2 shadow-lg shadow-devops-purple/30 hover:border-devops-purple transition-all flex flex-col items-center">
                    <img src="/images/kubernetes-icon.svg" alt="Kubernetes" className="w-12 h-12" />
                    <span className="text-xs text-gray-400 mt-1">Orchestration</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-8 -translate-y-1/2 md:left-12 tech-icon-float-delay-3">
                  <div className="bg-devops-darker/90 backdrop-blur-sm border border-devops-green/50 rounded-lg p-2 shadow-lg shadow-devops-green/30 hover:border-devops-green transition-all flex flex-col items-center">
                    <img src="/images/aws-icon.svg" alt="AWS" className="w-12 h-12" />
                    <span className="text-xs text-gray-400 mt-1">Observability</span>
                  </div>
                </div>
                
                {/* Animated connecting lines between icons */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{zIndex: 5}}>
                  {/* Path from IaC (top-left) to Containers (top-right) */}
                  <path 
                    d="M 80 80 Q 200 60, 320 80" 
                    stroke="#00f5ff" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="8,4"
                    opacity="0.4"
                    className="tech-flow-line tech-flow-line-1"
                  />
                  {/* Animated dot on path 1 */}
                  <circle r="5" fill="#00ff88" opacity="0.8" className="tech-flow-dot tech-flow-dot-1">
                    <animate attributeName="cx" values="80;200;320" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="80;60;80" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Path from Containers (top-right) to Orchestration (bottom-center) */}
                  <path 
                    d="M 320 80 Q 280 200, 200 280" 
                    stroke="#00f5ff" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="8,4"
                    opacity="0.4"
                    className="tech-flow-line tech-flow-line-2"
                  />
                  {/* Animated dot on path 2 */}
                  <circle r="5" fill="#00ff88" opacity="0.8" className="tech-flow-dot tech-flow-dot-2">
                    <animate attributeName="cx" values="320;280;200" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="80;200;280" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Path from Orchestration (bottom-center) to Observability (left-center) */}
                  <path 
                    d="M 200 280 Q 100 240, 80 200" 
                    stroke="#00f5ff" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="8,4"
                    opacity="0.4"
                    className="tech-flow-line tech-flow-line-3"
                  />
                  {/* Animated dot on path 3 */}
                  <circle r="5" fill="#00ff88" opacity="0.8" className="tech-flow-dot tech-flow-dot-3">
                    <animate attributeName="cx" values="200;100;80" dur="2s" begin="1s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="280;240;200" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Path from Observability (left-center) back to IaC (top-left) */}
                  <path 
                    d="M 80 200 Q 60 140, 80 80" 
                    stroke="#00f5ff" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="8,4"
                    opacity="0.4"
                    className="tech-flow-line tech-flow-line-4"
                  />
                  {/* Animated dot on path 4 */}
                  <circle r="5" fill="#00ff88" opacity="0.8" className="tech-flow-dot tech-flow-dot-4">
                    <animate attributeName="cx" values="80;60;80" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="200;140;80" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 relative z-10">
          <div className="container-custom">
            <h2 className="heading-2 text-center mb-12 animate-fade-in-up">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="bg-devops-darker border border-devops-orange/30 p-6 rounded-lg hover:border-devops-orange/60 transition-all group animate-fade-in-up animate-delay-800">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/platform-as-product.svg" 
                    alt="Platform as a Product" 
                    className="w-32 h-24 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="heading-3 mb-4">Platform as a Product</h3>
                <p className="text-gray-300">
                  Build internal platforms that enable your engineering teams to ship faster. 
                  Self-service infrastructure, developer tooling, and platform engineering.
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

