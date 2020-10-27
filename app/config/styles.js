import { Platform } from 'react-native';
import colors from './colors';

export default {
    colors,
    text: {
        fontWeight: "400",
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir',
        fontSize: 18,
        color: colors.darkGrey
    }
};
