import { ERRORS } from "../helpers/errors.js";

export const errorFinder = (code) => {
    return ERRORS.filter((err) => err.code == code);
};
