import {
  DatePickerMolecule,
  InputMolecule,
  SelecterMolecule,
  SliderMolecule,
  TextareaMolecule,
  NumberInput,
  RDatePicker,
} from "@/components/molecules/index";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { updateRows } from "@/lib/supabaseOperations";

const renameAndFormatKeys = (values: any) => {
  return {
    eingegangen_am: new Date(values.eingegangen_am).toISOString(),
    faellig_am: new Date(values.faellig_am).toISOString(),
    gebucht: new Date(values.gebucht).toISOString(),
    konto: values.konto,
    ev_vp: values.EVVP,
    belegtext: values.belegtext,
    kommentar: values.kommentar,
    skonto: values.skonto,
    kostenstelle: values.kostenstelle[0].value, // Assuming kostenstelle is an array of objects with a value property
    VB: values.VB[0].value, // Assuming VB is an array of objects with a value property
  };
};

interface FormOrganismProps {
  slider: number;
  setSlider: (value: number) => void;
  id: string;
}

const FormOrganism: React.FC<FormOrganismProps> = ({
  slider,
  setSlider,
  id,
}) => {
  return (
    <Formik
      initialValues={{
        eingegangen_am: "",
        faellig_am: "",
        gebucht: "",
        konto: "",
        ev_vp: "",
        belegtext: "",
        kommentar: "",
        skonto: "0",
        kostenstelle: "",
        VB: "",
        ticketNumber: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log("values: ", values);
        await updateRows("invoices_dev", renameAndFormatKeys(values), id);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(props) => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
            <li className="flex flex-col items-center">
              <div className="lg:w-full justify-center lg:flex flex-row gap-x-8">
                <div className="w-full">
                  <Field
                    component={RDatePicker}
                    label="eingegangen_am"
                    value={values.eingegangen_am}
                    name="eingegangen_am"
                    nam="eingegangen_am"
                  />
                  <Field
                    component={RDatePicker}
                    label="fällig_am"
                    value={values.faellig_am}
                    name="faellig_am"
                    nam="faellig_am"
                  />
                  <Field
                    component={RDatePicker}
                    label="gebucht"
                    value={values.gebucht}
                    name="gebucht"
                    nam="gebucht"
                  />
                  <Field
                    component={InputMolecule}
                    value={values.konto}
                    name="konto"
                    label="Konto"
                  />
                  <Field
                    component={InputMolecule}
                    value={values.ev_vp}
                    name="ev_vp"
                    label="EV/VP"
                  />
                  <Field
                    component={InputMolecule}
                    value={values.belegtext}
                    name="belegtext"
                    label="Belegtext"
                  />
                </div>

                <div className="w-full lg:pt-4">
                  <Field
                    component={TextareaMolecule}
                    value={values.kommentar}
                    name="kommentar"
                    label="Kommentar"
                  />
                  <Field
                    component={SliderMolecule}
                    value={values.skonto}
                    name="skonto"
                    slider={slider}
                    setSlider={setSlider}
                  />
                  <Field
                    component={SelecterMolecule}
                    value={values.kostenstelle}
                    name="kostenstelle"
                    na="kostenstelle"
                    label="Kostenstelle"
                    option={1}
                  />
                  <Field
                    component={SelecterMolecule}
                    value={values.VB}
                    name="VB"
                    na="VB"
                    label="VB"
                    option={2}
                  />
                  <Field
                    component={NumberInput}
                    label="ticket Number"
                    value={values.ticketNumber}
                    name="ticketNumber"
                  />
                </div>
              </div>
              <button
                className="rounded-sm bg-gray-700 p-2 w-24 text-xl text-gray-200 font-bold"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </li>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormOrganism;
