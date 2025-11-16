import Link from 'next/link';
import Button from './components/ui/Button';
import Card from './components/ui/Card';

export default function Home() {
  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Study Guides',
      description: 'Organized by NCLEX test plan categories with detailed explanations and examples'
    },
    {
      icon: '🎴',
      title: 'Interactive Flashcards',
      description: 'Master concepts with active recall and spaced repetition techniques'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your study progress and identify areas that need more focus'
    },
    {
      icon: '💪',
      title: 'Confidence Assessment',
      description: 'Self-evaluate your understanding and get personalized study recommendations'
    },
    {
      icon: '📱',
      title: 'Study Anywhere',
      description: 'Responsive design works perfectly on phones, tablets, and desktops'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Reduce eye strain during long study sessions with automatic dark mode'
    }
  ];

  const categories = [
    { name: 'Safe & Effective Care', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300', percentage: '26-38%' },
    { name: 'Health Promotion', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300', percentage: '6-12%' },
    { name: 'Psychosocial Integrity', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300', percentage: '6-12%' },
    { name: 'Physiological Integrity', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300', percentage: '38-62%' }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Master the <span className="text-blue-600">NCLEX</span> Exam
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive study materials, interactive flashcards, and progress tracking to help nursing students succeed on their NCLEX examination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/topics">
              <Button size="lg" className="w-full sm:w-auto">
                Start Studying
              </Button>
            </Link>
            <Link href="/flashcards">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Flashcards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NCLEX Categories */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            NCLEX Test Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} p-6 rounded-lg`}
              >
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm font-medium">{category.percentage} of exam</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Everything You Need to Succeed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Flashcards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Study Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-8 sm:p-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your NCLEX Preparation?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of nursing students who are using our platform to prepare for the NCLEX exam. All content is free and accessible to everyone.
          </p>
          <Link href="/topics">
            <Button size="lg">
              Browse All Topics
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
