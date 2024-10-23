"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { camelToNormal } from "../utils";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    problemDuration: "",
    symptoms: {
      skinDisorders: false,
      goutArthritis: false,
      pilesFistula: false,
      sexualDisorders: false,
      otherDiseases: false,
    },
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      symptoms: {
        ...prev.symptoms,
        [name]: checked,
      },
    }));
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const message = `
			Hello Doctor,%20%0A
			I would like to request a consultation regarding my health condition. Below are my details:%20%0A%0A

			Full Name: ${formData.fullName}%20%0A
			Mobile Number: ${formData.mobileNumber}%20%0A
			Problem Duration: ${formData.problemDuration}%20%0A
			Symptoms I am experiencing: ${Object.keys(formData.symptoms)
        .filter(
          (symptom) =>
            formData.symptoms[symptom as keyof typeof formData.symptoms]
        )
        .map((symptom) => ` ${camelToNormal(symptom)}`)}
			%20%0A%0A
			Please let me know the next steps for the consultation.%20%0A
			Thank you!
		`;

    window.open(
      `https://wa.me/9460661374?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="text-sm w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Are you suffering from Piles, Arthritis, Skin and Other Diseases?
        </h2>
        <p className="text-gray-600">
          Get a free consultation with our experts!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Your Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Your Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter mobile number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            How old your problem is?
          </label>
          <input
            type="text"
            name="problemDuration"
            value={formData.problemDuration}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Duration of your problem"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            What are your symptoms?
          </label>
          <div className="flex flex-wrap gap-2 items-center justify-start">
            {[
              { id: "skinDisorders", label: "Skin Disorders" },
              { id: "goutArthritis", label: "Gout Arthritis" },
              { id: "pilesFistula", label: "Piles Fistula" },
              { id: "sexualDisorders", label: "Sexual Disorders" },
              { id: "otherDiseases", label: "Other Diseases" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center">
                <input
                  type="checkbox"
                  id={id}
                  name={id}
                  checked={
                    formData.symptoms[id as keyof typeof formData.symptoms]
                  }
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={id} className="ml-2 text-gray-700">
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Start NOW!
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
