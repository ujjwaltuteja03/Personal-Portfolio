export default function Projects() {
  const projects = [
    {
      name: "Gym Planner AI",
      description:
        "AI-powered workout planner. Generate personalized plans with OpenRouter API.",
      tech: "PERN stack, Neon Auth, OpenRouter",
      github: "https://github.com/ujjwaltuteja03/AI-Gym-Planner.git",
      live: "https://ai-gym-planner-git-main-ujjwaltuteja03s-projects.vercel.app/",
    },
    {
      name: "Yelp Clone",
      description: "Restaurant review platform with CRUD operations, ratings, and user reviews.",
      tech: "React, Node.js, Express, PostgreSQL, Bootstrap",
      github: "https://github.com/ujjwaltuteja03/Yelp-Clone-PERN.git",
      // live: "https://yelp-clone-live.railway.app"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12" style={{ animation: 'slideUp 0.6s ease-out 0.6s both' }}>
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow border-l-4 border-white"
          >
            <h3 className="text-2xl font-semibold text-white">{proj.name}</h3>
            <p className="text-gray-300 mt-2">{proj.description}</p>
            <p className="text-sm text-gray-400 mt-3">
              <strong>Tech:</strong> {proj.tech}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={proj.github}
                target="_blank"
                className="text-white hover:underline text-sm font-semibold"
              >
                GitHub
              </a>
              {proj.live && (
              <a
                href={proj.live}
                target="_blank"
                className="text-white hover:underline text-sm font-semibold"
              >
                Live Demo
              </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
