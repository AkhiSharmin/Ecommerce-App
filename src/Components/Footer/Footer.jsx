import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg  ">
      <footer className="footer py-28 text-black max-w-screen-xl mx-auto text-2xl pt-10 ">
        <div>
          <span className="text-black text-4xl">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="text-black text-4xl">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="text-black text-4xl">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="text-black text-4xl">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-black">
                Enter your email address
              </span>
            </label>
            <div className="relative text-black">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-orange-400 border-0 absolute top-0 right-0 rounded-l-none text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
