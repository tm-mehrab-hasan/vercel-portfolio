import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white min-h-screen" suppressHydrationWarning>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main suppressHydrationWarning>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
