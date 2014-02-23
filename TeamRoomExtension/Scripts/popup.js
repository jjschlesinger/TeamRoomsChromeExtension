$(document).ready(function () {
    var messageCount = 0;

    $.getJSON("https://defiantcode.visualstudio.com/DefaultCollection/_apis/chat/rooms/13/messages", {}, function (data) {
        messageCount = data.count;
        $("#main").text("There are " + data.count + " messages in this room");

        var notification = webkitNotifications.createNotification('', 'Team Room', 'There are ' + data.count + ' messages in this room');

        // Then show the notification.
        notification.show();
    });
});