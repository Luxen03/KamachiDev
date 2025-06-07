import { useEffect, useState } from 'react'
import { Divider, PanelList } from '../templates/Elements.tsx'

function Home() {
    const [roleIndex, setRoleIndex] = useState(0)
    const role_list = [
        'machine learning engineer',
        'full stack developer',
        'unity developer',
        '3d artist'
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % role_list.length);
        }, 1000);
        return () => clearInterval(interval);
    })
    const summary: [React.ReactElement, string][] = [
        [<>
            <h1>Education</h1>
            <ul>
                <li>Preschool : Agustinan School of Cabuyao</li>
                <li>Elementary : Dominican Colleges of Laguna</li>
                <li>Junior High : Dominican Colleges of Laguna</li>
                <li>Senior High : Mapua Malayan Colleges of Laguna</li>
                <li>College : Mapua Malayan Colleges of Laguna</li>
            </ul>
        </>, ''],
        [<>
            <h1>Skills</h1 >
            <ul>
                <li>Front End : HTML, CSS, React, Typescript</li>
                <li>Back End : PHP, ASPX</li>
                <li>Game Dev : C#</li>
                <li>Data Analytics : Python</li>
                <li>Database : SQL</li>
            </ul>
        </>, ''],
        [<>
            <h1>Projects</h1>
            <ul>
                <li>Soft Eng : Facial Recognition based Attendance tracking</li>
                <li>Thesis : Undecided</li>
            </ul>
        </>, '']
    ]
    return (
        <>
            <section className="video-section">
                <div className="info">
                    <h1>Hello!</h1>
                    <h2>My name is Kamachi</h2>
                    <p id="roles">a {role_list[roleIndex]}</p>
                </div>
                <div className="video-container">
                    <video src="/public/assets/videos/Montage.mp4" autoPlay loop muted></video>
                </div>
            </section>
            <Divider />
            <section>
                <h1>Summary</h1>
                <PanelList items={summary} />
            </section>
            <p>For more information, please visit the other pages</p>
        </>
    )
}

export default Home