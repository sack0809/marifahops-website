import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  contentHtml?: string;
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Ensure date is always a string, not a Date object
  let dateString = '';
  if (data.date) {
    if (data.date instanceof Date) {
      dateString = data.date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD
    } else {
      dateString = String(data.date);
    }
  }

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: dateString,
    content,
    contentHtml,
  };
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const slugs = getCaseStudySlugs();
  const caseStudies = await Promise.all(
    slugs.map(async (slug) => {
      const caseStudy = await getCaseStudyBySlug(slug);
      return caseStudy;
    })
  );

  // Filter out null values and sort by date (newest first)
  return caseStudies
    .filter((cs): cs is CaseStudy => cs !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}

