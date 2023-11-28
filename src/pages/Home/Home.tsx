import { motion } from "framer-motion"
import FeturedCakes from "./FeturedCakes"

function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-row max-[800px]:flex-col-reverse">
                <div
                    className="flex flex-col items-start justify-center flex-1 max-[640px]:mx-10"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                delay: 0.2,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-5xl max-[320px]:text-3xl mb-4 font-extrabold text-black"
                    >
                        Savor the Sweet Moments at <span className="text-pink">CampCakes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.5,
                                delay: 0.3,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-[rgba(0,0,0,0.61)] text-sm font-medium"
                    >
                        Step into a world of irresistible delights at CampCakes. Our artisanal cakes are expertly crafted, ensuring each bite is a symphony of flavors and textures. Whether you opt for a custom-designed masterpiece or one of our signature treats, every cake is a celebration of sweetness and perfection. Join us at CampCakes, where every slice tells a unique and delicious story.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.5,
                                delay: 0.4,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-black drop-shadow-lg font-semibold border-[1px] px-4 py-[7px] border-pink mt-5 rounded-md hover:text-white hover:bg-pink transition-all ease-in-out duration-150"
                    >
                        Shop Now
                    </motion.button>
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.5,
                        },
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="h-[95vh] max-[800px]:h-auto w-1/2 max-[800px]:w-full max-[800px]:mb-5"
                >
                    <img 
                        src="/banner/cake.png"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* Featured cakes */}
            <FeturedCakes/>
        </div>
    )
}

export default Home