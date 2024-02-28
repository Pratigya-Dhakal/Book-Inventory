import React ,{useState,  useEffect, } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const handelDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/book/${id}`,{
        method: 'DELETE',
        }
    ).then(res => res.json()).then(data => {
        alert("Book Deleted Successfully!")
        // setAllBooks(data);
    });
    }
    useEffect(() => {  
        fetch('http://localhost:5000/get-books')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data);
        });
    }, []);
    return (
        <div className='px-4 my-12'>
            <h2 className='text-3xl font-bold mb-8'>Manage Your Books</h2>
                <Table className='lg:w-[1180px]'>
                    <Table.Head>
                        <Table.HeadCell>No.</Table.HeadCell>
                        <Table.HeadCell>Book Name</Table.HeadCell>
                        <Table.HeadCell>Author Name</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="">Edit or Manage</span>
                        </Table.HeadCell>
                    </Table.Head>
                    {
                        allBooks.map((book, index) =>   <Table.Body className="divide-y" key={book._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    <span className="text-gray-900 dark:text-white">{index + 1}</span>
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.bookTitle}
                                </Table.Cell>
                                <Table.Cell>{book.authorName}</Table.Cell>
                                <Table.Cell>{book.category}</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>
                                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </Link> 
                                <button onClick={()=>handelDelete(book._id)} className="font-medium text-red-600 hover:underline dark:text-red-500">
                                    Delete</button>
                                </Table.Cell> 
                            </Table.Row>
                        </Table.Body> )    
                    }
                </Table>
        </div>
    )
}

export default ManageBooks