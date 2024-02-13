export const INPUT_TYPES = {
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TEL: "tel",
  TEXT: "text",
  TIME: "time",
  URL: "url",
};

export const COLORS = {
  PRIM: { DEFAULT: "#f50f05", LIGHT: "#fb9f9b" },
  SEC: "#0b0b0b",
  WHITE: "white",
  BLACK: "black",
};
export const ROUTES = {
  DEFAULT: "/",
  MAIN_AUTH: "/main-auth",
  LOGIN: "/login",
  HOME: "/home",
  SIGNUP: "/signup",
  CHANGE_PASSWORD: "/change-password",
};

export const ERROR_CODES = {
  ACCOUNT_ALREADY_EXIST: 409,
  PASSWORD_IS_INCORRECT: 401,
  EMAIL_NOT_EXIST: 404,
};
