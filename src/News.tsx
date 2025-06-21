import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";

function NewsPage({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
    const navigate = useNavigate();
    return(
        <Layout onThemeChange={onThemeChange}>
            <div className="page-content">
                <h1>News & Updates</h1>
                <p>Stay up to date with our latest projects, announcements, and articles. We're always working on something new.</p>
                <button onClick={() => navigate('/home')}>Back</button>
            </div>
        </Layout>
    );
}

export default NewsPage; 