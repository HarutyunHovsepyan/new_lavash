import aboutImage from '../assets/lavash6.jpg'

const About = () =>{
    return(
        <section className="max-w-7xl mx-auto border-b-2-mt-20" id="about">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
                About
            </h2>
            <div className="flex flex-col items0center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About" className='w-full h-auto' />
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia corporis alias dolore excepturi harum animi nisi natus rem esse qui, autem inventore pariatur modi sapiente et. Amet dolores adipisci voluptatibus pariatur nemo porro! Illum voluptatum aut dolore ratione possimus perferendis architecto sint debitis impedit, itaque cum consectetur eius iusto.
                </p>
            </div>
        </section>
    )
}

export default About