import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function AdminSPMB() {
  const [apps, setApps] = useState([])

  const fetch = async ()=> {
    const { data, error } = await supabase.from('spmb_applications').select('*').order('created_at', {ascending:false})
    if (error) return alert(error.message)
    setApps(data)
  }

  useEffect(()=>{ fetch() }, [])

  const updateStatus = async (id, status) => {
    const { error } = await supabase.from('spmb_applications').update({ status }).eq('id', id)
    if (error) return alert(error.message)
    fetch()
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Kelola Pendaftaran SPMB</h2>
      <table className="w-full table-auto border">
        <thead><tr className="bg-gray-100"><th className="p-2">Nama</th><th className="p-2">Email</th><th className="p-2">Status</th><th className="p-2">Aksi</th></tr></thead>
        <tbody>
          {apps.map(a=>(
            <tr key={a.id} className="border-t">
              <td className="p-2">{a.name}</td><td className="p-2">{a.email}</td><td className="p-2">{a.status}</td>
              <td className="p-2">
                <button onClick={()=>updateStatus(a.id,'accepted')} className="mr-2 px-3 py-1 bg-green-600 text-white rounded">Terima</button>
                <button onClick={()=>updateStatus(a.id,'rejected')} className="px-3 py-1 bg-red-600 text-white rounded">Tolak</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
