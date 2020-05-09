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

        var documents = (id) => {
            fetch('https://hawken-c9ef9.web.app/document/' + trackerId + '.' + id + '.pdf', {
                method: 'HEAD'
            }).then(function(response) {
                if (!response.ok) {
                    return;
                }

                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = response.url;
                a.innerText = 'Document ' + (id + 1);
                li.appendChild(a);
                document.getElementById('documents-list').appendChild(li);
                document.getElementById('documents').hidden = false;

                documents(id + 1);
            });
        };

        documents(0);
    }, 100);
})();
