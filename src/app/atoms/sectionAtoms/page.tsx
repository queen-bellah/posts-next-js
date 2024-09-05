"use client";
import { FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
import usePosts from "@/app/hooks/usePosts";
import Link from "next/link";
interface PostCardProps {
  id:number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  views: number;
}
const SectionAtom = ({id, title, body, likes, dislikes, views }: PostCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="flex items-center justify-between text-gray-600">
        <div className="flex items-center">
          <FaThumbsUp className="mr-2" />{likes}
          <FaThumbsDown className="ml-4 mr-2" />{dislikes}
        </div>
        <div className="flex items-center">
          <FaEye className="mr-2" />{views}
        </div>
      </div>
      <Link  href={`/post/${id}`}>
       <button className="p-1 bg-slate-500 text-white mt-6 rounded-xl pl-8 pr-8">See more..</button>
      </Link>
    </div>
  );
};
const PostsPage = () => {
const data = usePosts();
  if (data.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      {data.posts.map(post => (
        <SectionAtom
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          likes={post.reactions.likes}
          dislikes={post.reactions.dislikes}
          views={post.views}
        />
      ))}
    </div>
  );
};
export default PostsPage;