const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  title: "p",
  body: "p",
  small: "p",
};

const variantClasses = {
  h1: "text-h1 font-bold leading-[1.25]",
  h2: "text-h2 font-semibold leading-[1.25]",
  h3: "text-h3 font-medium",
  title: "text-title font-medium",
  body: "text-body font-light tracking-wide leading-2",
  small: "text-small font-light",
};

const Typography = ({ variant, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : "body";
  const style = variant ? variantClasses[variant] : "body";
  return (
    <Component className={style} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
