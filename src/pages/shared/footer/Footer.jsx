
import FooterBG from '../../../assets/logo.svg'

const Footer = () => {
  return (
    <div>
      <footer className="footer py-32 px-20 md:px-32 md:py-40 lg:px-40 bg-[#151515] text-white">
        <aside>
          <figure className="text-center">
            <img src={FooterBG} alt="footer logo" />
          </figure>
          <p className="w-full md:w-[200px]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer