
function toggleInfo() {
    const arrow = document.getElementById('arrow');
    const moreInfoText = document.querySelector('.more-info-text');
    const hideInfoText = document.querySelector('.hide-info-text');
    const moreInfoPanel = document.querySelector('.more-info-panel');

    if (moreInfoPanel.style.display === 'none') {
        arrow.style.transform = 'rotate(180deg)';
        moreInfoText.style.display = 'none';
        hideInfoText.style.display = 'block';
        moreInfoPanel.style.display = 'flex';
        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');
    } else {
        arrow.style.transform = 'rotate(0deg)';
        moreInfoText.style.display = 'block';
        hideInfoText.style.display = 'none';
        moreInfoPanel.style.display = 'none';
        arrow.querySelector('path').setAttribute('fill', '#0079F0');
    }
}

function toggleInfoSecond() {
    const arrow = document.getElementById('arrow2');
    const moreInfoText = document.querySelector('.more-info-text2');
    const hideInfoText = document.querySelector('.hide-info-text2');
    const moreInfoPanel = document.querySelector('.more-info-panel2');

    if (moreInfoPanel.style.display === 'none') {
        arrow.style.transform = 'rotate(180deg)';
        moreInfoText.style.display = 'none';
        hideInfoText.style.display = 'block';
        moreInfoPanel.style.display = 'flex';
        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');
    } else {
        arrow.style.transform = 'rotate(0deg)';
        moreInfoText.style.display = 'block';
        hideInfoText.style.display = 'none';
        moreInfoPanel.style.display = 'none';
        arrow.querySelector('path').setAttribute('fill', '#0079F0');
    }
}

function toggleInfoThird() {
    const arrow = document.getElementById('arrow3');
    const moreInfoText = document.querySelector('.more-info-text3');
    const hideInfoText = document.querySelector('.hide-info-text3');
    const moreInfoPanel = document.querySelector('.more-info-panel3');

    if (moreInfoPanel.style.display === 'none') {
        arrow.style.transform = 'rotate(180deg)';
        moreInfoText.style.display = 'none';
        hideInfoText.style.display = 'block';
        moreInfoPanel.style.display = 'flex';
        arrow.querySelector('path').setAttribute('fill', '#A6AAC3');
    } else {
        arrow.style.transform = 'rotate(0deg)';
        moreInfoText.style.display = 'block';
        hideInfoText.style.display = 'none';
        moreInfoPanel.style.display = 'none';
        arrow.querySelector('path').setAttribute('fill', '#0079F0');
    }
}
