import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts = [];

  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory);
    posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { slug, ...data };
    });
  }

  return (
    <main style={{ maxWidth: '600px', margin: '50px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>My Personal Blog</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>Built completely from scratch using Next.js and Vercel.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: '#0070f3' }}>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>{post.title || post.slug}</h2>
            </Link>
            <p style={{ color: '#999', fontSize: '0.85rem' }}>{post.date}</p>
            <p style={{ color: '#333', lineHeight: '1.6' }}>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
