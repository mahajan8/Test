import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import Images from '../util/images';
import EStyleSheet from 'react-native-extended-stylesheet';
import commonStyles from '../util/commonStyles';
import { connect } from 'react-redux'
import Colors from '../util/colors';
import strings from '../util/strings';

dp = (size) => EStyleSheet.value(size + 'rem')

const Header = (props) => {

    const { noScroll, title, showMenu } = props

    const [search, setSearch] = useState('')
    const [searchFocus, setFocus] = useState(false)

    return (
        // Header to render on every screen
        <KeyboardAvoidingView style={[commonStyles.shadow, styles.headerView]} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled keyboardVerticalOffset={Platform.OS == 'android' ? 80 : 20} >

            {/* Title for the Header  */}
            {!searchFocus &&
                <View style={styles.titleView} >
                    {/* Left Icon  */}
                    <TouchableOpacity onPress={() => {
                        console.log('Open Drawer')
                    }}
                        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }} >

                        <Image source={Images.menu} style={styles.icons} />

                    </TouchableOpacity>

                    {/* Title for the Header */}
                    <Text style={styles.title} >{title}</Text>

                    {/* Right Icon  */}
                    <TouchableOpacity onPress={() => {

                    }}
                        style={{}}
                        hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }} >

                        {showMenu && <Image source={Images.menu} style={styles.icons} />}

                    </TouchableOpacity>

                </View>
            }

            {/* Search Area  */}
            <View style={[styles.searchView, searchFocus && styles.serchFocusedView]} >
                <Text style={styles.searchText} >{strings.searchText}</Text>
                <TextInput
                    style={[styles.inputBox]}
                    onChangeText={(input) => setSearch(input)}
                    value={search}
                    placeholder={strings.searchPlaceholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                <Image source={Images.search} style={styles.icons} />
            </View>

        </KeyboardAvoidingView>
    )

}

const styles = EStyleSheet.create({
    icons: {
        height: '20rem',
        width: '20vrem',
        resizeMode: 'contain'
    },
    title: {
        fontSize: '16rem',
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleView: {
        minHeight: '50vrem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 2,
        paddingHorizontal: '15rem',
        shadowOffset: { width: 0, height: 0.5 }
    },
    headerView: {
        width: '100%',
        backgroundColor: Colors.theme
    },
    inputBox: {
        padding: '8rem',
        width: '70%',
        color: 'green'
    },
    searchView: {
        backgroundColor: '#FFF',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom: '5vrem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10rem'
    },
    searchText: { fontSize: '12rem' },
    serchFocusedView: {
        marginBottom: 0,
        width: '100%',
        paddingVertical: '10rem'
    }

})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)