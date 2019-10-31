define(['component/listPage'], function(listPage) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            { id: "name", editor: "text" }
        ]
    )
})
