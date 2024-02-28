import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useParams, useLoaderData } from 'react-router-dom';
const EditBooks = () => {
    const {id} = useParams();
    const {bookTitle, authorName,  imageURL, category, bookDescription, bookPdfURL} = useLoaderData();
    const bookCategories = [
        "Fiction","Non-Fiction","Mystery","Thriller","Romance","Biography","Sci-Fi","Fantasy","Self-Help","Cooking","Travel","History","Art","Science","Religion","Health","Fitness","Sports","Education","Comics","Magazines","Newspapers","Journals","Poetry","Drama","Horror","Children","Young-Adult","Business","Finance","Economics","Politics","Philosophy","Psychology","Technology","Engineering","Mathematics","Medicine","Law","Social-Sciences","Music","Entertainment","Children Books","Others","Art and designs"
    ];
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handelChangeSelectedVAlue = (event) => {
        setSelectedBookCategory(event.target.value);
    };
    //handel book submission
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfURL = form.bookPdfURL.value;

        const updateBookObj = {
            bookTitle,
            authorName,
            imageURL,
            category,
            bookDescription,
            bookPdfURL
        };
        console.log(updateBookObj);

        //update data to database
        fetch(`http://localhost:5000/book/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            console.log(data);
            alert('Book Updated Successfully!!!');
            form.reset();
        });
    };
    return (
        <div className=' px-4 my-12 '>
            <h2 className='text-3xl font-bold mb-8'> Update Book Data</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
                {/* First Row */}
                <div className='flex gap-8'>
                    {/* Book Name */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book  Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" name="bookTitle" placeholder="Book Title" required defaultValue={bookTitle}/>
                    </div>
                    {/* Author Name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="authorName" placeholder="Author Name" required defaultValue={authorName} />
                    </div>

                </div>
                {/* Second Row */}
                <div className='flex gap-8'>
                    {/* Book Image URL */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" type="imageURL" placeholder="Book Image URL" required defaultValue={imageURL} />
                    </div>
                    {/*  Category */}
                    <div className='lg:w-1/2'> 
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id="inputState" name="categoryName" className='w-full rounded ' value={selectedBookCategory} onChange={handelChangeSelectedVAlue} defaultValue={category}>
                            {bookCategories.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    </div> 

                </div>
                {/* Book Description */}
                <div className=''>
                    <div className="mb-2 block">
                    <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea  id="bookDescription" name="bookDescription"  placeholder="Write your book description" required className='w-full' rows={6} defaultValue={bookDescription}/>
                </div>
                {/* Book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPdfURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Book PDF URL" required defaultValue={bookPdfURL} />
                </div>
                <Button type="submit" className='mt-5'>Update Book</Button>
            </form>
        </div>
    );
}

export default EditBooks