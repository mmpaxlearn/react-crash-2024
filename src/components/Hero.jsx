
const Hero = ({ title = "Title place holder", subtitle = "subtitle place holder" }) => {
  return (
    <section className="bg-indigo-700 mb-4 py-20">
      <div
        className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      >
        <div className="text-center">
          <h1
            className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl"
          >
            {/* Become a React Dev */}
            {title}
          </h1>
          <p className="my-4 text-white text-xl">
            {/* Find the React job that fits your skills and needs */}
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero