import Link from 'next/link';
import Card from '../components/ui/Card';
import { getAllStudyGuides } from '../lib/markdown';
import { getCategoryColor } from '../lib/nclex-categories';

export default function StudyPage() {
  const allGuides = getAllStudyGuides();

  // Group guides by category
  const guidesByCategory = allGuides.reduce((acc, guide) => {
    const category = guide.frontmatter.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(guide);
    return acc;
  }, {} as Record<string, typeof allGuides>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Study Guides
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive study materials covering all NCLEX topics. Each guide includes detailed explanations, examples, and practice questions.
          </p>
        </div>

        {/* Study Guides by Category */}
        <div className="space-y-8">
          {Object.entries(guidesByCategory).map(([category, guides]) => (
            <Card key={category} className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guides.map((guide, idx) => {
                  // Extract category slug and topic slug
                  const parts = guide.slug.split('/');
                  const categorySlug = parts.length > 1 ? parts[0] : 'general';
                  const topicSlug = parts.length > 1 ? parts[parts.length - 1] : parts[0];

                  return (
                    <Link
                      key={idx}
                      href={`/study/${categorySlug}/${topicSlug}`}
                    >
                      <Card className="p-4 h-full hover:shadow-lg transition-all duration-200 cursor-pointer">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {guide.frontmatter.title}
                        </h3>
                        {guide.frontmatter.subcategory && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {guide.frontmatter.subcategory}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {guide.frontmatter.difficulty && (
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              guide.frontmatter.difficulty === 'easy'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                : guide.frontmatter.difficulty === 'medium'
                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {guide.frontmatter.difficulty}
                            </span>
                          )}
                          {guide.frontmatter.tags?.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {allGuides.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No study guides available yet. Check back soon for new content!
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
