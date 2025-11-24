/// Very basic eyes cycling (scoped to avoid global var collisions)
const eyesDisp = document.getElementById('eyes-display');
if (eyesDisp) {
    const eyesImages = Array.from(eyesDisp.getElementsByTagName('img'));
    if (eyesImages.length > 0) {
        let eyesIndex = 0;
        // toggle-style function: pass 'next' or 'prev'
        function toggleEyes(dir) {
            if (dir === 'next') eyesIndex = eyesIndex + 1;
            else if (dir === 'prev') eyesIndex = eyesIndex - 1;

            if (eyesIndex < 0) eyesIndex = eyesImages.length - 1;
            if (eyesIndex >= eyesImages.length) eyesIndex = 0;

            eyesImages.forEach(img => img.style.display = 'none');
            eyesImages[eyesIndex].style.display = 'block';
        }

        const eyesPrev = document.querySelector('.control-group[data-feature="eyes"] [data-direction="prev"]');
        const eyesNext = document.querySelector('.control-group[data-feature="eyes"] [data-direction="next"]');

        if (eyesPrev) eyesPrev.onclick = function () { toggleEyes('prev'); };
        if (eyesNext) eyesNext.onclick = function () { toggleEyes('next'); };

        // show first
        toggleEyes('next');
    }
}

// Nose cycling (separate scope/state)
const noseDisp = document.getElementById('nose-display');
if (noseDisp) {
    const noseImages = Array.from(noseDisp.getElementsByTagName('img'));
    if (noseImages.length > 0) {
        let noseIndex = 0;
        function toggleNose(dir) {
            if (dir === 'next') noseIndex = noseIndex + 1;
            else if (dir === 'prev') noseIndex = noseIndex - 1;

            if (noseIndex < 0) noseIndex = noseImages.length - 1;
            if (noseIndex >= noseImages.length) noseIndex = 0;

            noseImages.forEach(img => img.style.display = 'none');
            noseImages[noseIndex].style.display = 'block';
        }

        const nosePrev = document.querySelector('.control-group[data-feature="nose"] [data-direction="prev"]');
        const noseNext = document.querySelector('.control-group[data-feature="nose"] [data-direction="next"]');

        if (nosePrev) nosePrev.onclick = function () { toggleNose('prev'); };
        if (noseNext) noseNext.onclick = function () { toggleNose('next'); };

        // show first
        toggleNose('next');
    }
}