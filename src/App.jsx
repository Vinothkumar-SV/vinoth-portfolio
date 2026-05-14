export default function Portfolio() {
  const skills = {
    Automation: ["Selenium", "Playwright", "Cypress", "Appium"],
    API: ["RestAssured", "Postman", "Swagger", "GraphQL"],
    Frameworks: ["TestNG", "Cucumber", "Hybrid Framework", "POM"],
    DevOps: ["Jenkins", "GitHub Actions", "Docker", "Maven", "Git"],
    Languages: ["Java", "JavaScript", "SQL"],
  };

  const projects = [
    {
      title: "AI-Based Test Automation Framework",
      description:
        "Built an intelligent automation framework with Selenium and Playwright featuring AI-assisted locator healing, reusable components, reporting dashboards, and CI/CD integration.",
      tech: ["Selenium", "Playwright", "Java", "TestNG", "Jenkins"],
    },
    {
      title: "API Automation Framework",
      description:
        "Designed scalable API automation framework using RestAssured with schema validation, token management, reusable utilities, and reporting.",
      tech: ["RestAssured", "Postman", "Java", "Maven"],
    },
    {
      title: "Hybrid Test Framework",
      description:
        "Created enterprise-ready hybrid automation framework using Selenium, TestNG, and Cucumber with retry mechanisms, parallel execution, and Extent Reports.",
      tech: ["Selenium", "Cucumber", "TestNG", "Extent Reports"],
    },
    {
      title: "GraphQL Testing Framework",
      description:
        "Implemented GraphQL API validation framework for query testing, mutation validation, schema assertions, and response verification.",
      tech: ["GraphQL", "RestAssured", "Postman"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
                QA Automation Engineer & Framework Architect
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Hi, I’m <span className="text-cyan-400">Vinoth Kumar</span>
              </h1>

              <p className="text-slate-300 text-lg leading-8 mb-8 max-w-2xl">
                Passionate QA Automation Engineer specializing in Selenium,
                Playwright, API Testing, AI-Assisted Testing, and scalable
                automation framework development.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Vinothkumar-SV"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/20"
                >
                  View GitHub
                </a>

                <button className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-500 transition">
                  Download Resume
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-7xl font-bold text-cyan-400">
                  VK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

          <p className="text-slate-300 text-lg leading-9">
            Experienced QA Automation Engineer with expertise in building
            enterprise-grade automation frameworks using Selenium,
            Playwright, TestNG, Cucumber, and RestAssured. Passionate about
            AI-powered testing workflows, framework architecture, API
            automation, CI/CD integration, and quality engineering best
            practices.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-14 text-cyan-400">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500 transition"
              >
                <h3 className="text-xl font-semibold mb-5">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-xl bg-black border border-slate-700 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14 text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 hover:border-cyan-500 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-8 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-xl bg-black border border-slate-700 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-14 text-cyan-400">
            QA Community & Sessions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-800 p-8 bg-slate-900/60">
              <h3 className="text-2xl font-semibold mb-6">Mentoring</h3>

              <ul className="space-y-4 text-slate-300">
                <li>• Selenium Basics Marathon</li>
                <li>• RestAssured Advanced Sessions</li>
                <li>• TestNG Doubt Clarification</li>
                <li>• Framework Design Mentoring</li>
                <li>• API Testing Workshops</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 p-8 bg-slate-900/60">
              <h3 className="text-2xl font-semibold mb-6">
                QA Expertise
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li>• Enterprise Automation Frameworks</li>
                <li>• AI-Assisted Testing</li>
                <li>• CI/CD Quality Engineering</li>
                <li>• API & GraphQL Validation</li>
                <li>• Test Architecture & Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-black p-10 text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            GitHub Profile
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
            Explore my automation frameworks, QA projects, API testing
            solutions, and AI-driven quality engineering experiments.
          </p>

          <a
            href="https://github.com/Vinothkumar-SV"
            target="_blank"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
          >
            Visit GitHub
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Let’s Connect
          </h2>

          <p className="text-slate-300 text-lg mb-10">
            Open to QA Automation, Framework Engineering, AI Testing, and
            Quality Engineering opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Vinothkumar-SV"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
            >
              GitHub
            </a>

            <button className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-500 transition">
              LinkedIn
            </button>

            <button className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-500 transition">
              Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
