import Image from "next/image";

export default function About() {
  return (
    <section className="about flex items-center justify-between py-20">
      <div className="container mx-auto">
        <img
          className="h-auto w-screen rounded-3xl"
          src="/images/trust.jpg"
          alt="About"
        />
      </div>
    </section>
  );
}
