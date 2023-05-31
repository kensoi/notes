const queryClasses = [
  {
    query: "(max-width: 766px)",
    type: "mobile",
  },
  {
    query: "(min-width: 767px) and (max-width: 1199px)",
    type: "tablet",
  },
  {
    query: "(min-width: 1200px)",
    type: "desktop",
  },
];


export const getScreenDeviceType = () => {
  return "screen-device-" + queryClasses.map(
    (queryClass) => {
      if (matchMedia(queryClass.query).matches) {
        return queryClass.type
      }
      return ""
    }).join("");
}