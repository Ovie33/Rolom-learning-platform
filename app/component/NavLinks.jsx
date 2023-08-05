import Link from "next/link";

const NavLinks = ({ children, href }) => {
  return (
    <div>
      <ul>
        <li className=" font-light overflow-hidden group mx-5">
          <Link href={`/${href}`}>{children}</Link>
          <span className="block border-b-4 translate-x-full group-hover:translate-x-0 transition-all rounded-md"></span>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
