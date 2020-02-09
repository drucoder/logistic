define(['component/listPage', 'collections/marks'], function(listPage, marks) {
    return listPage(
        'modelList',
        'resource->/api/model',
        [
            { id: 'name', editor: 'text' },
            { id: 'mark', editor: 'combo', options: marks }
        ]
    )
})
