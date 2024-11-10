// Toggle the display of each section's content based on its ID
function toggleSection(sectionId: string): void {
    const content = document.querySelector(`#${sectionId} .content`) as HTMLElement;
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}

// Set initial state to hide all sections' content on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content').forEach(content => {
        (content as HTMLElement).style.display = 'none';
    });
});
