 const Footer = () => {
  return (
    <footer className="border-t py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} C.Shock. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          <a href="https://github.com/your-profile" className="hover:underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://twitter.com/your-profile" className="hover:underline">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;