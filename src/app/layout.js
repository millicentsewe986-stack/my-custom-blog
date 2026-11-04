export const metadata = {
  title: 'My Personal Blog',
  description: 'Built completely from scratch using Next.js and Vercel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#fff', color: '#222' }}>
        {children}
      </body>
    </html>
  )
}
