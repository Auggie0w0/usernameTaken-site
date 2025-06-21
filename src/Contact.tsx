import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";

function ContactPage({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
    const navigate = useNavigate();
    return(
        <Layout onThemeChange={onThemeChange}>
            <div className="page-content">
                <h1>Contact Us</h1>
                <p>Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together.</p>
                <button onClick={() => navigate('/home')}>Back</button>
            </div>
        </Layout>
    );
}

export default ContactPage; 