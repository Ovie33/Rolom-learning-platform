import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./button";
import Typography from "./typography";
import { Icon } from "./svgFiles";

const Navbar = () => {
  return (
    <div>
      <div className="bg-secondary  text-white text-sm items-center">
        <nav className="flex w-full  px-24 py-5 justify-between items-center">
          <Link href="/" className="w-fit flex space-x-3">
            <Icon />
          </Link>
          <div className="flex items-center">
            <NavLinks children="Home" href="/" />
            <NavLinks children="Admission" href="admission" />
            <NavLinks children="Blog" href="blog" />
            <NavLinks children="Contact" href="contact" />
          </div>
          <div className="flex items-center">
            <Link className="mx-8" href="login">
              Login
            </Link>
            <Link href="admission">
              <Button variant="primary">Join Us</Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
