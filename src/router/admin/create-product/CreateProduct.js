import React, {useRef} from 'react'
import "../Admin.css"
import { useState } from 'react'



// collection = array
function CreateProduct() {
    const title = useRef()
    const price = useRef()
    const url = useRef()
const [loading, setLoading] = useState(false)

    const handleCreate = async(e)=>{
        e.preventDefault()
        setLoading(true)
        let newPro = {
            title: title.current.value,
            price: +price.current.value,
            url: url.current.value,
        }
        
    }
  return (
    <div className='create__pro'>
        <h2>CreateProduct</h2>
        <form onSubmit={handleCreate} action="">
            <input ref={title} required type="text" placeholder='title'/>
            <input ref={price} required type="number" placeholder='price'/>
            <input ref={url} required type="text" placeholder='url'/>
            <button type='submit'>Create product</button>
        </form>
    </div>
  )
}

export default CreateProduct