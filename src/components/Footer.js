import Link from 'next/link';
import WebLogo from './shared/WebLogo'; // Assuming WebLogo is in the same folder
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-10">
        {/* Main Footer Content */}
        <div className="footer flex justify-between items-start flex-col sm:flex-row gap-10">
          {/* Column 1: Brand Info */}
          <aside>
            <WebLogo />
            <p className="mt-4 max-w-xs">
              NextCart Ltd.
              <br />
              Providing reliable tech since 2024. Your one-stop shop for quality electronics and accessories.
            </p>
          </aside>

          {/* Column 2: Quick Links */}
          <nav>
            <header className="footer-title">Quick Links</header>
            <Link href="/" className="link link-hover">Home</Link>
            <Link href="/products" className="link link-hover">Products</Link>
            <Link href="/about" className="link link-hover">About us</Link>
            <Link href="/contact" className="link link-hover">Contact</Link>
          </nav>

          {/* Column 3: Legal */}
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>

          {/* Column 4: Newsletter */}
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item w-full"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-base-300 dark:border-gray-700 text-center sm:flex sm:justify-between sm:items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NextCart Ltd. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}