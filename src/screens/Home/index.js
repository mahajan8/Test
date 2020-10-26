import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import Header from '../../components/Header'
import types from '../../util/types'
import { connect } from 'react-redux'
import ListItem from '../../components/ListItem'
import strings from '../../util/strings'
import Loader from '../../components/Loader'


const Home = (props) => {

    useEffect(()=>{
        props.getRecipes()
    }, [])

    const {recipes, loading} = props

    return (
        <View style={{flex:1}} >
            <Header title={strings.home} />
        
            {/* List to render the array of recipes */}
            <FlatList 
                data={recipes}
                renderItem={({item, index})=> 
                    // Custom Component to render List Items based on layout_type 
                    <ListItem
                        recipe={item}
                    />
                }
                ItemSeparatorComponent={()=><View style={{marginTop:15}} />}
                keyExtractor={(item, index)=>`listItem${index}`}
            />
            <Loader show={loading} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.homeReducer.loading,
    recipes: state.homeReducer.recipes
})

const mapDispatchToProps = (dispatch) => ({
    // Action Dispatch to call api 
    getRecipes: () => dispatch({
        type: types.GET_RECIPES
    })
})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)