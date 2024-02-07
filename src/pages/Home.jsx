import React from 'react'
import { Hero,Banner,Process,FeaturedCakes,Testimonial,EmailSubscription } from '../components/index'

function Home() {
    return (
        <section>
            <Hero/>
            <Banner/>
            <FeaturedCakes/>
            <Process/>
            <Testimonial/>
            <EmailSubscription/>
        </section>
    )
}

export default Home