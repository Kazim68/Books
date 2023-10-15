import Book from '../models/booksModel.js'
import { StatusCodes } from 'http-status-codes'
import {NotFoundError} from '../errors/index.js'

// get all books 
export const getAllBooks = async (req, res) => { 
    const books = await Book.find({})
    res.status(StatusCodes.OK).json(books)
}

// get a book by id
export const getBookById = async (req, res, next) => { 
    const book = await Book.findById(req.params.id)
    if (!book) {
        return next(new NotFoundError(`Book with id ${req.params.id} not found`))
    }
    res.status(StatusCodes.OK).json(book)
}

// create a book 
export const createBook = async (req, res, next) => {
    const book = await Book.create(req.body)
    res.status(StatusCodes.CREATED).json(book)
    
}

// update a book
export const updateBook = async (req, res, next) => { 
    const book = await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    if (!book) {
        return next(new NotFoundError(`Book with id ${req.params.id} not found`))
    }
    res.status(StatusCodes.OK).json(book)
}

// delete a book
export const deleteBook = async (req, res, next) => { 
    const book = await Book.findByIdAndDelete(req.params.id)
    if (!book) {
        return next(new NotFoundError(`Book with id ${req.params.id} not found`))
    }
    res.status(StatusCodes.OK).send('Book deleted')
}