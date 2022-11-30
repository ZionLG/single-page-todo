import React, { useState } from 'react'
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

const AddTodo = () => {
  const [title, setTitle] = useState("");
  console.log(title)
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });

      setTitle("");
    }

  }

  return (
    <form className='max-w-lg my-0 mx-auto bg-white px-[10px] py-[20px] mt-[50px] rounded-md shadow-md'
      onSubmit={handleSubmit}>
      <div className='mb-8'>
        <input className='w-full py-[10px] px-[5px] outline-none text-base font-medium'
        type="text"
        placeholder='Todo here'
        value={title}
        onChange={(e) => setTitle(() => e.target.value)}/>
      </div>
      <div className='text-center mb-[10px]'>
        <button className='bg-[#333] text-white py-[10px] px-[20px] outline-none border-none rounded-md text-base cursor-pointer font-medium'>Add</button>
      </div>
    </form>
  )
}

export default AddTodo