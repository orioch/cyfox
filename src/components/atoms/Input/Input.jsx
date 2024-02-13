import { useCallback, useEffect, useState } from "react";
import { validateText } from "./utils";

const Input = ({
  label,
  error: parentError,
  setError: parentSetError = () => {},
  onBlur: parentOnBlur = () => {},
  onChange: parentOnChange = () => {},
  value: parentValue,
  type,
  required = true,
  ...props
}) => {
  const [value, setValue] = useState(parentValue);
  const [error, setError] = useState();

  useEffect(() => {
    setValue(parentValue);
  }, [parentValue]);

  const onChange = useCallback(
    (e) => {
      validateText({ value: e.target.value, required, type, setError });

      setValue(e.target.value);
      parentOnChange(e);
    },
    [parentOnChange, type, setError, required]
  );

  const onBlur = useCallback(() => {
    validateText({ value, type, setError, required, isBlur: true });

    parentOnBlur();
  }, [parentOnBlur, value, type, setError, required]);

  useEffect(() => {
    parentSetError(error);
  }, [parentSetError, error]);

  useEffect(() => {
    setError(parentError);
  }, [setError, parentError]);

  const inputProps = {
    type,
    onBlur,
    value,
    onChange,
    placeholder: " ",
    ...props,
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full min-w-[200px] h-10">
        <input
          {...inputProps}
          className={`peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border ${
            error
              ? "placeholder-shown:border-red-500 border-red-500 focus:border-red-600 text-red-600"
              : "placeholder-shown:border-gray-700 border-gray-700 focus:border-gray-900 text-blue-gray-700"
          } placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]`}
        />
        <label
          className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] ${
            error
              ? "text-red-500 peer-focus:text-red-600 peer-focus:before:!border-red-600 after:border-red-500 before:border-red-500 peer-focus:after:!border-red-600 peer-placeholder-shown:text-red-500 peer-disabled:peer-placeholder-shown:text-red-500"
              : "text-gray-700 peer-focus:text-black peer-focus:before:!border-gray-900 after:border-gray-700 before:border-gray-700 peer-focus:after:!border-gray-900 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          }`}
        >
          {label}
        </label>
      </div>
      <span className="whitespace-nowrap my-1 max-w-full max-h-4 ml-4 text-[10px] text-red-500 min-h-4  min-w-14 overflow-hidden">
        {error?.label}
      </span>
    </div>
  );
};

export default Input;
