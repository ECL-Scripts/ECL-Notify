const notificationQueue = [];

let activeNotifications = 0;

let maxNotifications = 4;

let notifyPosition = 'top-right';

let soundEnabled = true;

const sounds = {

    success: new Audio('./sounds/notify.mp3'),

    error: new Audio('./sounds/notify.mp3'),

    warning: new Audio('./sounds/notify.mp3'),

    info: new Audio('./sounds/notify.mp3')

};

window.addEventListener('message', function(event) {

    const data = event.data;

    // RECEIVE CONFIG

    if (data.action === 'setup') {

        maxNotifications = data.config.maxNotifications;

        notifyPosition = data.config.position;

        soundEnabled = data.config.sound;

        updatePosition();

        return;
    }

    // RECEIVE NOTIFICATIONS

    if (data.action === 'notify') {

        addToQueue(data);

    }

});

function addToQueue(data) {

    notificationQueue.push(data);

    processQueue();

}

function processQueue() {

    if (activeNotifications >= maxNotifications) return;

    if (notificationQueue.length <= 0) return;

    const data = notificationQueue.shift();

    createNotification(data);

}

function createNotification(data) {

    activeNotifications++;

    playSound(data.type);

    const container = document.getElementById('notify-container');

    const notify = document.createElement('div');

    notify.classList.add('notification');

    const color = getColor(data.type);

    const icon = getIcon(data.type);

    notify.innerHTML = `

        <div class="notify-icon"
             style="
                background: ${color}20;
                color: ${color};
                box-shadow: 0 0 15px ${color}30;
             ">
             ${icon}
        </div>

        <div class="notify-content">

            <div class="notify-title">
                ${data.title}
            </div>

            <div class="notify-message">
                ${data.message}
            </div>

        </div>

        <div class="notify-progress"
             style="
                background: ${color};
                animation: progress ${data.duration}ms linear;
             ">
        </div>
    `;

    container.appendChild(notify);

    setTimeout(() => {

        notify.classList.add('notify-out');

        setTimeout(() => {

            notify.remove();

            activeNotifications--;

            processQueue();

        }, 300)

    }, data.duration);

}

function getColor(type) {

    switch(type) {

        case 'success':
            return '#7dffb3';

        case 'error':
            return '#ff6b6b';

        case 'warning':
            return '#ffd166';

        default:
            return '#7aaeff';
    }

}

function getIcon(type) {

    switch(type) {

        case 'success':
            return '✓';

        case 'error':
            return '✕';

        case 'warning':
            return '!';

        default:
            return 'i';
    }

}

function playSound(type) {

    if (!soundEnabled) return;

    if (!sounds[type]) return;

    sounds[type].volume = 0.10;

    sounds[type].currentTime = 0;

    sounds[type].play().catch(() => {});
}

function updatePosition() {

    const container = document.getElementById('notify-container');

    container.style.top = '';
    container.style.bottom = '';
    container.style.left = '';
    container.style.right = '';
    container.style.transform = '';

    switch(notifyPosition) {

        case 'top-left':

            container.style.top = '2rem';
            container.style.left = '2rem';

        break;

        case 'bottom-right':

            container.style.bottom = '2rem';
            container.style.right = '2rem';

        break;

        case 'bottom-left':

            container.style.bottom = '2rem';
            container.style.left = '2rem';

        break;

        case 'top-center':

            container.style.top = '2rem';
            container.style.left = '50%';
            container.style.transform = 'translateX(-50%)';

        break;

        default:

            container.style.top = '2rem';
            container.style.right = '2rem';

        break;
    }

}

const style = document.createElement('style');

style.innerHTML = `

@keyframes progress {

    from {
        transform: scaleX(1);
    }

    to {
        transform: scaleX(0);
    }

}
`;

document.head.appendChild(style);