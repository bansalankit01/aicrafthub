
export const colorToken ={
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#83d18d",
        100: "#7ece89",
        200: "#77cb83",
        300: "#70c77d",
        400: "#68c377",
        500: "#60bf70",
        600: "#5bb76c",
        700: "#56af68",
        800: "#51a763",
        900: "#4da05e",
    }
};

export const themeSettings = (mode) => {
    return{
        patette: {
            primary: {
                dark: colorToken.primary[700],
                main: colorToken.primary[500],
                light: colorToken.primary[50],
            },
            neutral: {
                dark: colorToken.grey[700],
                main: colorToken.grey[500],
                mediumMain: colorToken.grey[400],
                medium: colorToken.grey[200],
                light: colorToken.grey[50],
            },
            background: {
                default: colorToken.grey[10],
                alt: colorToken.grey[0],
            },
        },
        Typography: {
            fontSize: 12,
            h1: {
                fontSize: 40,
            },
            h2: {
                fontSize: 32,
            },
            h3: {
                fontSize: 24,
            },
            h4: {
                fontSize: 20,
            },
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
        },
    };
};