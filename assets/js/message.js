(function() {
    var message = document.getElementById('message');
    if (!message) {
        return;
    }

    useGAID(function(trackerId) {

        fetch('https://hawken-c9ef9.web.app/message/' + trackerId + '.html').then(function(response) {
            if (!response.ok) {
                return;
            }

            response.text().then(function(text) {
                message.hidden = false;
                document.getElementById('message-body').innerHTML = text;
            });
        });

        var documents = function(id) {
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

    });
})();
