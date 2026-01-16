import React, { useState } from "react";

const Home = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cseRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Cybersecurity Analyst",
    "Full Stack Developer",
    "Mobile App Developer",
  ];

  const handlechange = (event) => {
    const values = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedRoles(values);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file || selectedRoles.length === 0) {
      setError("Please upload a resume and select at least one role.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("roles", JSON.stringify(selectedRoles));

      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.result);
      } else {
        setError(data.message || "Analysis failed");
      }

    } catch (err) {
      setError("Server error. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-20 bg-gradient-to-r from-purple-500 to-blue-500 p-10 rounded-lg ml-40 mr-40">
      <h1 className="flex justify-center text-xl text-white">
        Analyze Your Resume 🔍📊
      </h1>

      <div className="flex flex-col justify-center items-center text-center mt-10 gap-3">
        <h1 className="text-white">Select Your Resume</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-white text-blue-500 p-2 rounded-lg"
        />

        <h1 className="text-white">Select Role(s)</h1>

        <select
          multiple
          value={selectedRoles}
          onChange={handlechange}
          className="bg-white text-blue-500 p-2 rounded-lg h-40"
        >
          {cseRoles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>

        <button
          onClick={handleAnalyze}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-yellow-600 transition"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        {error && <p className="text-red-200">{error}</p>}

        {/* Results */}
        {result.length > 0 && (
          <div className="mt-6 bg-white p-5 rounded-lg w-full">
            <h2 className="text-xl font-bold mb-4 text-blue-600">
              Analysis Results 📊
            </h2>

            {result.map((item, index) => (
              <div
                key={index}
                className="border-b pb-3 mb-3 text-left"
              >
                <p>
                  <strong>Role:</strong> {item.role}
                </p>
                <p>
                  <strong>Score:</strong> {item.score}%
                </p>
                <p>
                  <strong>Feedback:</strong> {item.feedback}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
