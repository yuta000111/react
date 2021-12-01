import Layout from '../component/Layout';
import { getAllPostsData } from '../lib/posts';
import Post from '../component/post';

export const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts &&
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
