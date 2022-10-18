import utils from './utils';

class FullScreen {
    constructor(player) {
        this.player = player;
        this.lastScrollPosition = { left: 0, top: 0 };
        this.player.events.on('webfullscreen', () => {
            this.player.resize();
        });
        this.player.events.on('webfullscreen_cancel', () => {
            this.player.resize();
            utils.setScrollPosition(this.lastScrollPosition);
        });
    }

    isFullScreen(type = 'browser') {
        switch (type) {
            case 'browser':
                return document.body.classList.contains('fullscreen-tauri');
            case 'web':
                return this.player.container.classList.contains('dplayer-fulled');
        }
    }

    request(type = 'browser') {
        this.player.container.classList.add('dplayer-fulled');
        switch (type) {
            case 'browser':
                document.body.classList.add('dplayer-web-fullscreen-fix', 'fullscreen-tauri');
                this.player.events.trigger('fullscreen');
                break;
            case 'web':
                document.body.classList.add('dplayer-web-fullscreen-fix');
                this.player.events.trigger('webfullscreen');
                break;
        }
    }

    cancel(type = 'browser') {
        this.player.container.classList.remove('dplayer-fulled');

        switch (type) {
            case 'browser':
                document.body.classList.remove('dplayer-web-fullscreen-fix', 'fullscreen-tauri');
                this.player.events.trigger('fullscreen_cancel');
                break;
            case 'web':
                document.body.classList.remove('dplayer-web-fullscreen-fix');
                this.player.events.trigger('webfullscreen_cancel');
                break;
        }
    }

    toggle(type = 'browser') {
        if (this.isFullScreen(type)) {
            this.cancel(type);
        } else {
            this.request(type);
        }
    }

    destroy() {}
}

export default FullScreen;
