import chroma from "chroma-js";
import CreatableSelect from "react-select/creatable";
import { Options, Options1, Options2 } from "./data";
import { StylesConfig } from "react-select";
import { useState } from "react";

const colourStyles: StylesConfig<Options, true> = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "#E5E7EB",
    boxShadow: "2px solid red",
    borderColor: state.isFocused ? "black" : "light gray",
    borderWidth: "2px",
    "&:hover": { borderColor: "light gray" },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : chroma("gray");

    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color || "black",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : chroma("gray");

    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color || "black",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color || "black",
    ":hover": {
      backgroundColor: data.color || "gray",
      color: "white",
    },
  }),
};

interface MySelecterProps {
  option: number;
  sfv: any;
  na: string;
}

const MySelecter: React.FC<MySelecterProps> = ({ na, sfv, option }) => {
  const options = option === 1 ? Options1 : Options2;
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (newValue) => {
    setSelectedOption(newValue);
    sfv(na,newValue);
  };

  return (
      <CreatableSelect
        onChange={handleChange}
        required
        styles={colourStyles}
        isMulti
        options={options}
      />
  );
};

export default MySelecter;
