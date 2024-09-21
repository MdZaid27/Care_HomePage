import Image from "next/image";
import BannerImg from "../assets/bannerimg.png";

export default function Banner() {
  return (
    <div className="w-full h-auto">
      <Image
        src={BannerImg}
        alt="Whatsapp Service Banner"
        width={1500}
        height={500}
        layout="responsive"
      />
    </div>
  );
}
