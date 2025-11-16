import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getStudyGuide, getAllStudyGuides } from '@/app/lib/markdown';
import MarkdownRenderer from '@/app/components/study/MarkdownRenderer';
import Card from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const guides = getAllStudyGuides();

  return guides.map((guide) => {
    // Parse the slug to extract category and topic
    const parts = guide.slug.split('/');
    const category = parts.length > 1 ? parts[0] : 'general';
    const slug = parts.length > 1 ? parts[parts.length - 1] : parts[0];

    return {
      category,
      slug
    };
  });
}

export default async function StudyGuidePage({ params }: PageProps) {
  const { category, slug } = await params;
  const guide = getStudyGuide(category, slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/topics" className="hover:text-blue-600 dark:hover:text-blue-400">
                Topics
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="capitalize">{category.replace(/-/g, ' ')}</span>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white font-medium">
              {guide.frontmatter.title}
            </li>
          </ol>
        </nav>

        {/* Study Guide Header */}
        <Card className="p-8 mb-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {guide.frontmatter.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {guide.frontmatter.category}
              </span>
              {guide.frontmatter.subcategory && (
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  {guide.frontmatter.subcategory}
                </span>
              )}
              {guide.frontmatter.difficulty && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  guide.frontmatter.difficulty === 'easy'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : guide.frontmatter.difficulty === 'medium'
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {guide.frontmatter.difficulty}
                </span>
              )}
            </div>

            {guide.frontmatter.lastUpdated && (
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Last updated: {guide.frontmatter.lastUpdated}
              </p>
            )}
          </div>
        </Card>

        {/* Study Guide Content */}
        <Card className="p-8 mb-8">
          <MarkdownRenderer content={guide.content} />
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Link href="/topics">
            <Button variant="outline">
              Back to All Topics
            </Button>
          </Link>
          <Link href="/flashcards">
            <Button variant="primary">
              Practice with Flashcards
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
