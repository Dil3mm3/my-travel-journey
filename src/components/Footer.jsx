const Footer = () => (
    <footer className="bg-gray-100 border-t mt-12 py-6 text-center text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} My Travel Journal. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="mailto:email@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  