import { memo } from "react";

const PROGRESS_ITEMS = [
    { id: 'performance', label: 'Performance', score: 100 },
    { id: 'accessibility', label: 'Accessibility', score: 100 },
    { id: 'best-practices', label: 'Best Practices', score: 100, customClass: 'leading-6' },
    { id: 'seo', label: 'SEO', score: 100 }
];

const ProgressCircle = memo(function ProgressCircle({ label, score, customClass = "" }) {
    return (
        <div className='relative mb-5 lg:mt-0 w-34 h-34 flex items-center justify-center flex-col'>
            <div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r="40"
                        fill="transparent"
                        strokeWidth="6"
                    ></circle>

                    <circle
                        cx="50" cy="50" r="40"
                        fill="transparent"
                        className="stroke-(--primary) animate-progress"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        strokeDashoffset="25.12"
                    ></circle>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-(--primary) opacity-0 animate-opacity">{score}</span>
                </div>
                <p className={`text-2xl font-bold text-(--primary) text-center opacity-0 animate-opacity ${customClass}`}>{label}</p>
            </div>
        </div>
    );
});

function CircularProgress() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-10 mb-20">
            {PROGRESS_ITEMS.map((item) => (
                <ProgressCircle key={item.id} {...item} />
            ))}
        </div>
    );
}

export default CircularProgress;