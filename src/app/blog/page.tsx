import PostsSkeleton from "@/components/PostsSkeleton";
import PostsWithSearch from "@/components/PostsWithSearch";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";

export const revalidate = 600;

async function BlogPosts() {
  const posts = await getPosts();
  return <PostsWithSearch posts={posts} />;
}

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Not Found</h1>
      <p className="mb-4">This page does not exist.</p>
    </main>
  );
}
