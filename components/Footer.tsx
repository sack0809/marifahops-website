import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">MarifahOps Consulting</h3>
            <p className="text-gray-600 text-sm">
              Enterprise cloud infrastructure and DevOps consulting for engineering leaders.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/" className="text-sm text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach/" className="text-sm text-gray-600 hover:text-gray-900">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-sm text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact/" className="text-sm text-gray-600 hover:text-gray-900">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} MarifahOps Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

