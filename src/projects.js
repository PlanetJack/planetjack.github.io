'use strict'

// Team Project & Personal Project Filtering
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;

    // 여백이 클릭 되었을 때 필터가 출력되지 않는다.
    if(filter == null) {
        return;
    }
    handleActivSelection(event.target);
    filterProjects(filter);
});



function handleActivSelection(target) {
    // Active 메뉴를 재설정 (⚠ querySelector 안에서만 . 를 사용한다.)
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected');
}


function filterProjects(filter) {
    // 프로젝트를 필터링 해주는 로직
    projects.forEach((project) => {
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    // 프로젝트 버튼을 클릭했을때 애니메이션 효과가 나는 부분
    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}
