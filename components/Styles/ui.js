import { StyleSheet } from 'react-native'

const buttonStyles = {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    marginBottom: 13
}

const UiStyles = StyleSheet.create({
    uiButton: {
        ...buttonStyles,
        backgroundColor: '#0f5fa9',
        color: '#FFF',
    },
    uiButtonAlt: {
        ...buttonStyles,
        backgroundColor: '#8daecc',
        color: '#333',
    }
});

export default UiStyles
