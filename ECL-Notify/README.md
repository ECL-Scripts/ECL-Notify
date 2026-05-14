# DISCORD

https://discord.gg/V3yPtWZK7u

# ECL-Notify

Modern notification & progress UI system for FiveM.

---

# Features

- Modern UI
- Smooth animations
- Progress line
- Custom notification types
- Easy exports
- Lightweight
- Optimized
- Sound On/Off

---

# Installation

1. Drag the resource into your server resources folder

2. Add this to your server.cfg

```cfg
ensure ECL-Notify
```

---

# Client Export

```
exports['ECL-Notify']:Notify({

    type = 'success',

    title = 'Garage',

    message = 'Vehicle stored successfully.',

    duration = 5000
})
```

---

# Server Export

```
exports['ECL-Notify']:Notify(source, {

    type = 'success',

    title = 'Bank',

    message = '$500 deposited.'
})
```

---

# Notification Types

```
success
error
warning
info
```

---

# Support

Discord:
discord.gg/tBkbfATVrz

---

# Created by Eclipse Scripts