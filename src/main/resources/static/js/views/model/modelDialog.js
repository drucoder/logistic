define(['component/dialogPage', 'collections/marks'], function(dialogPage, marks) {
    return dialogPage(
        'modelDialog',
        'resource->/api/model',
        [
            { id: 'name' },
            { id: 'mark', options: marks }
        ]
    )
})
