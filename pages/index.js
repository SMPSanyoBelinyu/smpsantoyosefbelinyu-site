import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di SMP Santo Yosef Belinyu</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Sekolah yang membentuk generasi beriman, cerdas, dan peduli lingkungan.</p>
          <Link href="/berita"><a className="btn-yellow">Lihat Berita Terbaru</a></Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <div className="card text-center">
          <div className="mb-3">📚</div>
          <h3 className="font-bold text-xl mb-2">Materi Belajar</h3>
          <p className="mb-4 text-gray-600">Akses materi pembelajaran untuk semua kelas.</p>
          <Link href="/materi"><a className="inline-block btn-yellow">Masuk</a></Link>
        </div>
        <div className="card text-center">
          <div className="mb-3">📸</div>
          <h3 className="font-bold text-xl mb-2">Galeri Kegiatan</h3>
          <p className="mb-4 text-gray-600">Lihat dokumentasi kegiatan sekolah.</p>
          <Link href="/galeri"><a className="inline-block btn-yellow">Lihat</a></Link>
        </div>
        <div className="card text-center">
          <div className="mb-3">📝</div>
          <h3 className="font-bold text-xl mb-2">SPMB Online</h3>
          <p className="mb-4 text-gray-600">Daftar menjadi bagian dari SMP Santo Yosef Belinyu.</p>
          <Link href="/spmb"><a className="inline-block btn-yellow">Daftar</a></Link>
        </div>
      </section>
    </div>
  )
}
