import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <main style={{ maxWidth: '600px', margin: '50px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.9rem' }}>← Back home</Link>
      <h1 style={{ fontSize: '2.5rem', marginTop: '20px', marginBottom: '5px' }}>{data.title}</h1>
      <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '30px' }}>{data.date}</p>
      <div style={{ lineHeight: '1.8', color: '#222', fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
        {content}
      </div>
    </main>
  );
}
