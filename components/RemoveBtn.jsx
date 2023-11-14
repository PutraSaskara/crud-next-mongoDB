"use client"

import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import { useRouter } from 'next/navigation'

function RemoveBtn({id}) {
  const router = useRouter()
  const removeTopic = async() => {
    const confirmed = confirm('Are You Sure?')

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      })
      if(res.ok) {
        router.refresh()
      }
    }
  }
  return (
    <button onClick={removeTopic}><MdDeleteOutline size={30} className='text-red-500'/></button>
  )
}

export default RemoveBtn