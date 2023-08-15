import Link from "next/link";
import React from "react";
import Typography from "./typography";

const BlogBox = ({ href, title, date, image }) => {
  return (
    <div className="w-fit">
      <Link href={`/blog/${href}`}>
        <div className="flex flex-col space-y-2 w-[300px]">
          <div>
            <img src={image} alt="BlogBox Image" width="300px" height="350px" />
          </div>
          <div className="text-white flex flex-col space-y-1 ">
            <Typography variant="small">{date}</Typography>
            <div className="">
              <Typography variant="title">{title}</Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogBox;
