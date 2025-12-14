import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/case-studies';
import { GetStaticProps } from 'next';
import { CaseStudy } from '@/lib/case-studies';

interface CaseStudiesPageProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesPage({ caseStudies }: CaseStudiesPageProps) {
  return (
    <Layout
      title="Case Studies"
      description="Real-world examples of cloud infrastructure and DevOps solutions we've delivered for engineering teams."
    >
      <div className="bg-[#f5faf8]">
        <section className="container-custom py-20">
          <div className="max-w-3xl mb-12">
            <h1 className="heading-1 mb-6">Case Studies</h1>
            <p className="text-body">
              Real-world examples of cloud infrastructure and DevOps solutions we've delivered 
              for engineering teams. Each case study demonstrates our approach and the results achieved.
            </p>
          </div>

          {caseStudies.length === 0 ? (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">No case studies available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.slug}
                  href={`/case-studies/${caseStudy.slug}/`}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h2 className="heading-3 mb-3">{caseStudy.title}</h2>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  {caseStudy.date && (
                    <p className="text-sm text-gray-500">
                      {new Date(caseStudy.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const caseStudies = await getAllCaseStudies();

  return {
    props: {
      caseStudies,
    },
  };
};

