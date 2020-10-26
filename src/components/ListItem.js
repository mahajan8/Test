import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import commonStyles from '../util/commonStyles';
import { connect } from 'react-redux'
import strings from '../util/strings';
import Colors from '../util/colors';

dp = (size) => EStyleSheet.value(size+'rem')


const Item = (props) => {

    const { layout_type, image, display_tag_name, recipes } = props.recipe

    // Return Title and Horizontal recipe list for layout type 0
    const layout0 = 
        <View style={styles.layout0View} >

            <View style={styles.layout0TitleView} >
                <Text style={styles.title} >{display_tag_name}</Text>
                <TouchableOpacity style={styles.moreButton} >
                    <Text style={styles.moreText} >{strings.more}</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={recipes}
                renderItem={({item})=> 
                    <View style={[commonStyles.shadow, styles.layout0Item]} >
                        <Image source={{uri: item.source_images[0]}} style={styles.layout0Image} />
                        <Text style={styles.layout0Title} numberOfLines={2} >{item.title}</Text>
                    </View>
                }
                horizontal
                keyExtractor={(item, index)=>`recipe${index}`}
                showsHorizontalScrollIndicator={false}
            />

        </View>

    // Hero banner for layout type 3
    const layout3 = 
        <Image source={{uri: image}} style={styles.bannerImage} />

    // Banner with title for layout type 1 
    const layout1 = 
        <View>
            <Text style={[styles.title, styles.layout1Title]} >{display_tag_name}</Text>
            {layout3}
        </View>

    // Switch case 
    switch(layout_type) {
        case 0:
            return layout0
        case 1:
            return layout1
        case 3:
            return layout3
        default:
            return null
    }
}

const styles = EStyleSheet.create({
    bannerImage: {
        width: '100%',
        height: '200vrem'
    },
    title: {
        fontSize: '15rem',
        color: Colors.titleColor,
        fontWeight: 'bold'
    },
    layout0View: {
        width: '95%',
        alignSelf: 'center'
    },
    layout0Item: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        width: '100rem',
        margin: '5rem',
        marginRight: '10rem',
        overflow: 'hidden'
    },
    layout0Image: {
        width: '100%',
        height: '120vrem'
    },
    layout0TitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        paddingHorizontal: '10rem'
    },
    layout0Title: {
        fontSize: '13rem',
        padding: '6rem',
        fontWeight: 'bold',
    },
    moreButton: {
        backgroundColor: Colors.moreButton,
        borderRadius: 5,
        padding: '5rem'
    },
    moreText: {
        color: '#FFF',

    },
    layout1Title: {
        width:'90%', 
        alignSelf:'center',
        marginBottom: '10rem'
    }
})


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Item)