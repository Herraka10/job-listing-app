export default function Hero() {
  const latestJobs = [
    { title: "Frontend Developer", company: "Tech Corp" },
    { title: "UI/UX Designer", company: "Design Studio" },
    { title: "Backend Engineer", company: "CloudX" },
    { title: "Data Analyst", company: "FinData" },
    { title: "Project Manager", company: "BizGroup" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Temukan Pekerjaan Impianmu</h1>
      <p className="mb-8">
        Jelajahi ribuan lowongan kerja dari berbagai perusahaan
      </p>

      <div className="bg-white text-black max-w-2xl mx-auto p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Cari berdasarkan Job Title..."
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Lokasi..."
          className="w-full p-2 border rounded mb-2"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Cari Pekerjaan
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">5 Lowongan Terbaru</h2>
        <ul className="flex flex-col gap-2 max-w-md mx-auto">
          {latestJobs.map((job, i) => (
            <li key={i} className="bg-white text-black p-3 rounded shadow">
              <strong>{job.title}</strong> - {job.company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
