'use client'; // CSR 사용

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const route = useRouter(); // next 라우트

  // Post
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title, // title: title과 같은 로직
      }),
    });

    setTitle('');
    route.refresh(); // 라우트 refresh를 통한 라우트 된 페이지만 리프레쉬
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="여기에 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">입력</button>
    </form>
  );
};

export default CreatePost;
