import styles from "./Post.module.scss";

const Post = ({ post, url }) => {
  return (
    <a className={styles.postLink} href={url}>
      <div role="presentation" className={`${styles.post} col-md`}>
        <img
          className={styles.postImage}
          alt={post.title}
          src={post.coverImage}
        />
        <div className={styles.postContent}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>{post.brief}</p>
        </div>
      </div>
    </a>
  );
};

export default Post;
