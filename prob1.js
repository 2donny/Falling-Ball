//Step 1
TIME_INTERVAL = 10; 
RADIUS = 20;
PANEL_HEIGHT = 450;
GRAV_ACCEL = 640;

//Step 2
const getRandomColor = () => { 
    const r = parseInt(Math.random() * 255)
    const g = parseInt(Math.random() * 255)
    const b = parseInt(Math.random() * 255)
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

//Step 3
const getHeight = (height, time) => {
    
    return height - 0.5 * GRAV_ACCEL * time * time; 
};

//Step 4
const createNewBall = (x, y) => {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');

    const randColor = getRandomColor();
    newBall.style.borderColor = randColor;

    newBall.style.left = -RADIUS + x + "px";
    newBall.style.bottom = -RADIUS + y + "px";

    document.getElementById('panel').appendChild(newBall);
    return newBall; //와 이거 안써줘서 무한 루프 도는거였어,,,
};

//Step 5
document.getElementById('panel').addEventListener('click', function (event) {
    const panel = this;
    const initial_height = PANEL_HEIGHT - event.offsetY;
    const BallEL = createNewBall(event.offsetX, initial_height);
    
    let time = 0;
    const loopid = setInterval(() => {
        time += TIME_INTERVAL / 1000;
        const height = getHeight(initial_height, time);
        BallEL.style.bottom = height - RADIUS + "px";
        
        if(height < RADIUS) {
            panel.removeChild(BallEL);
            clearInterval(loopid);
        }
    }, TIME_INTERVAL);

});