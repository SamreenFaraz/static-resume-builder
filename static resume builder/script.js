// Toggle the display of each section's content based on its ID
function toggleSection(sectionId) {
    var content = document.querySelector("#".concat(sectionId, " .content"));
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}
// Set initial state to hide all sections' content on page load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.content').forEach(function (content) {
        content.style.display = 'none';
    });
});
