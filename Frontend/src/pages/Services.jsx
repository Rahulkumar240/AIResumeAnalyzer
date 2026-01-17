import React from "react";

const Services = () => {
  const services = [
    {
      title: "AI Resume Analysis",
      description:
        "Get an in-depth analysis of your resume using AI to identify strengths, weaknesses, and improvement areas.",
      icon: "🤖",
    },
    {
      title: "Role-Based Resume Matching",
      description:
        "Analyze how well your resume matches specific job roles like Software Engineer, Data Scientist, or Product Manager.",
      icon: "🎯",
    },
    {
      title: "ATS Optimization",
      description:
        "Ensure your resume is optimized for Applicant Tracking Systems (ATS) used by top companies.",
      icon: "📄",
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Discover missing technical and soft skills required for your target role.",
      icon: "📊",
    },
    {
      title: "Keyword Optimization",
      description:
        "Improve resume keywords to increase visibility and shortlisting chances.",
      icon: "🔑",
    },
    {
      title: "Personalized Suggestions",
      description:
        "Receive personalized recommendations to improve content, formatting, and impact.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-10">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Our Services 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
