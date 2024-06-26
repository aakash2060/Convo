import { Platform, StyleSheet } from "react-native";
import { appearanceStateType } from "@/state/features/appearanceSlice";

export const getStyles = (appearanceMode: appearanceStateType) => {
   return StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    username: {
        color: appearanceMode.textColor,
        fontFamily: 'bold',
        marginLeft: 5
    },
    headerRight: {
        // flexDirection: 'row'
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    imageScrollView: {
        width: '100%', 
        height: 460,
    },
    image: {
        width: Platform.OS === 'ios' ? 370 : 300,
        height: 450,
        marginRight: 15,
        borderRadius: 10,
    },
    convoStarter: {
        color: appearanceMode.textColor,
        fontFamily: 'bold',
        marginVertical: 5,
        paddingHorizontal: 5
    },
    lastMessage: {
        color: appearanceMode.textColor,
        fontFamily: 'semibold',
        marginLeft: 5
    },
    lastMessageUsername: {
        color: appearanceMode.textColor,
        fontFamily: 'extrabold',
        marginLeft: 3
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20
    },
    time: {
        fontFamily: 'extrabold',
        color: appearanceMode.faint
    },
    active: {
        fontFamily: 'extrabold',
        color: appearanceMode.primary
    },
    popUpContainer: {
        position: 'absolute', 
        zIndex: 200, 
        right: 15, 
        top: 15, 
        padding: 0, 
        width: 0, 
        backgroundColor: appearanceMode.backgroundColor, 
        borderWidth: 1, 
        borderColor: appearanceMode.faint, 
        borderRadius: 10
    },
    popUpOptionButton: {
        borderBottomColor: '#292929',
        borderWidth: 1,
        marginVertical: 10,
        paddingBottom: 10,
    },
    popUpOptionText: {
        color: 'white', 
        fontFamily: 'bold', 
        fontSize: 15, 
    }
   })
}