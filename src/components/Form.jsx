import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../features/Note/noteReducer'

function Form() {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setContent("")
        dispatch(addNote({ content }));
        console.log(content)
    }
  return (
      <form  onSubmit={handleSubmit} className=' items-center mx-auto mt-8  text-black' >
          <textarea
              placeholder='not girin'
              id=""
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => { setContent(e.target.value) }}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
        <input
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            value="Ekle"
        />  
      </form>
  )
}

export default Form