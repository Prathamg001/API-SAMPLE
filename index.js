const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "pratham_gupta_25082024",
        email: "pratham.gupta2021b@vitstudent.ac.in",
        roll_number: "VIT2021B123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
