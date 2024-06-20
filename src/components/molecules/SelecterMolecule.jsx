import MySelecter from "../ui/selecter";

export const SelecterMolecule = ({
  field,
  label,
  name,
  id,
  value,
  option,
  na,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className={`${na === "kostenstelle" ? "mt-[12px]" : "mt-4"} font-bold`}>{label}</label>
      <MySelecter na={na} sfv={setFieldValue} option={option} />
    </div>
  );
};
