import { StyleSheet } from "react-native";
import { appearanceStateType } from "@/state/features/appearanceSlice";

const getStyles = (appearanceMode: appearanceStateType) => {
    return StyleSheet.create({
        container: {
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: '#292929',
            padding: 10,
            borderRadius: 15,
            marginBottom: 7
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        profileImage: {
            width: 40,
            height: 40,
            borderRadius: 10
        },
        username: {
            color: appearanceMode.textColor,
            fontFamily: 'bold',
            marginLeft: 7,
            fontSize: 15
        },
        headerRight: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '20%',
            justifyContent: 'space-between'
        },
        contentContainer: {
            marginVertical: 10,
            width: '100%'
        },
        mediaContainerView: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        chat: {
            color: appearanceMode.textColor,
            width: '100%',
            fontFamily: 'semibold',
        },
        chatMedia: {
            width: 250,
            height: 350,
            marginRight: 10,
            borderRadius: 10
        },
        footer: {
            alignItems: 'flex-end',
            marginHorizontal: 10
        },
        footerText: {
            color: appearanceMode.faint,
            fontFamily: 'bold'
        }
    })
}

export default getStyles;