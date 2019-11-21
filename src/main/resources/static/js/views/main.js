define(function() {
    return {
        type: 'line',
        height: 400,
        rows: [
            {
                view: 'button',
                label: 'Cars',
                click: function() {
                    routie('cars')
                }
            },
            { template: 'Row 1' },
            { template: 'Row 2' },
            {
                cols: [
                    { template: 'col 1' },
                    { template: 'col 2' }
                ]
            }
        ]
    }
})
