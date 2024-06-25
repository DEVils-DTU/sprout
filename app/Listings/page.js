import React from 'react'
import ListingCard from '../components/listingCard'


const About = () => {
    return (
        <div className=' h-full w-full overflow-auto p-10 flex flex-wrap justify-around items-center'>

            {/* make this again and again using loop */}
            <ListingCard /><ListingCard /><ListingCard /><ListingCard /><ListingCard /><ListingCard /><ListingCard />

        </div>
    )
}

export default About