import { StyleSheet } from "react-native";
import { appearanceStateType } from "@/state/features/appearanceSlice";

const getStyles = (appearanceMode: appearanceStateType) => {
    return StyleSheet.create({
        container: {
            // paddingTop: 150,
            // paddingBottom: 30
        }
    })
}

export default getStyles;