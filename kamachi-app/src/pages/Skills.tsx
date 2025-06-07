import { PanelList } from "../templates/Elements"

function Skills() {
    const frontend: [React.ReactElement, string][] = [
        [<>
            <h1>HTML</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, ''],
        [<>
            <h1>CSS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, ''],
        [<>
            <h1>Javascript</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, ''],
        [<>
            <h1>Typescript</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, '']
    ]
    const backend: [React.ReactElement, string][] = [
        [<>
            <h1>PHP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, '']
    ]
    const db: [React.ReactElement, string][] = [
        [<>
            <h1>SQL</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, '']
    ]
    const lib: [React.ReactElement, string][] = [
        [<>
            <h1>React</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>, '']
    ]
    return (
        <>
            <section>
                <h1>Front End</h1>
                <PanelList items={frontend} />
            </section>
            <section>
                <h1>Back End</h1>
                <PanelList items={backend} />
            </section>
            <section>
                <h1>Database</h1>
                <PanelList items={db} />
            </section>
            <section>
                <h1>Library</h1>
                <PanelList items={lib} />
            </section>
        </>
    )
}
export default Skills