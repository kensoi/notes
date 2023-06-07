import { useRef, useLayoutEffect } from "react";

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

export function useFadeOut(ref, visible, height) {
  const timerId = useRef();

  useLayoutEffect(() => {
    clearTimeout(timerId.current);

    if (ref.current) {
      ref.current.style.opacity = visible ? 1 : 0;
    }
    ref.current.style.height = height
  }, [ref, visible, height]);
}