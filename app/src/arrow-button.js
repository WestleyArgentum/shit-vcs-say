
'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import CommonStyles from './common-styles.js';

var TouchableElement = TouchableHighlight;
if (Platform.OS === 'android') {
    TouchableElement = TouchableNativeFeedback;
}

class ArrowButton extends Component {
    render() {
        var button = (
            <TouchableElement onPress={this.props.onPress}>
                <View style={styles.button}>
                    <View style={[CommonStyles.advanceButton, styles.buttonBox]} key={0} >
                        <Text style={CommonStyles.buttonText}>
                            {this.props.text}
                        </Text>
                    </View>
                    <View style={styles.buttonArrow} key={1} />
                </View>
            </TouchableElement>
        );

        if (this.props.disabled) {
            button = (
                <View>
                    <View style={[CommonStyles.advanceButton, styles.buttonBoxDisabled]}>
                        <Text style={CommonStyles.buttonText}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>
            );
        }

        return button;
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
    },
    buttonBox: {
        height: 32,
        width: 256,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    buttonBoxDisabled: {
        height: 32,
        width: 256,
        borderRadius: 6,
    },
    buttonArrow: {
        position: 'absolute',
        right: -12,
        top: 2,
        transform: [
            {rotate: '135deg'}
        ],

        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 27,
        borderTopWidth: 27,
        borderRightColor: 'transparent',
        borderTopColor: '#27ae60',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 8,
    },
});

export default ArrowButton;
