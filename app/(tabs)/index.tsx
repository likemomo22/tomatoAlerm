import React, { useState } from "react";
import {useRouter} from "expo-router"
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable } from "react-native";
import { Calendar } from 'react-native-calendars';

const HomeScreen=()=>{
  
  const today = new Date().toISOString().split('T')[0];
  
      const [expanded, setExpanded] = useState(false);
  
      const router=useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
            <View style={styles.header}>
                {/* 头像 */}
                <View style={styles.left}>
                    <Image source={require('./../img/myIcon.png')}
                        style={styles.myIconSelf}
                    /></View>
                {/* 日期显示 */}
                <View style={styles.center}>
                    <Pressable
                        onPress={() => setExpanded(!expanded)}
                        style={({ pressed }) => [
                            styles.dateContainer,
                            { backgroundColor: pressed ? "#ddd" : "white" },
                        ]}
                    >
                        <Text style={styles.calText}>{today} ▼</Text>
                    </Pressable>
                    {/* 日历 */}
                    {expanded && (
                        <Calendar
                            style={styles.calendar}
                            onDayPress={(day: any) => {
                                console.log('Selected day:', day);
                                setExpanded(false);
                            }}
                            markedDatas={{
                                [today]: { selected: true, marked: true, selectedColor: 'blue' }
                            }}
                            theme={{
                                calendarBackground:'rgba(227,228,221)'
                            }}
                        />)}
                </View>
                {/* 右侧头像 */}
                <View style={styles.right}>
                    <Image source={require('./../img/myIcon2.png')}
                        style={styles.myIconSelf} />
                </View>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Good Morning!</Text>
                <Text style={styles.titleTextDetail}>记录你的实时想法</Text>
            </View>

            {/* 卡片1 */}
            <Pressable
            style={styles.card}
            onPress={()=>router.push("./CardDatil")}
            >
                <Text>hello</Text>
            </Pressable>
        </View>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(227,228,221)'
    },
    container: {
        flex: 1,
        // backgroundColor: 'blue',
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(227,228,221)',
        // borderBottomWidth: 1,
        // borderBottomColor: 'green',
    },
    left: {
        width: 80,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    myIconSelf: {
        width: 80, height: 80, borderRadius: 50, backgroundColor: "#B0B0B0"
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(227,228,221)',
    },
    calendar: {
        width: '100%',
    },
    calText: {
        fontSize:15,
        color: 'green',
    },
    right: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        marginTop: 20,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#006400"
    },
    titleTextDetail: {
        marginTop: 10,
        fontSize: 15,
        color: "#006400"
    },
    card:{

    }
})
export default HomeScreen;