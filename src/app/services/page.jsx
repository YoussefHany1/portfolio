import Background from '../../components/background/Background';
import CircularProgress from '../../components/services/CircularProgress';
import WhatIDo from '../../components/services/whatIDo';
import AnimatedContent from '../../animations/AnimatedContent';

function Services() {
    return (
        <div className="mb-42">
            <Background />
            <div className="relative z-10 bg-linear-to-t from-[#101010] to-transparent mt-[98px]">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <CircularProgress />
                </AnimatedContent>
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.3}
                >
                    <WhatIDo />
                </AnimatedContent>
            </div>

        </div>
    );
}
export default Services;