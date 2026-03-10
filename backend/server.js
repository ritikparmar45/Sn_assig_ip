const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/interest', (req, res) => {
    const { name, email, step } = req.body;

    if (!name || !email || !step) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Log the data as required
    console.log('--- New Interest Received ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Step: ${step}`);
    console.log('---------------------------');

    return res.status(200).json({ message: 'Interest submitted successfully.' });
});

app.listen(PORT, () => {
    console.log(`SniperThink Backend listening on port ${PORT}`);
});
