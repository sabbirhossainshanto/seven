import useLanguage from "../../../hooks/use-language";
import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LanguageKey } from "../../../const";

const StakeSettings = ({ onBack, onClose }) => {
  const { getLanguage } = useLanguage();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.value),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      onBack();
    }
  };
  return (
    <aside
      className="ac-panel"
      id="acPanel"
      role="dialog"
      aria-modal="true"
      aria-label="My account"
    >
      <div className="ac-sub-h">
        <button onClick={onBack} className="ac-back" aria-label="Back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <b>Stake settings</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="ac-form">
        <p className="ac-note" style={{ marginTop: 0 }}>
          These buttons appear on your bet slip. Tap one to fill the stake in
          one go.
        </p>
        <div className="ac-stakes">
          {stakes?.map((_, idx) => {
            return (
              <label key={idx}>
                <span>Button {idx + 1}</span>
                <input {...register(`buttonGameValues.${idx}.value`)} />
              </label>
            );
          })}
        </div>

        <div className="ac-one">
          <button className="btn" type="submit" style={{ marginLeft: "auto" }}>
            {getLanguage(LanguageKey.SAVE)}
          </button>
        </div>
      </form>
    </aside>
  );
};

export default StakeSettings;
