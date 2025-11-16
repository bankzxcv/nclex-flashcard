'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold
      prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-gray-900 dark:prose-h1:text-white
      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-gray-800 dark:prose-h2:text-gray-100
      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-800 dark:prose-h3:text-gray-100
      prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
      prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-gray-900 prose-pre:text-gray-100
      prose-ul:my-6 prose-ul:list-disc
      prose-ol:my-6 prose-ol:list-decimal
      prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-2
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
      prose-table:w-full prose-table:border-collapse
      prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-3 prose-th:text-left prose-th:font-semibold
      prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700 prose-td:p-3
      prose-hr:my-8 prose-hr:border-gray-300 dark:prose-hr:border-gray-700
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const inline = !match;

            if (inline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            return (
              <SyntaxHighlighter
                style={vscDarkPlus as any}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 dark:border-gray-700">
                  {children}
                </table>
              </div>
            );
          },
          blockquote({ children }) {
            return (
              <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 rounded-r">
                {children}
              </blockquote>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
