import bgimg from "../../assets/bg.jpg"
import bgim2 from "../../assets/Eid-2-web-banner4.webp"
const Banner = () => {
    return (
        <div className="hero min-h-screen my-6" style={{ backgroundImage: `url(${bgim2})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Bangladesh</h1>
                    <p className="mb-5">Eid Moments Styled By Bata The crescent moon signals the joyous end of Ramadan and the much-anticipated arrival of Eid ul-Fitr! It's a time for feasting, family reunions, meeting up with friends, and most of all, dressing the absolute.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;