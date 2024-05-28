import { appearanceStateType } from "@/state/features/appearanceSlice";
import { Dimensions, Platform, StyleSheet } from "react-native";
import BottomSheet from ".";

const DEVICE_HEIGHT = Dimensions.get('window').height
const getStyles = (appearanceMode: appearanceStateType, height:Number) => {
    return StyleSheet.create({
        backgroundContainer: {
            backgroundColor: Platform.OS === 'ios' ? appearanceMode.backgroundTransparent : appearanceMode.backgroundColor,
            position: "absolute",
            width: '100%',
            height: DEVICE_HEIGHT,
            alignItems: 'flex-end',
            flexDirection: 'row',
        },
        bottomSheetContainer: {
            backgroundColor: appearanceMode.backgroundColor,
            height: Number(height),
            width: '100%',
            padding: 20,
            borderRadius: 20
        },
        bottomSheetHeader: {
            width: 35,
            height: 6,
            backgroundColor: appearanceMode.primary,
            marginTop: 10,
            borderRadius: 20
        },
        close: {
            backgroundColor: 'transparent',
            width: '100%',
            position: 'absolute',
            top: 10,
            height: 0.6 * DEVICE_HEIGHT,
            
        },
        header: {

        },
        headerInfoContainer: {
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            // width: '100%'
        },
        headerText: {
            color: appearanceMode.textColor,
            fontFamily: 'extrabold',
            fontSize: 16
        },
        locationInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        locationInput: {
            marginLeft: 10,
            fontFamily: 'bold',
            color: appearanceMode.textColor,
            paddingVertical: 10,
            width: '100%',
            fontSize: 13
        },
        mainContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-around',
            width: '100%',
        },
        recordButton: {
            backgroundColor: appearanceMode.primary,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            borderRadius: 10
        },
        iconImage: {
            width: 30,
            height: 30,
            marginRight: 15
        },
        recordText: {
            color: 'white',
            fontFamily: 'bold',
            fontSize: 15,
            // marginLeft: 10
        },
        mainInput: {
            borderWidth: 1,
            borderColor: appearanceMode.faint,
            paddingVertical: 11,
            paddingHorizontal: 20,
            borderRadius: 10,
            color: appearanceMode.textColor,
        },
        mediaContainer: {
            marginVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            width: '100%'
        },
        mediaLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        startConvoText: {
            color: appearanceMode.primary,
            fontFamily: 'extrabold',
            fontSize: 15,
            marginLeft: 10
        },
        image: {
            width: Platform.OS === 'ios' ? 350 : 280,
            height: 450,
            marginRight: 10,
            borderRadius: 10
        }
    })
}

export default getStyles