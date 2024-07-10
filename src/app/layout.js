import Link from 'next/link';
import './layout.css';
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/quienes-somos">Quienes Somos</Link></li>
              <li><Link href="/reservas">Reservas</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}