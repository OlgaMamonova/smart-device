const showMore = () => {
  const showMoreButton = document.querySelector('.about__button');
  const aboutSection = document.querySelector('.about__wrapper');

  if (!showMoreButton) {
    return;
  } else {
    aboutSection.classList.remove('about__wrapper--no-js');

    const hideAddedText = () => {
      aboutSection.classList.remove('about__wrapper-added-text');
      showMoreButton.textContent = 'Подробнее';
      showMoreButton.removeEventListener('click', hideAddedText);
    };

    const onShowMoreButtonClick = () => {
      aboutSection.classList.add('about__wrapper-added-text');
      showMoreButton.textContent = 'Свернуть';
      showMoreButton.addEventListener('click', hideAddedText);
    };

    showMoreButton.addEventListener('click', onShowMoreButtonClick);
  }
};

export {showMore};
