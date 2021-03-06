import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)
    return <View>
        <Text>Index Screen</Text>
        <FlatList
            data={blogPosts}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => { // item refers to individual blogpost object
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({

})

export default IndexScreen