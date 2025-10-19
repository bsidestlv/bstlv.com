import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 text-center text-4xl font-bold md:text-6xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-6 text-2xl font-bold text-gray-900">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 text-lg text-gray-700">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 list-inside list-decimal space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 underline hover:text-blue-800"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-4 border-blue-500 pl-6 text-gray-700 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-100 p-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
