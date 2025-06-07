import './Elements.css'

interface NavParam {
    items: string[][]
}
interface PanelParam {
    items: [React.ReactElement, string][]
}

export function Navigation({ items }: NavParam) {
    return (
        <nav>
            <ul className='rainbow-border'>
                {items.map(([label, link]) =>
                    <li className='fade_in'>
                        <div><a href={link}>{label}</a></div>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export function PanelList({ items }: PanelParam) {
    return (
        <ul className='rainbow-border'>
            {items.map(([html, link]) =>
                <li className='fade_in'>
                    <div className='panel'><a href={link}>{html}</a></div>
                </li>
            )}
        </ul>
    )
}

export function Divider() {
    return <div className='divider'></div>
}

export default Navigation