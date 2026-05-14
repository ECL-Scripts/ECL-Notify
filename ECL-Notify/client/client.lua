CreateThread(function()

    Wait(500)

    SendNUIMessage({

        action = 'setup',

        config = {

            maxNotifications = Config.MaxNotifications,

            position = Config.Position,

            sound = Config.Sound
        }
    })

end)

local function SendNotify(data)

    SendNUIMessage({

        action = 'notify',

        type = data.type or 'info',

        title = data.title or 'Notification',

        message = data.message or 'No message.',

        duration = data.duration or Config.DefaultDuration
    })

end

RegisterNetEvent('ecl:notify', function(data)
    SendNotify(data)
end)

exports('Notify', function(data)
    SendNotify(data)
end)

-- TEST COMMAND

--[[ RegisterCommand('testnotify', function()

    exports['ECL-Notify']:Notify({

        type = 'success',

        title = 'Eclipse Scripts',

        message = 'Modern UI loaded successfully.',

        duration = 5000
    })

end) ]]