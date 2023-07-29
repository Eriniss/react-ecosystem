const getPostId = async (postId: string) => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {
    next: { revalidate: 10 },
  });
  const data = res.json();

  return data;
};

const PostDetailPage = async ({ params }: any) => {
  const post = await getPostId(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.created}</p>
    </div>
  );
};

export default PostDetailPage;
