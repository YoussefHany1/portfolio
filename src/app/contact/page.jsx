import ContactComponents from "../../components/home/Contact/Contact";
import Background from "../../components/background/Background";
import AnimatedContent from '../../animations/AnimatedContent'

// Main Component
function Contact() {

    return (
        <>
            <Background />
            <div className="relative z-10 h-[calc(100vh-98px)] bg-linear-to-t from-[#101010] to-transparent mt-[98px] pt-1 px-4">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <ContactComponents />
                </AnimatedContent>
            </div>
        </>
    );
}

export default Contact;
