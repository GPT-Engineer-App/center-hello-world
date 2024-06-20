export const NumberInput = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="mt-4 font-bold">{label}</label>
      <input
        required
        type="number"
        {...field}
        {...props}
        className="border-2 h-10 text-xl mb-10 px-2 rounded-sm bg-gray-200"
      ></input>
    </div>
  );
};
