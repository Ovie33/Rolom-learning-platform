"use client";
import Button from "./component/button";
import { easeIn, easeOut, motion } from "framer-motion";
import {
  Bannerimage,
  WhyImage,
  Contact,
  Iphone,
  Cloud,
} from "./component/svgFiles";
import Typography from "./component/typography";

const Homepage = () => {
  return (
    <div className="  bg-secondary text-white overflow-hidden">
      {/* landing setion */}
      <section className="py-16 px-24 flex items-center">
        <div className=" w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: easeIn }}
          >
            <div className="mb-8">
              <Typography variant="title">
                we are dedicated to provide
              </Typography>
              <Typography variant="h1">
                Cutting-edge{" "}
                <span className="inline-block">
                  Technological
                  <span className="block border-b-8 w-1/4 rounded-lg border-accent"></span>
                </span>{" "}
                Solutions
              </Typography>
              <div className="w-[60%] mt-2">
                <Typography variant="body">
                  to enhance education for both young learners and business
                  professionals. Join us on a journey of innovation and discover
                  endless possibilities in the world of technology.
                </Typography>
              </div>
            </div>
            <div className="flex space-x-5">
              <Button variant="accent">Explore courses</Button>
              <Button variant="accentOutline">Enroll now</Button>
            </div>
          </motion.div>
        </div>
        {/* Home image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easeOut }}
        >
          <div>
            <Bannerimage />
          </div>
        </motion.div>

        {/* end Home image */}
      </section>
      {/* end of landing section */}
      {/* about setion */}
      <section className="py-16 px-24">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center w-full mb-8">
            <div>
              <Typography variant="h2">About Us</Typography>
              <span className="block border-b-8 w-1/2 rounded-lg border-accent"></span>
            </div>
          </div>
          <div className=" w-[900px] text-center">
            <Typography variant="body">
              Rolom Tech is a leading institution specializing in
              technology-focused education. Our mission is to empower
              individuals with the skills and knowledge necessary to thrive in
              the rapidly evolving tech landscape. With a focus on practical
              learning, industry connections, and fostering a collaborative
              community, Rolom Tech is the perfect place to kickstart your tech
              career.
            </Typography>
          </div>
        </div>
      </section>
      {/* end of about section */}
      {/* start of why choose us section */}
      <section className="py-16 px-24">
        <div className="flex w-full justify-between items-center">
          <div>
            <WhyImage />
          </div>
          <div className="w-[40%]">
            <div className="flex mb-8">
              <div>
                <Typography variant="h2">Why choose Us</Typography>
                <span className="block border-b-8 w-1/4 rounded-lg border-accent"></span>
              </div>
            </div>
            <Typography variant="body">
              At Rolomtech, we offer an exceptional tech education experience.
              With industry-relevant curriculum, expert faculty, and a focus on
              practical learning, you'll acquire the latest skills and hands-on
              experience needed to excel in the tech industry. Our career
              support and strong alumni network ensure your success beyond
              graduation. At Rolom Tech, we offer an exceptional tech education
              experience. With industry-relevant curriculum, expert faculty, and
              a focus on practical learning, you'll acquire the latest skills
              and hands-on experience needed to excel in the tech industry. Our
              career support and strong alumni network ensure your success
              beyond graduation. Choose Rolom Tech and unleash your potential in
              the dynamic world of technology.
            </Typography>
            <div className="mt-8">
              <Button variant="accentOutline">Enroll now</Button>
            </div>
          </div>
        </div>
      </section>
      {/* end of why choose us section */}
      {/* start of counter */}
      <section className="py-16 px-24 bg-[#071164]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center w-fit">
            <div className=" text-accent">
              <Typography variant="h2">5+</Typography>
            </div>
            <Typography variant="title">Courses</Typography>
          </div>
          <div className="flex flex-col items-center w-fit">
            <div className=" text-accent">
              <Typography variant="h2">12+</Typography>
            </div>
            <Typography variant="title">Years of Experience</Typography>
          </div>
          <div className="flex flex-col items-center w-fit">
            <div className=" text-accent">
              <Typography variant="h2">500+</Typography>
            </div>
            <Typography variant="title">Graduates</Typography>
          </div>
        </div>
      </section>
      {/* end of counter section */}
      {/* start of contact us section */}
      <section className="py-16 px-24 flex justify-between items-center">
        <div>
          <div className="mb-6">
            <div className="mb-4">
              <Typography variant="h2">Contact Us</Typography>
            </div>
            <div className="w-2/3">
              <Typography variant="title">
                Effutuin Sapele Road, Opposite Mount Zion, Warr, Delta State,
                Nigeria.
              </Typography>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="mr-3">
              <Iphone />
            </div>
            <Typography variant="title">+234 xxx xxx xxx</Typography>
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <Cloud />
            </div>
            <Typography variant="title">support@rolomtech.com</Typography>
          </div>
        </div>
        <div>
          <Contact />
        </div>
      </section>
      {/* end of contact us sectoin */}
      {/* footer */}
      <footer className="py-16 px-24 bg-[#071164] flex justify-between items-center">
        <div className="w-1/2">
          <Typography variant="h2">Rolomtech</Typography>
          <Typography variant="body">
            Embrace the world of technology and embark on a transformative
            learning journey at Rolom Tech. Enroll today and become a skilled
            professional in graphics design, data science, web development, and
            more. Unleash your potential and shape the future of technology with
            us.
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <Typography variant="h3">Social Links</Typography>
          <Typography variant="body">Facebook</Typography>
          <Typography variant="body">Instagram</Typography>
          <Typography variant="body">Tik-Tok</Typography>
          <Typography variant="body">You-Tube</Typography>
        </div>
      </footer>
      {/* end of footer */}
    </div>
  );
};

export default Homepage;
