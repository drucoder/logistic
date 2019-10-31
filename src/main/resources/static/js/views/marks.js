define(['component/listPage'], function(listPage) {
    return listPage(
        'markList',
        'resource->/api/mark',
        [
            { id: "name", editor: "text" }
        ]
    )
})
