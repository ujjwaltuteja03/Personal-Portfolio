export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12" style={{ animation: 'slideUp 0.6s ease-out 0.9s both' }}>
      <h2 className="text-3xl font-bold mb-8 text-white">Get in touch</h2>
      <p className="text-gray-300 mb-6">
        Open to full stack and software development roles. Feel free to reach
        out using these links:
      </p>
      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/ujjwaltuteja03"
          target="_blank"
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-tuteja-a41791248/"
          target="_blank"
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ujjwal.tuteja03@gmail.com"
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          Email
        </a>
        <a
          href="https://www.instagram.com/ujjwal_0326/"
          target="_blank"
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
