import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Table, Row, Rows} from 'react-native-table-component'

function TableView(props){
    const [table, setTable] = useState({
        tableHead: ['Image', 'Name', 'Phone Number', 'Email'],
        tableData: [
            [userImage], [userName], [userNumber], [userEmail]
        ]
    })

    setTable(table)

    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Row data={tableData} textStyle={styles.text} />
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

export default TableView