import Header from "../components/Header";
import MeetTheHost from "../components/MeetTheHost";
import NavBar from "../components/NavBar";
import WelcomeSection from "../components/WelcomeSection";
import Episode from "../components/Episodes";
import "./../scss/main.scss";
import WhyListenUs from "../components/WhyListenUs";
import Footer from "../components/Footer";

function Home() {
    return (
    <>
        <div className="home-wrapper">
            <NavBar />
            <Header />
            <WelcomeSection />
            <Episode />
            <MeetTheHost />
            <WhyListenUs />
            <Footer />
        </div>
    </>
    );
}

export default Home;