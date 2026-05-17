const authService = require('../services/authService');

exports.registerController = async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.createUser(email, password);
    const safeUser = {
        "id": user.id,
        "email": user.email
    }
    return res.status(201).json({
        success: true,
        data: safeUser
    });
}
exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.loginUser(email, password);

    return res.status(200).json({
        success: true,
        data: token
    })


}