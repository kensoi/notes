import { createContext } from "react";

export function handleChange(setState) {
  return event => setState(event.target.value)
}

export function CheckValue(value, defaultOption, notDefaultOption) {
  switch (value) {
    case defaultOption:
      return defaultOption;

    default:
      return notDefaultOption;
  }
}

export function getSXbyArr(sx, i) {
  if (sx) {
    if (i > sx.length) {
      return {}
    }
    return sx[i]
  }
  else {
    return {}
  }
}

export const PageMountBlockContext = createContext({});