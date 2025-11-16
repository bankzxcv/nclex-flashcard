import Link from 'next/link';
import Card from '../components/ui/Card';
import { nclexCategories } from '../lib/nclex-categories';
import { getAllStudyGuides } from '../lib/markdown';

export default function TopicsPage() {
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
            NCLEX Study Topics
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore comprehensive study materials organized by NCLEX test plan categories. Each category contains detailed study guides and practice materials.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {nclexCategories.map((category) => (
            <div key={category.id}>
              <Card className="p-6">
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {category.percentage}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories */}
                {category.subcategories && (
                  <div className="space-y-6">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                          {subcategory.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {subcategory.topics.map((topic, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {topic}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Available Study Guides for this category */}
                {guidesByCategory[category.title] && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Available Study Guides
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {guidesByCategory[category.title].map((guide, idx) => {
                        // Extract category slug from the file path
                        const categorySlug = guide.slug.split('/')[0] || 'general';
                        const topicSlug = guide.slug.split('/').pop() || guide.slug;

                        return (
                          <Link
                            key={idx}
                            href={`/study/${categorySlug}/${topicSlug}`}
                            className="px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium text-sm"
                          >
                            {guide.frontmatter.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Quick Reference Section */}
        <div className="mt-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Reference Materials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Essential charts, mnemonics, and quick reference guides for rapid review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                Common Lab Values
              </div>
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                Isolation Precautions
              </div>
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                Drug Classes
              </div>
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                Vital Signs Ranges
              </div>
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                NCLEX Strategies
              </div>
              <div className="px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg">
                Common Mnemonics
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
