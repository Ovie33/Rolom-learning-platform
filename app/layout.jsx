import Navbar from "./component/navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Rolom Techonlogy",
  description: "web development tutorials and classes",
  keyword:
    "web development, web desgin, javascript, VUE, react, angular, HTML, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
