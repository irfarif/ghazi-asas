(() => {
const m = mapel("pancasila", { nama: "Pendidikan Pancasila", ikon: "🦅", warna: "#be123c" });
const teks = t => `<div class="teks">${t}</div>`;

/* ================= RANGKUMAN ================= */
m.bab("identitas", "Identitas Masyarakat dan Budaya Daerah", `
<p><b>Identitas masyarakat</b> adalah <b>ciri khas</b> yang dimiliki suatu kelompok masyarakat yang <b>membedakannya</b> dari kelompok masyarakat lain.</p>
<ul><li><b>Identitas fisik</b> (berwujud, bisa dilihat dan disentuh): rumah adat, pakaian adat, makanan khas, alat musik, senjata tradisional.</li>
<li><b>Identitas sosial budaya</b> (nonfisik): <b>adat istiadat, bahasa, kesenian tradisional</b>, nilai dan kebiasaan.</li></ul>
<table><tr><th></th><th>Sunda (Jawa Barat)</th><th>Betawi (DKI Jakarta)</th><th>Bali</th></tr>
<tr><td>Bahasa</td><td>Sunda</td><td>Betawi</td><td>Bali</td></tr>
<tr><td>Rumah adat</td><td>Imah Julang Ngapak, Jolopong, Badak Heuay, Tagog Anjing</td><td><b>Rumah Kebaya</b></td><td>Gapura Candi Bentar</td></tr>
<tr><td>Makanan khas</td><td>peuyeum, surabi, colenak, karedok</td><td>kerak telor, soto Betawi</td><td>ayam betutu, sate lilit</td></tr>
<tr><td>Tarian</td><td><b>Jaipong</b>, Tari Merak, Tari Topeng</td><td>Tari Yapong, Ronggeng Blantek</td><td>Kecak, Pendet, Legong</td></tr>
<tr><td>Lainnya</td><td>angklung, wayang golek</td><td>ondel-ondel, palang pintu</td><td>Hindu, pura, Ngaben, Nyepi, subak</td></tr></table>
<div class="ingat">Rumah adat Sunda <b>Julang Ngapak</b>: atapnya melebar ke samping seperti burung yang sedang mengepakkan sayap. <b>Jolopong</b>: atap pelana memanjang sederhana. <b>Badak Heuay</b>: atap belakang lebih tinggi seperti badak menguap.</div>`);

m.bab("desa", "Pemerintahan Desa dan Kelurahan", `
<table><tr><th>Desa</th><th>Kelurahan</th></tr>
<tr><td>Dipimpin <b>Kepala Desa</b> (kades)</td><td>Dipimpin <b>Lurah</b></td></tr>
<tr><td>Kepala desa <b>dipilih langsung oleh warga</b> melalui pemilihan kepala desa (pilkades)</td><td>Lurah <b>diangkat</b> oleh bupati/wali kota (pegawai negeri)</td></tr></table>
<p><b>BPD (Badan Permusyawaratan Desa)</b> adalah lembaga musyawarah desa yang <b>menampung dan menyalurkan aspirasi warga</b> serta <b>mengawasi</b> kinerja kepala desa.</p>`);

m.bab("lingkungan", "Lingkungan Alami dan Buatan", `
<ul><li><b>Lingkungan alami</b>: terbentuk <b>secara alami</b> tanpa campur tangan manusia, contoh <b>gunung, sungai, laut, danau, hutan, pantai</b>.</li>
<li><b>Lingkungan buatan</b>: <b>dibuat oleh manusia</b> untuk memenuhi kebutuhan, contoh <b>waduk, bendungan, sawah, saluran irigasi, jalan, gedung, taman kota</b>.</li></ul>
<p>Manusia membuat <b>waduk, bendungan, dan saluran irigasi</b> untuk <b>mengairi sawah (pertanian)</b>, <b>mencegah banjir</b>, menyimpan air, dan <b>pembangkit listrik (PLTA)</b>.</p>`);

m.bab("toleransi", "Toleransi dan Gotong Royong", `
<p><b>Toleransi</b> adalah sikap <b>menghormati dan menerima perbedaan</b> suku, agama, ras, dan budaya. Contoh: tidak membeda-bedakan teman yang berbeda suku atau agama, tidak mengejek bahasa daerah teman, menghormati teman yang sedang beribadah.</p>
<p><b>Gotong royong</b> adalah <b>bekerja sama secara sukarela</b> (tanpa pamrih) untuk <b>kepentingan bersama</b>. Contoh: kerja bakti membersihkan lingkungan, membangun masjid bersama, membersihkan kelas.</p>
<div class="ingat">Dalam kerja bakti: datang tepat waktu, membawa alat sendiri, bekerja sesuai tugas, dan tidak bermalas-malasan.</div>`);

m.bab("aturan", "Aturan dan Norma", `
<p><b>Aturan atau norma</b> adalah <b>pedoman/ketentuan yang mengatur perilaku</b> manusia dalam kehidupan bermasyarakat agar tercipta ketertiban.</p>
<ul><li><b>Aturan di keluarga</b>: bangun pagi, salat tepat waktu, merapikan tempat tidur, izin jika bepergian.</li>
<li><b>Aturan di madrasah</b>: datang tepat waktu, memakai seragam, piket kelas. Fungsinya agar suasana belajar <b>tertib, aman, dan nyaman</b>.</li>
<li><b>Aturan di masyarakat</b>: membuang sampah pada tempatnya, menjaga ketenangan, ikut ronda dan kerja bakti.</li></ul>
<p><b>Norma adat</b> (aturan adat) = aturan <b>tidak tertulis</b> yang ditaati <b>turun-temurun</b> oleh masyarakat.</p>
<p>Jika tidak ada aturan: kehidupan menjadi <b>tidak tertib</b>, terjadi <b>pertengkaran</b>, dan orang berbuat sesuka hati.</p>`);

m.bab("hak", "Hak dan Kewajiban", `
<p><b>Hak</b> adalah <b>sesuatu yang harus kita terima/dapatkan</b>. <b>Kewajiban</b> adalah <b>sesuatu yang harus kita lakukan</b> dengan penuh tanggung jawab.</p>
<table><tr><th></th><th>Hak siswa</th><th>Kewajiban siswa</th></tr>
<tr><td>Madrasah</td><td>mendapat pengajaran bermutu, memakai fasilitas sekolah, belajar di kelas yang bersih</td><td>belajar sungguh-sungguh, menaati tata tertib, melaksanakan piket</td></tr>
<tr><td>Rumah</td><td>mendapat kasih sayang, makanan, tempat tinggal</td><td>membantu orang tua, berbakti, merapikan kamar</td></tr></table>
<div class="ingat"><b>Seimbang</b>: laksanakan kewajiban dahulu, baru menuntut hak. Contoh: melaksanakan <b>piket</b> (kewajiban) agar mendapat <b>kelas yang bersih</b> (hak).</div>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","identitas","Identitas masyarakat adalah ….",["ciri khas suatu kelompok masyarakat yang membedakannya dari kelompok lain","jumlah penduduk suatu daerah","nama kepala desa","peta suatu wilayah"],"Identitas = ciri khas yang membedakan.");
m.pg("A1","identitas","Ciri khas yang membedakan masyarakat Sunda dengan masyarakat Bali disebut ….",["identitas masyarakat","norma","hak","gotong royong"],"Identitas masyarakat.");
m.pg("A1","identitas","Rumah adat, bahasa daerah, dan tarian tradisional merupakan contoh ….",["identitas masyarakat","kewajiban warga","lingkungan buatan","aturan tertulis"],"Semuanya ciri khas masyarakat.");
m.pg("A2","identitas","Contoh identitas masyarakat yang berwujud fisik adalah ….",["rumah adat","bahasa daerah","adat istiadat","nilai kesopanan"],"Rumah adat bisa dilihat dan disentuh.");
m.pg("A2","identitas","Yang termasuk identitas fisik masyarakat adalah ….",["pakaian adat","bahasa daerah","kebiasaan","kepercayaan"],"Pakaian adat berwujud.");
m.pg("A2","identitas","Identitas fisik berbeda dengan identitas nonfisik karena identitas fisik ….",["berwujud dan dapat dilihat","tidak bisa dilihat","hanya berupa bahasa","hanya berupa nilai"],"Fisik = berwujud.");
m.pg("A3","identitas","Makanan khas dan tarian tradisional masyarakat Sunda adalah ….",["peuyeum dan Tari Jaipong","kerak telor dan Tari Kecak","rendang dan Tari Piring","papeda dan Tari Yospan"],"Sunda: peuyeum, Jaipong.");
m.pg("A3","identitas","Tari Jaipong berasal dari masyarakat ….",["Sunda (Jawa Barat)","Betawi","Bali","Minangkabau"],"Jaipong dari Jawa Barat.");
m.pg("A3","identitas","Surabi dan colenak adalah makanan khas dari ….",["Jawa Barat","Bali","DKI Jakarta","Sumatra Barat"],"Makanan khas Sunda.");
m.pg("A4","identitas","Rumah adat masyarakat Betawi bernama ….",["Rumah Kebaya","Rumah Gadang","Joglo","Honai"],"Betawi: Rumah Kebaya.");
m.pg("A4","identitas","Rumah Kebaya adalah rumah adat dari ….",["Betawi","Sunda","Bali","Papua"],"Rumah Kebaya = Betawi.");
m.pg("A4","identitas","Pasangan suku dan rumah adat yang benar adalah ….",["Betawi – Rumah Kebaya","Betawi – Rumah Gadang","Sunda – Rumah Kebaya","Bali – Honai"],"Betawi – Rumah Kebaya.");
m.pg("A5","identitas","Perhatikan pernyataan berikut!<br>1) Mayoritas penduduk beragama Hindu<br>2) Memiliki upacara Ngaben<br>3) Tarian khasnya Jaipong<br>4) Memiliki sistem pengairan sawah subak<br>Ciri kebudayaan masyarakat Bali ditunjukkan oleh nomor ….",["1, 2, dan 4","1, 2, dan 3","2, 3, dan 4","1, 3, dan 4"],"Jaipong dari Sunda, bukan Bali.");
m.pg("A5","identitas","Perhatikan pernyataan berikut!<br>1) Tari Kecak<br>2) Hari Raya Nyepi<br>3) Ondel-ondel<br>4) Pura sebagai tempat ibadah<br>Yang merupakan ciri kebudayaan Bali adalah ….",["1, 2, dan 4","1, 2, dan 3","2, 3, dan 4","1, 3, dan 4"],"Ondel-ondel dari Betawi.");
m.pg("A5","identitas","Tari Kecak, upacara Ngaben, dan pura merupakan ciri kebudayaan masyarakat ….",["Bali","Sunda","Betawi","Jawa"],"Bali.");
m.pg("A6","desa","Pemimpin pemerintahan desa yang dipilih langsung oleh masyarakat adalah ….",["kepala desa","lurah","camat","bupati"],"Kepala desa dipilih langsung warga.");
m.pg("A6","desa","Kepala desa dipilih melalui ….",["pemilihan langsung oleh warga desa","penunjukan oleh bupati","undian","keturunan"],"Pilkades.");
m.pg("A6","desa","Pemerintahan desa dipimpin oleh ….",["kepala desa","lurah","gubernur","RT"],"Desa → kepala desa.");
m.pg("A7","desa",teks("Kepala desa dipilih langsung oleh warga desa melalui pemilihan kepala desa. Sementara itu, lurah diangkat oleh bupati atau wali kota.")+"Perbedaan kepala desa dan lurah berdasarkan teks adalah ….",["kepala desa dipilih warga, lurah diangkat bupati/wali kota","kepala desa diangkat bupati, lurah dipilih warga","keduanya dipilih warga","keduanya diangkat presiden"],"Sesuai teks.");
m.pg("A7","desa",teks("Lurah adalah pemimpin kelurahan. Lurah bukan dipilih warga, tetapi diangkat oleh bupati atau wali kota.")+"Berdasarkan teks, lurah menjadi pemimpin karena ….",["diangkat oleh bupati atau wali kota","dipilih oleh warga","ditunjuk kepala desa","dipilih oleh BPD"],"Lurah diangkat.");
m.pg("A7","desa","Pernyataan yang benar tentang kepala desa dan lurah adalah ….",["kepala desa dipilih langsung warga, sedangkan lurah diangkat","lurah dipilih langsung warga","kepala desa diangkat oleh camat","lurah memimpin desa"],"Kepala desa dipilih, lurah diangkat.");
m.pg("A8","lingkungan","Contoh kenampakan lingkungan alami adalah ….",["gunung dan sungai","waduk dan jalan","sawah dan gedung","taman kota dan bendungan"],"Gunung dan sungai terbentuk alami.");
m.pg("A8","lingkungan","Yang termasuk lingkungan alami adalah ….",["hutan","jalan tol","sawah","waduk"],"Hutan alami; yang lain buatan.");
m.pg("A8","lingkungan","Kenampakan alam yang terbentuk tanpa campur tangan manusia adalah ….",["danau dan pantai","waduk dan irigasi","gedung dan jembatan","sawah dan kebun"],"Danau dan pantai alami.");
m.pg("A9","lingkungan","Manusia membuat waduk, bendungan, dan saluran irigasi dengan tujuan ….",["mengairi sawah dan mencegah banjir","tempat bermain anak","membuang sampah","membuat jalan raya"],"Untuk pertanian, cegah banjir, PLTA.");
m.pg("A9","lingkungan","Saluran irigasi dibuat untuk ….",["mengairi sawah","membuang limbah pabrik","tempat mandi","tempat berenang"],"Irigasi = pengairan sawah.");
m.pg("A9","lingkungan","Air dari bendungan dapat dimanfaatkan untuk ….",["pertanian dan pembangkit listrik","membuang sampah","tempat parkir","membuat jalan"],"Irigasi dan PLTA.");
m.pg("A10","toleransi","Sikap menghormati dan menerima perbedaan suku, agama, dan budaya disebut ….",["toleransi","gotong royong","egois","diskriminasi"],"Toleransi.");
m.pg("A10","toleransi","Toleransi artinya ….",["menghormati dan menerima perbedaan","memaksakan pendapat","membeda-bedakan teman","menjauhi orang yang berbeda"],"Toleransi.");
m.pg("A10","toleransi","Contoh sikap toleransi adalah ….",["menghormati teman yang berbeda agama saat beribadah","mengejek bahasa daerah teman","hanya berteman dengan yang sesuku","mengganggu teman yang beribadah"],"Menghormati ibadah orang lain.");
m.pg("A11","toleransi","Dalam kegiatan kerja bakti di lingkungan rumah, tindakan yang tepat adalah ….",["ikut bekerja sesuai tugas dengan sungguh-sungguh","bermain sendiri","hanya menonton","pulang sebelum selesai"],"Ikut bekerja dengan sungguh-sungguh.");
m.pg("A11","toleransi","Warga mengadakan kerja bakti membersihkan selokan. Sikap Doni yang tepat adalah ….",["membantu memungut sampah sesuai kemampuannya","bersembunyi di rumah","mengejek warga yang bekerja","membuang sampah ke selokan"],"Membantu sesuai kemampuan.");
m.pg("A11","toleransi","Saat kerja bakti, sebaiknya kita ….",["datang tepat waktu dan membawa alat kebersihan","datang terlambat","berbincang saja","menyuruh orang lain bekerja"],"Datang tepat waktu dan membawa alat.");
m.pg("A12","toleransi","Gotong royong artinya ….",["bekerja sama secara sukarela untuk kepentingan bersama","bekerja sendiri untuk diri sendiri","bekerja untuk mendapat upah","bersaing untuk menang"],"Gotong royong.");
m.pg("A12","toleransi","Membangun masjid bersama-sama tanpa dibayar merupakan contoh ….",["gotong royong","toleransi","persaingan","egois"],"Gotong royong.");
m.pg("A12","toleransi","Nilai gotong royong tercermin dalam kegiatan ….",["membersihkan kelas bersama-sama","bermain gim sendiri","belajar sendirian","pergi ke pasar"],"Bersama-sama untuk kepentingan bersama.");
m.pg("A13","aturan","Aturan atau norma adalah ….",["pedoman yang mengatur perilaku manusia dalam bermasyarakat","hak setiap orang","kebiasaan buruk","hukuman bagi pelanggar"],"Norma = pedoman perilaku.");
m.pg("A13","aturan","Pedoman yang mengatur perilaku agar kehidupan masyarakat tertib disebut ….",["norma","hak","identitas","musyawarah"],"Norma/aturan.");
m.pg("A13","aturan","Tujuan dibuatnya aturan dalam masyarakat adalah ….",["agar tercipta ketertiban","agar warga bebas berbuat apa saja","agar ada yang dihukum","agar warga bertengkar"],"Ketertiban.");
m.pg("A14","aturan","Fungsi aturan di madrasah adalah ….",["menciptakan suasana belajar yang tertib","membuat siswa takut","menghukum siswa","membatasi siswa bermain"],"Agar belajar tertib.");
m.pg("A14","aturan","Siswa dilarang membuat gaduh saat pelajaran berlangsung agar ….",["suasana belajar tertib dan nyaman","guru bisa beristirahat","siswa cepat pulang","kelas menjadi sepi selamanya"],"Belajar tertib.");
m.pg("A14","aturan","Datang ke madrasah tepat waktu adalah aturan yang bertujuan agar ….",["kegiatan belajar dimulai dengan tertib","siswa bisa bermain dulu","guru tidak datang","pelajaran ditunda"],"Belajar tertib.");
m.pg("A15","aturan","Contoh pelaksanaan aturan di lingkungan keluarga adalah ….",["merapikan tempat tidur setelah bangun","datang ke sekolah tepat waktu","memakai seragam sekolah","mengikuti upacara bendera"],"Aturan keluarga di rumah.");
m.pg("A15","aturan","Di rumah Zaki ada aturan menonton TV hanya setelah belajar. Sikap Zaki yang tepat adalah ….",["belajar dulu baru menonton TV","menonton TV sampai larut malam","marah kepada orang tua","diam-diam menonton TV"],"Menaati aturan keluarga.");
m.pg("A15","aturan","Contoh aturan di keluarga yang harus ditaati adalah ….",["meminta izin kepada orang tua jika bermain","membayar pajak","berhenti di lampu merah","memakai seragam sekolah"],"Izin kepada orang tua = aturan keluarga.");
m.pg("A16","hak",teks("Setiap pagi Fadil membantu ibu menyapu halaman. Di madrasah, ia selalu mengerjakan tugas dari guru dan melaksanakan piket sesuai jadwal.")+"Tindakan yang merupakan kewajiban Fadil di madrasah adalah ….",["mengerjakan tugas dan melaksanakan piket","menyapu halaman rumah","mendapat pelajaran","bermain di halaman"],"Kewajiban di madrasah: tugas dan piket.");
m.pg("A16","hak",teks("Nisa selalu merapikan kamarnya sendiri. Ia juga membantu ibu mencuci piring. Di madrasah, Nisa mematuhi tata tertib.")+"Kewajiban Nisa di rumah berdasarkan cerita adalah ….",["merapikan kamar dan membantu mencuci piring","mematuhi tata tertib madrasah","mendapat uang saku","bermain dengan teman"],"Di rumah: merapikan kamar, membantu ibu.");
m.pg("A16","hak","Contoh kewajiban siswa di madrasah adalah ….",["menaati tata tertib","mendapat pelajaran","memakai perpustakaan","mendapat nilai"],"Menaati tata tertib = kewajiban.");
m.pg("A17","hak",teks("Di madrasah, Ali belajar dengan guru yang sabar dan pintar. Ali juga boleh meminjam buku di perpustakaan.")+"Hak yang diperoleh Ali di madrasah adalah ….",["mendapat pengajaran dan memakai fasilitas perpustakaan","melaksanakan piket","mengerjakan PR","menaati tata tertib"],"Hak: pengajaran dan fasilitas.");
m.pg("A17","hak","Contoh hak siswa di madrasah adalah ….",["mendapat pelajaran dari guru","mengerjakan tugas","melaksanakan piket","memakai seragam"],"Mendapat pelajaran = hak.");
m.pg("A17","hak",teks("Saat istirahat, Rina bermain di lapangan madrasah. Ia juga memakai komputer di laboratorium bersama gurunya.")+"Hak siswa yang dinikmati Rina adalah ….",["menggunakan fasilitas madrasah","menjaga kebersihan","membayar iuran","melaksanakan piket"],"Hak memakai fasilitas.");
m.pg("A18","hak","Hak adalah ….",["sesuatu yang harus kita terima","sesuatu yang harus kita kerjakan","hukuman jika melanggar","aturan tertulis"],"Hak = yang diterima.");
m.pg("A18","hak","Sesuatu yang harus dilakukan dengan penuh tanggung jawab disebut ….",["kewajiban","hak","norma","identitas"],"Kewajiban.");
m.pg("A18","hak","Mendapat kasih sayang dari orang tua merupakan … anak.",["hak","kewajiban","aturan","identitas"],"Hak anak.");
m.pg("A19","hak","Penerapan keseimbangan hak dan kewajiban yang benar adalah ….",["belajar dengan rajin lalu bermain setelah tugas selesai","bermain terus tanpa belajar","menuntut uang saku tanpa membantu orang tua","meminta nilai bagus tanpa belajar"],"Kewajiban dulu, baru hak.");
m.pg("A19","hak","Rudi ingin kelasnya bersih. Sikap Rudi yang menunjukkan keseimbangan hak dan kewajiban adalah ….",["melaksanakan piket sesuai jadwal","menyuruh teman membersihkan","membuang sampah di laci","menunggu petugas sekolah"],"Piket = kewajiban, kelas bersih = hak.");
m.pg("A19","hak","Sebaiknya kita mendahulukan … sebelum menuntut hak.",["kewajiban","keinginan","permainan","hadiah"],"Kewajiban dulu.");
m.pg("A20","aturan","Tindakan yang mematuhi aturan dan norma di masyarakat adalah ….",["membuang sampah pada tempatnya","menyalakan musik keras malam hari","mencoret-coret tembok","menyerobot antrean"],"Membuang sampah pada tempatnya.");
m.pg("A20","aturan","Contoh perilaku menaati norma kesopanan adalah ….",["menyapa tetangga dengan ramah","berbicara kasar kepada orang tua","berteriak di masjid","melewati orang tanpa permisi"],"Menyapa dengan ramah.");
m.pg("A20","aturan","Warga yang menaati aturan di lingkungan tempat tinggal akan ….",["ikut ronda malam sesuai jadwal","memarkir motor di jalan sempit","membakar sampah di dekat rumah tetangga","membiarkan tamu tanpa lapor RT"],"Ikut ronda = menaati aturan.");

/* ================= ISIAN ================= */
m.is("B1","identitas","Identitas yang berkaitan dengan adat, bahasa, pakaian, dan kesenian tradisional disebut identitas sosial ….",["budaya"],"Identitas sosial budaya.");
m.is("B1","identitas","Bahasa daerah dan adat istiadat termasuk identitas ….",["sosial budaya","budaya","nonfisik","non fisik"],"Identitas sosial budaya (nonfisik).");
m.is("B1","identitas","Rumah adat dan pakaian adat termasuk identitas ….",["fisik"],"Identitas fisik (berwujud).");
m.is("B2","identitas","Rumah adat Sunda yang atapnya melebar ke samping seperti burung yang sedang mengepakkan sayap disebut Imah ….",["Julang Ngapak","julangngapak"],"Julang Ngapak.");
m.is("B2","identitas","Rumah adat Sunda dengan atap pelana yang memanjang dan sederhana disebut Imah ….",["Jolopong"],"Jolopong.");
m.is("B2","identitas","Rumah adat Sunda yang atap bagian belakangnya lebih tinggi seperti badak yang sedang menguap disebut Imah ….",["Badak Heuay"],"Badak Heuay.");
m.is("B3","identitas","Rumah Kebaya, ondel-ondel, dan kerak telor merupakan identitas budaya Betawi dari provinsi ….",["DKI Jakarta","Jakarta"],"DKI Jakarta.");
m.is("B3","identitas","Ondel-ondel adalah kesenian khas suku ….",["Betawi"],"Betawi.");
m.is("B3","identitas","Kerak telor adalah makanan khas dari provinsi ….",["DKI Jakarta","Jakarta"],"DKI Jakarta.");
m.is("B4","desa","Lembaga musyawarah desa yang menyalurkan aspirasi warga dan mengawasi pemerintahan desa disebut ….",["BPD","Badan Permusyawaratan Desa"],"BPD.");
m.is("B4","desa","BPD adalah singkatan dari Badan … Desa.",["Permusyawaratan"],"Badan Permusyawaratan Desa.");
m.is("B4","desa","Pemerintahan kelurahan dipimpin oleh seorang ….",["lurah"],"Lurah.");
m.is("B5","lingkungan","Gunung, sungai, dan hutan termasuk lingkungan ….",["alami","alam"],"Lingkungan alami.");
m.is("B5","lingkungan","Waduk, sawah, dan jalan raya termasuk lingkungan ….",["buatan"],"Lingkungan buatan.");
m.is("B5","lingkungan","Danau dan pantai yang terbentuk tanpa campur tangan manusia disebut lingkungan ….",["alami","alam"],"Alami.");
m.is("B6","toleransi","Sikap tidak membeda-bedakan teman yang berbeda suku atau agama disebut ….",["toleransi"],"Toleransi.");
m.is("B6","toleransi","Menghormati teman yang sedang beribadah menurut agamanya merupakan sikap ….",["toleransi"],"Toleransi.");
m.is("B6","toleransi","Perbedaan suku dan agama harus disikapi dengan saling ….",["menghormati","menghargai","toleransi"],"Saling menghormati.");
m.is("B7","toleransi","Nilai yang tercermin dalam kegiatan kerja bakti bersama adalah ….",["gotong royong","kerja sama","kebersamaan"],"Gotong royong.");
m.is("B7","toleransi","Bekerja sama secara sukarela untuk kepentingan bersama disebut ….",["gotong royong"],"Gotong royong.");
m.is("B7","toleransi","Warga membangun jembatan bersama-sama tanpa dibayar. Hal ini mencerminkan nilai ….",["gotong royong"],"Gotong royong.");
m.is("B8","aturan","Aturan tidak tertulis yang ditaati turun-temurun oleh masyarakat disebut norma ….",["adat","adat istiadat"],"Norma adat.");
m.is("B8","aturan","Pedoman yang mengatur perilaku manusia dalam masyarakat disebut ….",["norma","aturan"],"Norma.");
m.is("B8","aturan","Aturan di sekolah yang biasanya tertulis disebut tata ….",["tertib"],"Tata tertib.");
m.is("B9","hak","Mendapatkan pengajaran yang bermutu dari guru merupakan … murid.",["hak"],"Hak.");
m.is("B9","hak","Menggunakan fasilitas perpustakaan merupakan … siswa.",["hak"],"Hak.");
m.is("B9","hak","Sesuatu yang harus kita terima disebut ….",["hak"],"Hak.");
m.is("B10","hak","Kegiatan membersihkan kelas sesuai jadwal sebagai kewajiban sebelum memperoleh hak atas kelas yang bersih disebut ….",["piket","piket kelas"],"Piket.");
m.is("B10","hak","Melaksanakan piket kelas merupakan … siswa.",["kewajiban"],"Kewajiban.");
m.is("B10","hak","Sesuatu yang harus kita lakukan dengan penuh tanggung jawab disebut ….",["kewajiban"],"Kewajiban.");

/* ================= URAIAN ================= */
m.ur("C1","identitas","Sebutkan suku asli, bahasa daerah, makanan khas, dan tarian tradisional dari Jawa Barat dan DKI Jakarta!","<b>Jawa Barat</b>: suku Sunda, bahasa Sunda, makanan peuyeum/surabi/colenak, Tari Jaipong.<br><b>DKI Jakarta</b>: suku Betawi, bahasa Betawi, makanan kerak telor/soto Betawi, Tari Yapong (atau Ronggeng Blantek).",["Jawa Barat: Sunda, bahasa Sunda, makanan, Jaipong","DKI Jakarta: Betawi, bahasa Betawi, kerak telor, tari Betawi"]);
m.ur("C1","identitas","Bandingkan identitas budaya masyarakat Sunda dan Betawi: rumah adat, makanan khas, dan kesenian!","<b>Sunda</b>: rumah Julang Ngapak/Jolopong, makanan surabi/peuyeum, kesenian Jaipong dan angklung.<br><b>Betawi</b>: Rumah Kebaya, makanan kerak telor, kesenian ondel-ondel dan Tari Yapong.",["Sunda: rumah, makanan, kesenian","Betawi: rumah Kebaya, kerak telor, ondel-ondel"]);
m.ur("C2","lingkungan","Jelaskan perbedaan lingkungan alami dan buatan serta berikan masing-masing dua contoh!","Lingkungan alami terbentuk secara alami tanpa campur tangan manusia, contohnya gunung dan sungai. Lingkungan buatan dibuat oleh manusia untuk memenuhi kebutuhan, contohnya waduk dan sawah.",["Pengertian alami + 2 contoh","Pengertian buatan + 2 contoh"]);
m.ur("C2","lingkungan","Kelompokkan berikut ke lingkungan alami atau buatan: hutan, jalan raya, laut, bendungan!","Alami: hutan dan laut.<br>Buatan: jalan raya dan bendungan.",["Hutan, laut = alami","Jalan raya, bendungan = buatan"]);
m.ur("C3","toleransi","Berikan tiga contoh perilaku toleransi di lingkungan madrasah!","1) Berteman dengan semua teman tanpa membeda-bedakan suku.<br>2) Tidak mengejek logat atau bahasa daerah teman.<br>3) Menghargai pendapat teman yang berbeda saat diskusi.",["Tiga contoh toleransi yang tepat"]);
m.ur("C3","toleransi","Di kelasmu ada teman dari suku Jawa, Batak, dan Sunda. Tuliskan tiga sikap toleransi yang harus kamu lakukan!","Aku berteman dengan semuanya tanpa membeda-bedakan, tidak menertawakan logat bahasa mereka, dan mau bekerja sama dalam kelompok belajar.",["Tiga sikap yang tepat"]);
m.ur("C4","aturan","Jelaskan pentingnya aturan dalam masyarakat dan sebutkan dua akibat jika tidak ada aturan!","Aturan penting agar kehidupan masyarakat tertib, aman, dan damai, serta hak setiap orang terlindungi. Jika tidak ada aturan: 1) orang berbuat sesuka hati sehingga tidak tertib; 2) sering terjadi pertengkaran atau perkelahian.",["Pentingnya aturan: tertib/aman","Dua akibat tanpa aturan"]);
m.ur("C4","aturan","Mengapa kita harus menaati aturan? Apa yang terjadi jika di jalan raya tidak ada aturan?","Kita harus menaati aturan agar hidup tertib, aman, dan nyaman. Jika di jalan raya tidak ada aturan, kendaraan berjalan sesuka hati sehingga terjadi kemacetan dan kecelakaan.",["Alasan menaati aturan","Akibat: macet dan kecelakaan"]);
m.ur("C5","hak","Jelaskan pengertian hak dan kewajiban serta berikan masing-masing dua contoh di madrasah!","Hak adalah sesuatu yang harus kita terima. Contoh: mendapat pelajaran dari guru dan memakai fasilitas perpustakaan.<br>Kewajiban adalah sesuatu yang harus kita lakukan. Contoh: menaati tata tertib dan melaksanakan piket.",["Pengertian hak + 2 contoh","Pengertian kewajiban + 2 contoh"]);
m.ur("C5","hak","Apa hubungan antara hak dan kewajiban? Berikan contohnya di madrasah!","Hak dan kewajiban harus seimbang; kita melaksanakan kewajiban dulu baru menuntut hak. Contoh: kita melaksanakan piket (kewajiban) sehingga kita mendapat kelas yang bersih dan nyaman (hak).",["Harus seimbang, kewajiban didahulukan","Contoh piket → kelas bersih"]);
})();
