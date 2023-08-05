import Typography from "./typography";

const Input = ({ name, type, id, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="text-accent">
        <Typography variant="body">{placeholder}</Typography>
      </label>
      <input
        className="border border-[#9B9B9B] bg-[#BEBEBE40] p-4 rounded-lg outline-none w-full mt-1"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
