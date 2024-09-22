import Image from "next/image";
import DocImg from "../assets/docimg.png";

export default function CentreOfExcellence() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center pb-2 heading-style">Centre of Excellence</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full flex justify-center">
          <Image
            src={DocImg}
            alt="Doctor with Hologram"
            width={450}
            height={350}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-between h-full">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
            {[
              "Cardiac Sciences",
              "Gastro Sciences",
              "Neurosciences",
              "Oncology",
              "Paediatrics",
              "Pulmonology",
              "Robot-Assisted Surgery",
              "Urology",
              "Nephrology",
              "Vascular & Endovascular Surgery",
              "Orthopaedics",
              "Transplants",
              "Woman & Child Institute",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-black hover:none flex items-center">
                  <span className="text-teal-500">➔</span>
                  <span className="ml-2 main-text">{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <a href="#" className="text-teal-500 hover:none text-lg">
              View All ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
