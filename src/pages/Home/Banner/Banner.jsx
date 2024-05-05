import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full" />

        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full" />

        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full" />

        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full" />

        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full h-[600px]">
        <img src={img5} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full h-[600px]">
        <img src={img6} className="w-full" />

        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 left-0 h-full w-full text-center md:text-start space-y-5">
          <div className="py-32 px-10 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white w-full md:w-[600px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-full md:w-[600px] text-xl text-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>

            <div className="flex justify-center md:justify-normal space-x-3 sm:space-x-8">
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Discover More
              </button>
              <button className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border text-white text-lg rounded-lg hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 hover:duration-500">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex space-x-5 bottom-12 right-12">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner