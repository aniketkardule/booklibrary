
import Book from '../models/book.js';

const getBooks = async (req, res) => {
    try{
        const books = await Book.find({});
        if(books){
            res.send(books);
        }else{
            res.status(501).json({message:'books not found !'});
        }
    }catch (e){
        res.status(501).json({message:e});
    }
}

const getBook = async (req, res) => {
    try{
        const id = req.query.id;
        if(id){
            const book = await Book.findById(id);
            if(book){
                res.send(book);
            }else{
                res.status(501).json({message:'book not found !'});
            }
        }else{
            res.status(501).json({message:'please provide id in params!'});
        }
        
    }catch (e){
        res.status(501).json({message:e});
    }
}
const insertBook = async (req, res) => {
    try{
        const {title, author, summery} = req.body;
        const book = await Book.findOne({title:title});
        if(!book){
            if(title && author && summery){

                const newBook = await Book.create({
                    title: title,
                    author: author,
                    summery: summery
                })
    
                if(newBook){
                    res.status(201).json({
                        message:'book created',
                        title: title,
                        author: author,
                        summery: summery
                    })
                }
            }else{
                res.status(501).json({message:'Provide all fields for above keys title, author, summery'})
            }
        }else{
            res.status(403).json({message:'forbidden book with title already exists!'});
        }
        
    }catch(e){
        res.status(501).json({message:e});
    }
}

const updateBook = async (req, res) => {
    try{
        const {_id, title, author, summery} = req.body;

        if((title || author || summery) && _id){

            const book = await Book.findById(_id);

            if(book){
                book.title = title || book.title,
                book.author = author || book.author,
                book.summery = summery || book.summery

                const newBook = await book.save();
                if(newBook){
                    res.status(201).json({
                        message:'book updated!',
                        title: book.title,
                        author: book.author,
                        summery: book.summery
                    })
                }
            }else{
                res.status(404).json({message:'Book not found !'})
            }
            
        }else{
            res.status(501).json({message:'Provide Fields with _id to update'})
        }
    }catch(e){
        res.status(501).json({message:e});
    }
}

const deleteBook = async (req, res) => {
    try{
        const id = req.query.id;
        if(id){
            const book = await Book.findById(id);
            if(book){
                const deletedBook = await Book.deleteOne({_id:id});
                res.status(200).json({
                    message:'book deleted!',
                    book:deletedBook
                })
            }else{
                res.status(501).json({message:'book not found !'});
            }
        }else{
            res.status(501).json({message:'please provide id in params!'});
        }
        
    }catch (e){
        res.status(501).json({message:e});
    }
}

export { getBooks, getBook, insertBook, updateBook, deleteBook };