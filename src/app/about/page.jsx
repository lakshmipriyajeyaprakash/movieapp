import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
      <div className='flex flex-col px-4 py-2 max-w-6xl gap-3 justify-center items-center xl:max-w-7xl xl:px-8'>
          <h1 className='text-2xl font-medium text-violet-500'>About</h1>
          <p>At Filmflix, we want to entertain the world. Whatever your taste, and no matter where you live,
              we give you access to best-in-class TV series, documentaries, feature films and games. Our members
              control what they want to watch, when they want it, in one simple subscription. We’re streaming in
              more than 30 languages and 190 countries, because great stories can come from anywhere and be loved
              everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you
              find your next favorite story.we have an amazing and unique employee culture.Find out first-hand
              what it’s really like to work here, and to learn more about our company values.
          </p>
          <Image className='bg-white border-spacing-1 rounded-lg' src='https://images.pexels.com/photos/4784027/pexels-photo-4784027.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1' alt='no Image' height={300} width={500}></Image>
          <p>Our website is designed to provide you with a comprehensive database of
                movies from all around the world, along with the latest news, reviews,
                and trailers. Our movie database is constantly updated with new
                releases, ensuring that you have access to the latest and greatest in
                the world of cinema. You can search for movies by title, director,
                actor, genre, or release date, making it easy to find the perfect movie
                for any occasion.
          </p>
          <p>In addition to our extensive movie database, we also offer a platform
                for movie lovers to connect and share their thoughts on the latest
                releases. Our community section includes a forum where you can discuss
                your favorite films with like-minded individuals and read reviews and
                ratings from other users. We also have a section dedicated to movie news
                and trailers, keeping you updated with the latest happenings in the
                world of cinema. Thank you for visiting our website and we hope you
                enjoy your time browsing through our movie database. If you have any
                feedback or suggestions, please feel free to contact us. We are always
                looking for ways to improve and enhance the user experience on our
                website. Happy browsing!
          </p>
      </div>
  )
}

export default AboutPage