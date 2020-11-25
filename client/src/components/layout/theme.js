import { theme } from '@chakra-ui/react';

const custTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        statblue: "#BBF4FF",
        statteal: "#BBFFDD",
        statgreen: "#47EB94",
        statyellow: "#FFFFBB",
        statorange: "#FFDDBB",
        statred: "#FFBBBB",
        statgray: "#BBBBBB",
        untgreen: "#00853E",
        untsec1: "#00A950",
        untsec2: "#509E2F",
        untaccentyellow: "#C4D600",
        untaccentblue: "#00A9E0",
        untaccentpurple: "#AD1AAC",
        untaccentgray:
        {
            50: '#f1f1fc',
            100: '#d3dadd',
            200: '#bcbfc3',
            300: '#a2a5a9',
            400: '#898c90',
            500: '#6f7276',
            600: '#56595d',
            700: '#3c3f43',
            800: '#23262b',
            900: '#001010',
        },
        untaccentpink: "#EF4B81",
        untaccentgreen: "#006747",
        untsoftgreen: "#B9DCD2",
        untsoftpink: "#FFB1BB"
    },
};

export default custTheme;
