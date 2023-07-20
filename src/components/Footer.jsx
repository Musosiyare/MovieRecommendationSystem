import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-center w-full h-screen items-center'>
                <div className='w-1/2 text-center'>
                    <h1 className='text-4xl font-bold text-center'>There’s even more to watch.</h1>
                    <p className='text-center py-3'>
                    This basic movie recommendation system fetches movie data based 
                    on a user's keyword input, sorts the search results by IMDb ratings, 
                    and returns the top-rated movie along with its details. You can enhance
                     this system by incorporating user preferences, collaborative filtering,
                      or content-based filtering techniques for more advanced recommendations.
                    </p>
                    <p className='my-4'>
                        <Link to='/register'>
                            <button className='py-2 rounded-sm capitalize px-8 text-2xl bg-red-600'>
                                Click to Join
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer