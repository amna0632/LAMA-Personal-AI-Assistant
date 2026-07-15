const SearchService = require("../services/search.service");

const search = (req, res) => {

    const keyword = req.query.q;

    if (!keyword) {

        return res.status(400).json({
            success: false,
            message: "Search keyword is required."
        });

    }

    const result = SearchService.globalSearch(keyword);

    res.status(200).json({
        success: true,
        keyword,
        data: result
    });

};

module.exports = {
    search
};