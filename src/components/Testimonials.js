"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sumit Keliya",
    role: "Web Developer",
    testimonial:
      "This product exceeded my expectations! Amazing quality and support.",
    avatar: "/images/avatar.png",
  },
  {
    name: "Ajay Kushwah",
    role: "Web Developer",
    testimonial:
      "An absolute game changer for our business. Highly recommended!",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Ashi Chhabra",
    role: "Project Coordinator",
    testimonial: "Affordable and efficient. It’s everything I needed and more!",
    avatar: "/images/avatar.png",
    rating: 4,
  },
  {
    name: "Arun Yadav",
    role: "Project Coordinator",
    testimonial: "Affordable and efficient. It’s everything I needed and more!",
    avatar: "/images/avatar.png",
    rating: 3,
  },
  {
    name: "Aakash Sharma",
    role: "Project Coordinator",
    testimonial: "Affordable and efficient. It’s everything I needed and more!",
    avatar: "/images/avatar.png",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const carouselRef = useRef(null);
  const scrollSpeed = 3000; // Adjust time interval as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += carousel.clientWidth;
        }
      }
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials flex justify-center my-12">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl text-center font-bold text-primary mb-4"
        >
          What Our Clients Say
        </h1>
        <div ref={carouselRef} className="testimonial-carousel">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="basis-1/3">
                  <Card key={index} className="shadow-lg">
                    <CardHeader>
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="mt-2">
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-700">{testimonial.testimonial}</p>
                    </CardContent>

                    <CardFooter className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
