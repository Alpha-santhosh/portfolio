import React from 'react'
import CardP from './CardP'

function Projects() {
    const projects = [
        {
            title: 'Netflix Clone App',
            discription: 'This project is a React-based application that uses the Tmdb API to fetch movies and display them in a user-friendly format.',
            gitLink: 'https://github.com/Alpha-santhosh/Netflix-Clone.git',
            liveDemo: 'https://netflix-clone-brown-one.vercel.app/',
            tech: ['React JS', 'react-hook-form', 'react-router-dom', 'Git', 'Github', 'Vercel', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Netflix-Clone/main/src/Img/netflix-signin.jpg',
        },
        {
            title: 'Github Finder App',
            discription: 'The Github Finder is a web application built using HTML5, CSS3, and JavaScript that allows users to search for Github profiles using a Github username.',
            gitLink: 'https://github.com/Alpha-santhosh/Github-Finder-App.git',
            liveDemo: 'https://alpha-santhosh.github.io/Github-Finder-App/',
            tech: ['Javascript', 'Git', 'Github', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Github-Finder-App/main/Github_Finder.png',
        },
        {
            title: 'Password Generator App',
            discription: 'The password generator is a web application developed using React JS that allows users to generate strong and secure passwords.',
            gitLink: 'https://github.com/Alpha-santhosh/Password-Generator-App.git',
            liveDemo: 'https://alpha-santhosh.github.io/Password-Generator-App/',
            tech: ['React JS', 'Git', 'Github', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Password-Generator-App/main/PasswordGenerator.png',
        },
        {
            title: 'Movie Searching App',
            discription: `The movie searching app is a web-based application built using ReactJS that allows users to search for movies by typing in the movie's title.`,
            gitLink: 'https://github.com/Alpha-santhosh/Movie-Searching-App.git',
            liveDemo: 'https://alpha-santhosh.github.io/Movie-Searching-App/',
            tech: ['React JS', 'Git', 'Github', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Movie-Searching-App/main/movie_searching_app.jpg',
        },
        {
            title: 'Organization Lading Page Website',
            discription: `The organization landing page is a web-based application developed using HTML and CSS.`,
            gitLink: 'https://github.com/Alpha-santhosh/Organization-Landing-page.git',
            liveDemo: 'https://alpha-santhosh.github.io/Organization-Landing-page/',
            tech: ['Git', 'Github', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Organization-Landing-page/main/hero-page.jpg',
        },
        {
            title: 'Calculate a weight of an object on a planet',
            discription: `The Calculate a weight of an object on a planetweb page allows users to calculate the weight of an object on different planets in our solar system.`,
            gitLink: 'https://github.com/Alpha-santhosh/Calculate-a-weight-of-an-object-on-a-planet.git',
            liveDemo: 'https://alpha-santhosh.github.io/Calculate-a-weight-of-an-object-on-a-planet/',
            tech: ['Git', 'Github', 'Javascript', 'HTML5', 'CSS3'],
            img_url: 'https://raw.githubusercontent.com/Alpha-santhosh/Calculate-a-weight-of-an-object-on-a-planet/main/home.jpg',
        },
    ]
    return (
        <section id='project' style={{ justifyContent: "flex-start" }}>
            <div className="about_top">
                <h3 className='subheading'> <span>04.</span> Projects</h3>
                <div className="line"></div>
            </div>
            <br /><br />
            <div className="project_container">
                {projects.map((e) => {
                    return <CardP data={e} />
                })}
            </div>
        </section>
    )
}

export default Projects