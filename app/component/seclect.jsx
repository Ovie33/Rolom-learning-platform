import Typography from "./typography";

const Select = ({ options, title }) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="text-accent">
        <Typography variant="body">{title}</Typography>
      </label>
      <select
        name="course"
        id="course"
        className="border border-[#9B9B9B] bg-[#BEBEBE40] p-4  rounded-lg outline-none mt-1  w-full text-[#5f5f5f]"
      >
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
