import express from 'express'
import {getAllBooks, getBookById, createBook, updateBook, deleteBook} from '../controller/booksController.js'

const Router = express.Router()

Router.route('/').get(getAllBooks).post(createBook)
Router.route('/:id').get(getBookById).patch(updateBook).delete(deleteBook)

export default Router