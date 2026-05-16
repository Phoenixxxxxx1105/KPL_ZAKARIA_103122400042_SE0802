const express = require('express');
const app = express();

const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Objek untuk menyimpan angka acak per nama (agar tetap selama sesi)
const angkaAcakPerNama = {};

/**
 * Fungsi untuk menghasilkan angka acak antara 1-100 berdasarkan nama
 * Angka yang dihasilkan deterministik (tetap) untuk nama yang sama
 * selama server berjalan
 */
function generateRandomNumber(nama) {
    // Jika nama sudah punya angka acak, kembalikan angka yang sama
    if (angkaAcakPerNama[nama] !== undefined) {
        return angkaAcakPerNama[nama];
    }
    

    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash = ((hash << 5) - hash) + nama.charCodeAt(i);
        hash = hash & hash; 
    }
   
    const randomNumber = Math.abs(hash % 100) + 1;

    angkaAcakPerNama[nama] = randomNumber;
    
    return randomNumber;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka acak berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 description: Nama pengguna (case-sensitive)
 *               tebakan:
 *                 type: integer
 *                 description: Angka tebakan antara 1-100
 *             required:
 *               - nama
 *               - tebakan
 *     responses:
 *       200:
 *         description: Tebakan benar
 *       400:
 *         description: Input tidak valid
 */
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;
    
    // Validasi input
    if (!nama || typeof nama !== 'string') {
        return res.status(400).json({ error: "Nama harus diisi dan berupa string!" });
    }
    
    if (tebakan === undefined || typeof tebakan !== 'number') {
        return res.status(400).json({ error: "Tebakan harus diisi dan berupa angka!" });
    }
    
    if (tebakan < 1 || tebakan > 100) {
        return res.status(400).json({ error: "Tebakan harus antara 1-100!" });
    }
    
    // Dapatkan angka acak untuk nama tersebut (tetap untuk nama yang sama)
    const angkaBenar = generateRandomNumber(nama);
    
    // Bandingkan tebakan
    if (tebakan === angkaBenar) {
        res.json({ jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.` });
    } else if (tebakan > angkaBenar) {
        res.json({ jawaban: "Tebakanmu terlalu tinggi!" });
    } else {
        res.json({ jawaban: "Tebakanmu terlalu rendah!" });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});