import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#FFFF33", //icon's color
    red: "#FF0000",
    blue: '#323789', //for headings
    darkGray: "#525C67",
    darkGray2: "#757D85",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    gray: "#898B9A",
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white: '#FFFFFF',
    black: "#000000",
 
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

