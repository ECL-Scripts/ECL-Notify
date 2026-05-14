local function SendNotification(target, data)

    TriggerClientEvent('ecl:notify', target, {

        type = data.type or 'info',

        title = data.title or 'Notification',

        message = data.message or 'No message.',

        duration = data.duration or Config.DefaultDuration
    })

end

-- SERVER EXPORT

exports('Notify', function(target, data)

    SendNotification(target, data)

end)

-- SERVER EVENT

RegisterNetEvent('ecl:server:notify', function(target, data)

    SendNotification(target, data)

end)

-- TEST COMMAND

--[[ RegisterCommand('testnotifyserver', function(source)

    SendNotification(source, {

        type = 'success',

        title = 'Eclipse Scripts',

        message = 'Server-side notification works.',

        duration = 5000
    })

end) ]]