class IndexController {
    getIndex(req, res) {
        res.render('index', { title: 'Game Website' });
    }
}

module.exports = IndexController;