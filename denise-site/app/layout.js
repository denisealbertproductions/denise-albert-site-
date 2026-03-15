export const metadata = {
  title: 'Denise Albert Productions',
  description: 'Official website for Denise Albert — journalist, producer, speaker, and health advocate.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, Helvetica, sans-serif', background: '#fcfaf8' }}>
        {children}
      </body>
    </html>
  );
}
