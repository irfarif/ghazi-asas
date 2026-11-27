(() => {
const m = mapel("mtk", { nama: "Matematika", ikon: "➗", warna: "#ea580c" });
const teks = t => `<div class="teks">${t}</div>`;
const fr = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
const duaPie = (a, b) => `<div class="gbr-row">${a}${b}</div>`;

/* ================= RANGKUMAN ================= */
m.bab("pecahan", "Pecahan, Desimal, dan Persen", `
<p><b>Pecahan</b> menunjukkan bagian dari keseluruhan. Pada pecahan ${fr(3,8)}: angka atas (3) = <b>pembilang</b> (bagian yang diambil), angka bawah (8) = <b>penyebut</b> (banyak bagian seluruhnya).</p>
<div class="gbr-row">[[pie:8:3:3/8 martabak]] [[pie:4:1:1/4 martabak]]</div>
<h3>Membandingkan pecahan</h3><ul><li><b>Penyebut sama</b> → bandingkan pembilangnya: ${fr(5,8)} &gt; ${fr(3,8)}.</li>
<li><b>Penyebut beda</b> → samakan penyebutnya dulu: ${fr(3,4)} = ${fr(6,8)}, jadi ${fr(3,4)} &gt; ${fr(5,8)}.</li>
<li>Pembilang 1: makin besar penyebut, makin kecil nilainya: ${fr(1,2)} &gt; ${fr(1,4)} &gt; ${fr(1,8)}.</li></ul>
<h3>Pecahan senilai</h3><p>Kalikan (atau bagi) pembilang dan penyebut dengan bilangan yang sama: ${fr(1,2)} = ${fr(2,4)} = ${fr(4,8)}.</p>
<h3>Pecahan → desimal → persen</h3>
<table><tr><th>Pecahan</th><th>Desimal</th><th>Persen</th></tr>
<tr><td>${fr(1,2)}</td><td>0,5</td><td>50%</td></tr><tr><td>${fr(1,4)}</td><td>0,25</td><td>25%</td></tr>
<tr><td>${fr(3,4)}</td><td>0,75</td><td>75%</td></tr><tr><td>${fr(1,5)}</td><td>0,2</td><td>20%</td></tr>
<tr><td>${fr(2,5)}</td><td>0,4</td><td>40%</td></tr><tr><td>${fr(1,10)}</td><td>0,1</td><td>10%</td></tr></table>
<div class="ingat">Cara mudah: ubah penyebut menjadi 10 atau 100. ${fr(3,4)} = ${fr(75,100)} = 0,75 = 75%.<br>Desimal → persen: kalikan 100. 0,25 × 100 = 25%.<br>Nilai persen ujian = (benar ÷ jumlah soal) × 100%. Benar 18 dari 20 → ${fr(18,20)} = ${fr(90,100)} = 90%.</div>`);

m.bab("bangun", "Bangun Datar", `
<h3>Segibanyak beraturan</h3><p>Semua sisi sama panjang dan semua sudut sama besar. Segitiga sama sisi (3), persegi (4), <b>segilima</b> beraturan (5), <b>segienam</b> beraturan (6), segidelapan (8).</p>
<h3>Jenis segitiga</h3><table><tr><th>Berdasarkan sisi</th><th>Berdasarkan sudut</th></tr>
<tr><td><b>Sama sisi</b>: 3 sisi sama, semua sudut 60°<br><b>Sama kaki</b>: 2 sisi sama<br><b>Sembarang</b>: semua sisi berbeda</td>
<td><b>Siku-siku</b>: ada sudut 90°<br><b>Lancip</b>: semua sudut &lt; 90°<br><b>Tumpul</b>: ada sudut &gt; 90°</td></tr></table>
<h3>Segiempat</h3><table><tr><th>Bangun</th><th>Ciri</th></tr>
<tr><td><b>Persegi</b></td><td>4 sisi sama panjang, 4 sudut siku-siku</td></tr>
<tr><td><b>Persegi panjang</b></td><td>sisi berhadapan sama panjang dan sejajar, 4 sudut siku-siku</td></tr>
<tr><td><b>Jajargenjang</b></td><td>sisi berhadapan sejajar dan sama panjang, sudut tidak siku-siku</td></tr>
<tr><td><b>Belah ketupat</b></td><td>4 sisi sama panjang, diagonal berpotongan tegak lurus</td></tr>
<tr><td><b>Layang-layang</b></td><td>2 pasang sisi <b>berdekatan</b> sama panjang, diagonal <b>tegak lurus</b>, sepasang sudut berhadapan sama besar</td></tr>
<tr><td><b>Trapesium</b></td><td>hanya sepasang sisi sejajar</td></tr></table>
<p><b>Dekomposisi</b>: persegi panjang dipotong pada diagonalnya menjadi <b>dua segitiga siku-siku</b> yang sama besar.</p>`);

m.bab("ukur", "Pengukuran Panjang dan Berat", `
<h3>Satuan panjang</h3><p>1 m = 100 cm · 1 km = 1.000 m · 1 cm = 10 mm</p>
<p>Contoh: 2 m 35 cm = 200 cm + 35 cm = <b>235 cm</b>.</p>
<p>Alat ukur panjang baku: <b>penggaris</b> (benda pendek), <b>meteran</b> (benda cukup panjang, misalnya meja, pintu, lantai kelas).</p>
<h3>Pembulatan</h3><p>Angka di belakang koma <b>5 atau lebih</b> → dibulatkan ke atas. <b>Kurang dari 5</b> → dibulatkan ke bawah.<br>12,6 cm ≈ <b>13 cm</b>, 12,3 cm ≈ <b>12 cm</b>, 8,5 cm ≈ 9 cm.</p>
<h3>Satuan berat</h3><p>1 kg = 1.000 g · ½ kg = 500 g · 1 ons = 100 g</p>
<p>Contoh: 1 kg + 500 g = 1.000 g + 500 g = 1.500 g = <b>1,5 kg</b>.</p>
<p>Alat ukur berat baku: <b>timbangan</b>.</p>`);

m.bab("luas", "Luas dan Perkalian", `
<h3>Luas persegi panjang</h3><div class="ingat">Luas = <b>panjang × lebar</b>. Satuannya persegi: cm², m².</div>
<p>Contoh: panjang 12 cm, lebar 8 cm → luas = 12 × 8 = <b>96 cm²</b>.</p>
<p>Luas persegi = sisi × sisi. Persegi sisi 5 cm → 5 × 5 = 25 cm².</p>
<h3>Luas gabungan</h3><p>Pisahkan bangun menjadi beberapa bagian, hitung luas masing-masing, lalu <b>jumlahkan</b>.</p>
<h3>Perkalian bersusun panjang</h3>
<pre style="font-size:1.1rem;line-height:1.4">    234
     12  ×
   ----
    468   (234 × 2)
   234    (234 × 1, geser 1 ke kiri)
   ----  +
   2808</pre>
<p>Soal cerita: 6 pak, setiap pak berisi 24 buku → 6 × 24 = <b>144 buku</b>.</p>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","pecahan",teks(`Ibu membeli martabak yang dipotong menjadi 8 bagian sama besar. Ayah makan ${fr(3,8)} bagian, Ibu makan ${fr(1,4)} bagian, dan Kakak makan ${fr(1,8)} bagian.`)+"Urutan anggota keluarga dari yang makan <b>paling banyak</b> adalah ….",["Ayah, Ibu, Kakak","Ibu, Ayah, Kakak","Kakak, Ibu, Ayah","Ayah, Kakak, Ibu"],`Samakan penyebut: Ayah ${fr(3,8)}, Ibu ${fr(1,4)} = ${fr(2,8)}, Kakak ${fr(1,8)}. Urutan: 3 &gt; 2 &gt; 1 → Ayah, Ibu, Kakak.`);
m.pg("A1","pecahan",teks(`Sebuah martabak dipotong 12 bagian sama besar. Ayah makan ${fr(1,6)}, Ibu makan ${fr(1,3)}, dan Kakak makan ${fr(1,4)} bagian.`)+"Urutan dari yang makan <b>paling banyak</b> adalah ….",["Ibu, Kakak, Ayah","Ayah, Kakak, Ibu","Kakak, Ibu, Ayah","Ibu, Ayah, Kakak"],`Ubah ke per-12: Ayah ${fr(2,12)}, Ibu ${fr(4,12)}, Kakak ${fr(3,12)}. Urutan: Ibu (4), Kakak (3), Ayah (2).`);
m.pg("A1","pecahan",teks(`Martabak dibagi 10 bagian. Ayah makan ${fr(2,5)}, Ibu makan ${fr(1,5)}, dan Adik makan ${fr(3,10)} bagian.`)+"Urutan dari yang makan <b>paling sedikit</b> adalah ….",["Ibu, Adik, Ayah","Ayah, Adik, Ibu","Adik, Ibu, Ayah","Ibu, Ayah, Adik"],`Ubah ke per-10: Ayah ${fr(4,10)}, Ibu ${fr(2,10)}, Adik ${fr(3,10)}. Paling sedikit: Ibu (2), Adik (3), Ayah (4).`);
m.pg("A2","pecahan",duaPie("[[pie:4:3:Martabak Ayah]]","[[pie:8:5:Martabak Ibu]]")+`Bagian martabak yang diarsir menunjukkan yang sudah dimakan. Pernyataan yang benar adalah ….`,[`${fr(3,4)} &gt; ${fr(5,8)}`,`${fr(3,4)} &lt; ${fr(5,8)}`,`${fr(3,4)} = ${fr(5,8)}`,`${fr(5,8)} &gt; ${fr(3,4)}`],`${fr(3,4)} = ${fr(6,8)}. Karena 6 &gt; 5, maka ${fr(3,4)} &gt; ${fr(5,8)}.`);
m.pg("A2","pecahan",duaPie("[[pie:2:1:Martabak A]]","[[pie:6:2:Martabak B]]")+`Pernyataan yang benar tentang bagian yang diarsir adalah ….`,[`${fr(1,2)} &gt; ${fr(2,6)}`,`${fr(1,2)} &lt; ${fr(2,6)}`,`${fr(1,2)} = ${fr(2,6)}`,`${fr(2,6)} &gt; ${fr(1,2)}`],`${fr(1,2)} = ${fr(3,6)} dan 3 &gt; 2, jadi ${fr(1,2)} &gt; ${fr(2,6)}.`);
m.pg("A2","pecahan",duaPie("[[pie:3:1:Martabak A]]","[[pie:6:2:Martabak B]]")+`Hubungan kedua pecahan yang diarsir adalah ….`,[`${fr(1,3)} = ${fr(2,6)}`,`${fr(1,3)} &gt; ${fr(2,6)}`,`${fr(1,3)} &lt; ${fr(2,6)}`,`${fr(2,6)} &gt; ${fr(1,3)}`],`${fr(1,3)} = ${fr(2,6)} (sama besar).`);
m.pg("A3","pecahan","[[pie:4:2]]Pecahan yang senilai dengan bagian yang diarsir adalah ….",[fr(4,8),fr(2,8),fr(3,4),fr(1,4)],`Diarsir ${fr(2,4)} = ${fr(1,2)} = ${fr(4,8)}.`);
m.pg("A3","pecahan","[[pie:3:1]]Pecahan yang senilai dengan bagian yang diarsir adalah ….",[fr(2,6),fr(1,6),fr(3,6),fr(2,3)],`${fr(1,3)} = ${fr(2,6)} (kalikan 2).`);
m.pg("A3","pecahan","[[rect:4:3]]Pecahan yang senilai dengan bagian yang diarsir adalah ….",[fr(6,8),fr(3,8),fr(4,8),fr(5,8)],`Diarsir ${fr(3,4)} = ${fr(6,8)}.`);
m.pg("A4","pecahan",`Bentuk desimal dari ${fr(3,4)} adalah ….`,["0,75","0,34","0,25","3,4"],`${fr(3,4)} = ${fr(75,100)} = 0,75.`);
m.pg("A4","pecahan",`Bentuk desimal dari ${fr(2,5)} adalah ….`,["0,4","0,25","2,5","0,52"],`${fr(2,5)} = ${fr(4,10)} = 0,4.`);
m.pg("A4","pecahan",`Bentuk desimal dari ${fr(1,4)} adalah ….`,["0,25","0,14","0,4","1,4"],`${fr(1,4)} = ${fr(25,100)} = 0,25.`);
m.pg("A5","pecahan","Rina menjawab benar 18 soal dari 20 soal. Nilai Rina dalam bentuk persen adalah ….",["90%","18%","80%","20%"],`${fr(18,20)} = ${fr(90,100)} = 90%.`);
m.pg("A5","pecahan","Dimas menjawab benar 15 soal dari 20 soal. Nilai Dimas dalam persen adalah ….",["75%","15%","80%","50%"],`${fr(15,20)} = ${fr(75,100)} = 75%.`);
m.pg("A5","pecahan","Dari 25 soal, Sari menjawab benar 20 soal. Persentase jawaban benar Sari adalah ….",["80%","20%","75%","90%"],`${fr(20,25)} = ${fr(80,100)} = 80%.`);
m.pg("A6","bangun","Bangun datar yang memiliki 6 sisi sama panjang dan 6 sudut sama besar disebut ….",["segienam beraturan","segilima beraturan","persegi","segidelapan beraturan"],"6 sisi sama = segienam beraturan.");
m.pg("A6","bangun","Bangun datar yang memiliki 5 sisi sama panjang dan 5 sudut sama besar disebut ….",["segilima beraturan","segienam beraturan","persegi panjang","trapesium"],"5 sisi = segilima beraturan.");
m.pg("A6","bangun","Segidelapan beraturan memiliki … sisi sama panjang.",["8","6","5","10"],"Segidelapan = 8 sisi.");
m.pg("A7","bangun","Segitiga yang ketiga sisinya sama panjang dan setiap sudutnya 60° disebut segitiga ….",["sama sisi","sama kaki","siku-siku","sembarang"],"Tiga sisi sama = sama sisi.");
m.pg("A7","bangun","Segitiga yang memiliki satu sudut 90° disebut segitiga ….",["siku-siku","sama sisi","lancip","tumpul"],"Sudut 90° = siku-siku.");
m.pg("A7","bangun","Segitiga yang dua sisinya sama panjang disebut segitiga ….",["sama kaki","sama sisi","sembarang","tumpul"],"Dua sisi sama = sama kaki.");
m.pg("A8","bangun","Ciri-ciri bangun layang-layang adalah ….",["dua pasang sisi berdekatan sama panjang dan diagonalnya tegak lurus","empat sisi sama panjang dan empat sudut siku-siku","hanya sepasang sisi sejajar","sisi berhadapan sejajar dan sudutnya siku-siku"],"Layang-layang: 2 pasang sisi berdekatan sama panjang, diagonal tegak lurus.");
m.pg("A8","bangun","Bangun datar yang diagonalnya berpotongan tegak lurus dan memiliki dua pasang sisi berdekatan sama panjang adalah ….",["layang-layang","persegi panjang","trapesium","jajargenjang"],"Itu ciri layang-layang.");
m.pg("A8","bangun","Pernyataan yang benar tentang layang-layang adalah ….",["memiliki sepasang sudut berhadapan yang sama besar","semua sudutnya siku-siku","semua sisinya sejajar","tidak memiliki diagonal"],"Layang-layang punya sepasang sudut berhadapan sama besar.");
m.pg("A9","bangun","Bangun segiempat yang memiliki dua pasang sisi sejajar, sisi berhadapan sama panjang, dan empat sudut siku-siku adalah ….",["persegi panjang","trapesium","layang-layang","jajargenjang"],"Ciri persegi panjang.");
m.pg("A9","bangun","Bangun segiempat yang hanya memiliki sepasang sisi sejajar adalah ….",["trapesium","persegi","jajargenjang","persegi panjang"],"Hanya sepasang sejajar = trapesium.");
m.pg("A9","bangun","Bangun yang sisi berhadapannya sejajar dan sama panjang, tetapi sudutnya tidak siku-siku adalah ….",["jajargenjang","persegi panjang","persegi","layang-layang"],"Jajargenjang.");
m.pg("A10","bangun","Sebuah kertas berbentuk persegi panjang dipotong pada diagonalnya. Hasil potongannya adalah ….",["dua segitiga siku-siku","dua persegi","dua trapesium","dua persegi panjang kecil"],"Dipotong diagonal → dua segitiga siku-siku.");
m.pg("A10","bangun","Persegi panjang dipotong menurut salah satu diagonalnya menjadi dua bangun yang ….",["sama besar berbentuk segitiga siku-siku","berbeda bentuk","berbentuk persegi","berbentuk layang-layang"],"Dua segitiga siku-siku yang sama besar.");
m.pg("A10","bangun","Jika persegi dipotong pada diagonalnya, akan terbentuk dua bangun ….",["segitiga siku-siku sama kaki","persegi panjang","trapesium","segilima"],"Persegi dipotong diagonal → 2 segitiga siku-siku sama kaki.");
m.pg("A11","ukur","Alat ukur baku yang tepat untuk mengukur panjang meja guru adalah ….",["meteran","jengkal","timbangan","termometer"],"Benda cukup panjang → meteran. Jengkal bukan alat baku.");
m.pg("A11","ukur","Untuk mengukur panjang lantai kelas, alat ukur yang paling tepat adalah ….",["meteran","penggaris 15 cm","depa","timbangan"],"Lantai kelas panjang → meteran.");
m.pg("A11","ukur","Berikut yang termasuk alat ukur panjang <b>baku</b> adalah ….",["meteran","jengkal","depa","langkah kaki"],"Jengkal, depa, langkah = tidak baku.");
m.pg("A12","ukur","2 m 35 cm = … cm.",["235","2.035","2.350","37"],"2 m = 200 cm; 200 + 35 = 235 cm.");
m.pg("A12","ukur","3 m 8 cm = … cm.",["308","38","380","3.008"],"3 m = 300 cm; 300 + 8 = 308 cm.");
m.pg("A12","ukur","1 m 50 cm = … cm.",["150","1.050","15","1.500"],"100 + 50 = 150 cm.");
m.pg("A13","ukur","Berat sekantong gula 1 kg. Ibu menambahkan 500 g gula. Berat gula sekarang adalah ….",["1,5 kg","1,05 kg","501 kg","6 kg"],"1.000 g + 500 g = 1.500 g = 1,5 kg.");
m.pg("A13","ukur","Berat semangka 2 kg. Ditambah melon 750 g. Berat seluruhnya adalah ….",["2,75 kg","2,075 kg","9,5 kg","27,5 kg"],"2.000 + 750 = 2.750 g = 2,75 kg.");
m.pg("A13","ukur","Ayah membeli 3 kg beras dan 500 g kacang. Berat semuanya adalah ….",["3,5 kg","3,05 kg","8 kg","35 kg"],"3.000 + 500 = 3.500 g = 3,5 kg.");
m.pg("A14","luas","Sebuah buku berbentuk persegi panjang dengan panjang 12 cm dan lebar 8 cm. Luasnya adalah ….",["96 cm²","40 cm²","20 cm²","80 cm²"],"12 × 8 = 96 cm².");
m.pg("A14","luas","Papan tulis berukuran panjang 15 dm dan lebar 6 dm. Luasnya adalah ….",["90 dm²","21 dm²","42 dm²","96 dm²"],"15 × 6 = 90 dm².");
m.pg("A14","luas","Taman berbentuk persegi panjang dengan panjang 9 m dan lebar 7 m. Luas taman adalah ….",["63 m²","32 m²","16 m²","72 m²"],"9 × 7 = 63 m².");
m.pg("A15","luas","Ibu membeli 6 pak buku tulis. Setiap pak berisi 24 buku. Jumlah buku seluruhnya adalah ….",["144 buku","30 buku","124 buku","164 buku"],"6 × 24 = 144.");
m.pg("A15","luas","Toko kue membuat 8 kotak kue. Setiap kotak berisi 15 kue. Banyak kue seluruhnya adalah ….",["120 kue","23 kue","100 kue","115 kue"],"8 × 15 = 120.");
m.pg("A15","luas","Pak guru membeli 12 pak pensil. Setiap pak berisi 12 pensil. Banyak pensil seluruhnya adalah ….",["144 pensil","24 pensil","122 pensil","132 pensil"],"12 × 12 = 144.");

/* ================= ISIAN ================= */
m.is("B1","pecahan",`Urutkan pecahan ${fr(1,2)}, ${fr(1,4)}, ${fr(3,4)} dari yang <b>terbesar</b>! (tulis: a/b, c/d, e/f)`,["3/4, 1/2, 1/4","3/4 1/2 1/4"],`${fr(3,4)} = 0,75; ${fr(1,2)} = 0,5; ${fr(1,4)} = 0,25.`);
m.is("B1","pecahan",`Urutkan pecahan ${fr(2,5)}, ${fr(4,5)}, ${fr(1,5)} dari yang <b>terbesar</b>! (tulis: a/b, c/d, e/f)`,["4/5, 2/5, 1/5","4/5 2/5 1/5"],"Penyebut sama → bandingkan pembilang: 4, 2, 1.");
m.is("B1","pecahan",`Urutkan pecahan ${fr(1,3)}, ${fr(1,6)}, ${fr(1,2)} dari yang <b>terbesar</b>! (tulis: a/b, c/d, e/f)`,["1/2, 1/3, 1/6","1/2 1/3 1/6"],"Pembilang sama (1) → penyebut terkecil paling besar.");
m.is("B2","pecahan","0,25 = …%",["25","25%","25 persen"],"0,25 × 100 = 25%.");
m.is("B2","pecahan","0,6 = …%",["60","60%","60 persen"],"0,6 × 100 = 60%.");
m.is("B2","pecahan","0,08 = …%",["8","8%","8 persen"],"0,08 × 100 = 8%.");
m.is("B3","bangun","Segiempat yang keempat sisinya sama panjang dan keempat sudutnya siku-siku disebut ….",["persegi","bujur sangkar"],"Persegi.");
m.is("B3","bangun","Segiempat yang keempat sisinya sama panjang tetapi sudutnya tidak siku-siku disebut ….",["belah ketupat"],"Belah ketupat.");
m.is("B3","bangun","Segiempat yang sisi berhadapannya sama panjang dan keempat sudutnya siku-siku disebut ….",["persegi panjang"],"Persegi panjang.");
m.is("B4","ukur","Panjang pensil 12,6 cm. Jika dibulatkan ke satuan cm terdekat menjadi … cm.",["13"],"Angka 6 ≥ 5 → dibulatkan ke atas: 13 cm.");
m.is("B4","ukur","Panjang penghapus 4,3 cm. Jika dibulatkan ke satuan cm terdekat menjadi … cm.",["4"],"Angka 3 < 5 → dibulatkan ke bawah: 4 cm.");
m.is("B4","ukur","Panjang buku 20,5 cm. Jika dibulatkan ke satuan cm terdekat menjadi … cm.",["21"],"Angka 5 → dibulatkan ke atas: 21 cm.");
m.is("B5","luas","Lantai kamar berbentuk persegi panjang berukuran 5 m × 4 m. Luas lantai kamar adalah … m².",["20","20 m2","20 m²"],"5 × 4 = 20 m².");
m.is("B5","luas","Lantai ruang kelas berukuran panjang 8 m dan lebar 7 m. Luasnya … m².",["56","56 m2","56 m²"],"8 × 7 = 56 m².");
m.is("B5","luas","Lantai teras berukuran 6 m × 3 m. Luasnya … m².",["18","18 m2","18 m²"],"6 × 3 = 18 m².");

/* ================= URAIAN ================= */
m.ur("C1","ukur","Ibu membeli gula 500 g, tepung 750 g, dan mentega 250 g. Berapa gram berat seluruhnya? Sebutkan alat ukur berat baku yang digunakan untuk menimbangnya!","500 g + 750 g + 250 g = <b>1.500 g</b> (= 1,5 kg).<br>Alat ukur berat baku: <b>timbangan</b>.",["Hasil 1.500 g","Alat: timbangan"]);
m.ur("C1","ukur","Di tas Ahmad ada buku 300 g, kotak bekal 450 g, dan botol minum 600 g. Berapa gram berat semuanya? Apa alat untuk mengukur berat?","300 + 450 + 600 = <b>1.350 g</b>.<br>Alat ukur berat: <b>timbangan</b>.",["Hasil 1.350 g","Timbangan"]);
m.ur("C2","pecahan","Di dalam kotak ada 20 kelereng, 5 di antaranya berwarna merah. Nyatakan banyak kelereng merah dalam bentuk pecahan, desimal, dan persen!",`Pecahan: ${fr(5,20)} = <b>${fr(1,4)}</b><br>Desimal: <b>0,25</b><br>Persen: <b>25%</b>`,["Pecahan 1/4 (atau 5/20)","Desimal 0,25","Persen 25%"]);
m.ur("C2","pecahan","Dari 10 buah apel, 4 buah berwarna hijau. Nyatakan apel hijau dalam bentuk pecahan, desimal, dan persen!",`Pecahan: <b>${fr(4,10)}</b> = ${fr(2,5)}<br>Desimal: <b>0,4</b><br>Persen: <b>40%</b>`,["4/10 atau 2/5","0,4","40%"]);
m.ur("C3","luas",`<svg class="gbr" width="300" height="130" viewBox="0 0 300 130"><rect x="20" y="20" width="90" height="90" fill="#d7efe9" stroke="#0b5a54" stroke-width="3"/><rect x="110" y="65" width="170" height="45" fill="#fff1d6" stroke="#8a5600" stroke-width="3"/><text x="65" y="15" text-anchor="middle" font-size="14">5 cm</text><text x="195" y="60" text-anchor="middle" font-size="14">10 cm</text><text x="290" y="92" font-size="14" text-anchor="end">  </text><text x="12" y="70" text-anchor="end" font-size="14"></text></svg>Bangun di atas terdiri atas persegi bersisi 5 cm dan persegi panjang berukuran panjang 10 cm dan lebar 5 cm. Hitunglah luas bangun gabungan tersebut!`,"Luas persegi = 5 × 5 = 25 cm²<br>Luas persegi panjang = 10 × 5 = 50 cm²<br>Luas gabungan = 25 + 50 = <b>75 cm²</b>",["Luas persegi 25 cm²","Luas persegi panjang 50 cm²","Jumlah 75 cm²"]);
m.ur("C3","luas","Sebuah bangun gabungan terdiri atas persegi bersisi 6 cm dan persegi panjang berukuran 8 cm × 4 cm. Hitunglah luas seluruhnya!","Persegi = 6 × 6 = 36 cm²<br>Persegi panjang = 8 × 4 = 32 cm²<br>Luas gabungan = 36 + 32 = <b>68 cm²</b>",["36 cm²","32 cm²","68 cm²"]);
m.ur("C4","ukur","Ibu membeli 3 kantong beras. Setiap kantong beratnya 2 kg 500 g. Berapa berat seluruh beras dalam kilogram dan dalam gram?","2 kg 500 g = 2.500 g.<br>3 × 2.500 g = <b>7.500 g</b> = <b>7,5 kg</b> (7 kg 500 g).",["7.500 g","7,5 kg"]);
m.ur("C4","ukur","Ayah membeli 4 kantong beras, masing-masing 1 kg 250 g. Berapa berat seluruhnya dalam kg dan g?","1 kg 250 g = 1.250 g.<br>4 × 1.250 = <b>5.000 g</b> = <b>5 kg</b>.",["5.000 g","5 kg"]);
m.ur("C5","luas","Hitunglah 234 × 12 dengan cara bersusun panjang beserta langkah-langkahnya!",`<pre style="font-size:1.1rem">    234
     12 ×
   -----
    468   ← 234 × 2
   234    ← 234 × 1 (geser satu tempat ke kiri)
   ----- +
   2808</pre>Jadi 234 × 12 = <b>2.808</b>.`,["Langkah 234 × 2 = 468","Langkah 234 × 1 = 234 digeser","Hasil 2.808"]);
m.ur("C5","luas","Hitunglah 156 × 23 dengan cara bersusun panjang beserta langkah-langkahnya!",`<pre style="font-size:1.1rem">    156
     23 ×
   -----
    468   ← 156 × 3
   312    ← 156 × 2 (geser satu tempat ke kiri)
   ----- +
   3588</pre>Jadi 156 × 23 = <b>3.588</b>.`,["156 × 3 = 468","156 × 2 = 312 digeser","Hasil 3.588"]);
})();
