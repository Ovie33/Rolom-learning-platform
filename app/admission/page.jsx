import Link from "next/link";
import Button from "../component/button";
import Input from "../component/input";
import Select from "../component/seclect";
import Typography from "../component/typography";

export default function Admission() {
  const options = ["web Development", "web Desgin", "UI/UX"];
  const gender = ["Male", "Female", "Prefer not say"];
  const type = ["Full-Time", "Part-Time"];

  return (
    <div className="  overflow-hidden">
      {/* steps */}
      <section className="px-24 py-16 flex justify-between">
        {/* 1 */}
        <div className="flex flex-col w-[30%] text-center items-center">
          <div className="w-[50px] h-[50px] bg-accent flex items-center justify-center text-white rounded-full mb-5">
            1
          </div>
          <div className="mb-3">
            <Typography variant="title">Complete The Form</Typography>
          </div>
          <div className="">
            <Typography variant="body">
              Complete the Online Application: Fill out our online application
              form, providing the necessary information and indicating your
              preferred program of study.
            </Typography>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col w-[30%] text-center items-center">
          <div className="w-[50px] h-[50px] bg-accent flex items-center justify-center text-white rounded-full mb-5">
            2
          </div>
          <div className="mb-3">
            <Typography variant="title">Application Review</Typography>
          </div>
          <div className="">
            <Typography variant="body">
              Our admissions team will carefully review your application,
              considering your academic background, relevant experience, and
              passion for technology.
            </Typography>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col w-[30%] text-center items-center">
          <div className="w-[50px] h-[50px] bg-accent flex items-center justify-center text-white rounded-full mb-5">
            3
          </div>
          <div className="mb-3">
            <Typography variant="title">Approval</Typography>
          </div>
          <div className="">
            <Typography variant="body">
              Once your application is reviewed, we will notify you of the
              admission decision. If accepted, you will receive detailed
              instructions on how to proceed with enrollment.
            </Typography>
          </div>
        </div>
      </section>
      {/* end of steps */}
      {/* form */}
      <section className="py-12 px-24">
        <form action="#">
          {/* personal information */}
          <div className="mb-12">
            <div className="text-accent mb-6">
              <Typography variant="title">Personal Information</Typography>
            </div>
            <div>
              <div className="mb-4 flex justify-between space-x-6">
                <Input
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                />
                <Input
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div className="mb-4 flex justify-between space-x-6">
                <Input
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
                <Input
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                />
              </div>
              <div className="mb-4 flex justify-between space-x-6 items-center">
                <Input
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="Date of Birth"
                  type="date"
                />
                <Select options={gender} title="Gender" />
              </div>
              <div className="flex justify-between w-[49%]">
                <Input
                  name="stateOfOrigin"
                  id="stateOfOrigin"
                  placeholder=" State of Origin"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* end of personal information */}
          {/* education information */}
          <div className="mb-12">
            <div className="text-accent mb-6">
              <Typography variant="title">Education Information</Typography>
            </div>
            <div>
              <div className="mb-4 flex justify-between">
                <Input
                  name="schoolName"
                  id="schoolName"
                  placeholder="School / College"
                  type="text"
                />
              </div>
              <div className="mb-4 flex justify-between space-x-6">
                <Input
                  name="certification"
                  id="certification"
                  placeholder="Certification"
                  type="email"
                />
                <Input name="year" id="year" placeholder="Year" type="text" />
              </div>
            </div>
          </div>
          {/* end of education information */}
          {/* courses */}
          <div className="mb-12">
            <div className="text-accent mb-6">
              <Typography variant="title">Program of Interest</Typography>
            </div>
            <div className="mb-4 flex justify-between space-x-6 items-center">
              <Select options={options} title="Select Course" />
              <Select options={type} title="Type" />
            </div>
          </div>
          {/* end of courses */}
          {/* agreement */}
          <div className="w-2/3 flex mb-6">
            <Typography variant="small">
              By submitting this admission form, I hereby declare that all the
              information provided is accurate and complete to the best of my
              knowledge. I understand that any false or misleading information
              may result in the rejection of my application or termination of my
              enrollment if discovered at a later stage.
            </Typography>
          </div>
          <div className="flex justify-between mb-8">
            <div className="flex">
              <div className="mr-3">
                <Input type="checkbox" />
              </div>
              <div>
                <Typography variant="body">
                  I agree to terms and condition, privacy policy
                </Typography>
              </div>
            </div>
            <Button variant="secondary">Proceed</Button>
          </div>
          {/* end of agreement */}
        </form>
      </section>
      {/* end of form */}
    </div>
  );
}
