import React from 'react'
import RemoveBtn from '../components/RemoveBtn'
import {IoCreateOutline} from 'react-icons/io5'
import Link from 'next/link'


const getTopic = async() => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store"
    })
    
    if(!res.ok) {
      throw new Error("Failed to fetch topic")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}

async function TopicList() {

  const {topics} = await getTopic()
  return (
    <>
    {topics.map(t => (
      <div className='flex justify-between items-start p-4 border border-slate-300 my-3 gap-5'>
      <div>
          <h2 className='font-bold text-2xl'>{t.title}</h2>
        <p>{t.description}</p>
      </div>
      <div className='flex items-center gap-2'>
          <RemoveBtn id={t._id}/>
          <Link href={`/editTopic/${t._id}`}>
              <IoCreateOutline size={30}/>
          </Link>
      </div>
      </div>
      ))}
    </>
  )
}

export default TopicList