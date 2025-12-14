import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Services', href: '/services/' },
  { name: 'Approach', href: '/approach/' },
  { name: 'Case Studies', href: '/case-studies/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container-custom" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              MarifahOps
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => {
              const isActive = router.pathname === item.href || 
                              (item.href !== '/' && router.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

