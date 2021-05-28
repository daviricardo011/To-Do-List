import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through', color: commonStyles.colors.doneText } : {}
    const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')
    const date = props.doneAt ? props.doneAt : props.estimateAt

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => props.toggleTask(props.id)}
            >
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.containerTask]}>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <View style={styles.done1}>
                </View>
            </View>

        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 12,
    },
    containerTask: {
        width: '100%',
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',

    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: commonStyles.colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    done1: {
        height: 15,
        width: 15,
        borderRadius: 13,
        backgroundColor: commonStyles.colors.base,
    },
    desc: {
        color: commonStyles.colors.base,
        fontSize: 17,
        fontWeight: 'bold',
    },
    date: {
        color: commonStyles.colors.subText,
        fontSize: 13,
    }
})