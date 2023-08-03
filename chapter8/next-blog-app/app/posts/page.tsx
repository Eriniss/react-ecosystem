import Link from 'next/link'; // next 내장 기능
import CreatePost from './CreatePost';

// url 경로 캐시 삭제
// API 통신을 통해 CRUD 중 R 구현
const getPost = async () => {
  const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', { cache: 'no-store' });
  const data = await res.json();

  return data?.items as any[];
};

// Read
const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};

  return (
    <div>
      <Link href={`posts/${id}`}>
        {' '}
        {/* 경로 동적 설정 */}
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
      <CreatePost />
    </div>
  );
};

export default PostsPage;
