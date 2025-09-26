export default function JobFilter() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-xl font-bold mb-4 text-center">Filter Pekerjaan</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Job Title"
          className="p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Bidang Kerja"
          className="p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Lokasi"
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white py-3 rounded"
        >
          Cari
        </button>
      </form>
    </section>
  );
}
