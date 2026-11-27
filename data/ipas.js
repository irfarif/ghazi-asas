(() => {
const m = mapel("ipas", { nama: "IPAS", ikon: "🔬", warna: "#16a34a" });
const teks = t => `<div class="teks">${t}</div>`;

/* ================= RANGKUMAN ================= */
m.bab("energi", "Energi dan Perubahannya", `
<p><b>Energi</b> adalah <b>kemampuan untuk melakukan usaha atau kerja</b>. Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat <b>berubah bentuk</b>.</p>
<h3>Bentuk energi</h3><ul><li><b>Energi kimia</b>: tersimpan dalam makanan, bahan bakar (bensin, minyak), dan baterai.</li><li><b>Energi listrik</b>, <b>energi panas</b> (kalor), <b>energi cahaya</b>, <b>energi gerak</b> (kinetik), <b>energi bunyi</b>.</li></ul>
<h3>Perubahan energi</h3><table><tr><th>Alat</th><th>Perubahan energi</th></tr>
<tr><td>Setrika listrik, kompor listrik, rice cooker</td><td>listrik → <b>panas</b></td></tr>
<tr><td>Kipas angin, blender</td><td>listrik → <b>gerak</b></td></tr>
<tr><td>Lampu</td><td>listrik → cahaya (dan panas)</td></tr>
<tr><td>Radio, bel</td><td>listrik → bunyi</td></tr>
<tr><td>Senter</td><td>kimia (baterai) → listrik → cahaya</td></tr></table>
<h3>Sumber energi listrik</h3><ul><li><b>PLTA</b> (Pembangkit Listrik Tenaga Air) → memanfaatkan <b>aliran air</b>.</li><li><b>PLTP</b> (Panas Bumi) → memanfaatkan <b>panas bumi</b>.</li><li>PLTS (Surya/matahari), PLTB (Bayu/angin), PLTU (Uap).</li></ul>
<h3>Hemat energi</h3><ul><li>Mematikan lampu dan TV jika tidak dipakai.</li><li>Mencabut charger setelah baterai penuh.</li><li>Membuka jendela pada siang hari agar tidak perlu menyalakan lampu.</li><li>Tidak membuka pintu kulkas terlalu lama.</li></ul>`);

m.bab("fotosintesis", "Fotosintesis", `
<p><b>Fotosintesis</b> adalah <b>proses tumbuhan membuat makanannya sendiri</b> dengan bantuan <b>cahaya matahari</b>. Fotosintesis terjadi di <b>daun</b> yang mengandung zat hijau daun (<b>klorofil</b>).</p>
<div class="ingat">Bahan: <b>air</b> (diserap akar) + <b>karbon dioksida</b> (diserap dari udara) + cahaya matahari<br>Hasil: <b>zat gula/karbohidrat</b> (makanan) + <b>oksigen</b></div>
<p>Oksigen hasil fotosintesis kita hirup untuk bernapas. Karena itu, tumbuhan sangat penting bagi kehidupan.</p>`);

m.bab("gaya", "Gaya dan Pengaruhnya", `
<p><b>Gaya</b> adalah <b>tarikan atau dorongan</b> yang dapat memengaruhi benda.</p>
<h3>Pengaruh gaya terhadap benda</h3><ol><li>Benda diam menjadi <b>bergerak</b> (menendang bola diam).</li><li>Benda bergerak menjadi <b>diam/berhenti</b> (kiper menangkap bola).</li><li>Mengubah <b>arah</b> gerak benda (bola dipantulkan).</li><li>Mengubah <b>bentuk</b> benda (membuat bentuk dari plastisin, meremas kertas).</li><li>Mengubah <b>kecepatan</b> gerak benda (sepeda dikayuh lebih kencang).</li></ol>
<h3>Macam-macam gaya</h3><table><tr><th>Gaya</th><th>Keterangan / contoh</th></tr>
<tr><td><b>Gaya otot</b></td><td>berasal dari tenaga otot: mendorong meja, menarik tali busur</td></tr>
<tr><td><b>Gaya gesek</b></td><td>timbul karena <b>dua permukaan bersentuhan</b>. Alur kasar pada ban memperbesar gaya gesek agar <b>tidak licin/tergelincir</b>.</td></tr>
<tr><td><b>Gaya gravitasi</b></td><td>tarikan bumi, menyebabkan <b>buah jatuh ke tanah</b></td></tr>
<tr><td><b>Gaya magnet</b></td><td>tarikan/dorongan magnet pada benda logam tertentu</td></tr>
<tr><td><b>Gaya pegas</b></td><td>gaya dari benda elastis (lentur): <b>trampolin, kasur pegas (springbed), ketapel, busur panah</b></td></tr></table>
<h3>Magnet</h3><ul><li>Bagian magnet yang paling kuat tarikannya adalah <b>kutubnya</b> (kutub utara U dan kutub selatan S).</li><li>Kutub <b>sejenis tolak-menolak</b> (U–U, S–S); kutub <b>berbeda tarik-menarik</b> (U–S).</li><li>Cara membuat magnet: <b>menggosok</b>, <b>induksi</b>, dan <b>aliran listrik</b> (elektromagnet: kawat dililitkan pada besi lalu dialiri listrik dari baterai).</li></ul>`);

m.bab("listrik", "Rangkaian Listrik", `
<p><b>Rangkaian listrik</b> adalah <b>susunan komponen listrik</b> (sumber listrik, kabel, sakelar, lampu) yang membentuk <b>jalur tertutup</b> sehingga arus listrik dapat mengalir.</p>
<p><b>Sakelar</b> berfungsi untuk <b>menyambung dan memutus</b> arus listrik.</p>
<table><tr><th>Rangkaian seri</th><th>Rangkaian paralel</th></tr>
<tr><td>Komponen disusun <b>berderet dalam satu jalur</b>, tanpa cabang.</td><td>Komponen disusun <b>bercabang</b> (lebih dari satu jalur).</td></tr>
<tr><td>Jika satu lampu putus, lampu lain <b>ikut mati</b>.</td><td>Jika satu lampu putus, lampu lain <b>tetap menyala</b>.</td></tr>
<tr><td>Nyala lampu makin redup jika lampu ditambah.</td><td>Nyala lampu sama terang.</td></tr></table>
<div class="ingat">Rumah memakai <b>rangkaian paralel</b> agar setiap lampu dan alat listrik bisa dinyalakan/dimatikan sendiri-sendiri, dan jika satu lampu rusak yang lain tetap menyala.</div>`);

m.bab("iklim", "Cuaca, Iklim, dan Musim", `
<p><b>Cuaca</b> = keadaan udara di suatu tempat pada <b>waktu singkat</b>. <b>Iklim</b> = <b>rata-rata keadaan cuaca dalam waktu yang lama</b> (bertahun-tahun) di wilayah yang luas.</p>
<p>Indonesia terletak di sekitar <b>garis khatulistiwa</b>, sehingga beriklim <b>tropis</b> dan hanya mempunyai <b>dua musim</b>: <b>musim hujan</b> dan <b>musim kemarau</b>.</p>
<h3>Mengapa hanya dua musim?</h3><ul><li>Indonesia dilalui garis khatulistiwa sehingga mendapat <b>sinar matahari hampir sepanjang tahun</b> dan suhunya tidak banyak berubah.</li><li>Dipengaruhi <b>angin muson</b>: angin muson barat membawa banyak uap air → <b>musim hujan</b> (sekitar Oktober–April); angin muson timur bersifat kering → <b>musim kemarau</b> (sekitar April–Oktober).</li></ul>
<h3>Pemanasan global dan perubahan iklim</h3><p><b>Pemanasan global</b> adalah <b>naiknya suhu rata-rata bumi</b> akibat meningkatnya <b>gas rumah kaca</b> (asap kendaraan, pabrik, pembakaran hutan).</p>
<p>Dampak perubahan iklim: <b>es di kutub mencair</b>, <b>permukaan air laut naik</b>, cuaca tidak menentu, banjir dan kekeringan.</p>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","energi","Kemampuan untuk melakukan usaha atau kerja disebut ….",["energi","gaya","listrik","magnet"],"Energi = kemampuan melakukan usaha/kerja.");
m.pg("A1","energi","Energi adalah ….",["kemampuan untuk melakukan usaha atau kerja","tarikan atau dorongan","benda yang dapat menarik besi","proses tumbuhan membuat makanan"],"Tarikan/dorongan = gaya.");
m.pg("A1","energi","Kita dapat berlari dan bermain karena tubuh kita memiliki ….",["energi","gravitasi","magnet","klorofil"],"Energi membuat kita mampu bekerja dan bergerak.");
m.pg("A2","energi","Perubahan energi pada setrika listrik adalah ….",["energi listrik menjadi energi panas","energi panas menjadi energi listrik","energi listrik menjadi energi gerak","energi gerak menjadi energi bunyi"],"Setrika: listrik → panas.");
m.pg("A2","energi","Alat yang mengubah energi listrik menjadi energi panas adalah ….",["setrika listrik","kipas angin","radio","lampu senter"],"Setrika menghasilkan panas.");
m.pg("A2","energi","Ketika setrika dinyalakan, permukaannya menjadi panas. Hal ini terjadi karena ….",["energi listrik berubah menjadi energi panas","energi panas berubah menjadi listrik","energi cahaya berubah menjadi gerak","energi bunyi berubah menjadi panas"],"Listrik → panas.");
m.pg("A3","fotosintesis","Proses tumbuhan membuat makanannya sendiri dengan bantuan cahaya matahari disebut ….",["fotosintesis","respirasi","penguapan","penyerbukan"],"Fotosintesis.");
m.pg("A3","fotosintesis","Fotosintesis terjadi di bagian tumbuhan yang disebut ….",["daun","akar","batang","bunga"],"Di daun, karena mengandung klorofil.");
m.pg("A3","fotosintesis","Zat hijau daun yang berperan dalam fotosintesis disebut ….",["klorofil","oksigen","karbon dioksida","glukosa"],"Klorofil = zat hijau daun.");
m.pg("A4","energi","Perhatikan pernyataan berikut!<br>1) Mematikan lampu saat siang hari<br>2) Membiarkan TV menyala saat tidur<br>3) Mencabut charger setelah baterai penuh<br>4) Membuka pintu kulkas lama-lama<br>Tindakan hemat energi ditunjukkan oleh nomor ….",["1 dan 3","1 dan 2","2 dan 4","3 dan 4"],"Nomor 2 dan 4 boros energi.");
m.pg("A4","energi","Contoh perilaku hemat energi listrik adalah ….",["mematikan kipas angin saat keluar kamar","menyalakan lampu sepanjang hari","mengisi baterai semalaman","membiarkan TV menyala tanpa ditonton"],"Mematikan alat yang tidak dipakai.");
m.pg("A4","energi","Perhatikan pernyataan berikut!<br>1) Membuka jendela di siang hari<br>2) Menyalakan AC sambil membuka jendela<br>3) Mematikan TV jika tidak ditonton<br>4) Menyetrika satu per satu setiap hari<br>Tindakan hemat energi adalah nomor ….",["1 dan 3","2 dan 4","1 dan 2","3 dan 4"],"Buka jendela dan matikan TV = hemat.");
m.pg("A5","energi","Pembangkit listrik yang memanfaatkan aliran air disebut ….",["PLTA","PLTP","PLTS","PLTB"],"PLTA = Pembangkit Listrik Tenaga Air.");
m.pg("A5","energi","PLTA singkatan dari Pembangkit Listrik Tenaga ….",["Air","Angin","Api","Arus"],"PLTA = tenaga Air.");
m.pg("A5","energi","Bendungan yang airnya digunakan untuk menggerakkan turbin penghasil listrik adalah bagian dari ….",["PLTA","PLTS","PLTP","PLTB"],"Air bendungan → PLTA.");
m.pg("A6","energi","Pembangkit listrik yang memanfaatkan panas bumi disebut ….",["PLTP","PLTA","PLTS","PLTB"],"PLTP = Panas Bumi.");
m.pg("A6","energi","PLTP memanfaatkan sumber energi dari ….",["panas bumi","aliran air","sinar matahari","tiupan angin"],"PLTP = Pembangkit Listrik Tenaga Panas Bumi.");
m.pg("A6","energi","Kamojang di Jawa Barat memiliki pembangkit listrik yang memanfaatkan uap panas dari dalam bumi. Pembangkit tersebut adalah ….",["PLTP","PLTA","PLTS","PLTD"],"Uap panas dari dalam bumi = PLTP.");
m.pg("A7","gaya","Gaya adalah ….",["tarikan atau dorongan","kemampuan melakukan kerja","aliran listrik","panas matahari"],"Gaya = tarikan atau dorongan.");
m.pg("A7","gaya","Menutup pintu dengan mendorongnya merupakan contoh ….",["gaya dorong","gaya magnet","energi cahaya","fotosintesis"],"Mendorong = gaya.");
m.pg("A7","gaya","Menimba air dari sumur merupakan contoh gaya ….",["tarikan","dorongan","magnet","gesek"],"Menimba = menarik.");
m.pg("A8","gaya","Kiper menangkap bola yang ditendang ke arah gawang. Pengaruh gaya pada kejadian tersebut adalah ….",["benda bergerak menjadi diam","benda diam menjadi bergerak","mengubah bentuk benda","mengubah warna benda"],"Bola bergerak menjadi diam.");
m.pg("A8","gaya","Rem sepeda yang ditarik membuat sepeda berhenti. Ini menunjukkan gaya dapat ….",["menghentikan benda yang bergerak","mengubah bentuk benda","membuat benda menjadi panas","mengubah warna benda"],"Gaya dapat membuat benda bergerak menjadi diam.");
m.pg("A8","gaya","Contoh gaya yang membuat benda bergerak menjadi diam adalah ….",["menangkap bola","menendang bola diam","meremas kertas","mendorong mobil mogok"],"Menangkap bola → bola berhenti.");
m.pg("A9","gaya","Contoh gaya yang mengubah bentuk benda adalah ….",["membuat bentuk mobil dari plastisin","menendang bola","menarik laci","mengayuh sepeda"],"Plastisin berubah bentuk.");
m.pg("A9","gaya","Meremas kertas hingga menjadi bola kertas menunjukkan bahwa gaya dapat ….",["mengubah bentuk benda","menghentikan benda","mengubah warna benda","membuat benda melayang"],"Kertas berubah bentuk.");
m.pg("A9","gaya","Kegiatan yang menunjukkan gaya mengubah bentuk benda adalah ….",["membuat roti dari adonan","menggelindingkan kelereng","menangkap bola","mendorong troli"],"Adonan dibentuk menjadi roti.");
m.pg("A10","gaya","Gaya yang timbul akibat dua permukaan benda bersentuhan disebut ….",["gaya gesek","gaya magnet","gaya gravitasi","gaya pegas"],"Gaya gesek.");
m.pg("A10","gaya","Sepatu yang solnya kasar membuat kita tidak mudah terpeleset. Hal ini memanfaatkan ….",["gaya gesek","gaya magnet","gaya pegas","energi panas"],"Permukaan kasar memperbesar gaya gesek.");
m.pg("A10","gaya","Menggosokkan kedua telapak tangan terasa hangat. Hal ini terjadi karena adanya ….",["gaya gesek","gaya magnet","gaya gravitasi","gaya pegas"],"Gesekan menimbulkan panas.");
m.pg("A11","gaya","Buah mangga yang matang jatuh ke tanah. Hal ini disebabkan oleh ….",["gaya gravitasi bumi","gaya magnet","gaya gesek","gaya pegas"],"Gravitasi = gaya tarik bumi.");
m.pg("A11","gaya","Bola yang dilempar ke atas akan kembali jatuh ke bawah karena ….",["gaya gravitasi","gaya gesek","gaya magnet","gaya otot"],"Ditarik gravitasi bumi.");
m.pg("A11","gaya","Gaya gravitasi adalah gaya ….",["tarik bumi","dorong angin","tarik magnet","gesek dua benda"],"Gravitasi = gaya tarik bumi.");
m.pg("A12","gaya","Jika dua kutub magnet yang sejenis didekatkan, maka akan ….",["tolak-menolak","tarik-menarik","menempel kuat","menjadi panas"],"Sejenis tolak-menolak.");
m.pg("A12","gaya","Kutub utara magnet didekatkan dengan kutub selatan magnet lain. Yang terjadi adalah ….",["tarik-menarik","tolak-menolak","diam saja","kehilangan kemagnetan"],"Berbeda jenis tarik-menarik.");
m.pg("A12","gaya","Kutub U didekatkan dengan kutub U. Peristiwa yang terjadi adalah ….",["tolak-menolak","tarik-menarik","saling menempel","berubah menjadi kutub S"],"U–U sejenis → tolak-menolak.");
m.pg("A13","gaya","Membuat magnet dengan cara melilitkan kawat pada paku lalu menghubungkannya ke baterai disebut cara ….",["aliran listrik (elektromagnet)","menggosok","induksi","memanaskan"],"Kawat dialiri listrik = elektromagnet.");
m.pg("A13","gaya","Magnet yang dibuat dengan cara mengalirkan arus listrik pada kumparan kawat disebut ….",["elektromagnet","magnet alam","magnet induksi","magnet batang"],"Elektromagnet.");
m.pg("A13","gaya","Bahan yang dibutuhkan untuk membuat magnet dengan aliran listrik adalah ….",["paku besi, kawat, dan baterai","kayu, kertas, dan lem","plastik, kain, dan air","kaca, karet, dan pasir"],"Paku besi dililit kawat yang dihubungkan ke baterai.");
m.pg("A14","listrik","Rangkaian listrik adalah ….",["susunan komponen listrik yang membentuk jalur tertutup sehingga arus dapat mengalir","alat untuk mengukur listrik","sumber energi listrik","kabel yang putus"],"Rangkaian listrik = susunan komponen, jalur tertutup.");
m.pg("A14","listrik","Agar lampu dalam rangkaian listrik menyala, rangkaian harus ….",["tertutup","terbuka","terputus","basah"],"Arus hanya mengalir pada rangkaian tertutup.");
m.pg("A14","listrik","Komponen yang menjadi sumber listrik dalam rangkaian sederhana adalah ….",["baterai","sakelar","kabel","lampu"],"Baterai = sumber listrik.");
m.pg("A15","listrik","Rangkaian listrik yang memiliki lebih dari satu cabang disebut rangkaian ….",["paralel","seri","tunggal","terbuka"],"Bercabang = paralel.");
m.pg("A15","listrik","Rangkaian listrik yang disusun bercabang disebut ….",["rangkaian paralel","rangkaian seri","rangkaian terbuka","rangkaian pendek"],"Paralel.");
m.pg("A15","listrik","Ciri rangkaian paralel adalah ….",["memiliki cabang/lebih dari satu jalur","hanya ada satu jalur","lampu mati semua jika satu putus","tidak memerlukan sumber listrik"],"Paralel bercabang.");
m.pg("A16","iklim","Indonesia yang beriklim tropis memiliki dua musim, yaitu ….",["musim hujan dan musim kemarau","musim dingin dan musim panas","musim semi dan musim gugur","musim salju dan musim hujan"],"Hujan dan kemarau.");
m.pg("A16","iklim","Musim yang terjadi di Indonesia adalah ….",["kemarau dan hujan","semi dan gugur","dingin dan salju","gugur dan panas"],"Kemarau dan hujan.");
m.pg("A16","iklim","Negara beriklim tropis seperti Indonesia tidak mengalami musim ….",["salju (dingin)","hujan","kemarau","pancaroba"],"Musim salju/dingin terjadi di negara empat musim.");
m.pg("A17","iklim",teks("Akibat pemanasan global, suhu bumi semakin panas. Es di kutub utara dan selatan mencair. Air laut menjadi naik sehingga beberapa pantai dan pulau kecil terancam tenggelam.")+"Dampak perubahan iklim berdasarkan teks adalah ….",["es di kutub mencair dan permukaan air laut naik","suhu bumi menjadi dingin","es di kutub semakin tebal","pulau kecil bertambah banyak"],"Tertulis: es mencair, air laut naik.");
m.pg("A17","iklim",teks("Perubahan iklim menyebabkan cuaca sulit ditebak. Musim hujan bisa datang lebih lama sehingga terjadi banjir. Di tempat lain, musim kemarau sangat panjang sehingga terjadi kekeringan.")+"Berdasarkan teks, dampak perubahan iklim adalah ….",["banjir dan kekeringan","suhu tetap sama","hujan turun setiap hari di semua tempat","tidak ada musim kemarau"],"Banjir dan kekeringan.");
m.pg("A17","iklim",teks("Petani di desa bingung karena musim hujan datang terlambat. Padi yang sudah ditanam menjadi kering dan gagal panen.")+"Peristiwa dalam teks merupakan dampak dari ….",["perubahan iklim","gaya gravitasi","fotosintesis","rangkaian listrik"],"Musim tidak menentu = dampak perubahan iklim.");
m.pg("A18","iklim","Iklim adalah ….",["rata-rata keadaan cuaca dalam waktu lama di wilayah yang luas","keadaan udara pada satu hari","hujan yang turun hari ini","angin yang bertiup sebentar"],"Iklim = rata-rata cuaca jangka panjang.");
m.pg("A18","iklim","Perbedaan cuaca dan iklim adalah ….",["cuaca untuk waktu singkat, iklim untuk waktu lama","cuaca untuk waktu lama, iklim untuk waktu singkat","cuaca dan iklim sama saja","iklim hanya terjadi di laut"],"Cuaca = singkat; iklim = lama.");
m.pg("A18","iklim","Keadaan cuaca rata-rata di suatu wilayah luas selama bertahun-tahun disebut ….",["iklim","cuaca","musim","suhu"],"Iklim.");
m.pg("A19","listrik","Keuntungan rangkaian paralel untuk penerangan rumah adalah ….",["jika satu lampu mati, lampu lain tetap menyala","semua lampu mati bersamaan","lebih sedikit kabel","nyala lampu makin redup"],"Pada paralel, lampu lain tetap menyala.");
m.pg("A19","listrik","Lampu di kamar Rina putus, tetapi lampu di ruang tamu tetap menyala. Hal ini karena rumah Rina menggunakan rangkaian ….",["paralel","seri","terbuka","tunggal"],"Paralel.");
m.pg("A19","listrik","Rumah memakai rangkaian paralel agar ….",["setiap lampu bisa dinyalakan dan dimatikan sendiri-sendiri","semua lampu menyala redup","listrik lebih mahal","hanya satu lampu yang bisa menyala"],"Setiap cabang punya sakelar sendiri.");
m.pg("A20","gaya","Benda yang memanfaatkan gaya pegas adalah ….",["trampolin","gunting","sapu","pensil"],"Trampolin memakai pegas.");
m.pg("A20","gaya","Kasur springbed terasa empuk dan memantul karena memanfaatkan ….",["gaya pegas","gaya magnet","gaya gravitasi","gaya gesek"],"Springbed berisi pegas.");
m.pg("A20","gaya","Ketapel dapat melontarkan batu karena memanfaatkan gaya ….",["pegas (karet yang lentur)","magnet","gravitasi","listrik"],"Karet ketapel elastis = gaya pegas.");

/* ================= ISIAN ================= */
m.is("B1","energi","Energi yang tersimpan dalam makanan dan bahan bakar disebut energi ….",["kimia"],"Energi kimia.");
m.is("B1","energi","Baterai menyimpan energi … yang dapat diubah menjadi energi listrik.",["kimia"],"Energi kimia.");
m.is("B1","energi","Nasi yang kita makan mengandung energi ….",["kimia"],"Makanan mengandung energi kimia.");
m.is("B2","energi","Kipas angin mengubah energi listrik menjadi energi ….",["gerak","kinetik"],"Listrik → gerak.");
m.is("B2","energi","Lampu mengubah energi listrik menjadi energi ….",["cahaya","cahaya dan panas"],"Listrik → cahaya.");
m.is("B2","energi","Radio mengubah energi listrik menjadi energi ….",["bunyi","suara"],"Listrik → bunyi.");
m.is("B3","fotosintesis","Gas dari udara yang diserap tumbuhan untuk fotosintesis adalah ….",["karbon dioksida","karbondioksida","CO2"],"Karbon dioksida (CO₂).");
m.is("B3","fotosintesis","Gas yang dihasilkan tumbuhan dari proses fotosintesis adalah ….",["oksigen","O2"],"Oksigen.");
m.is("B3","fotosintesis","Selain karbon dioksida, tumbuhan memerlukan … yang diserap oleh akar untuk fotosintesis.",["air"],"Air.");
m.is("B4","gaya","Saat pemanah menarik tali busur dengan tangannya, ia menggunakan gaya … (tenaga dari otot tangan).",["otot","tarik","tarikan","gaya otot"],"Tenaga dari otot = gaya otot (berupa tarikan).");
m.is("B4","gaya","Tali busur yang ditarik lalu dilepas dapat melontarkan anak panah karena memanfaatkan gaya ….",["pegas","lenting","elastis"],"Busur panah lentur = gaya pegas.");
m.is("B4","gaya","Mendorong lemari dengan tenaga tangan merupakan contoh gaya ….",["otot","dorong","dorongan"],"Gaya otot.");
m.is("B5","gaya","Permukaan ban dibuat beralur kasar agar gaya geseknya … sehingga tidak mudah tergelincir.",["besar","membesar","bertambah besar","lebih besar"],"Alur kasar memperbesar gaya gesek.");
m.is("B5","gaya","Alur kasar pada ban berfungsi agar ban tidak … di jalan licin.",["tergelincir","licin","selip","terpeleset"],"Agar tidak tergelincir.");
m.is("B5","gaya","Gaya yang timbul karena permukaan ban bersentuhan dengan jalan disebut gaya ….",["gesek"],"Gaya gesek.");
m.is("B6","gaya","Bagian magnet yang memiliki kekuatan tarikan terbesar adalah ….",["kutub","kutubnya","kutub magnet","ujung"],"Kutub magnet.");
m.is("B6","gaya","Setiap magnet memiliki dua kutub, yaitu kutub utara dan kutub ….",["selatan"],"Utara dan selatan.");
m.is("B6","gaya","Kutub magnet yang berbeda jika didekatkan akan ….",["tarik-menarik","tarik menarik"],"Berbeda jenis → tarik-menarik.");
m.is("B7","listrik","Alat untuk menyambung atau memutus arus listrik disebut ….",["sakelar","saklar","stop kontak"],"Sakelar.");
m.is("B7","listrik","Kabel dalam rangkaian listrik berfungsi sebagai … arus listrik.",["penghantar","jalan","jalur"],"Penghantar arus.");
m.is("B7","listrik","Sumber listrik pada senter adalah ….",["baterai","batu baterai"],"Baterai.");
m.is("B8","listrik","Rangkaian listrik yang disusun dalam satu jalur tanpa cabang disebut rangkaian ….",["seri"],"Seri.");
m.is("B8","listrik","Pada rangkaian seri, jika satu lampu putus maka lampu lain akan ….",["mati","padam","ikut mati"],"Ikut mati.");
m.is("B8","listrik","Rangkaian yang bercabang disebut rangkaian ….",["paralel"],"Paralel.");
m.is("B9","iklim","Indonesia terletak di sekitar garis khatulistiwa sehingga beriklim ….",["tropis","tropika"],"Tropis.");
m.is("B9","iklim","Garis khayal yang membagi bumi menjadi belahan utara dan selatan disebut garis ….",["khatulistiwa","ekuator"],"Khatulistiwa.");
m.is("B9","iklim","Indonesia memiliki dua musim, yaitu musim hujan dan musim ….",["kemarau"],"Kemarau.");
m.is("B10","iklim","Naiknya suhu rata-rata bumi akibat meningkatnya gas rumah kaca disebut ….",["pemanasan global","global warming"],"Pemanasan global.");
m.is("B10","iklim","Gas-gas yang menyebabkan panas matahari terperangkap di atmosfer disebut gas rumah ….",["kaca"],"Gas rumah kaca.");
m.is("B10","iklim","Salah satu cara mengurangi pemanasan global adalah dengan menanam ….",["pohon","tanaman","pohon pohon"],"Menanam pohon.");

/* ================= URAIAN ================= */
m.ur("C1","fotosintesis","Jelaskan pengertian fotosintesis serta sebutkan zat yang dihasilkan!","Fotosintesis adalah proses tumbuhan membuat makanannya sendiri dengan bantuan cahaya matahari di daun (klorofil). Zat yang dihasilkan adalah <b>zat gula (karbohidrat)</b> sebagai makanan dan <b>oksigen</b>.",["Pengertian: tumbuhan membuat makanan dengan cahaya matahari","Hasil: zat gula/karbohidrat","Hasil: oksigen"]);
m.ur("C1","fotosintesis","Apa saja bahan yang diperlukan dalam fotosintesis dan apa hasilnya?","Bahan: air, karbon dioksida, dan cahaya matahari (dengan bantuan klorofil). Hasil: zat gula (karbohidrat) dan oksigen.",["Air, karbon dioksida, cahaya matahari","Zat gula dan oksigen"]);
m.ur("C2","energi","Berikan tiga contoh perilaku menghemat energi listrik di rumah!","1) Mematikan lampu jika tidak digunakan.<br>2) Mencabut charger setelah baterai penuh.<br>3) Mematikan TV jika tidak ditonton.",["Tiga contoh yang tepat","Contoh lain: membuka jendela siang hari, tidak membuka kulkas lama-lama, menyetrika sekaligus"]);
m.ur("C2","energi","Mengapa kita harus menghemat energi listrik? Tuliskan juga dua caranya!","Karena sumber energi listrik terbatas dan menghemat listrik mengurangi biaya serta menjaga lingkungan. Caranya: mematikan alat listrik yang tidak dipakai dan memanfaatkan cahaya matahari pada siang hari.",["Alasan hemat energi","Dua cara yang tepat"]);
m.ur("C3","gaya","Jelaskan tiga pengaruh gaya terhadap benda!","1) Benda diam menjadi bergerak, contoh menendang bola.<br>2) Benda bergerak menjadi diam, contoh menangkap bola.<br>3) Mengubah bentuk benda, contoh membentuk plastisin.<br>(Pengaruh lain: mengubah arah dan kecepatan gerak benda.)",["Tiga pengaruh gaya yang benar","Lebih baik disertai contoh"]);
m.ur("C3","gaya","Sebutkan pengaruh gaya pada kegiatan berikut: a) menendang bola yang diam, b) kiper menangkap bola, c) meremas kertas!","a) Benda diam menjadi bergerak.<br>b) Benda bergerak menjadi diam.<br>c) Mengubah bentuk benda.",["a) diam → bergerak","b) bergerak → diam","c) berubah bentuk"]);
m.ur("C4","listrik","Jelaskan alasan penggunaan rangkaian listrik paralel pada kebanyakan rumah!","Karena pada rangkaian paralel, jika satu lampu mati atau rusak, lampu dan alat listrik lain tetap menyala. Setiap lampu juga dapat dinyalakan dan dimatikan sendiri-sendiri, dan nyala lampu sama terang.",["Jika satu mati, yang lain tetap menyala","Bisa dinyalakan/dimatikan sendiri-sendiri"]);
m.ur("C4","listrik","Apa perbedaan rangkaian seri dan paralel?","Rangkaian seri disusun dalam satu jalur tanpa cabang; jika satu lampu putus, lampu lain ikut mati. Rangkaian paralel disusun bercabang; jika satu lampu putus, lampu lain tetap menyala.",["Seri: satu jalur, ikut mati","Paralel: bercabang, tetap menyala"]);
m.ur("C5","iklim","Jelaskan alasan Indonesia hanya memiliki dua musim!","Karena Indonesia terletak di sekitar garis khatulistiwa, sehingga mendapat sinar matahari hampir sepanjang tahun dan beriklim tropis. Musimnya dipengaruhi angin muson: muson barat membawa hujan (musim hujan) dan muson timur bersifat kering (musim kemarau).",["Letak di khatulistiwa/iklim tropis","Pengaruh angin muson barat dan timur"]);
m.ur("C5","iklim","Mengapa di Indonesia tidak ada musim salju? Sebutkan dua musim di Indonesia!","Karena Indonesia terletak di garis khatulistiwa dan beriklim tropis, sehingga mendapat panas matahari sepanjang tahun dan suhunya tidak pernah sangat dingin. Dua musim di Indonesia adalah musim hujan dan musim kemarau.",["Khatulistiwa/tropis","Musim hujan dan kemarau"]);
})();
