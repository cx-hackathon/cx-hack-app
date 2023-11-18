import * as Font from "expo-font";

const customFonts = {
    "Inter": require("../../assets/inter/Inter-Regular.ttf"),
    "Inter-Bold": require("../../assets/inter/Inter-Bold.ttf")
}

export const initializeFonts = async () => {
    await  Font.loadAsync(customFonts)
}

export const CXColor = {
    PRIMARY: "#006564",
    PRIMARY_ALT: "#2B6161",
    SECONDARY: "#004B4A",
    RED: "#FF0000",
    GOLD: "#FF9900",
    RED_SECONDARY: "#940000",
    LIGHT_GREY: "#C8C8C8",
    GREY: "#888888",
    DARK_GREY: "#555555",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    TRANSPARENT: "rgba(0,0,0,0)",
}

export const CXFont = {
    XS: {
        fontSize: 10,
        fontWeight: 200,
    },
    S: {
        fontSize: 12,
    },
    M: {
        fontSize: 16,
    },
    L: {
        fontSize: 18,
        fontWeight: "bold",
    },
    SUBTITLE: {
        fontSize: 24,
        fontWeight: "bold",
    },
    TITLE: {
        fontSize: 28,
        fontWeight: "bold",
    },
}