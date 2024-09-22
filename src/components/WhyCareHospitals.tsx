import React from "react";
import Image from "next/image";
import DoctorImg from "../assets/doctor.webp";
import TreatementImg from "../assets/treatment.webp";
import Accreditation from "../assets/accreditations.webp";
export default function CareSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center pb-2 heading-style">Why CARE Hospitals</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={DoctorImg}
              alt="Doctors"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Leading Doctors
              </h3>
              <p className="mt-4 text-gray-600">
                A pool of over 1400 doctors to provide you modern and
                world-class treatment.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-blue-600 font-semibold"
              >
                Know More &gt;
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={TreatementImg}
              alt="Treatment Options"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Treatment Options
              </h3>
              <p className="mt-4 text-gray-600">
                We provide services in over 30+ medical specialities with
                state-of-the-art infrastructure and highest standards of care.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-blue-600 font-semibold"
              >
                Know More &gt;
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={Accreditation}
              alt="Accreditations"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Accreditations
              </h3>
              <p className="mt-4 text-gray-600">
                Our highest standards of care, safe and hygiene practices
                reflected as our Awards and Accreditations.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-blue-600 font-semibold"
              >
                Know More &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
