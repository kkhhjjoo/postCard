import React from 'react'
//1. 옵셔널 체이닝(?)
//2. post가 null 검사
const PostCard = ({ post }) => {
  if(!post) return //아직 데이터를 가지고 오는 중 or 데이터가 깨진 경우
  const img_url = post.img_src || '/img.png';
  const liked = post.liked ?? "?"; //undefined나 null일때만
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
          src={img_url}
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content?.content1}</p>
      <div className="card-actions justify-end">
          <button className="btn btn-primary">{liked}</button>
      </div>
    </div>
  </div>
  )
}

export default PostCard
