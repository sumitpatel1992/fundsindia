import Image from "next/image";
import { MyButton } from "./MyButton";
import "./style.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
  {
    name: "Mutual Funds",
    link: "mutual-funds",
    icon: "/images/icons/mf.png",
  },
  {
    name: "Insurance",
    link: "insurance",
    icon: "/images/icons/mf.png",
  },
  {
    name: "Loan",
    link: "loan",
    icon: "/images/icons/mf.png",
  },
];

export default function Services() {
  return (
    <section className="service py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
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
          <div className="flex-1">
            <h1
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-4xl font-bold text-primary mb-4"
            >
              Investment in your
              <br />
              Finger Tips
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-6">
              "Invest in mutual funds for smart wealth growth. Diversify,
              minimize risk, and enjoy long-term returns with expert management.
              Secure your future, one investment at a time!"
            </p>

            {services.map((service, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="service-card card p-3 mb-3 border-gray-500 rounded-lg"
              >
                <Link
                  className="flex items-center justify-between width-screen"
                  href={service.link}
                >
                  <div className="flex items-center">
                    <Image src={service.icon} width="55" height="55" />
                    <span className="ps-3">{service.name}</span>
                  </div>

                  <ChevronRight className="flex-3 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
