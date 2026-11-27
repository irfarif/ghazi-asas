(() => {
const m = mapel("senbud", { nama: "Seni Budaya", ikon: "🎨", warna: "#c026d3" });
const teks = t => `<div class="teks">${t}</div>`;

/* ================= RANGKUMAN ================= */
m.bab("tekstur", "Tekstur dan Teknik Frottage", `
<p><b>Tekstur</b> adalah <b>sifat permukaan benda</b>, misalnya kasar, halus, licin, atau bergelombang.</p>
<table><tr><th>Tekstur nyata</th><th>Tekstur semu</th></tr>
<tr><td>Tampak dan terasa <b>sama</b> saat diraba. Contoh: kulit kayu tampak kasar dan <b>terasa kasar</b>.</td>
<td>Tampak berbeda dengan saat diraba. Contoh: gambar kulit kayu di kertas <b>tampak kasar, tetapi terasa halus</b> saat diraba.</td></tr></table>
<h3>Bahan alam untuk karya bertekstur (kolase)</h3><p><b>Biji-bijian, daun kering, pasir, kulit kayu, serbuk kayu, kerang</b>. Untuk tekstur <b>kasar</b>: pasir, kulit kayu, biji-bijian.</p>
<h3>Teknik frottage (teknik gosok)</h3><p>Membuat tekstur dengan cara <b>menggosok</b> permukaan benda.</p>
<ol><li>Siapkan daun yang tulangnya menonjol, kertas tipis (HVS), dan krayon/pensil.</li><li>Letakkan daun di atas meja, bagian tulang daun menghadap ke atas.</li><li>Tutup daun dengan kertas.</li><li>Gosokkan krayon/pensil secara miring di atas kertas sampai bentuk tulang daun terlihat.</li><li>Rapikan dan beri warna.</li></ol>`);

m.bab("bunyi", "Bunyi dan Alat Musik", `
<p><b>Bunyi</b> timbul karena ada <b>benda yang bergetar</b>. Benda yang bergetar dan menghasilkan bunyi disebut <b>sumber bunyi</b>.</p>
<ul><li><b>Bunyi alami</b>: dari alam, contoh suara petir/guntur (kuat menggelegar), kicau burung, desau angin, gemericik air.</li>
<li><b>Bunyi buatan</b>: dari alat buatan manusia, contoh bel, klakson, alat musik.</li></ul>
<h3>Kuat-lemah dan durasi bunyi</h3><ul><li><b>Kuat</b>: petir, guntur, klakson truk. <b>Lemah/lirih</b>: desau angin sepoi-sepoi, bisikan, detak jam.</li>
<li>Durasi <b>pendek</b>: tepukan tangan, ketukan pintu, bunyi “tok”. Durasi <b>panjang</b>: sirene, peluit panjang, suara “nguuung”.</li></ul>
<h3>Alat musik</h3><table><tr><th>Ritmis</th><th>Melodis</th></tr>
<tr><td>Mengatur <b>irama, tempo, ketukan</b>, <b>tidak bernada</b>.<br>Contoh: <b>rebana, kendang, marakas, drum, tamborin</b>.</td>
<td>Menghasilkan <b>nada/melodi</b> lagu.<br>Contoh: <b>pianika, rekorder, gitar, biola, angklung, seruling</b>.</td></tr></table>`);

m.bab("tari", "Gerak Tari dan Unsur Tari", `
<h3>Gerak tari meniru alam dan hewan</h3><p>Gerak tari yang terinspirasi tingkah laku <b>binatang</b> atau <b>peristiwa alam</b> disebut <b>gerak imitatif</b> (gerak meniru).</p>
<ul><li>Meniru alam: pohon tertiup angin (lengan melambai ke kiri-kanan), ombak (badan bergelombang), hujan (jari bergerak turun cepat, suara “tik-tik”), daun berguguran.</li>
<li>Meniru hewan: burung terbang (mengepakkan tangan), bebek (berjalan megal-megol, “kwek-kwek”), ayam jago (“kukuruyuk”), kupu-kupu.</li></ul>
<h3>Unsur pokok tari</h3><table><tr><th>Unsur</th><th>Arti</th></tr>
<tr><td><b>Ruang</b></td><td>tempat/area yang digunakan penari untuk bergerak</td></tr>
<tr><td><b>Waktu</b></td><td>cepat-lambatnya gerakan (tempo) dan irama</td></tr>
<tr><td><b>Tenaga</b></td><td>kuat-lemahnya gerakan. Gerak yang <b>kuat dan cepat</b> memerlukan tenaga besar</td></tr></table>`);

m.bab("taritrad", "Tari Tradisional Nusantara", `
<table><tr><th>Tari</th><th>Asal</th><th>Inspirasi gerak</th></tr>
<tr><td><b>Tari Merak</b></td><td>Jawa Barat</td><td>burung merak jantan yang memamerkan keindahan bulunya</td></tr>
<tr><td><b>Tari Cenderawasih</b></td><td>Papua (sesuai buku)</td><td>burung cenderawasih, burung khas setempat</td></tr>
<tr><td><b>Tari Nelayan</b></td><td>Bali</td><td>kegiatan nelayan menangkap ikan di laut</td></tr>
<tr><td><b>Tari Gantar</b></td><td>Kalimantan Timur (Dayak)</td><td><b>menanam padi</b>: tongkat untuk melubangi tanah, bambu berisi biji padi</td></tr>
<tr><td><b>Tari Kuda Lumping</b></td><td>Jawa</td><td><b>prajurit berkuda</b> yang sedang berperang/berlatih</td></tr>
<tr><td>Tari Kupu-Kupu</td><td>Bali</td><td>kupu-kupu yang terbang di taman</td></tr></table>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","tekstur","Tekstur adalah ….",["sifat permukaan suatu benda","warna suatu benda","ukuran suatu benda","bentuk suatu benda"],"Tekstur = sifat permukaan (kasar, halus, dll.).");
m.pg("A1","tekstur","Kasar, halus, dan licin merupakan contoh ….",["tekstur","warna","garis","bidang"],"Itu sifat permukaan = tekstur.");
m.pg("A1","tekstur","Sifat permukaan benda yang dapat dirasakan dengan cara diraba disebut ….",["tekstur","irama","melodi","tempo"],"Tekstur.");
m.pg("A2","tekstur","Gambar batu di atas kertas terlihat kasar, tetapi saat diraba terasa halus. Tekstur seperti ini disebut tekstur ….",["semu","nyata","kasar","alami"],"Tampak dan teraba berbeda = semu.");
m.pg("A2","tekstur","Tekstur semu adalah tekstur yang ….",["tampak kasar, tetapi saat diraba halus","tampak dan teraba sama kasar","tidak dapat dilihat","hanya ada pada batu"],"Tekstur semu: tampilan berbeda dengan rabaan.");
m.pg("A2","tekstur","Contoh tekstur semu adalah ….",["foto kulit kayu yang dicetak di kertas","kulit kayu asli","batu kali","amplas"],"Fotonya tampak kasar tetapi kertasnya halus.");
m.pg("A3","tekstur","Bahan alam yang dapat menghasilkan tekstur kasar pada karya kolase adalah ….",["pasir","kertas HVS","plastik mika","kain sutra"],"Pasir menghasilkan tekstur kasar.");
m.pg("A3","tekstur","Untuk membuat kolase bertekstur kasar dari bahan alam, sebaiknya dipilih ….",["kulit kayu dan biji-bijian","kertas licin dan plastik","kain satin","kaca"],"Kulit kayu dan biji-bijian kasar.");
m.pg("A3","tekstur","Bahan alam berikut yang teksturnya kasar adalah ….",["serbuk kayu","kelopak bunga mawar","daun pisang muda","bulu ayam"],"Serbuk kayu kasar.");
m.pg("A4","tekstur","Teknik membuat tekstur dengan cara menggosok permukaan benda disebut ….",["frottage","kolase","mozaik","montase"],"Frottage = teknik gosok.");
m.pg("A4","tekstur","Teknik frottage disebut juga teknik ….",["gosok","tempel","lipat","cetak tinggi"],"Frottage = teknik gosok.");
m.pg("A4","tekstur","Meletakkan kertas di atas daun lalu menggosoknya dengan krayon adalah teknik ….",["frottage","kolase","menganyam","melipat"],"Frottage.");
m.pg("A5","bunyi",teks("Saat senar gitar dipetik, senarnya bergetar sehingga terdengar bunyi. Jika senar dipegang hingga berhenti bergetar, bunyinya pun hilang.")+"Berdasarkan teks, bunyi timbul karena ….",["benda bergetar","benda berwarna","benda bergerak lurus","benda diam"],"Bunyi timbul karena getaran.");
m.pg("A5","bunyi",teks("Ketika kulit rebana dipukul, kulitnya bergetar dan menghasilkan bunyi “dung”. ")+"Penyebab timbulnya bunyi rebana adalah ….",["kulit rebana bergetar","rebana berwarna cerah","rebana berbentuk bulat","rebana terbuat dari kayu"],"Bunyi timbul dari getaran kulit rebana.");
m.pg("A5","bunyi","Bunyi dapat terdengar karena adanya ….",["getaran benda","cahaya benda","warna benda","berat benda"],"Getaran.");
m.pg("A6","bunyi","Contoh bunyi alami yang kuat dan menggelegar adalah ….",["suara petir","kicau burung","desau angin sepoi-sepoi","gemericik air"],"Petir/guntur kuat menggelegar.");
m.pg("A6","bunyi","Bunyi alami berikut yang paling keras adalah ….",["guntur","daun jatuh","angin sepoi-sepoi","tetesan air"],"Guntur.");
m.pg("A6","bunyi","Bunyi menggelegar yang terdengar saat hujan badai berasal dari ….",["petir","burung","angin sepoi-sepoi","air sungai"],"Petir.");
m.pg("A7","bunyi","Contoh bunyi yang memiliki durasi pendek adalah ….",["tepukan tangan","sirene ambulans","peluit panjang","suara azan"],"Tepukan tangan singkat.");
m.pg("A7","bunyi","Bunyi ketukan pintu “tok” termasuk bunyi dengan durasi ….",["pendek","panjang","sangat panjang","tidak terbatas"],"Ketukan = durasi pendek.");
m.pg("A7","bunyi","Bunyi berikut yang durasinya paling pendek adalah ….",["bunyi “tak” saat memukul meja","bunyi sirene","bunyi klakson panjang","bunyi suling ditiup lama"],"Pukulan meja singkat.");
m.pg("A8","bunyi","Alat musik yang berfungsi mengatur irama, tempo, dan ketukan serta tidak bernada adalah ….",["rebana","pianika","rekorder","biola"],"Rebana = ritmis.");
m.pg("A8","bunyi","Kendang termasuk alat musik ….",["ritmis","melodis","harmonis","elektronik"],"Kendang tidak bernada = ritmis.");
m.pg("A8","bunyi","Alat musik ritmis adalah alat musik yang ….",["tidak bernada dan mengatur irama","menghasilkan melodi lagu","menghasilkan akord","hanya dimainkan dengan ditiup"],"Ritmis = pengatur irama, tidak bernada.");
m.pg("A9","bunyi","Kelompok alat musik yang menghasilkan nada atau melodi adalah ….",["pianika, rekorder, gitar","rebana, kendang, marakas","drum, tamborin, kendang","marakas, rebana, drum"],"Pianika, rekorder, gitar = melodis.");
m.pg("A9","bunyi","Alat musik melodis adalah alat musik yang ….",["menghasilkan nada/melodi","hanya mengatur tempo","tidak bernada","hanya dipukul"],"Melodis = menghasilkan melodi.");
m.pg("A9","bunyi","Kelompok alat musik melodis adalah ….",["seruling, angklung, biola","kendang, rebana, bedug","marakas, tamborin, drum","rebana, kentongan, drum"],"Seruling, angklung, biola bernada.");
m.pg("A10","tari","Gerak tari yang terinspirasi dari pohon yang tertiup angin termasuk gerak tari yang meniru ….",["peristiwa alam","kegiatan manusia","bentuk benda mati","gerak mesin"],"Angin = peristiwa alam.");
m.pg("A10","tari","Gerakan penari yang bergelombang seperti air laut terinspirasi dari ….",["ombak","burung","petani","kuda"],"Bergelombang = ombak.");
m.pg("A10","tari","Contoh gerak tari yang terinspirasi dari fenomena alam adalah ….",["gerak daun berguguran","gerak orang mencangkul","gerak menulis","gerak memasak"],"Daun berguguran = fenomena alam.");
m.pg("A11","tari","Penari merentangkan kedua tangan lalu mengayunkannya naik turun sambil berlari kecil. Gerakan ini meniru gerak ….",["burung terbang","ikan berenang","kucing berjalan","ular melata"],"Mengepakkan tangan = burung terbang.");
m.pg("A11","tari","Penari berjalan jongkok sambil menggoyangkan pinggul ke kiri dan kanan. Gerakan ini meniru hewan ….",["bebek","kuda","burung","ular"],"Bebek berjalan megal-megol.");
m.pg("A11","tari","Penari meliuk-liukkan badan di lantai sambil merayap. Gerakan ini meniru hewan ….",["ular","burung","kuda","kelinci"],"Merayap meliuk = ular.");
m.pg("A12","tari","Tiga unsur utama dalam seni tari adalah ….",["ruang, waktu, dan tenaga","irama, melodi, dan harmoni","garis, warna, dan bidang","nada, tempo, dan lirik"],"Unsur pokok tari: ruang, waktu, tenaga.");
m.pg("A12","tari","Yang <b>bukan</b> unsur pokok tari adalah ….",["warna","ruang","waktu","tenaga"],"Warna bukan unsur pokok tari.");
m.pg("A12","tari","Cepat-lambatnya gerakan tari berkaitan dengan unsur ….",["waktu","ruang","tenaga","warna"],"Waktu = tempo.");
m.pg("A13","tari","Penari menghentakkan kaki dengan kuat dan cepat. Unsur tari yang paling tampak adalah ….",["tenaga","ruang","warna","kostum"],"Kuat-lemah gerakan = tenaga.");
m.pg("A13","tari","Unsur tenaga dalam tari berkaitan dengan ….",["kuat-lemahnya gerakan","luas tempat menari","jumlah penari","warna kostum"],"Tenaga = kuat lemah gerak.");
m.pg("A13","tari","Gerakan menirukan prajurit yang sedang berperang membutuhkan tenaga yang ….",["kuat","lemah","sangat pelan","tidak ada"],"Gerak perang kuat dan cepat.");
m.pg("A14","taritrad",teks("Tari Merak menggambarkan keindahan burung merak jantan yang sedang memamerkan bulu ekornya. Tari ini diciptakan oleh Raden Tjetjep Somantri.")+"Tari Merak berasal dari daerah ….",["Jawa Barat","Bali","Papua","Kalimantan Timur"],"Tari Merak dari Jawa Barat.");
m.pg("A14","taritrad","Tari Merak merupakan tari tradisional dari ….",["Jawa Barat","Sumatra Barat","Bali","Papua"],"Jawa Barat.");
m.pg("A14","taritrad","Tari yang menggambarkan burung merak jantan memamerkan bulunya dan berasal dari Jawa Barat adalah ….",["Tari Merak","Tari Kecak","Tari Piring","Tari Gantar"],"Tari Merak.");
m.pg("A15","taritrad","Tari Cenderawasih terinspirasi dari burung khas daerah ….",["Papua","Jawa Barat","Aceh","Betawi"],"Sesuai kisi-kisi: Papua, daerah asal burung cenderawasih.");
m.pg("A15","taritrad","Tarian yang terinspirasi burung cenderawasih dan berasal dari Papua adalah ….",["Tari Cenderawasih","Tari Merak","Tari Kupu-Kupu","Tari Nelayan"],"Tari Cenderawasih.");
m.pg("A15","taritrad","Burung cenderawasih yang menjadi inspirasi Tari Cenderawasih adalah burung khas ….",["Papua","Bali","Jawa","Sumatra"],"Papua.");
m.pg("A16","taritrad","Gerak Tari Nelayan terinspirasi dari kegiatan ….",["nelayan menangkap ikan di laut","petani menanam padi","prajurit berperang","pedagang di pasar"],"Tari Nelayan = kegiatan nelayan.");
m.pg("A16","taritrad","Gerakan mendayung perahu dan menebar jala terdapat dalam tari ….",["Nelayan","Merak","Gantar","Kuda Lumping"],"Tari Nelayan.");
m.pg("A16","taritrad","Tari Nelayan termasuk tari yang bertema ….",["lingkungan sosial (kegiatan manusia)","hewan","tumbuhan","peperangan"],"Kegiatan nelayan = lingkungan sosial.");
m.pg("A17","taritrad","Properti tongkat dan bambu pada Tari Gantar melambangkan kegiatan ….",["menanam padi","menangkap ikan","berperang","berburu"],"Tongkat untuk melubangi tanah, bambu berisi benih padi.");
m.pg("A17","taritrad","Pada Tari Gantar, tongkat melambangkan alat untuk melubangi tanah, sedangkan bambu berisi biji padi melambangkan ….",["benih padi","senjata","alat musik","dayung"],"Bambu berisi biji = benih padi.");
m.pg("A17","taritrad","Tari Gantar berasal dari ….",["Kalimantan Timur","Jawa Barat","Papua","Bali"],"Tari Gantar dari suku Dayak, Kalimantan Timur.");
m.pg("A18","tari","Dalam drama tari musikal, anak-anak bersuara “kwek… kwek…” sambil berjalan megal-megol. Hewan yang ditirukan adalah ….",["bebek","ayam","kucing","burung"],"Kwek-kwek = bebek.");
m.pg("A18","tari","Penari bersuara “kukuruyuk” sambil mengepakkan kedua tangan dan membusungkan dada. Hewan yang ditirukan adalah ….",["ayam jago","bebek","kambing","kuda"],"Kukuruyuk = ayam jago.");
m.pg("A18","tari","Penari bersuara “ngik-ngik” sambil melompat-lompat kecil dengan kedua tangan di depan dada. Hewan yang ditirukan adalah ….",["kelinci","gajah","ular","sapi"],"Melompat kecil = kelinci.");
m.pg("A19","tari","Sekelompok penari bergerak bergelombang naik turun secara bergantian dari ujung ke ujung. Peristiwa alam yang ditirukan adalah ….",["ombak di laut","gunung meletus","matahari terbit","salju turun"],"Bergelombang = ombak.");
m.pg("A19","tari","Sekelompok penari berjongkok lalu perlahan berdiri sambil membuka kedua tangan ke atas. Peristiwa alam yang ditirukan adalah ….",["matahari terbit / tumbuhan tumbuh","hujan lebat","angin kencang","gempa bumi"],"Perlahan naik dan terbuka = matahari terbit/tumbuh.");
m.pg("A19","tari","Penari berputar-putar cepat sambil berpindah tempat. Peristiwa alam yang ditirukan adalah ….",["angin puting beliung","air tenang","daun diam","bulan purnama"],"Berputar cepat = angin puting beliung.");
m.pg("A20","tari","Penari mengayunkan kedua lengan ke kiri dan ke kanan sambil sedikit membungkukkan badan. Gerakan ini terinspirasi dari ….",["pohon yang tertiup angin","ikan berenang","burung terbang","orang mencangkul"],"Lengan melambai = pohon tertiup angin.");
m.pg("A20","tari","Penari menggerakkan lengan seperti gelombang dari bahu ke ujung jari. Inspirasi gerak ini adalah ….",["aliran air/ombak","api unggun","batu","matahari"],"Gelombang = air/ombak.");
m.pg("A20","tari","Penari menggerakkan jari-jari dari atas ke bawah dengan cepat sambil badan sedikit menunduk. Inspirasi gerak ini adalah ….",["hujan turun","burung terbang","matahari terbit","gunung meletus"],"Jari turun cepat = hujan.");

/* ================= ISIAN ================= */
m.is("B1","tekstur","Tekstur yang tampak kasar dan terasa kasar juga saat diraba disebut tekstur ….",["nyata"],"Tekstur nyata.");
m.is("B1","tekstur","Tekstur yang tampak kasar tetapi saat diraba terasa halus disebut tekstur ….",["semu"],"Tekstur semu.");
m.is("B1","tekstur","Kulit kayu asli yang tampak kasar dan teraba kasar memiliki tekstur ….",["nyata"],"Nyata.");
m.is("B2","tekstur","Biji-bijian, daun kering, dan pasir termasuk bahan … untuk membuat karya seni bertekstur.",["alam","alami","bahan alam"],"Bahan alam.");
m.is("B2","tekstur","Karya seni yang dibuat dengan menempelkan berbagai bahan pada bidang gambar disebut ….",["kolase"],"Kolase.");
m.is("B2","tekstur","Pasir dan serbuk kayu menghasilkan tekstur yang ….",["kasar"],"Kasar.");
m.is("B3","bunyi","Benda yang menghasilkan bunyi karena bergetar disebut ….",["sumber bunyi"],"Sumber bunyi.");
m.is("B3","bunyi","Bunyi timbul karena benda ….",["bergetar","getaran"],"Bergetar.");
m.is("B3","bunyi","Senar gitar yang dipetik akan … sehingga menghasilkan bunyi.",["bergetar"],"Bergetar.");
m.is("B4","bunyi","Bunyi desau angin sepoi-sepoi termasuk bunyi yang ….",["lemah","lirih","pelan","halus"],"Lemah/lirih.");
m.is("B4","bunyi","Suara petir termasuk bunyi yang ….",["kuat","keras"],"Kuat/keras.");
m.is("B4","bunyi","Suara bisikan teman termasuk bunyi yang ….",["lemah","lirih","pelan"],"Lemah.");
m.is("B5","bunyi","Marakas, rebana, dan kendang termasuk alat musik ….",["ritmis"],"Ritmis.");
m.is("B5","bunyi","Drum dan tamborin termasuk alat musik ….",["ritmis"],"Ritmis.");
m.is("B5","bunyi","Alat musik yang tidak bernada dan berfungsi mengatur irama disebut alat musik ….",["ritmis"],"Ritmis.");
m.is("B6","bunyi","Pianika dan rekorder termasuk alat musik ….",["melodis"],"Melodis.");
m.is("B6","bunyi","Gitar dan biola termasuk alat musik ….",["melodis"],"Melodis.");
m.is("B6","bunyi","Alat musik yang menghasilkan nada atau melodi disebut alat musik ….",["melodis"],"Melodis.");
m.is("B7","tari","Gerak tari yang terinspirasi tingkah laku binatang atau peristiwa alam disebut gerak ….",["imitatif","imitasi","meniru","menirukan"],"Gerak imitatif (meniru).");
m.is("B7","tari","Gerak imitatif artinya gerak ….",["meniru","menirukan","tiruan"],"Imitatif = meniru.");
m.is("B7","tari","Gerak burung terbang dalam tari termasuk gerak yang … hewan.",["meniru","menirukan"],"Meniru.");
m.is("B8","tari","Tiga unsur pokok tari adalah ruang, waktu, dan ….",["tenaga"],"Tenaga.");
m.is("B8","tari","Tiga unsur pokok tari adalah ruang, …, dan tenaga.",["waktu"],"Waktu.");
m.is("B8","tari","Tiga unsur pokok tari adalah …, waktu, dan tenaga.",["ruang"],"Ruang.");
m.is("B9","taritrad","Tari Kuda Lumping menirukan gerakan … yang sedang menunggang kuda.",["prajurit","prajurit berkuda","pasukan berkuda","tentara"],"Prajurit berkuda.");
m.is("B9","taritrad","Properti utama Tari Kuda Lumping adalah kuda tiruan yang terbuat dari ….",["anyaman bambu","bambu"],"Anyaman bambu.");
m.is("B9","taritrad","Tari Kuda Lumping menggambarkan prajurit yang sedang ….",["berperang","berlatih perang","menunggang kuda","berkuda"],"Prajurit berkuda yang berperang/berlatih.");
m.is("B10","tari","Penari menggerakkan jari dari atas ke bawah dengan cepat sambil bersuara “tik-tik-tik… byurrr”. Peristiwa alam yang ditirukan adalah ….",["hujan lebat","hujan","hujan deras"],"Hujan lebat.");
m.is("B10","tari","Penari bergerak bergelombang naik turun sambil bersuara “byur… byur…”. Peristiwa alam yang ditirukan adalah ….",["ombak","gelombang laut","ombak laut"],"Ombak.");
m.is("B10","tari","Penari menggoyangkan badan ke kiri dan kanan sambil bersuara “wuss… wuss…”. Peristiwa alam yang ditirukan adalah ….",["angin","angin bertiup","angin kencang"],"Angin.");

/* ================= URAIAN ================= */
m.ur("C1","tekstur","Jelaskan perbedaan tekstur nyata dan tekstur semu!","Tekstur nyata adalah tekstur yang tampak dan terasa sama saat diraba, contohnya kulit kayu yang tampak kasar dan terasa kasar. Tekstur semu adalah tekstur yang tampak berbeda dengan saat diraba, contohnya gambar kulit kayu di kertas yang tampak kasar tetapi terasa halus.",["Pengertian tekstur nyata","Pengertian tekstur semu","Lebih baik disertai contoh"]);
m.ur("C1","tekstur","Apa itu tekstur? Sebutkan jenis-jenisnya dan contohnya!","Tekstur adalah sifat permukaan benda. Jenisnya: tekstur nyata (tampak dan teraba sama, contoh batu kali) dan tekstur semu (tampak berbeda dengan rabaan, contoh foto batu di kertas).",["Pengertian tekstur","Nyata + contoh","Semu + contoh"]);
m.ur("C2","tekstur","Uraikan langkah-langkah membuat tekstur daun dengan teknik gosok (frottage)!","1) Siapkan daun yang tulangnya menonjol, kertas tipis, dan krayon/pensil.<br>2) Letakkan daun di meja dengan tulang daun menghadap ke atas.<br>3) Tutup daun dengan kertas.<br>4) Gosokkan krayon/pensil secara miring di atas kertas sampai bentuk daun terlihat.<br>5) Rapikan hasilnya.",["Menyiapkan alat dan bahan","Kertas di atas daun","Menggosok dengan krayon/pensil"]);
m.ur("C2","tekstur","Apa alat dan bahan untuk membuat karya frottage daun? Bagaimana caranya?","Alat dan bahan: daun bertulang menonjol, kertas HVS tipis, krayon atau pensil. Caranya: daun diletakkan di bawah kertas, lalu krayon digosokkan miring di atas kertas sampai tekstur tulang daun tampak.",["Alat dan bahan","Cara menggosok"]);
m.ur("C3","bunyi","Sebutkan masing-masing dua contoh alat musik ritmis dan melodis!","Ritmis: <b>rebana</b> dan <b>kendang</b> (juga marakas, drum, tamborin).<br>Melodis: <b>pianika</b> dan <b>rekorder</b> (juga gitar, biola, angklung, seruling).",["Dua alat musik ritmis","Dua alat musik melodis"]);
m.ur("C3","bunyi","Apa perbedaan alat musik ritmis dan melodis? Berikan masing-masing dua contoh!","Alat musik ritmis tidak bernada dan berfungsi mengatur irama/ketukan, contoh drum dan marakas. Alat musik melodis menghasilkan nada/melodi, contoh gitar dan seruling.",["Pengertian ritmis + 2 contoh","Pengertian melodis + 2 contoh"]);
m.ur("C4","tari","Sebutkan dan jelaskan tiga unsur pokok dalam gerak tari!","1) <b>Ruang</b>: tempat/area yang digunakan penari untuk bergerak.<br>2) <b>Waktu</b>: cepat-lambatnya gerakan (tempo) dan irama.<br>3) <b>Tenaga</b>: kuat-lemahnya gerakan penari.",["Ruang + penjelasan","Waktu + penjelasan","Tenaga + penjelasan"]);
m.ur("C4","tari","Mengapa penari harus memperhatikan unsur ruang, waktu, dan tenaga?","Agar tarian terlihat indah dan teratur: ruang supaya penari tidak bertabrakan dan memakai tempat dengan baik, waktu supaya gerakan sesuai irama musik, dan tenaga supaya gerakan kuat-lemahnya sesuai makna tarian.",["Ruang","Waktu","Tenaga"]);
m.ur("C5","taritrad","Sebutkan tiga tarian tradisional bertema lingkungan alam atau hewan beserta asal daerah dan inspirasi gerakannya!","1) <b>Tari Merak</b> – Jawa Barat – burung merak memamerkan bulunya.<br>2) <b>Tari Cenderawasih</b> – Papua – burung cenderawasih.<br>3) <b>Tari Gantar</b> – Kalimantan Timur – kegiatan menanam padi.<br>(Boleh juga: Tari Kupu-Kupu – Bali – kupu-kupu; Tari Nelayan – Bali – kegiatan nelayan.)",["Tiga nama tari","Asal daerah masing-masing","Inspirasi gerakan"]);
m.ur("C5","taritrad","Tuliskan dua tarian yang meniru hewan beserta asal daerahnya!","1) Tari Merak dari Jawa Barat, meniru burung merak.<br>2) Tari Cenderawasih dari Papua, meniru burung cenderawasih.",["Dua tari + asal + hewan yang ditiru"]);
})();
