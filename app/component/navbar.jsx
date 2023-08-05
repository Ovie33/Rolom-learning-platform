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
          <Link href="/" className="w-[185px] flex space-x-3">
            <Icon />
            <Typography variant="h2">Rolom</Typography>
          </Link>
          <div className="flex items-center">
            <NavLinks children="Home" href="/" />
            <NavLinks children="Admission" href="admission" />
            <NavLinks children="Blog" href="blog" />
            <NavLinks children="Contact" href="contact" />
          </div>
          <div className="flex items-center">
            <Link className="mx-8" href="#">
              Login
            </Link>
            <Button variant="primary">Join Us</Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
