const visualizationBtn = document.querySelector('.btn');
const visualizationPanel = document.querySelector('.modal-shadow');
const exitBtn = document.querySelector('.fa-xmark');

const showVisualizationPanel = () => {
    if (visualizationPanel.style.display === 'none') {
        visualizationPanel.style.display = 'flex';
    }else {
        visualizationPanel.style.display = 'none';
    }
}

visualizationBtn.addEventListener('click', showVisualizationPanel)
exitBtn.addEventListener('click', showVisualizationPanel)

window.addEventListener('click', e => e.target === visualizationPanel ? showVisualizationPanel() : false);
