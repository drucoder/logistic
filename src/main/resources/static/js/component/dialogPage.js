define(function() {
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    id: tableId,
                    view: 'datatable',
                    columns: columns,
                    url: url,
                    save: url,
                    autoheight: true,
                    autowidth: true,
                    pager: tableId + 'Pager',
                    datafetch: 5,
                    on: {
                        onItemClick: function(id) {
                            var model = this.getItem(id)

                            var window = this.getTopParentView()
                            var parentConfig = window.config
                            var cell = parentConfig.cell
                            var parentTable = parentConfig.parentTable

                            var field = {}
                            field[cell.column] = model
                            parentTable.updateItem(cell.row, field)

                            setTimeout(function() { window.close() }, 0)
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 5,
                    group: 5,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})
