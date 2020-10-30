import colors from '../config/colors';

import { DefaultTheme } from '@react-navigation/native';

export default myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
};