// 경로 동적 설정
const getPostId = async (postId: string) => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {
    next: { revalidate: 10 },
  });
  const data = res.json();

  return data; // json 형태로 전달
};

// 동적 페이지 Read
const PostDetailPage = async ({ params }: any) => {
  const post = await getPostId(params.id); // 파라미터의 id값 전달

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.created}</p>
      <button>delete</button>
    </div>
  );
};

export default PostDetailPage;
