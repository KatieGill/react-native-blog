import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Post, getPosts } from '../api/blogAPI'
import BlogPost from '../components/BlogPost'

export function BlogScreen() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts))
  }, [])

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
      <SafeAreaView>
        {posts && posts.map((post) => (
          <View key={post.id}>
            <BlogPost title={post.title} body={post.body}/>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}

