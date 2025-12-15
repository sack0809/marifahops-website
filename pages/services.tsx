import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout
      title="Services"
      description="Cloud architecture, DevOps, CI/CD, and infrastructure consulting services for enterprise engineering teams."
    >
      <div>
        <section className="container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Services</h1>
            <p className="text-body mb-12">
              We provide comprehensive cloud infrastructure and DevOps consulting services 
              tailored for engineering leaders who need reliable, scalable solutions.
            </p>
          </div>

          <div className="space-y-16 mt-16">
            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Cloud Architecture Design</h2>
              <p className="text-body mb-4">
                We design and implement cloud-native architectures that scale with your business. 
                Whether you're migrating to the cloud or optimizing existing infrastructure, 
                we ensure your architecture is secure, cost-effective, and maintainable.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Multi-cloud and hybrid cloud strategies</li>
                <li>Microservices and container orchestration</li>
                <li>Serverless architecture design</li>
                <li>Disaster recovery and high availability planning</li>
                <li>Security and compliance architecture</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">DevOps & CI/CD Implementation</h2>
              <p className="text-body mb-4">
                Accelerate your development cycles with modern DevOps practices and automated CI/CD pipelines. 
                We help you build a culture of continuous integration and deployment.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>CI/CD pipeline design and implementation</li>
                <li>Infrastructure as Code (Terraform, CloudFormation, Pulumi)</li>
                <li>Containerization and orchestration (Docker, Kubernetes)</li>
                <li>Monitoring, logging, and observability setup</li>
                <li>DevOps team training and best practices</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Infrastructure Review & Optimization</h2>
              <p className="text-body mb-4">
                Get an expert assessment of your current infrastructure with actionable recommendations 
                for improvement. We identify cost savings, performance bottlenecks, and reliability risks.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Comprehensive infrastructure audits</li>
                <li>Cost optimization analysis</li>
                <li>Performance and scalability assessment</li>
                <li>Security and compliance review</li>
                <li>Migration planning and execution</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="heading-2 mb-6">Cloud Migration</h2>
              <p className="text-body mb-4">
                Migrate your workloads to the cloud with minimal disruption. We handle the complexity 
                so you can focus on your business.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Migration strategy and planning</li>
                <li>Lift-and-shift and cloud-native transformations</li>
                <li>Data migration and synchronization</li>
                <li>Post-migration optimization</li>
                <li>Training and knowledge transfer</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact/" className="btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

