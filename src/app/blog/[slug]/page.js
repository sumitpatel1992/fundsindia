// app/blog/[slug]/page.js
import { notFound } from "next/navigation";

const posts = [
  {
    title: "What is Mutual Funds?",
    description: "This is the first blog post",
    slug: "what-is-mutual-fund",
  },
  {
    title: "How to invest in Mutual Funds?",
    description: "This is the second blog post",
    slug: "how-to-invest-in-mutual-fund",
  },
  {
    title: "How to search a best Mutual Funds?",
    description: "This is the third blog post",
    slug: "how-to-search-best-mutual-fund",
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound(); // Returns 404 if the post is not found
  }

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
