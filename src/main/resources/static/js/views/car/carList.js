define(['component/listPage'], function(listPage) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            { id: 'name', editor: 'text' },
            {
                id: 'model',
                dialogUrl: 'views/model/modelDialog',
                template: function(row) {
                    return row.model && row.model.repr || ''
                }
            }
        ]
    )
})
