module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if(!token || token !== process.env.CONTACT_FORM_TOKEN) {
        return res.status(403).json({message: 'Accès interdit !'});
    }

    next();
}