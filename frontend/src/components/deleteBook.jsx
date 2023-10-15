import React, {useState} from 'react'
import  { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from './spinner'
import Backbutton from './backButton'
import { useSnackbar } from 'notistack';

const DeleteBook = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {enqueueSnackbar} = useSnackbar()

    const handleDeleteBook = () => { 
        setLoading(true)
        axios
            .delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('Book Deleted Successfully', {variant: 'success'})
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                enqueueSnackbar('Something went wrong', {variant: 'error'})
                setLoading(false)
            })
    }

    
  return (
      <div className='p-4'>
          <Backbutton />
          <h1 className='text-3xl my-4'>Delete Book</h1>
          {loading ? <Spinner /> : ''}
          <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
              <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
              <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                  Yes Delete it!
              </button>
          </div>
    </div>
  )
}

export default DeleteBook