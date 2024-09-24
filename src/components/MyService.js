import React from "react";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MyService = () => {
  return (
    <section className="services bg-gray-100 py-16">
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
              Invest in your
              <br />
              Finger Tips
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-6">
              "Invest in mutual funds for smart wealth growth. Diversify,
              minimize risk, and enjoy long-term returns with expert management.
              Secure your future, one investment at a time!"
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="service-card card flex"
            >
              <Link href="mutual-funds">
                <Image src="/images/icons/mf.png" width="64" height="64" />
                <span>Mutual Fund</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyService;
