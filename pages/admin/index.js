import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function AdminHome() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = supabase.auth.getSession().then(r=>r.data.session)
    session.then(s=>{
      if(!s) { router.push('/login'); return }
      // fetch profile to check role
      supabase.from('profiles').select('role').eq('id', s.user.id).single().then(res=>{
        if(res.error || res.data?.role !== 'admin') router.push('/login')
        else setUser(s.user)
        setLoading(false)
      })
    })
  },[])

  if(loading) return <div className="p-8">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/admin/users"><a className="card">Kelola User</a></Link>
        <Link href="/admin/berita"><a className="card">Kelola Berita</a></Link>
        <Link href="/admin/spmb"><a className="card">Kelola SPMB</a></Link>
      </div>
    </div>
  )
}
