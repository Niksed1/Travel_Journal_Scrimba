import globe from '../lib/Globe.png';
export default function Header() {
    return (
        <header>
            <img src={globe} alt="Globe"/>
            <h1>my travel journal.</h1>
        </header>
    )
}