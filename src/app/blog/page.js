// app/blog/page.js
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const posts = [
  {
    image: "/images/blog/blog1.webp",
    title: "What is Mutual Funds?",
    description: "This is the first blog post",
    slug: "what-is-mutual-fund",
  },
  {
    image: "/images/blog/blog1.webp",
    title: "How to invest in Mutual Funds?",
    description: "This is the second blog post",
    slug: "how-to-invest-in-mutual-fund",
  },
  {
    image: "/images/blog/blog1.webp",
    title: "How to search a best Mutual Funds?",
    description: "This is the third blog post",
    slug: "how-to-search-best-mutual-fund",
  },
];

export default function BlogPost() {
  return (
    <section className="testimonials flex justify-center my-12">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl text-center font-bold text-primary mb-4"
        >
          Latest Updates
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Card key={post.slug} className="p-4">
              <img src={post.image} />
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.description}</p>
              <a href={`/blog/${post.slug}`} className="text-blue-500">
                Read more
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
