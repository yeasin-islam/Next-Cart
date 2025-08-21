import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-10">
        {/* Main Footer Content */}
        <div className="footer flex justify-between items-start flex-col sm:flex-row gap-10">
          {/* Column 1: Brand Info */}
          <aside>
            <Link href="/" className='flex items-center'>
              {/* The w-XX class here controls the final rendered size */}
              <div className='w-10 lg:w-12 flex flex-row items-center gap-2'>
                <Image
                  // These props define the image's original aspect ratio
                  width={144}
                  height={20}
                  className='mb-2 h-auto w-full'
                  src="/assets/WebLogo.png"
                  alt="NextCart Logo - Go to Home"
                />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0d989b] to-[#202570] bg-clip-text text-transparent">
                  NextCart
                </p>
              </div>
            </Link>
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
            <Link href="/terms" className="link link-hover">Terms of use</Link>
            <Link href='/privacy' className="link link-hover">Privacy policy</Link>
            <Link href="/cookies" className="link link-hover">Cookie policy</Link>
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
            <a href="https://www.linkedin.com/in/yeasin-islam10/" className="text-gray-500 hover:text-primary transition-colors" target="_blank">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a href="https://github.com/yeasin-islam" className="text-gray-500 hover:text-primary transition-colors" target="_blank">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/yeasin.islam2018" className="text-gray-500 hover:text-primary transition-colors" target="_blank">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://x.com/yeasin_islam75" className="text-gray-500 hover:text-primary transition-colors" target="_blank">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}