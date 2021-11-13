import React from "react";
import { Grid } from "svg-loaders-react";
import Section from "../Section";
import Post from "./Post";
const HASHNODE_API = "https://api.hashnode.com";
const BLOG_URL = "https://blog.shrirambalaji.dev";
const query = `
    {
      user(username: "shrirambalaji") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class Blogs extends React.Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.setState({
      posts: [],
      loading: true,
    });

    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    this.setState({
      posts: data.user.publication.posts,
      loading: false,
    });
  };

  render() {
    if (this.state.loading || this.state.posts.length === 0)
      return (
        <div className="spinner">
          <Grid fill="hsl(237.4, 18.7%, 18%)" trokeOpacity=".125" />
        </div>
      );

    return (
      <Section title="Latest Blogs" className="blogs">
        {this.state.posts.map((post, index) => (
          <Post key={index} post={post} url={`${BLOG_URL}/${post.slug}`} />
        ))}
      </Section>
    );
  }
}

export default Blogs;
