import Image from "next/image";
import { MyButton } from "./MyButton";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Part - Title, Description, and Button */}
          <div className="flex-1 pr-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-4xl font-bold text-primary mb-4"
            >
              Invest Today for a<br />
              Better Tomorrow
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-6">
              "Invest in mutual funds for smart wealth growth. Diversify,
              minimize risk, and enjoy long-term returns with expert management.
              Secure your future, one investment at a time!"
            </p>
            <MyButton
              data-aos="fade-up"
              className="bg-primary"
              href="/login"
              name="Get Started"
            ></MyButton>
          </div>

          {/* Right Part - Image */}
          <div className="flex-1">
            <Image
              data-aos="fade-left"
              data-aos-delay="0"
              src="/images/hero.png"
              alt="Banner Image"
              width={450}
              height={450}
              className="object-contain relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
