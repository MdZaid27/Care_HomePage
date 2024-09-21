import Image from "next/image";
import DocImg from "../assets/docimg.png";

export default function CentreOfExcellence() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: "#0e2d58" }}
      >
        Centre of Excellence
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full flex justify-centre">
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
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Cardiac Sciences
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Gastro Sciences
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Neurosciences
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Oncology
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Paediatrics
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Pulmonology
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Robot-Assisted Surgery
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Urology
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Vascular & Endovascular
                Surgery
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Nephrology
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Orthopaedics
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Transplants
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:none">
                <span className="text-teal-500">➔</span> Woman & Child Institute
              </a>
            </li>
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
