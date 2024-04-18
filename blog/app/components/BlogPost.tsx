import React from 'react'
import { Card, Paragraph } from "react-native-paper"

interface BlogPostProps {
  title: string;
  body: string;
}

function BlogPost(props: BlogPostProps) {
  return (
    <Card style={styles.card}>
      <Card.Title title={props.title}/>
      <Card.Content>
        <Paragraph>{props.body}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'http://picsum.photos/700'}}/>
    </Card>
  )
}

const styles = {
  card: {
    marginTop: 10,
    marginBottom: 50
  }
}

export default BlogPost
