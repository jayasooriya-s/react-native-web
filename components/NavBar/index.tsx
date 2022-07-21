import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight, ScaledSize, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function NavBar() {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [menuOpen, setMenuOpen] = useState(false);
    const onChange = ({ window, screen }: { window: ScaledSize; screen: ScaledSize; }) => {

        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);

    }, []);

    function handleMenuClick() {
        console.log(menuOpen)
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }
    function handleOpen() {
        if (menuOpen) {
            return <Menu />
        }
        else {
            return null
        }
    }
    function NavMobile() {
        return (
            <View >

                <View style={styles.containerMobile}>
                    <Image source={{ uri: 'http://167.71.136.129:1337/uploads/Logo_Gold_HIGHT_SIZE_44_01_01_3534577344.png' }}
                        style={{ width: 118, height: 44 }} />
                    <Feather name="menu" size={24} color="black" onPress={() => handleMenuClick()} />

                </View>
                {
                    handleOpen()
                }
            </View>)
    }

    if (dimensions.window.width > 1140) {
        return <NavWeb />
    } else {
        return <NavMobile />


    }
}
export default NavBar

function Menu() {
    return <View style={styles.menu} >
        <Text style={styles.navItem} onPress={() => console.log('clicked')}>HOME</Text>
        <Text style={styles.navItem}>ABOUT US</Text>
        <Text style={styles.navItem}>COLLECTIONS</Text>
        <Text style={styles.navItem}>LATEST WORKS</Text>
        <Text style={styles.navItem}>MEMBER LOUNGE</Text>
        <Text style={styles.navItem}>CONTACT</Text>
    </View>
}

function NavWeb() {
    return (<View style={styles.navContainer}>
        <View style={styles.containerWeb}>
            <Text style={styles.navItem} onPress={() => console.log('clicked')}>HOME</Text>
            {/* <TouchableHighlight> </TouchableHighlight> */}

            <Text style={styles.navItem}>ABOUT US</Text>
            <Text style={styles.navItem}>COLLECTIONS</Text>
            <Image source={{ uri: 'http://167.71.136.129:1337/uploads/Logo_Gold_HIGHT_SIZE_44_01_01_3534577344.png' }}
                style={{ width: 160, height: '60px' }} />
            <Text style={styles.navItem}>LATEST WORKS</Text>
            <Text style={styles.navItem}>MEMBER LOUNGE</Text>
            <Text style={styles.navItem}>CONTACT</Text>
        </View>
    </View>)

}

const styles = StyleSheet.create({
    navContainer: {
        width: '100%',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerWeb: {
        height: '60px',
        width: `1140px`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',

    }, containerMobile: {
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        padding: '32px'

    },
    menu: {
        // height: `${Dimensions.get('window').height}`,
        height: '600px',
        width: '400px',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        padding: '32px',
        backgroundColor: 'white',
        borderColor: 'grey',



    },
    navItem: {
        fontSize: 13,
        fontFamily: '"Asul", sans-serif'
    }
});