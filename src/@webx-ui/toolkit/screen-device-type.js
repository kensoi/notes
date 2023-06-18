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
]

function screenDeviceTypePrefix (type) {
  return "screen-device-" + type
}

export const getScreenDeviceType = () => {
    const screenDeviceTypeIndex = queryClasses.findIndex(
        item => matchMedia(item.query).matches
    )
    const screenDeviceType = queryClasses[screenDeviceTypeIndex].type
    
    return screenDeviceTypePrefix(screenDeviceType)
}