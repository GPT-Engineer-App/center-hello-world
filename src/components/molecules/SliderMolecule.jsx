import { Slider } from "@/components/ui/slider";

export const SliderMolecule = ({
  slider,
  setSlider,
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const handleSliderChange = (value) => {
    setSlider(value);
    setFieldValue("skonto", String(value[0]));
  };

  return (
    <>
      <div className="flex flex-col">
        <label className="mt-4 mb-2 lg:mb-1 font-bold">
          Skonto
        </label>
        <Slider
          onValueChange={handleSliderChange}
          defaultValue={[0]}
          max={100}
          step={10}
        />
        <input
          hidden
          readOnly
          type="text"
          value={slider}
          {...field}
          {...props}
        ></input>
      </div>
      <div className="flex justify-center items-center text-lg mt-1">
        {slider}%
      </div>
    </>
  );
};
