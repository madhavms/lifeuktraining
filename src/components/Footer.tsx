const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242A36] p-6">
      <div className="container mx-auto py-4">
        <p className="text-white opacity-60 text-center text-sm">
          Copyright © {currentYear} Make it in the UK
        </p>
      </div>
    </footer>
  );
};

export default Footer;
