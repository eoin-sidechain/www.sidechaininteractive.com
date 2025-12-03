document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('rive-canvas');
    
    // Initialize Rive animation
    // Replace 'your-animation.riv' with the actual path to your Rive file
    const r = new rive.Rive({
        src: 'sidechain_logo_lrg.riv', // Update this path to your actual Rive file
        canvas: canvas,
        autoplay: true,
        loop: true,
        fit: rive.Fit.contain,
        alignment: rive.Alignment.center,
        onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (r) {
            r.resizeDrawingSurfaceToCanvas();
        }
    });
});