import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
    const bookCategories = [
        "Fiction","Non-Fiction","Mystery","Thriller","Romance","Biography","Sci-Fi","Fantasy","Self-Help","Cooking","Travel","History","Art","Science","Religion","Health","Fitness","Sports","Education","Comics","Magazines","Newspapers","Journals","Poetry","Drama","Horror","Children","Young-Adult","Business","Finance","Economics","Politics","Philosophy","Psychology","Technology","Engineering","Mathematics","Medicine","Law","Social-Sciences","Music","Entertainment","Children Books","Others","Art and designs"
    ];
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handelChangeSelectedVAlue = (event) => {
        setSelectedBookCategory(event.target.value);
    };
    //handel book submission
    const handelBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfURL = form.bookPdfURL.value;

        const bookObj = {
            bookTitle,
            authorName,
            imageURL,
            category,
            bookDescription,
            bookPdfURL
        };
        console.log(bookObj);

        //send data to database
        fetch('http://localhost:5000/upload-book',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            console.log(data);
            alert('Book Uploaded Successfully!!!');
            form.reset();
        });
    };
    return (
        <div className=' px-4 my-12 '>
            <h2 className='text-3xl font-bold mb-8'> Upload A Book</h2>
            <form onSubmit={handelBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
                {/* First Row */}
                <div className='flex gap-8'>
                    {/* Book Name */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book  Title" />
                        </div>
                        <TextInput id="bookTitle" type="bookTitle" placeholder="Book Title" required />
                    </div>
                    {/* Author Name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="authorName" placeholder="Author Name" required />
                    </div>

                </div>
                {/* Second Row */}
                <div className='flex gap-8'>
                    {/* Book Image URL */}

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" type="imageURL" placeholder="Book Image URL" required />
                    </div>
                    {/*  Category */}
                    <div className='lg:w-1/2'> 
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id="inputState" name="categoryName" className='w-full rounded ' value={selectedBookCategory} onChange={handelChangeSelectedVAlue}>
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
                    <Textarea  id="bookDescription" name="bookDescription"  placeholder="Write your book description" required className='w-full' rows={6} />
                </div>
                {/* Book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPdfURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Book PDF URL" required />
                </div>
                <Button type="submit" className='mt-5'>Upload Book</Button>
            </form>
        </div>
    );
};

export default UploadBook;
