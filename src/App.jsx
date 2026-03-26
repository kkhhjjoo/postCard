
import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard'
import SkeletonCard from './components/SkeletonCard';

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const wrapperStyle = 'flex min-h-screen items-center justify-center';
  useEffect(() => {
    //데이터를 가지고오는 비동기 작업
    setTimeout(() => {
      setError('');
      setPost({
        title: '게시글',
        img_src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        content: {
          content1: '내용1',
          content2: '내용2'
        },
        liked: 0,
      });
      setLoading(false);
      
    }, 3500);
  }, []);

  
  if (loading) return <div className={wrapperStyle}><SkeletonCard /></div>
  if (error) return <div className={wrapperStyle}>{error}</div>
  return (
    <div className={wrapperStyle}>
      <PostCard post={post} />
    </div>
  )
}

export default App
