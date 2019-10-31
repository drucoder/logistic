define(function() {
    var ajax = webix.ajax().headers({
        'Content-type': 'application/json'
    })

    webix.proxy.resource = {
        init: function() {
            webix.extend(this, webix.proxy.rest)
        },
        load: function(view, params) {
            var args = ''

            args += '?page=' + (params ? params.start / view.config.datafetch : 0)
            args += '&size=' + view.config.datafetch

            var url = view.config.url.source

            return ajax.get(url + args)
                .then(function(value) {
                    var response = value.json()
                    return {
                        data: response.content,
                        pos: response.number * view.config.datafetch,
                        total_count: response.totalElements
                    }
                })
        },
        save: function(view, params) {
            var id = params.id
            var url = view.config.url.source

            if (params.operation === 'update') {
                return ajax.put(url + '/' + id, params.data)
            } else if (params.operation === 'insert') {
                delete params.data.id
                return ajax.post(url, params.data)
            } else if (params.operation === 'delete') {
                return ajax.del(url + '/' + id)
            }
        }
    }
})
