import Link from "next/link";
import Button from "../component/button";
import Input from "../component/input";
import Typography from "../component/typography";

const Login = () => {
  return (
    <div className="  bg-secondary text-white overflow-hidden h-[100vh]">
      <section className="py-16 px-24 flex items-center justify-center">
        <div className="w-[50%] flex flex-col space-y-8">
          <div className="text-center">
            <Typography variant="h2">FORGOTTEN PASSWORD</Typography>
            <Typography variant="body">Enter your credentials</Typography>
          </div>
          <form
            action="#"
            className="bg-[#192165] p-12 flex flex-col space-y-8 items-center "
          >
            <Input name="email" id="email" placeholder="Email" type="text" />

            <div className="flex items-center justify-between">
              <Button variant="primary">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
