module.exports = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please Provide Age")
    }
    else if (req.query.age < 18) {
        resp.send("You are under 18")
    }
    else {
        next()
    }
}