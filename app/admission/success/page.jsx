import Button from "@/app/component/button";
import SvgSuccess from "@/app/component/svgFiles/Success";
import Typography from "@/app/component/typography";
import Link from "next/link";

const Success = () => {
  return (
    <div>
      <section className="py-12 px-24">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center w-2/3 mb-12">
            <div className="mb-5">
              <Typography variant="h2">Successful</Typography>
            </div>
            <div className="flex flex-col space-y-5">
              <Typography variant="body">
                Congratulations! Your registration at Rolom Tech has been
                successfully processed. We are thrilled to have you as a member
                of our tech education community.
              </Typography>
              <Typography variant="body">
                You are now one step closer to embarking on an exciting journey
                of knowledge, growth, and endless possibilities. Our dedicated
                team will review your application and contact you shortly with
                further instructions on the next steps.
              </Typography>
            </div>
          </div>
          <div>
            <SvgSuccess />
          </div>
          <Link href="/">
            <div>
              <Button variant="secondary">Go to Hoomepage</Button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Success;
