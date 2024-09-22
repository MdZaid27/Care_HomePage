"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import BannerImg from "../assets/whatsapp-desk-banner.webp";
import ThankImg from "../assets/thank-you.webp";
import RobotImg from "../assets/robot.webp";

export default function Banner() {
  const images = [
    { id: "banner", src: BannerImg, alt: "Banner Image" },
    { id: "thankyou", src: ThankImg, alt: "Thank You Image" },
    { id: "robot", src: RobotImg, alt: "Robot Image" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-auto">
      <Tabs
        defaultValue={images[currentIndex].id}
        onValueChange={(value) =>
          handleTabChange(images.findIndex((img) => img.id === value))
        }
      >
        <div className="relative">
          <TabsContent
            value={images[currentIndex].id}
            className="transition-all duration-500 ease-in-out"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1500}
              height={500}
              layout="responsive"
            />
          </TabsContent>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <TabsList className="flex space-x-1">
              {images.map((image, index) => (
                <TabsTrigger
                  key={image.id}
                  value={image.id}
                  className={`rounded-sm transition-colors duration-300 ${
                    currentIndex === index
                      ? "bg-blue-800 border border-blue-900"
                      : "bg-gray-300"
                  }`}
                  style={{
                    height: "10px",
                    width: "10px",
                  }}
                />
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
