import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-devops-darker border-t border-devops-purple/30">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-devops-cyan mb-4">MarifahOps Consulting</h3>
            <p className="text-gray-400 text-sm">
              Enterprise cloud infrastructure and DevOps consulting for engineering leaders.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/" className="text-sm text-gray-400 hover:text-devops-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach/" className="text-sm text-gray-400 hover:text-devops-cyan transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-sm text-gray-400 hover:text-devops-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-sm text-gray-400 hover:text-devops-cyan transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact/" className="text-sm text-gray-400 hover:text-devops-cyan transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-devops-purple/30">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} MarifahOps Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

