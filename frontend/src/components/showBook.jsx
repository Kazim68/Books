import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from './backButton'
import Spinner from './spinner'

const ShowBook = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/books/${id}`)
            .then((res) => {
                setBook(res.data)
                console.log(res.data)
                setLoading(false)
            })
            .catch((Error) => {
                console.log(Error)
                setLoading(false)
             })
    }, [])

  return (
      <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4'>Show Book</h1>
          {
              loading ? (
                  <Spinner/>
              ): (
                      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Id</span>
                              <span>{book._id}</span>
                          </div>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Title</span>
                              <span>{book.title}</span>
                          </div>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Author</span>
                              <span>{book.author}</span>
                          </div>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Publish Year</span>
                              <span>{book.publishYear}</span>
                          </div>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Create Time</span>
                              <span>{new Date(book.createAt).toString()}</span>
                          </div>
                          <div className='my-4'>
                              <span className='text-xl mr-4 text-grey-500'>Updated At</span>
                              <span>{new Date(book.updatedAt).toString()}</span>
                          </div>
                      </div>
              )
          }
    </div>
  )
}

export default ShowBook