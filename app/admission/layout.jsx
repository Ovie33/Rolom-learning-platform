import { Arrow } from "../component/svgFiles";
import Typography from "../component/typography";

export default function AdmissionLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* header */}
      <section className="px-24 bg-secondary text-white py-16 flex items-center flex-col">
        <Typography variant="h1">ADMISSION</Typography>
        <div className="w-1/3 text-center mt-4">
          <Typography variant="body">
            Application to Rolomtech is simple and straightforward process.
            Follow these steps to begin your journey with us:
          </Typography>
        </div>
        <div className="mt-7">
          <Arrow />
        </div>
      </section>
      {/* end of header */}
      {children}
    </section>
  );
}
