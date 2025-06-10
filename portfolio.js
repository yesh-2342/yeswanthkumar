<!-- Add before </body> in your portfolio.html -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.skill-level').forEach(function(bar) {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
</script>
