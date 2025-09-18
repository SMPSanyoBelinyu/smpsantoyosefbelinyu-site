import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('siswa')
  const router = useRouter()

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role } }
    })
    if (error) return alert(error.message)
    alert('Terdaftar. Mohon tunggu verifikasi admin.')
  }

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return alert(error.message)
    // simple redirect; admin dashboard will check role server-side later
    router.push('/')
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Login / Daftar</h2>
      <input className="border p-2 w-full mb-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-2" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <select value={role} onChange={(e)=>setRole(e.target.value)} className="border p-2 w-full mb-2">
        <option value="siswa">Siswa</option>
        <option value="guru">Guru</option>
      </select>
      <div className="flex gap-2">
        <button onClick={handleLogin} className="btn-yellow">Login</button>
        <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">Daftar</button>
      </div>
    </div>
  )
}
