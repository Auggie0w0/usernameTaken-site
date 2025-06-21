import { useNavigate } from "react-router-dom";
import ThemeChanger from "./components/ThemeChanger";

function AboutPage({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
    const navigate = useNavigate();

    const teamMembers = [
        { name: 'Alex', link: '#', img: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Maria', link: '#', img: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Sam', link: '#', img: 'https://i.pravatar.cc/150?img=3' },
        { name: 'Jordan', link: '#', img: 'https://i.pravatar.cc/150?img=4' },
        { name: 'Taylor', link: '#', img: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Casey', link: '#', img: 'https://i.pravatar.cc/150?img=6' },
        { name: 'Drew', link: '#', img: 'https://i.pravatar.cc/150?img=7' },
        { name: 'Riley', link: '#', img: 'https://i.pravatar.cc/150?img=8' },
        { name: 'Jessie', link: '#', img: 'https://i.pravatar.cc/150?img=9' },
        { name: 'Morgan', link: '#', img: 'https://i.pravatar.cc/150?img=10' },
      ];

    return(
        <div className="about-page-container">
            <div className="about-header">
                <h1>Meet the Team</h1>
                <button onClick={() => navigate('/home')}>Back</button>
            </div>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <a href={member.link} key={member.name} className="team-member">
                        <div className="team-member-circle" style={{ backgroundImage: `url(${member.img})` }}></div>
                        <p className="team-member-name">{member.name}</p>
                    </a>
                ))}
            </div>
            <ThemeChanger onThemeChange={onThemeChange} />
        </div>
    );
}

export default AboutPage; 