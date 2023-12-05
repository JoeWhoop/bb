const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/zapisz-kod', (req, res) => {
    const kod = req.body.kod;
    const sciezkaDoPliku = 'sciezka/do/baza3.csv'; // Zmień na swoją ścieżkę do pliku

    fs.appendFile(sciezkaDoPliku, kod + '\n', (err) => {
        if (err) {
            console.error('Wystąpił błąd podczas zapisywania do pliku:', err);
            res.json({ success: false });
        } else {
            console.log('Kod został zapisany do pliku baza3.csv.');
            res.json({ success: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
