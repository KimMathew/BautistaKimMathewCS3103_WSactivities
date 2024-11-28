document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs'); // Get the tabs container

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(category).classList.add('active');

            // Update body background color
            document.body.className = `${category}-bg`;

            // Update tabs background color
            tabsContainer.className = `tabs ${category}-tabs-bg`;
        });
    });

    // Set initial background color for body and tabs
    document.body.className = 'basic-info-bg';
    tabsContainer.className = 'tabs basic-info-tabs-bg';
});
