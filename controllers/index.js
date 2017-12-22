const ads = [
    {
        id: 1,
        name: 'Товар 1',
        status: 'Продаю',
        price: 500
    },

    {
        id: 2,
        name: 'Товар 2',
        status: 'Покупаю',
        price: 500
    },

    {
        id: 3,
        name: 'Товар 3',
        status: 'Продаю',
        price: 500
    },

    {
        id: 4,
        name: 'Товар 1',
        status: 'Продаю',
        price: 500
    },

    {
        id: 5,
        name: 'Товар 2',
        status: 'Покупаю',
        price: 500
    },

    {
        id: 6,
        name: 'Товар 3',
        status: 'Продаю',
        price: 500
    },
    {
        id: 7,
        name: 'Товар 1',
        status: 'Продаю',
        price: 500
    },

    {
        id: 8,
        name: 'Товар 2',
        status: 'Покупаю',
        price: 500
    },

    {
        id: 8,
        name: 'Товар 3',
        status: 'Продаю',
        price: 500
    }
];


module.exports = {
    get(req, res, next) {
        res.render('index', {
            isLogin: false,
            ads
        });
    }
};