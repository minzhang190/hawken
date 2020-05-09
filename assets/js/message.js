(function() {
    var message = document.getElementById('message');
    if (!message) {
        return;
    }

    var count = 50;
    var interval = setInterval(() => {
        if (count-- > 0 && (!window.ga || !window.ga.getAll)) {
            console.log('Waiting for window.ga to be available...');
            return;
        }

        clearInterval(interval);

        var trackerId = null;
        if (window.ga && window.ga.getAll) {
            trackerId = ga.getAll().map(tracker => tracker.get('clientId')).filter(x => x).pop();
        }
        if (!trackerId) {
            return;
        }

        fetch('https://hawken-c9ef9.web.app/message/' + trackerId + '.html').then(function(response) {
            if (!response.ok) {
                return;
            }

            response.text().then(function(text) {
                message.hidden = false;
                document.getElementById('message-body').innerHTML = text;
            });
        });
    }, 100);
})();
