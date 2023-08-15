"use client";
import Button from "./component/button";
import { delay, easeIn, easeOut, motion } from "framer-motion";
import { Bannerimage, Contact, Iphone, Cloud } from "./component/svgFiles";
import Typography from "./component/typography";

const Homepage = () => {
  return (
    <div className="  bg-secondary text-white overflow-hidden">
      {/* ----------------- */}
      {/* Hero section */}
      {/* ----------------- */}
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easeOut }}
        >
          <div>
            <Bannerimage />
          </div>
        </motion.div>
      </section>
      {/* ----------------- */}
      {/* About section */}
      {/* ----------------- */}
      <section className="py-16 px-24">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center w-full mb-4">
            <div>
              <Typography variant="h2">Who We Are</Typography>
              <span className="block border-b-8 w-1/2 rounded-lg border-accent"></span>
            </div>
          </div>
          <div className=" w-[900px] text-center">
            <Typography variant="body">
              Rolom Tech stands as a dynamic and thriving technology enterprise,
              leaving an indelible mark since our establishment. Beyond the mere
              creation of code, we are dedicated to sculpting digital marvels
              that have a meaningful impact and bring about positive change.
            </Typography>
          </div>
        </div>
      </section>
      {/* ----------------- */}
      {/* why choose us section */}
      {/* ----------------- */}
      <section className="py-16 px-24">
        <div className="flex flex-col space-y-10">
          <div className="relative">
            <motion.img
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "tween" }}
              src="why1.png"
              alt="image"
              height="450px"
              width="450px"
            />

            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="flex flex-col text-center w-[45%] space-x-2 space-y-3 absolute top-[90px] left-[400px] bg-secondary p-4 rounded-lg shadow-lg shadow-[#192165]"
            >
              <Typography variant="h3">OUR APPROACH</Typography>
              <Typography variant="body">
                At Rolom Tech, we believe technology should be a force for good.
                Our team of dedicated professionals collaborates seamlessly to
                turn your ideas into transformative solutions. We're not just
                here to meet your expectations; we're here to exceed them.
              </Typography>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5, type: "tween" }}
              src="why2.png"
              alt="image"
              height="450px"
              width="450px"
              className=" float-right"
            />
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="flex flex-col text-center w-[45%] space-x-2 space-y-3 absolute top-[75px] right-[400px] bg-secondary p-4 rounded-lg shadow-lg shadow-[#192165]"
            >
              <Typography variant="h3">Learning and Leading</Typography>
              <Typography variant="body">
                We may be young, but our commitment to education is unwavering.
                Through hands-on workshops and personalized mentorship, we're
                nurturing the next generation of tech leaders. Join us and be
                part of a community that values knowledge and innovation.
              </Typography>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "tween" }}
              src="why3.png"
              alt="image"
              height="450px"
              width="450px"
            />
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="flex flex-col text-center w-[45%] space-x-2 space-y-3 absolute top-[90px] left-[400px] bg-secondary p-4 rounded-lg shadow-lg shadow-[#192165]"
            >
              <Typography variant="h3">Join Our Journey</Typography>
              <Typography variant="body">
                We're a family of tech enthusiasts who are passionate about
                making a positive impact. As we pave the way for a future driven
                by technology, we invite you to embark on this exciting journey
                with us.
              </Typography>
            </motion.div>
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
