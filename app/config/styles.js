import { Platform } from 'react-native';
import colors from './colors';

export default {
    colors,
    text: {
        fontWeight: "400",
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir',
        fontSize: 16,
        color: colors.darkGrey
    }
};
