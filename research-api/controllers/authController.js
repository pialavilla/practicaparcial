const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (user) => {
return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
});
};

exports.register = async (req, res) => {
try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
    return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const user = new User({ email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token });
} catch (err) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
}
};

exports.login = async (req, res) => {
try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken(user);
    res.json({ token });
} catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
}
};
