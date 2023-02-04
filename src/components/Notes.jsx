import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../features/Note/noteReducer'

function Notes() {

    const items = useSelector((state) => state.note.items);
    const filteredText = useSelector((state) => state.note.filtered);
    const dispatch = useDispatch();

    const filtered = items.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
        );
    });

  return (
      <div className=" grid grid-cols-3 gap-5 relative mt-12 p-12">
            {
                filtered.map((item) => (
                    <div key={item.id} className="block  min-w-fit h-48 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                        <span  className='text-white cursor-pointer text-3xl ' onClick={() => dispatch(deleteNote(item.id))}> × </span>
                        <div className=' text-white'>
                            {item.content}
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default Notes