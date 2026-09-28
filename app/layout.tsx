import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast'; // Toaster import করো

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D13] text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Toaster এখানে যোগ করতে হবে, যেন সব পেজে টোস্ট কাজ করে */}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              background: '#12141C',
              color: '#fff',
              border: '1px solid #1e293b',
              fontSize: '12px',
              fontWeight: 'bold',
            },
          }}
        />
      </body>
    </html>
  );
}