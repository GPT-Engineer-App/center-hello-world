export const InputMolecule = ({
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
        {...field}
        {...props}
        required
        className="bg-gray-200 border-2 h-10 text-xl px-2 rounded-sm"
      ></input>
    </div>
  );
};
