import Link from 'next/link';

const getPost = async () => {
  const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', { cache: 'no-store' });
  const data = await res.json();

  return data?.items as any[];
};

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};

  return (
    <div>
      <Link href={`posts/${id}`}>
        <div>
          <h3>{title}</h3>
          <p>{created}</p>
        </div>
      </Link>
    </div>
  );
};

const PostsPage = async () => {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
