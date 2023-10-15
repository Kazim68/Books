import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './spinner'
import Backbutton from './backButton'
import { useSnackbar } from 'notistack';

const Edit = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/books/${id}`)
            .then((res) => {
                setLoading(false)
                setTitle(res.title)
                setAuthor(res.author)
                setPublishYear(res.publishYear)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    const handleEditBook = () => {
        const data = { title, author, publishYear }
        setLoading(true)
        axios   
            .patch(`http://localhost:3000/books/${id}`, data)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('Book Updated successfully', { variant: 'success' });
                navigate('/')
            })
            .catch((err) => {
                setLoading(false)
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(err)
            })
    }


  return (
      <div className='p-4'>
          <Backbutton />
          <h1 className='text-3xl my-4'>Edit Book</h1>
          {
              loading?<Spinner/>:''
          }
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-grey-500'>Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full'/>
              </div>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-grey-500'>Author</label>
                  <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full'/>
              </div>
              <div className='my-4'>
                  <label className='text-xl mr-4 text-grey-500'>Publish Year</label>
                  <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-grey-500 px-4 py-2 w-full'/>
              </div>
              <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                  Save
              </button>
          </div>
    </div>
  )
}

export default Edit