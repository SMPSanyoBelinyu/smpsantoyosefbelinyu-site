import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function AdminBerita() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('berita').select('*').order('created_at', { ascending: false })
    if (error) return alert(error.message)
    setPosts(data); setLoading(false)
  }

  useEffect(()=>{ fetchPosts() }, [])

  const createPost = async () => {
    const { error } = await supabase.from('berita').insert([{ title, content }])
    if (error) return alert(error.message)
    setTitle(''); setContent(''); fetchPosts()
  }

  const deletePost = async (id) => {
    const { error } = await supabase.from('berita').delete().eq('id', id)
    if (error) return alert(error.message)
    fetchPosts()
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Kelola Berita</h2>
      <div className="mb-4">
        <input className="border p-2 w-full mb-2" placeholder="Judul" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea className="border p-2 w-full mb-2" placeholder="Isi" value={content} onChange={(e)=>setContent(e.target.value)} />
        <button onClick={createPost} className="btn-yellow">Buat Berita</button>
      </div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map(p=>(
            <li key={p.id} className="border p-3 mb-2">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.content}</p>
              <button onClick={()=>deletePost(p.id)} className="mt-2 px-3 py-1 bg-red-600 text-white rounded">Hapus</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
