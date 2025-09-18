import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children}) {
  return (
    <>
    <Head>
      <title>SMP Santo Yosef Belinyu</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12"/>
            <h1 className="text-xl font-bold">SMP Santo Yosef Belinyu</h1>
          </div>
          <nav className="space-x-4 hidden md:flex">
            <Link href="/"><a className="hover:underline">Beranda</a></Link>
            <Link href="/profil"><a className="hover:underline">Profil</a></Link>
            <Link href="/berita"><a className="hover:underline">Berita</a></Link>
            <Link href="/materi"><a className="hover:underline">Materi</a></Link>
            <Link href="/galeri"><a className="hover:underline">Galeri</a></Link>
            <Link href="/spmb"><a className="hover:underline">SPMB</a></Link>
            <Link href="/kontak"><a className="hover:underline">Kontak</a></Link>
            <Link href="/login"><a className="btn-yellow">Login</a></Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-700 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 SMP Santo Yosef Belinyu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
