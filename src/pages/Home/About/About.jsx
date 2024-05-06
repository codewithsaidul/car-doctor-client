import Person from '../../../assets/images/about_us/person.jpg'
import Parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="mt-16 mb-32">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="lg:w-1/2 relative">
            <img src={Person} className="w-full lg:w-3/4 rounded-lg" />
            <img
              src={Parts}
              className="w-3/4 lg:w-3/5 border-8 absolute right-0 lg:right-16 top-32 lg:top-1/2 rounded-lg border-white"
            />
          </figure>

          <div className="lg:w-1/2 mt-24 lg:mt-0">
            <h3 className="text-xl font-bold text-[#FF3811] text-center lg:text-left">
              About Us
            </h3>
            <h1 className="text-3xl text-center lg:text-left md:text-5xl font-extrabold text-[#151515]">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 text-center lg:text-left text-[#737373] font-normal w-full">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
              <span className="mt-5 block">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </span>
            </p>
            <div className='flex justify-center lg:justify-normal'>
              <button className="py-3 px-7 bg-[#FF3811] rounded-[300px_400px_500px_100px] text-white">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About