import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import todayImage from '../../assets/img/boxing.jpg'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'
import Task from '../components/Task'

export default class TaskList extends Component {
    state = {
        tasks: [
            {
                id: Math.random(),
                desc: 'Ir à nutricionista',
                estimateAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Comprar dieta',
                estimateAt: new Date(),
                doneAt: null,
            },
            
        ]
    }


    pushNotification = () => {
        console.log('VOU MOSTRAR UMA PUSH NOTIFICATION')

    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        this.pushNotification()

        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })
        this.setState({tasks}) 

    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container} >
                <ImageBackground
                    source={todayImage}
                    style={styles.container}
                >
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground >
                <View style={styles.taskContainer}>
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask ={this.toggleTask} />}
                    />
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroud: {
        flex: 8,
    },
    taskContainer: {
        flex: 2,
        alignItems: 'center',

    },
    titleBar: {
        padding: 30,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    title: {
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginBottom: 20,
    },
    subTitle: {
        color: commonStyles.colors.secondary,
        fontSize: 20,
    }
})