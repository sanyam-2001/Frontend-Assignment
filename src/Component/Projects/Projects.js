import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
const ProjectList = [
    {
        src:'https://ueno.co/static/6aaadd9ae00abb7450ff868e7cd1c1b3/e7405/02be3ae3-c281-47ca-b8f1-e8a29a5cf474_dorsia_casestudy_hero.webp',
        title:'Dorsia',
        subTitle:'Branding, Product, Marketing'
    },
    {
        src:'https://ueno.co/static/e28e0e34acc9e67279406d1604fbf8d2/8fc1f/af5a8967-cf90-46f0-b241-5537faeda98f_reuters-news-app-home.webp',
        title:'Reuters News App',
        subTitle:'Design, Product'
    },
    {
        src:'https://ueno.co/static/66e23e8d5a46f6cfd8bc28aaebe3b81f/8fc1f/90594130-e628-4097-a7a4-53c62a9ad61a_espn-thumb.webp',
        title:'ESPN Body Issue',
        subTitle:'Branding, Marketing'
    },
    {
        src: 'https://ueno.co/static/5038419186136bcececcf44c09df777a/8fc1f/fa4cfb00-b4bc-497c-8691-b6187f3affce_lonelyplanet_hero.webp',
        title: 'Lonely Planet',
        subTitle: 'Development, Product'
    },
    {
        src:'https://ueno.co/static/4a8222b171e682312a7771e9e51ff1d7/8fc1f/668f801c-fad1-465e-a023-9b83348aa070_clearmotion-grid.webp',
        title: 'Clear Motion',
        subTitle: 'Branding, Product, Marketing'
    },
    {
        src: 'https://ueno.co/static/fb65a052c22192a5ab78fd2c84798325/8fc1f/798efde1-7b06-4d72-93fb-d98a45ea64e3_redbull.webp',
        title: 'Red Bull TV',
        subTitle: 'Development, Product'
    },
    {
        src:'https://ueno.co/static/6de8d4d5c9c9553938c4b4aa1a589b98/8fc1f/53f3f30d-b24d-4da9-ad4d-96cdf8c6292b_dropdbox-guide.webp',
        title: 'Dropbox Guide',
        subTitle: 'Development, Marketing'
    },
    {
        src:'https://ueno.co/static/2fa64aeba6c76d13d61a1f6e6c810286/8fc1f/6805d3d5-174a-4355-8265-a4446e971882_copper-image.webp',
        title: 'Copper',
        subTitle: 'Design, Branding, Marketing'
    },
    {
        src: 'https://ueno.co/static/da4eb8d9f3845cb563400f68d440d1bd/8fc1f/d3a97c0e-446e-49f7-aa2e-b0187a813c5f_santatracker.webp',
        title: 'Google Santa Tracker',
        subTitle: 'Development, Branding, Product, Marketing'
    },
    {
        src: 'https://ueno.co/static/b6fbef506b1a46b67d12ccc60c076470/8fc1f/30a872c9-ec6d-4da8-a40e-cf597409cb05_Cowboy1200x1200.webp',
        title: 'Cowboy',
        subTitle: 'Design, Branding'
    }

]
const Projects = () => {
    const ProjectlistItems = ProjectList.map((m, i)=> <ProjectItem src={m.src} title={m.title} subTitle={m.subTitle} key={i} index={i} />)
    return ( 
        <div className="projectsContainer">
            {ProjectlistItems}
        </div>
     );
}
 
export default Projects;