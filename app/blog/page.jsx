import Link from "next/link";
import Typography from "../component/typography";
import BlogBox from "../component/blog";

export default function Blog() {
  const Blogs = [
    {
      id: "1",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "2",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "3",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "4",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "5",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "6",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "7",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    {
      id: "8",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
    // {
    //   id: "",
    //   title: "10 Top Programming Languages in 2023",
    //   date: "Published January 1st 2023",
    //   author: "David Adejoke",
    //   image: "image1.png",
    //   description: "Languages to learn in 2023",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    // },
  ];

  return (
    <div className="bg-secondary">
      {/* ---------------------------- */}
      {/* header blog */}
      {/* ---------------------------- */}
      <section className="px-24 py-16 flex justify-between w-full">
        <Link className="w-full" href={`/blog/${Blogs[0].id}`}>
          <div className="flex justify-between items-center">
            <div className="text-white flex flex-col space-y-2">
              <Typography variant="body">{Blogs[0].date}</Typography>
              <div className="flex w-[85%] flex-wrap">
                <Typography variant="h2">{Blogs[0].title}</Typography>
              </div>
              <Typography variant="title">{Blogs[0].description}</Typography>
            </div>
            <div>
              <img src={Blogs[0].image} width="450" height="450" />
            </div>
          </div>
        </Link>
      </section>
      {/* ---------------------------- */}
      {/* Recent blogs */}
      {/* ---------------------------- */}
      <section className="px-24 py-16">
        <div>
          <div className="text-white mb-6">
            <Typography variant="title">Recent Posts</Typography>
          </div>
          <div className="grid gap-4 grid-cols-fluid w-full">
            {Blogs.map((blogs) => {
              return (
                <BlogBox
                  href={blogs.id}
                  title={blogs.title}
                  date={blogs.date}
                  image={blogs.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
