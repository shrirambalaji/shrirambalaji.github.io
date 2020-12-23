import React from "react";
import { Grid } from "svg-loaders-react";
import Section from "../Section";

const HASHNODE_API = "https://api.hashnode.com";
const BLOG_URL = "https://blog.shrirambalaji.dev";
const query = `
    {
      user(username: "shriram-balaji") {
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

const Post = ({ post, url }) => {
  return (
    <a className="post-link" href={url}>
      <div
        role="presentation"
        className="post section-item col-md"
      >
        <div
          className="post__image"
          style={{
            backgroundImage: `url(${post.coverImage})`,
          }}
          alt={post.title}
        />
        <div className="post__text">
          <h2 className="post__text-title">{post.title}</h2>
          <p className="post__text-description">
            {post.brief}
          </p>
        </div>
      </div>
    </a>
  );
};

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
          <Grid
            fill="hsl(237.4, 18.7%, 18%)"
            trokeOpacity=".125"
          />
        </div>
      );

    return (
      <Section title="Latest Blogs" className="blogs">
        {this.state.posts.map((post, index) => (
          <Post
            key={index}
            post={post}
            url={`${BLOG_URL}/${post.slug}`}
          />
        ))}
      </Section>
    );
  }
}

export default Blogs;
