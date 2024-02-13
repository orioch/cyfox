import { INPUT_TYPES } from "../../../utils/constants";
import { EMAIL_REGEX, ERRORS } from "./constants";

export const validateText = ({ value, type, required, setError, isBlur }) => {
  if (required && !value && isBlur) {
    return setError(ERRORS.FILED_IS_REQUIRED);
  }

  if (type === INPUT_TYPES.EMAIL) {
    if (EMAIL_REGEX.test(value)) {
      return setError();
    } else if (isBlur) {
      return setError(ERRORS.EMAIL_IS_NOT_VALID);
    }
  }

  if (value) {
    return setError();
  }
};
