document.addEventListener('DOMContentLoaded', () => {
    // Canvas para la animación de cubos
    const canvas = document.getElementById('minecraftCanvas');
    const ctx = canvas.getContext('2d');
    let cubes = [];
    const numCubes = 100;
    const colors = ['#A9D18E', '#D1C28E', '#8EBCD1', '#D18E8E', '#A98ED1']; // Colores inspirados en Minecraft

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createCubes() {
        cubes = [];
        for (let i = 0; i < numCubes; i++) {
            cubes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 5,
                speed: Math.random() * 1 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.1
            });
        }
    }

    function drawCubes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cubes.forEach(cube => {
            ctx.save();
            ctx.translate(cube.x, cube.y);
            ctx.rotate(cube.rotation * Math.PI / 180);
            ctx.fillStyle = cube.color;
            ctx.fillRect(-cube.size / 2, -cube.size / 2, cube.size, cube.size);
            ctx.restore();
        });
    }

    function updateCubes() {
        cubes.forEach(cube => {
            cube.y += cube.speed;
            cube.rotation += cube.rotationSpeed;
            if (cube.y > canvas.height) {
                cube.y = -cube.size;
                cube.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        updateCubes();
        drawCubes();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createCubes();
    animate();
    
    // Lógica para mostrar los formularios
    const forms = {
        server: document.getElementById('serverOrderForm'),
        map: document.getElementById('mapOrderForm'),
        plugin: document.getElementById('pluginOrderForm')
    };
    
    const buttons = {
        server: document.getElementById('showServerFormBtn'),
        map: document.getElementById('showMapFormBtn'),
        plugin: document.getElementById('showPluginFormBtn')
    };

    function showForm(formId) {
        // Oculta todos los formularios primero
        Object.values(forms).forEach(form => {
            form.style.display = 'none';
        });

        // Muestra el formulario correcto y desplaza la vista
        forms[formId].style.display = 'block';
        forms[formId].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    buttons.server.addEventListener('click', () => showForm('server'));
    buttons.map.addEventListener('click', () => showForm('map'));
    buttons.plugin.addEventListener('click', () => showForm('plugin'));
});
