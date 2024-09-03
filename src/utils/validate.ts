import { User } from "../types/User.ts";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "Name is mandatory";
  }

  if (!data.email) {
    errors["email"] = "E-mail is mandatory";
  }

  if (!data.agree) {
    errors["agree"] = "You need to agree to the terms";
  }

  return errors;
};