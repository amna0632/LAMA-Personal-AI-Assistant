const DashboardService = require("../services/dashboard.service");

const getDashboard = (req, res) => {

    const data = DashboardService.getDashboardData();

    res.status(200).json({

        success: true,

        data

    });

};

module.exports = {
    getDashboard
};