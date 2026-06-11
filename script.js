const scenes = document.querySelectorAll('.scene');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progress');

let currentSceneIndex = 0;

function updatePresentation() {
    // Show/Hide Active Scene
    scenes.forEach((scene, index) => {
        if (index === currentSceneIndex) {
            scene.classList.add('active');
        } else {
            scene.classList.remove('active');
        }
    });

    // Update Buttons State
    prevBtn.disabled = currentSceneIndex === 0;
    
    if (currentSceneIndex === scenes.length - 1) {
        nextBtn.textContent = "Finish 🚀";
    } else {
        nextBtn.textContent = "Next Scene";
    }

    // Update Progression Bar
    const progressPercentage = ((currentSceneIndex + 1) / scenes.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

nextBtn.addEventListener('click', () => {
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updatePresentation();
    } else {
        alert("This presentation is a perfect example of modern frontend interaction. You are ready! Start recording and speaking!");
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSceneIndex > 0) {
        currentSceneIndex--;
        updatePresentation();
    }
});

// Arrow Key Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight" && currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updatePresentation();
    } else if (e.key === "ArrowLeft" && currentSceneIndex > 0) {
        currentSceneIndex--;
        updatePresentation();
    }
});