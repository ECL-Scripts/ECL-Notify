fx_version 'cerulean'
game 'gta5'

lua54 'yes'

name 'ECL-Notify'
author 'Eclipse Scripts'
description 'Modern Notification System'
version '1.0.0'

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/style.css',
    'ui/app.js',

    'ui/sounds/notify.mp3'
}

shared_script 'config.lua'

client_script 'client/client.lua'
server_script 'server/server.lua'