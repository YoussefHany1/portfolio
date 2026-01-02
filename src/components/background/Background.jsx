
function Background() {
    return (
        <video
            // تم الحفاظ على نفس التنسيقات (opacity, z-index, absolute)
            // أضفنا object-cover لضمان تغطية الفيديو للشاشة بالكامل دون تشويه
            className='absolute z-[-1] inset-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
        >
            {/* قم بتغيير المسار أدناه لاسم ملف الفيديو الخاص بك الموجود في مجلد public */}
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Background;