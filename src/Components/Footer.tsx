import Logo from '../assets/logo-text.png';
const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-[#0F172A] border-t border-slate-200 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">

  
        <div className="grid grid-cols-5">

          <div className="col-span-2">
            <img src={Logo} alt="" />
            <p className="mt-4 w-90 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-5 mt-10">
            <a
              href="#"
              className="font-semibold text-slate-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="font-semibold text-slate-400"
            >
              Twitter
            </a>

            <a
              href="#"
              className="font-semibold text-slate-400"
            >
              LinkedIn
            </a>
          </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold tracking-wide">PRODUCT</h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">
                  Home
                </a>
              </li>

              <li>
                <a href="#">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" >
                  Projects
                </a>
              </li>
            </ul>
          </div>

  
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">COMPANY</h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">
                  About
                </a>
              </li>

              <li>
                <a href="#">
                  Contact
                </a>
              </li>

              <li>
                <a href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

  
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">LEGAL</h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="my-10 border-t border-slate-200"></div>

        <div className="flex flex-row gap-5 items-center justify-between">


          <p className="text-sm text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>


          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

