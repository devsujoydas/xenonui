import React from 'react'

const LovedByCommunity = () => {

    const reviews = [
        {
            id: 1,
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Alex Johnson",
            devtype: "Frontend Developer",
            comment: "The components are clean, accessible, and easy to integrate. Saved me countless hours during development!"
        },
        {
            id: 2,
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            name: "Sara Lee",
            devtype: "UI/UX Designer",
            comment: "I love how customizable everything is. It's like having my own design system without starting from scratch."
        },
        {
            id: 3,
            img: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Daniel Kim",
            devtype: "Full Stack Developer",
            comment: "Lightweight, flexible, and well-documented. Perfect for scaling fast with consistent UI."
        },
        {
            id: 4,
            img: "https://randomuser.me/api/portraits/women/60.jpg",
            name: "Nina Alvarez",
            devtype: "Product Designer",
            comment: "The component structure is intuitive and makes handoff between design and dev super smooth."
        },
        {
            id: 5,
            img: "https://randomuser.me/api/portraits/men/75.jpg",
            name: "Rahul Mehta",
            devtype: "React Developer",
            comment: "Integrating this library into my React app was seamless. Truly plug-and-play."
        },
        {
            id: 6,
            img: "https://randomuser.me/api/portraits/women/22.jpg",
            name: "Chloe Martin",
            devtype: "Software Engineer",
            comment: "These components helped me deliver production-grade UI in record time."
        },
        {
            id: 7,
            img: "https://randomuser.me/api/portraits/men/84.jpg",
            name: "Tariq Hassan",
            devtype: "Web Developer",
            comment: "Every element is thoughtfully built. It just works and looks great across all devices."
        },
        {
            id: 8,
            img: "https://randomuser.me/api/portraits/women/38.jpg",
            name: "Emily Chen",
            devtype: "Tech Lead",
            comment: "We adopted this UI library across multiple projects — consistency and speed improved dramatically."
        }
    ];


    return (
        <div className='min-h-[70vh] max-w-7xl 2xl:mx-auto md:mx-10 mx-3 md:my-5 my-14 '>
            <div className='text-center'>
                <h1 className='md:text-5xl text-3xl font-semibold '>What People Are Saying. </h1>
                <p className='text-zinc-400 md:mt-4 mt-2'>Loved By Community</p>
            </div>

            <div className='mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                {
                    reviews.map((review, idx) => (
                        <div className=' border border-zinc-700 bg-zinc-900 p-5 rounded-xl shadow-md  hover:shadow-zinc-700 transition-all'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img className='h-12 w-12 rounded-full ' src={review.img} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-lg font-medium'>{review.name}</h1>
                                    <p className='text-sm text-zinc-400'>{review.devtype}</p>
                                </div>
                            </div>
                            <p className='text-zinc-300 mt-4'>{review.comment}</p>
                        </div>
                    ))
                }

            </div>



        </div>
    )
}

export default LovedByCommunity