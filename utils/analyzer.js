const roleKeywords = {
  "Software Engineer": [
    "javascript",
    "react",
    "node",
    "api",
    "git",
    "typescript",
    "docker",
    "kubernetes",
    "aws",
    "html",
    "css",
    "agile"
  ],

  "Data Scientist": [
    "python",
    "r",
    "machine learning",
    "deep learning",
    "pandas",
    "numpy",
    "sql",
    "scikit-learn",
    "tensorflow",
    "data visualization",
    "matplotlib",
    "statistics"
  ],

  "Product Manager": [
    "roadmap",
    "stakeholder",
    "requirements",
    "agile",
    "kanban",
    "jira",
    "planning",
    "communication",
    "prioritization",
    "strategy",
    "leadership"
  ],

  "UI/UX Designer": [
    "figma",
    "adobe xd",
    "sketch",
    "wireframe",
    "prototype",
    "ux",
    "ui",
    "usability testing",
    "interaction design",
    "user research"
  ],

  "Machine Learning Engineer": [
    "python",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "numpy",
    "pandas",
    "data preprocessing",
    "model deployment"
  ],

  "DevOps Engineer": [
    "docker",
    "kubernetes",
    "jenkins",
    "ci/cd",
    "aws",
    "azure",
    "git",
    "infrastructure",
    "monitoring",
    "linux"
  ],

  "Cloud Engineer": [
    "aws",
    "azure",
    "google cloud",
    "devops",
    "terraform",
    "docker",
    "kubernetes",
    "ci/cd",
    "serverless",
    "cloud architecture"
  ],

  "Cybersecurity Analyst": [
    "penetration testing",
    "network security",
    "firewall",
    "vpn",
    "intrusion detection",
    "risk assessment",
    "threat analysis",
    "compliance",
    "linux",
    "incident response"
  ],

  "Full Stack Developer": [
    "javascript",
    "react",
    "node",
    "express",
    "mongodb",
    "html",
    "css",
    "docker",
    "api",
    "git"
  ],

  "Mobile App Developer": [
    "android",
    "ios",
    "react native",
    "flutter",
    "swift",
    "kotlin",
    "java",
    "mobile api",
    "ui design",
    "app deployment"
  ]
};

function analyzeResume(text, roles) {
  const resumeText = text.toLowerCase();

  let analysis = [];

  roles.forEach((role) => {
    const keywords = roleKeywords[role] || [];
    let matchCount = 0;

    keywords.forEach((keyword) => {
      if (resumeText.includes(keyword)) {
        matchCount++;
      }
    });

    const score = Math.round((matchCount / keywords.length) * 100) || 0;

    analysis.push({
      role,
      score,
      matchedKeywords: matchCount,
      totalKeywords: keywords.length,
      feedback:
        score > 70
          ? "Strong match for this role"
          : score > 40
          ? "Moderate match, improvement recommended"
          : "Low match, consider adding relevant skills",
    });
  });

  return analysis;
}

module.exports = analyzeResume;
