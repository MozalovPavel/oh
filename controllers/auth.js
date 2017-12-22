module.exports = {
    getSignInForm(req, res, next) {
        res.render('signin', {
            isLogin: false
        });
    },

    getSignUpForm(req, res, next) {
        res.render('signup', {
            isLogin: false
        });
    },

    signIn(req, res, next) {
        res.render('signin', {
            isLogin: true,
            successText: 'Вы успешно авторизовались'
        });
    },

    signUp(req, res, next) {
        res.render('signup', {
            isLogin: true,
            successText: 'Вы успешно зарегистрировались'
        });
    },
};