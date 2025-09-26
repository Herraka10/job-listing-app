export default function JobDiscovery() {
  const jobsByLocation = [
    { title: "Fullstack Developer", location: "Jakarta" },
    { title: "Marketing Specialist", location: "Bandung" },
    { title: "DevOps Engineer", location: "Surabaya" },
  ];

  return (
    <section className="py-10 px-6">
      <h2 className="text-xl font-bold mb-6 text-center">
        Rekomendasi Pekerjaan Berdasarkan Lokasi
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {jobsByLocation.map((job, i) => (
          <div
            key={i}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
