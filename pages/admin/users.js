import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    // join auth.users with profiles via RPC or select from profiles
    const { data, error } = await supabase.from('profiles').select('id, full_name, role, created_at')
    if (error) { alert(error.message); return }
    setUsers(data)
    setLoading(false)
  }

  useEffect(()=>{ fetchUsers() }, [])

  const updateRole = async (id, newRole) => {
    const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', id)
    if (error) return alert(error.message)
    fetchUsers()
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Kelola User</h2>
      {loading ? <p>Loading...</p> : (
        <table className="w-full table-auto border">
          <thead><tr className="bg-gray-100"><th className="p-2">Nama</th><th className="p-2">Role</th><th className="p-2">Aksi</th></tr></thead>
          <tbody>
            {users.map(u=>(
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.full_name || u.id}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2">
                  <button onClick={()=>updateRole(u.id,'guru')} className="mr-2 px-3 py-1 bg-blue-600 text-white rounded">Jadikan Guru</button>
                  <button onClick={()=>updateRole(u.id,'siswa')} className="px-3 py-1 bg-green-600 text-white rounded">Jadikan Siswa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
