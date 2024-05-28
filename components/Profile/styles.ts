import { StyleSheet } from "react-native";
import { appearanceStateType } from "@/state/features/appearanceSlice";

const getStyles = (appearanceMode: appearanceStateType) => {
    return StyleSheet.create({
        container: {
            backgroundColor: appearanceMode.backgroundColor,
            width: '100%'
        },
        profileDetailContainer: {
            // backgroundColor: 'blue',
            marginHorizontal: 12,
            flexDirection: 'row'
        },
        profileImage: {
            width: 100,
            height: 100,
            borderRadius: 15
        },
        userDetailContainer: {
            justifyContent: 'space-evenly',
            marginLeft: 10,
            width: '70%'

        },
        usernameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        usernameButtonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        username: {
            fontFamily: 'bold',
            color: appearanceMode.textColor,
        },
        audioButton: {
            backgroundColor: appearanceMode.primary,
            padding: 7,
            marginLeft: 10,
            borderRadius: 10
        },
        keepupButton: {
            backgroundColor: appearanceMode.primary,
            paddingHorizontal: 7,
            paddingVertical: 7,
            borderRadius: 8
        },
        keepupText: {
            fontFamily: 'bold',
            color: 'white'
        },
        bioContainer: {
            width: '100%'
        },
        bio: {
            color: appearanceMode.faint,
            fontFamily: 'bold',
            fontSize: 12
        },
        tabsContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
            paddingHorizontal: 20,
        },
        activeTabButton: {
            alignItems: 'center',
        },
        activeTabText: {
            fontFamily: 'extrabold',
            color: appearanceMode.textColor,
            fontSize: 15
        },
        tabHighlighter: {
            borderBottomWidth: 3, 
            borderColor: appearanceMode.faint, 
            marginHorizontal: 20, 
            width: 50,
            marginTop: 5,
            borderRadius: 100
        },
        inactiveTabButton: {
            alignItems: 'center',
        },
        inactiveTabText: {
            fontFamily: 'bold',
            color: appearanceMode.faint,
            fontSize: 15
        },
    })
}

export default getStyles;