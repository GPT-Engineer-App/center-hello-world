import DatePicker from "../ui/datepicker";

interface DatePickerMoleculeProps {
  label: string;
  name: string;
}

export const DatePickerMolecule: React.FC<DatePickerMoleculeProps> = ({
  label,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mt-4 font-bold text-xl">{label}</label>
      <DatePicker />
    </div>
  );
};
