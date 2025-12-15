import Layout from '@/components/Layout';
import Link from 'next/link';
import { getCaseStudyBySlug, getCaseStudySlugs, getAllCaseStudies } from '@/lib/case-studies';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CaseStudy } from '@/lib/case-studies';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  return (
    <Layout
      title={caseStudy.title}
      description={caseStudy.description}
    >
      <div>
        <article className="container-custom py-20">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/case-studies/" 
              className="text-devops-cyan hover:text-devops-green mb-8 inline-block transition-colors"
            >
              ← Back to Case Studies
            </Link>

            <header className="mb-8">
              <h1 className="heading-1 mb-4">{caseStudy.title}</h1>
              {caseStudy.date && (
                <p className="text-gray-400">
                  {new Date(caseStudy.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
            </header>

            {caseStudy.contentHtml && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }}
              />
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getCaseStudySlugs();
  
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudy,
    },
  };
};

