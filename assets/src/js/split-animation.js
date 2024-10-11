import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);

function setupSplits(targetElement) {
    gsap.utils.toArray(targetElement).forEach(el => {
        Splitting({ target: el });
        // });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const allHeadings = document.querySelectorAll('.split-text');
    if (allHeadings) {
        allHeadings.forEach(heading => {
            Splitting({ target: heading });
        });
    }

    const wpHeading = document.querySelectorAll('.wp-block-heading');
    if (wpHeading) {
        wpHeading.forEach(heading => {
            // scrollTrigger animation
            setupSplits(heading);
        }
        );
    }
});
