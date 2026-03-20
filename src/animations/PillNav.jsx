"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const PillNav = ({
    items,
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = 'var(--primary)',
    pillColor = 'transparent',
    hoveredPillTextColor = '#000',
    pillTextColor = '#fff',
    onItemClick
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const circleRefs = useRef([]);
    const tlRefs = useRef([]);
    const activeTweenRefs = useRef([]);
    const navItemsRef = useRef(null);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach((circle, i) => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector('.pill-label');
                const white = pill.querySelector('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                tlRefs.current[i]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[i] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts?.ready) {
            document.fonts.ready.then(layout).catch(() => { });
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease]);

    const hoverIn = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const hoverOut = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const isExternalLink = href =>
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#');

    const isRouterLink = href => href && !isExternalLink(href);

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor,
        ['--pill-pad-x']: '18px',
        ['--pill-gap']: '5px'
    };

    return (
        <ul
            ref={navItemsRef}
            className={`flex flex-col lg:flex-row ${className}`}
            style={cssVars}
        >
            {items.map((item, i) => {
                const isActive = activeHref === item.href;

                const pillStyle = {
                    background: 'var(--pill-bg, transparent)',
                    color: 'var(--pill-text, #fff)',
                };

                const PillContent = (
                    <>
                        <span
                            className="hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                            style={{
                                background: 'var(--base, var(--primary))',
                                willChange: 'transform'
                            }}
                            aria-hidden="true"
                            ref={el => {
                                circleRefs.current[i] = el;
                            }}
                        />
                        <span className="label-stack relative inline-block leading-none z-2">
                            <span
                                className="pill-label relative z-2 inline-block leading-none"
                                style={{ willChange: 'transform' }}
                            >
                                {item.label}
                            </span>
                            <span
                                className="pill-label-hover absolute left-0 top-0 z-3 inline-block font-bold"
                                style={{
                                    color: 'var(--hover-text, #000)',
                                    willChange: 'transform, opacity'
                                }}
                                aria-hidden="true"
                            >
                                {item.label}
                            </span>
                        </span>
                        {isActive && (
                            <span
                                className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-4"
                                style={{ background: 'var(--base, var(--primary))' }}
                                aria-hidden="true"
                            />
                        )}
                    </>
                );

                const basePillClasses =
                    'relative overflow-hidden inline-flex rounded-lg transition-all duration-200 ease-in-out lg:hover:shadow-[0_0_20px_var(--primary)] fw-semibold text-2xl uppercase py-4 lg:px-6 lg:py-3';

                return (
                    <li key={item.href} role="none">
                        {isRouterLink(item.href) ? (
                            <Link
                                role="menuitem"
                                href={item.href}
                                className={basePillClasses}
                                style={pillStyle}
                                aria-label={item.ariaLabel || item.label}
                                onMouseEnter={() => hoverIn(i)}
                                onMouseLeave={() => hoverOut(i)}
                                onClick={onItemClick}
                            >
                                {PillContent}
                            </Link>
                        ) : (
                            <a
                                role="menuitem"
                                href={item.href}
                                className={basePillClasses}
                                style={pillStyle}
                                aria-label={item.ariaLabel || item.label}
                                onMouseEnter={() => hoverIn(i)}
                                onMouseLeave={() => hoverOut(i)}
                                onClick={onItemClick}
                            >
                                {PillContent}
                            </a>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default PillNav;
