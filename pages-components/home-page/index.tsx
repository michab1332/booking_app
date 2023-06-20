import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import Contact from "./Contact";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <GallerySection />
            <BookingSection />
            <Contact />
        </>
    );
}

export default HomePage;