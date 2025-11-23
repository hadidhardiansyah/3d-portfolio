import {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current];

        gsap.fromTo(
            title1Ref.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: title1Ref.current,
                    start: "top bottom-=100"
                }
            }
        );

        gsap.fromTo(
            title2Ref.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: project3Ref.current,
                    start: "top center"
                }
            }
        );

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        );
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold mb-6 flex justify-center" ref={title1Ref}>IOS Projects</h2>
                    <div className="showcaselayout">
                        {/*    LEFT */}
                        <div className="first-project-wrapper" ref={project1Ref}>
                            <div className="image-wrapper">
                                <img
                                    src="/images/crypto-app-project.png"
                                    alt="Crypto App Project"
                                />
                            </div>
                            <div className="text-content">
                                <h2>Crypto tracker apps help you monitor cryptocurrency prices, track portfolio performance,
                                    and manage investments across various exchanges and wallets.</h2>
                                <p className="text-white-50 md:text-xl">An app build with SwiftUI and the cryptocurrency
                                    data that is used in this app comes from a free API from CoinGecko! Prices may be
                                    slightly delayed</p>
                            </div>
                        </div>

                        {/*    RIGHT */}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#eeeeee]">
                                    <img
                                        src="/images/maps-app-project.png"
                                        alt="Map App Project"
                                    />
                                </div>
                                <h2>Simple Static Maps Swift UI</h2>
                            </div>

                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-[#eeeeee]">
                                    <img
                                        src="/images/todolist-app-project.png"
                                        alt="Todolist App Project"
                                    />
                                </div>
                                <h2>Simple To Do List Swift UI</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold mb-6 flex justify-center" ref={title2Ref}>Website Projects</h2>
                    <div className="showcaselayout">
                        <div className="first-project-wrapper" ref={project4Ref}>
                            <div className="image-wrapper h-80 bg-[#eeeeee]">
                                <img
                                    src="/images/foodstall-app-project.png"
                                    alt="Foods Management App Project"
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-content">
                                <h2>Food stall management apps help you process orders, track inventory, and analyze sales across various stalls..</h2>
                                <p className="text-white-50 md:text-xl">Built both frontend UI using React TypeScript and backend API for managing food items in a stall, including the ability to Create, Get, and Delete food, restaurant, etc. The technologies used are React TypeScript, Java, Spring Boot, MySQL. Used Spring Boot for the API and MySQL for database management.</p>
                            </div>
                        </div>
                        <div className="first-project-wrapper" ref={project5Ref}>
                            <div className="image-wrapper h-80 bg-[#eeeeee]">
                                <img
                                    src="/images/fitness-app-project.png"
                                    alt="Fitness App Project"
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-content">
                                <h2>A fitness website profile provides comprehensive information about available workout programs, fitness classes, and personal trainer services.</h2>
                                <p className="text-white-50 md:text-xl">Building a Fitness App. For the frontend, using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll with Responsive page. The technologies used are React TypeScript, Vite, React Hooks, Tailwind CSS, Framer Motion, React Anchor Link Smooth Scroll.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
