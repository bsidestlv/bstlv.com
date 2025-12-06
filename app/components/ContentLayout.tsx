interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}