export default function About() {
  return (
    <section className="bg-black pt-16 pb-6">
      <div className="max-w-2xl mx-auto px-6 p-8 rounded-lg text-center" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        {/* <h2 className="text-3xl font-bold mb-6 text-white">About</h2> */}
        <p className="text-lg text-gray-200  leading-relaxed mb-4">
          A developer who loves exploring projects, skills and tech that intrigues me.
          Recently, I've completed an ML internship at DRDO, working with quantum algorithms. Probably somewhere working on my dev skills or solving DSA problems using Python right now.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed">
          <strong>Stack:</strong> React, Express, Node.js, PostgreSQL 
        </p>
      </div>
    </section>
  );
}