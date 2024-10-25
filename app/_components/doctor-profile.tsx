import React from "react";

const DoctorProfile = () => {
  return (
    <div
      id="doctor"
      className="w-full bg-gradient-to-b from-transparent to-stone-100 p-8 flex flex-col md:flex-row items-center justify-center gap-8"
    >
      <div className="relative w-full  md:w-1/2 flex justify-center">
        <img
          height={300}
          width={300}
          src="/imgs/doctor.png"
          alt="Dr. Reshu Sharma"
          className="rounded-full object-contain border-4 border-white shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Dr. Reshu Sharma</h2>
        <h3 className="text-xl font-semibold text-gray-700">
          Founder and Director, Curewell Homeo Clinic
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Dr. Reshu Sharma is a dedicated homeopathic physician with over 15
          years of experience in treating various chronic and acute conditions.
          With a strong foundation in classical homeopathy, he specializes in
          providing personalized treatment plans for skin conditions, chronic
          ailments, and holistic wellness. His commitment to patient care and
          innovative approach to homeopathic medicine has helped numerous
          patients achieve better health naturally. At Curewell Homeo Clinic,
        </p>
        <p className="text-gray-600 leading-relaxed">
          At Curewell Homeo Clinic, Dr. Sharma leads a team of experienced
          professionals dedicated to providing comprehensive homeopathic care,
          combining traditional wisdom with modern healthcare practices to
          ensure the best possible outcomes for patients.
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;
