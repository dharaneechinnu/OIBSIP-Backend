const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    // Get the token from the request header
    const token = req.header('Authorization');

    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token not provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If token is invalid or expired, return an error response
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
}

module.exports = verifyToken;
