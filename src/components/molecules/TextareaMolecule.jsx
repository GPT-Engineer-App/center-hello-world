export const TextareaMolecule = ({
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
      <label className="mt-4 lg:mt-0 font-bold">{label}</label>
      <textarea
        {...field}
        {...props}
        required
        className="bg-gray-200 border-2 text-xl h-[116px] px-2 rounded-sm"
      ></textarea>
    </div>
  );
};
