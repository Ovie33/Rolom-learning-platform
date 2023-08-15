import Typography from "@/app/component/typography";

export default async function BlogDetail({ params }) {
  const Blog = [
    {
      id: "1",
      title: "10 Top Programming Languages in 2023",
      date: "Published January 1st 2023",
      author: "David Adejoke",
      image: "../image1.png",
      description: "Languages to learn in 2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada, justo nec mattis pretium, tellus lectus mollis quam, non consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit tellus ac dignissim mollis. Integer eleifend nisi in mi convallis bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit justo. Etiam eu sapien augue.",
    },
  ];

  return (
    <div className="bg-secondary">
      <section className="px-24 py-16 text-white flex flex-col items-center">
        <div className=" flex flex-col space-y-4 justify-center items-center">
          <Typography variant="body">{Blog[0].date}</Typography>
          <Typography variant="h2">{Blog[0].title}</Typography>
          <Typography variant="title">{Blog[0].description}</Typography>
        </div>
        {/* ----------------- */}
        {/* Links */}
        {/* ----------------- */}
        <div></div>
        {/* ----------------- */}
        {/* Image */}
        {/* ----------------- */}
        <div>
          <img
            src={Blog[0].image}
            alt="blog image"
            width="650px"
            height="450px"
          />
        </div>
        {/* ----------------- */}
        {/* Description */}
        {/* ----------------- */}
        <div>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada, justo nec mattis pretium, tellus lectus mollis quam, non
            consectetur quam ipsum eget tellus. Etiam at cursus ante. Integer
            risus sem, venenatis a eros eget, gravida dapibus massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Curabitur in volutpat augue, id volutpat velit. In
            maximus porta magna, vel sagittis nisi placerat nec. Nunc hendrerit
            tellus ac dignissim mollis. Integer eleifend nisi in mi convallis
            bibendum. Aliquam et nisl dapibus, feugiat elit sed, hendrerit
            justo. Etiam eu sapien augue. Praesent eget ante at urna gravida
            vestibulum. Vestibulum maximus scelerisque pretium. Suspendisse
            potenti. Morbi turpis dolor, luctus ut augue sed, eleifend vulputate
            felis. Duis egestas viverra neque vitae fringilla. Praesent
            ultricies pharetra dolor. Cras a nulla nisl. Sed iaculis gravida
            lorem, id scelerisque est mattis lacinia. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Sed vel magna malesuada, porta sapien id, sollicitudin nulla. Etiam
            sodales, velit ut sodales imperdiet, dui velit lacinia est, eget
            blandit felis velit non dui. Sed pharetra venenatis sapien, non
            luctus erat mollis at. Curabitur sagittis sagittis nulla id
            pellentesque. Nunc tellus erat, ultrices at finibus sit amet,
            dapibus ac lorem. Fusce iaculis elit dui, sed semper ante venenatis
            sit amet. Nullam viverra libero eget urna mattis, ac eleifend eros
            mollis. Aliquam eleifend blandit nulla ac rhoncus. Quisque dolor
            risus, rhoncus eget lobortis eget, pharetra in tellus. Donec
            scelerisque blandit mi ac varius. Nunc sollicitudin libero tempor
            purus mattis, sit amet interdum est convallis.
          </Typography>
        </div>
      </section>
    </div>
  );
}
