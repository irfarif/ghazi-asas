(() => {
const m = mapel("quran", { nama: "Al-Qur’an Hadis", ikon: "📖", warna: "#15803d" });
const ar = t => `<span class="ar">${t}</span>`;
const arb = t => `<span class="ar ar-blok">${t}</span>`;

const Q = ["لِإِيلَافِ قُرَيْشٍ","إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ","فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ","الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ"];
const QA = ["Karena kebiasaan orang-orang Quraisy,","(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas.","Maka hendaklah mereka menyembah Tuhan pemilik rumah ini (Ka’bah),","yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari rasa ketakutan."];
const MA = ["أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ","فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ","وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ","فَوَيْلٌ لِلْمُصَلِّينَ","الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ","الَّذِينَ هُمْ يُرَاءُونَ","وَيَمْنَعُونَ الْمَاعُونَ"];
const MAA = ["Tahukah kamu (orang) yang mendustakan agama?","Maka itulah orang yang menghardik anak yatim,","dan tidak mendorong memberi makan orang miskin.","Maka celakalah orang yang salat,","(yaitu) orang-orang yang lalai terhadap salatnya,","yang berbuat ria,","dan enggan (memberikan) bantuan."];
const TK = ["أَلْهَاكُمُ التَّكَاثُرُ","حَتَّىٰ زُرْتُمُ الْمَقَابِرَ","كَلَّا سَوْفَ تَعْلَمُونَ","ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ","كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ","لَتَرَوُنَّ الْجَحِيمَ","ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ","ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ"];
const TKA = ["Bermegah-megahan telah melalaikan kamu,","sampai kamu masuk ke dalam kubur.","Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu),","kemudian sekali-kali tidak! Kelak kamu akan mengetahui.","Sekali-kali tidak! Sekiranya kamu mengetahui dengan pasti,","niscaya kamu benar-benar akan melihat neraka Jahim,","kemudian kamu benar-benar akan melihatnya dengan mata kepala sendiri,","kemudian kamu benar-benar akan ditanya pada hari itu tentang kenikmatan (yang megah di dunia itu)."];
const tabelSurah = (A, T) => `<table>${A.map((a, i) => `<tr><td style="width:2.5em">${i + 1}</td><td style="text-align:right">${ar(a)}</td><td>${T[i]}</td></tr>`).join("")}</table>`;

/* ================= RANGKUMAN ================= */
m.bab("quraisy", "Surah Quraisy", `
<p><b>Surah Quraisy</b> adalah surah ke-106, terdiri atas <b>4 ayat</b>, termasuk surah <b>Makkiyah</b>. <i>Quraisy</i> adalah nama <b>suku</b> Nabi Muhammad saw. yang menjaga Ka’bah di Makkah, jadi Quraisy artinya <b>suku Quraisy</b>.</p>
${tabelSurah(Q, QA)}
<h3>Isi kandungan</h3>
<ul><li>Kaum Quraisy terbiasa berdagang: <b>musim dingin ke Yaman</b> dan <b>musim panas ke Syam</b>.</li>
<li>Allah memberi mereka <b>dua nikmat</b> (ayat 4): <b>makanan</b> (bebas dari lapar) dan <b>rasa aman</b> (bebas dari ketakutan).</li>
<li>Pokok pembahasannya: perintah <b>menyembah Allah dan bersyukur</b> atas nikmat-Nya.</li></ul>
<div class="ingat">${ar("مِنْ خَوْفٍ")} = <b>dari ketakutan</b> · ${ar("مِنْ جُوعٍ")} = <b>dari kelaparan</b> · ${ar("رِحْلَةَ")} = perjalanan · ${ar("الشِّتَاءِ")} = musim dingin · ${ar("الصَّيْفِ")} = musim panas · ${ar("الْبَيْتِ")} = rumah (Ka’bah)</div>`);

m.bab("maun", "Surah Al-Ma’un", `
<p><b>Surah Al-Ma’un</b> adalah surah ke-107, terdiri atas <b>7 ayat</b>, termasuk surah <b>Makkiyah</b>. Al-Ma’un artinya <b>barang-barang yang berguna</b> (bantuan).</p>
${tabelSurah(MA, MAA)}
<h3>Ciri-ciri pendusta agama</h3>
<ul><li><b>Menghardik</b> (membentak, berbuat kasar kepada) <b>anak yatim</b>.</li>
<li><b>Tidak menganjurkan memberi makan orang miskin</b>.</li></ul>
<h3>Orang salat yang celaka</h3>
<ul><li>Lalai terhadap salatnya (menunda-nunda, tidak khusyuk).</li><li>Berbuat <b>ria</b> (ingin dipuji orang).</li><li><b>Enggan memberi bantuan</b> kepada orang lain.</li></ul>
<div class="ingat">Balasannya adalah <b>${ar("وَيْلٌ")} (wail)</b>, yaitu celaka (kecelakaan besar/neraka Wail). Ayat 1 ${ar("يُكَذِّبُ بِالدِّينِ")} dibaca <b>yukadzdzibu bid-dīn</b> = mendustakan agama.</div>`);

m.bab("takatsur", "Surah At-Takatsur", `
<p><b>Surah At-Takatsur</b> adalah surah ke-102, terdiri atas <b>8 ayat</b>, termasuk surah <b>Makkiyah</b> (turun di Makkah). At-Takatsur artinya <b>bermegah-megahan</b>.</p>
${tabelSurah(TK, TKA)}
<h3>Isi kandungan</h3>
<ul><li>Allah <b>melarang bermegah-megahan</b> dengan harta, anak, dan kedudukan.</li>
<li>Sibuk mengumpulkan harta dapat membuat lupa kepada <b>Allah, ibadah, dan kematian</b>.</li>
<li>Semua nikmat akan <b>ditanya/dipertanggungjawabkan pada hari kiamat</b> (ayat 8).</li>
<li>Kita boleh berlomba-lomba, tetapi <b>dalam kebaikan</b> (<i>fastabiqul khairat</i>).</li></ul>
<h3>Sikap muslim ketika punya harta berlebih</h3>
<ul><li>Bersyukur dan tidak sombong/pamer.</li><li>Bersedekah dan membantu orang yang membutuhkan.</li><li>Menggunakan harta untuk kebaikan dan tidak boros.</li></ul>
<div class="ingat">${ar("الْيَقِينِ")} = <b>yakin/pasti</b> · ${ar("كَلَّا سَوْفَ تَعْلَمُونَ")} = sekali-kali tidak! Kelak kamu akan mengetahui · ${ar("أَلْهَاكُمُ التَّكَاثُرُ")} = bermegah-megahan telah melalaikan kamu.</div>`);

m.bab("hadis", "Hadis tentang Takwa dan Akhlak", `
${arb("اتَّقِ اللهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ")}
<p><i>“Bertakwalah kepada Allah di mana pun kamu berada. Iringilah perbuatan buruk dengan perbuatan baik, niscaya kebaikan itu akan menghapusnya. Dan bergaullah dengan manusia dengan akhlak yang baik.”</i> (HR. At-Tirmizi)</p>
<h3>Takwa</h3><p><b>Takwa</b> artinya <b>melaksanakan perintah Allah dan menjauhi larangan-Nya</b>, di mana saja dan kapan saja, walaupun tidak ada orang yang melihat.</p>
<p>Manfaat takwa: dicintai Allah, diberi jalan keluar dari kesulitan, diberi rezeki, hidup tenang, dan selamat di dunia dan akhirat.</p>
<h3>Akhlak mulia</h3><p>Bergaul dengan akhlak yang baik artinya bersikap <b>sopan, jujur, ramah, suka menolong, dan tidak menyakiti</b> orang lain.</p>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","quraisy","Surah Quraisy artinya ….",["suku Quraisy","barang-barang yang berguna","bermegah-megahan","pertolongan"],"Quraisy adalah nama suku Nabi Muhammad saw. Barang yang berguna = Al-Ma’un, bermegah-megahan = At-Takatsur.");
m.pg("A1","quraisy","Quraisy adalah nama … Nabi Muhammad saw.",["suku","kota","gunung","sungai"],"Quraisy adalah nama suku yang menjaga Ka’bah.");
m.pg("A1","quraisy","Surah yang namanya berarti “suku Quraisy” adalah surah ….",["Quraisy","Al-Ma’un","At-Takatsur","Al-Fil"],"Surah Quraisy.");
m.pg("A2","quraisy",`${arb(Q[2])}Potongan ayat di atas adalah Surah Quraisy ayat ke- ….`,["3","1","2","4"],"Ayat 3: perintah menyembah Tuhan pemilik Ka’bah.");
m.pg("A2","quraisy",`${arb(Q[1])}Potongan ayat di atas adalah Surah Quraisy ayat ke- ….`,["2","1","3","4"],"Ayat 2 menyebut perjalanan musim dingin dan musim panas.");
m.pg("A2","quraisy",`${arb(Q[3])}Potongan ayat di atas adalah Surah Quraisy ayat ke- ….`,["4","1","2","3"],"Ayat 4 (ayat terakhir) menyebut nikmat makanan dan rasa aman.");
m.pg("A3","quraisy",`Arti dari ${ar("إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ")} adalah ….`,["kebiasaan mereka bepergian pada musim dingin dan musim panas","maka hendaklah mereka menyembah Tuhan pemilik rumah ini","yang memberi makan mereka untuk menghilangkan lapar","karena kebiasaan orang-orang Quraisy"],"Ayat 2 menceritakan kebiasaan perjalanan dagang kaum Quraisy.");
m.pg("A3","quraisy",`Kata ${ar("رِحْلَةَ")} dalam Surah Quraisy artinya ….`,["perjalanan","musim","rumah","makanan"],"Rihlah = perjalanan.");
m.pg("A3","quraisy",`Kata ${ar("الشِّتَاءِ")} dan ${ar("الصَّيْفِ")} artinya ….`,["musim dingin dan musim panas","musim hujan dan musim kemarau","pagi dan sore","siang dan malam"],"Asy-syitā’ = musim dingin, ash-shaif = musim panas.");
m.pg("A4","quraisy","Dua nikmat Allah kepada kaum Quraisy yang disebut dalam ayat keempat adalah ….",["makanan dan rasa aman","harta dan anak","ilmu dan kekuasaan","kesehatan dan kekayaan"],"Ayat 4: Allah memberi makan (dari lapar) dan rasa aman (dari ketakutan).");
m.pg("A4","quraisy",`${arb(Q[3])}Ayat tersebut menjelaskan bahwa Allah telah memberi kaum Quraisy ….`,["makanan dan keamanan","kapal dan unta","emas dan perak","istana dan kebun"],"Ath‘amahum = memberi mereka makan; āmanahum = memberi mereka rasa aman.");
m.pg("A4","quraisy","Allah membebaskan kaum Quraisy dari kelaparan dan ….",["ketakutan","kemiskinan","penyakit","kebodohan"],"Min jū‘ (dari lapar) dan min khauf (dari ketakutan).");
m.pg("A5","quraisy",`Arti lafal ${ar("مِنْ خَوْفٍ")} adalah ….`,["dari ketakutan","dari kelaparan","dari kemiskinan","dari kesedihan"],"Khauf = takut. Min khauf = dari ketakutan.");
m.pg("A5","quraisy",`Arti lafal ${ar("مِنْ جُوعٍ")} adalah ….`,["dari kelaparan","dari ketakutan","dari kehausan","dari kegelapan"],"Jū‘ = lapar. Min jū‘ = dari kelaparan.");
m.pg("A5","quraisy",`Lafal yang artinya “dari ketakutan” adalah ….`,[ar("مِنْ خَوْفٍ"),ar("مِنْ جُوعٍ"),ar("رَبَّ هَٰذَا الْبَيْتِ"),ar("رِحْلَةَ الشِّتَاءِ")],"Min khauf = dari ketakutan.");
m.pg("A6","quraisy","Pelajaran dari Surah Quraisy adalah kita wajib … atas nikmat Allah.",["bersyukur","bersedih","berbangga diri","berlomba-lomba pamer"],"Allah sudah memberi makanan dan rasa aman, maka kita wajib bersyukur dan menyembah-Nya.");
m.pg("A6","quraisy","Cara bersyukur atas nikmat makanan sesuai pesan Surah Quraisy adalah ….",["berdoa sebelum makan dan tidak menyisakan makanan","membuang makanan yang tidak disukai","makan sambil berjalan","mengeluh karena lauknya sedikit"],"Bersyukur: berdoa, menghabiskan makanan, dan tetap beribadah kepada Allah.");
m.pg("A6","quraisy","Surah Quraisy memerintahkan kaum Quraisy untuk menyembah ….",["Tuhan pemilik Ka’bah, yaitu Allah","berhala di sekitar Ka’bah","para pemimpin Quraisy","matahari dan bulan"],"Ayat 3: fal ya‘budū rabba hādzal bait = hendaklah mereka menyembah Tuhan pemilik rumah ini (Ka’bah).");
m.pg("A7","maun","Perilaku yang termasuk mendustakan agama menurut Surah Al-Ma’un adalah ….",["menghardik anak yatim","menyantuni anak yatim","memberi makan orang miskin","salat tepat waktu"],"Pendusta agama: menghardik anak yatim dan tidak menganjurkan memberi makan orang miskin.");
m.pg("A7","maun","Doni membentak dan mengusir anak yatim yang meminta makanan. Menurut Surah Al-Ma’un, perbuatan Doni termasuk ciri orang yang ….",["mendustakan agama","bersyukur","bertakwa","dermawan"],"Menghardik anak yatim adalah ciri pendusta agama (ayat 2).");
m.pg("A7","maun","Seseorang punya banyak makanan, tetapi tidak pernah mau mengajak orang lain memberi makan orang miskin. Menurut Surah Al-Ma’un, ia termasuk ….",["pendusta agama","orang yang bersyukur","orang yang jujur","orang yang sabar"],"Ayat 3: tidak mendorong memberi makan orang miskin = ciri pendusta agama.");
m.pg("A8","maun","Bunyi ayat kedua Surah Al-Ma’un adalah ….",[ar(MA[1]),ar(MA[0]),ar(MA[2]),ar(MA[3])],"Ayat 2: fa dzālikal-ladzī yadu‘‘ul-yatīm.");
m.pg("A8","maun","Lanjutan ayat pertama Surah Al-Ma’un adalah ….",[ar(MA[1]),ar(Q[1]),ar(TK[1]),ar(MA[6])],"Setelah ayat 1 (ara’aital-ladzī…) adalah ayat 2: fa dzālikal-ladzī yadu‘‘ul-yatīm.");
m.pg("A8","maun",`${arb("فَذَٰلِكَ الَّذِي ...")}Lanjutan potongan ayat kedua Surah Al-Ma’un di atas adalah ….`,[ar("يَدُعُّ الْيَتِيمَ"),ar("يُكَذِّبُ بِالدِّينِ"),ar("يَمْنَعُونَ الْمَاعُونَ"),ar("هُمْ يُرَاءُونَ")],"Fa dzālikal-ladzī yadu‘‘ul-yatīm.");
m.pg("A9","maun","Surah Al-Ma’un artinya ….",["barang-barang yang berguna","bermegah-megahan","suku Quraisy","hari kiamat"],"Al-Ma’un = barang-barang yang berguna (bantuan).");
m.pg("A9","maun","Al-Ma’un berarti barang-barang yang ….",["berguna","mahal","indah","besar"],"Al-Ma’un = barang yang berguna, seperti alat rumah tangga yang biasa dipinjamkan.");
m.pg("A9","maun","Surah ke-107 yang berarti “barang-barang yang berguna” adalah surah ….",["Al-Ma’un","Quraisy","At-Takatsur","Al-Kautsar"],"Al-Ma’un adalah surah ke-107.");
m.pg("A10","maun","Menurut Surah Al-Ma’un, orang yang mendustakan agama suka menghardik ….",["anak yatim","orang tua","guru","tetangga kaya"],"Ayat 2: yadu‘‘ul-yatīm = menghardik anak yatim.");
m.pg("A10","maun",`Kata ${ar("الْيَتِيمَ")} artinya ….`,["anak yatim","orang miskin","orang salat","agama"],"Al-yatīm = anak yatim, yaitu anak yang ayahnya sudah meninggal.");
m.pg("A10","maun","Anak yatim adalah anak yang ….",["ayahnya sudah meninggal ketika ia masih kecil","tidak punya teman","tidak bersekolah","tinggal di kota"],"Anak yatim = anak yang ditinggal wafat ayahnya sebelum baligh. Mereka harus disayangi, bukan dihardik.");
m.pg("A11","maun",`${arb(MA[6])}Ayat tersebut menjelaskan salah satu tanda pendusta agama, yaitu ….`,["enggan memberi bantuan","rajin bersedekah","suka berbagi","menyayangi anak yatim"],"Wa yamna‘ūnal-mā‘ūn = dan enggan memberikan bantuan.");
m.pg("A11","maun","Rudi tidak mau meminjamkan pensilnya kepada teman, padahal ia punya banyak. Sikap ini sesuai dengan ciri orang yang dicela dalam Surah Al-Ma’un, yaitu ….",["enggan memberi bantuan","menghardik anak yatim","lalai dalam salat","berbuat ria"],"Ayat 7: enggan memberikan bantuan (barang yang berguna).");
m.pg("A11","maun","Lawan dari sifat enggan memberi bantuan adalah ….",["suka menolong","kikir","sombong","malas"],"Enggan membantu = kikir; lawannya suka menolong/dermawan.");
m.pg("A12","takatsur","Dalam Surah At-Takatsur, Allah melarang manusia ….",["bermegah-megahan dengan harta","bersedekah","menuntut ilmu","berbakti kepada orang tua"],"Alhākumut-takātsur: bermegah-megahan telah melalaikan kamu.");
m.pg("A12","takatsur","Perbuatan yang dicela dalam Surah At-Takatsur adalah ….",["sibuk memperbanyak harta sampai lupa kepada Allah","rajin bekerja untuk keluarga","menabung untuk sekolah","bersedekah setiap hari Jumat"],"Yang dicela adalah bermegah-megahan sampai lalai kepada Allah.");
m.pg("A12","takatsur","Bermegah-megahan dengan harta dapat menyebabkan seseorang ….",["lalai kepada Allah","rajin beribadah","rendah hati","suka menolong"],"Ayat 1: bermegah-megahan telah melalaikan kamu.");
m.pg("A13","takatsur",`Arti lafal ${ar("الْيَقِينِ")} adalah ….`,["yakin","ragu-ragu","neraka","kenikmatan"],"Al-yaqīn = keyakinan/pasti.");
m.pg("A13","takatsur",`Lafal ${ar("عِلْمَ الْيَقِينِ")} artinya ….`,["pengetahuan yang yakin","neraka Jahim","mata kepala sendiri","kenikmatan dunia"],"‘Ilmal-yaqīn = pengetahuan yang pasti/yakin.");
m.pg("A13","takatsur",`Lafal ${ar("عَيْنَ الْيَقِينِ")} artinya ….`,["dengan mata kepala sendiri (penglihatan yang yakin)","pengetahuan yang ragu","kenikmatan dunia","bermegah-megahan"],"‘Ainal-yaqīn = melihat dengan mata kepala sendiri, dengan yakin.");
m.pg("A14","takatsur","Contoh sikap tidak bermegah-megahan dengan harta adalah ….",["memakai barang sederhana dan suka bersedekah","memamerkan mainan mahal kepada teman","membeli barang yang tidak dibutuhkan","mengejek teman yang tidak punya"],"Hidup sederhana dan bersedekah = tidak bermegah-megahan.");
m.pg("A14","takatsur","Hana mendapat sepatu baru yang mahal. Sikap Hana yang sesuai pesan Surah At-Takatsur adalah ….",["bersyukur dan tidak memamerkannya","memamerkan kepada semua teman","mengejek sepatu teman yang lama","meminta sepatu yang lebih mahal lagi"],"Bersyukur dan tidak pamer = tidak bermegah-megahan.");
m.pg("A14","takatsur","Uang saku Rafi lebih banyak dari temannya. Sikap terpuji Rafi adalah ….",["menabung dan bersedekah sebagian","membeli jajan sebanyak-banyaknya","memamerkan uangnya","menghina teman yang uangnya sedikit"],"Menabung dan bersedekah = menggunakan harta untuk kebaikan.");
m.pg("A15","takatsur",`Arti penggalan ayat ${ar("كَلَّا سَوْفَ تَعْلَمُونَ")} adalah ….`,["sekali-kali tidak! Kelak kamu akan mengetahui","sampai kamu masuk ke dalam kubur","bermegah-megahan telah melalaikan kamu","kamu pasti melihat neraka Jahim"],"Kallā saufa ta‘lamūn = sekali-kali tidak! Kelak kamu akan mengetahui.");
m.pg("A15","takatsur",`Lafal ${ar("سَوْفَ تَعْلَمُونَ")} artinya ….`,["kelak kamu akan mengetahui","kamu masuk kubur","kamu akan ditanya","kamu bermegah-megahan"],"Saufa ta‘lamūn = kelak kamu akan mengetahui.");
m.pg("A15","takatsur",`Kalimat ${ar("كَلَّا سَوْفَ تَعْلَمُونَ")} terdapat pada Surah At-Takatsur ayat ….`,["3","1","2","8"],"Ayat 3 (dan diulang dengan tsumma pada ayat 4).");
m.pg("A16","takatsur","Menurut Surah At-Takatsur, orang yang sibuk mencari harta duniawi bisa lupa kepada ….",["Allah, ibadah, dan kematian","teman bermain","pekerjaan","makan dan minum"],"Bermegah-megahan melalaikan dari Allah dan ibadah sampai ajal datang.");
m.pg("A16","takatsur",`${arb(TK[1])}Ayat tersebut mengingatkan manusia tentang ….`,["kematian (masuk ke dalam kubur)","perjalanan dagang","musim dingin","anak yatim"],"Hattā zurtumul-maqābir = sampai kamu masuk ke dalam kubur. Kita diingatkan tentang kematian.");
m.pg("A16","takatsur","Walaupun sibuk bekerja mencari harta, seorang muslim tidak boleh lupa ….",["salat dan beribadah kepada Allah","bermain gim","membeli barang mewah","berlibur"],"Harta tidak boleh membuat lalai dari salat dan ibadah.");
m.pg("A17","takatsur",`Arti potongan ayat ${ar("أَلْهَاكُمُ التَّكَاثُرُ")} adalah ….`,["bermegah-megahan telah melalaikan kamu","sampai kamu masuk ke dalam kubur","kelak kamu akan mengetahui","kamu pasti akan ditanya"],"Alhākumut-takātsur = bermegah-megahan telah melalaikan kamu.");
m.pg("A17","takatsur",`Kata ${ar("التَّكَاثُرُ")} artinya ….`,["bermegah-megahan","barang yang berguna","anak yatim","kenikmatan"],"At-takātsur = bermegah-megahan/memperbanyak harta.");
m.pg("A17","takatsur","Ayat pertama Surah At-Takatsur berbunyi ….",[ar(TK[0]),ar(MA[0]),ar(Q[0]),ar(TK[2])],"Ayat 1: alhākumut-takātsur.");
m.pg("A18","hadis","Bertakwa kepada Allah artinya ….",["melaksanakan perintah Allah dan menjauhi larangan-Nya","takut kepada guru","rajin bermain","banyak bicara"],"Takwa = menjalankan perintah Allah dan menjauhi larangan-Nya.");
m.pg("A18","hadis",`Dalam hadis ${ar("اتَّقِ اللهَ حَيْثُمَا كُنْتَ")}, kita diperintahkan bertakwa kepada Allah ….`,["di mana pun kita berada","hanya di masjid","hanya ketika dilihat orang","hanya di bulan Ramadan"],"Haitsumā kunta = di mana pun kamu berada.");
m.pg("A18","hadis","Contoh perilaku bertakwa adalah ….",["salat lima waktu dan tidak berbohong","menunda salat karena bermain","mencontek ketika ujian","berkata kasar kepada teman"],"Salat = melaksanakan perintah; tidak berbohong = menjauhi larangan.");
m.pg("A19","hadis","Manfaat menaati aturan Allah bagi orang yang bertakwa adalah ….",["dicintai Allah dan diberi jalan keluar dari kesulitan","menjadi sombong","dijauhi teman","hidup menjadi susah"],"Orang bertakwa dicintai Allah, diberi jalan keluar, dan diberi rezeki.");
m.pg("A19","hadis","Orang yang bertakwa akan mendapatkan ….",["kebahagiaan di dunia dan akhirat","banyak musuh","kesedihan terus-menerus","hukuman dari Allah"],"Takwa membawa keselamatan dan kebahagiaan dunia akhirat.");
m.pg("A19","hadis","Allah menjanjikan bagi orang yang bertakwa ….",["jalan keluar dan rezeki dari arah yang tidak disangka","harta tanpa bekerja","bebas dari kewajiban salat","boleh berbuat sesuka hati"],"QS. At-Thalaq 2–3: Allah memberi jalan keluar dan rezeki bagi orang bertakwa.");
m.pg("A20","hadis",`Makna ${ar("وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ")} adalah ….`,["bergaullah dengan manusia dengan akhlak yang baik","bertakwalah di mana saja","iringilah keburukan dengan kebaikan","jauhilah manusia"],"Khāliqin-nāsa bi khuluqin hasan = bergaullah dengan manusia dengan akhlak yang baik.");
m.pg("A20","hadis","Contoh bergaul dengan sesama manusia dengan akhlak mulia adalah ….",["ramah, jujur, dan suka menolong","suka mengejek","sombong dan pemarah","suka memotong pembicaraan"],"Akhlak mulia: ramah, jujur, sopan, suka menolong.");
m.pg("A20","hadis","Rasulullah saw. memerintahkan kita bergaul dengan akhlak yang baik kepada ….",["semua manusia","teman yang kaya saja","keluarga saja","orang yang kita sukai saja"],"Khāliqin-nās: kepada manusia (semua orang).");

/* ================= ISIAN ================= */
m.is("B1","quraisy","Pokok pembahasan Surah Quraisy adalah perintah untuk … dan bersyukur kepada Allah atas nikmat makanan dan keamanan.",["menyembah Allah","beribadah kepada Allah","menyembah","beribadah"],"Ayat 3: perintah menyembah Tuhan pemilik Ka’bah.");
m.is("B1","quraisy","Surah Quraisy mengajarkan kita untuk … atas nikmat Allah.",["bersyukur","syukur"],"Pesan utama: bersyukur dan menyembah Allah.");
m.is("B1","quraisy","Surah Quraisy terdiri atas … ayat.",["4","empat"],"Surah Quraisy ada 4 ayat.");
m.is("B2","maun",`Tulisan latin lafal ${ar("يُكَذِّبُ بِالدِّينِ")} adalah ….`,["yukadzdzibu biddin","yukadzibu biddin","yukaddzibu biddin","yukadzdzibu bid din","yukazzibu biddin","yukadzdzibu biddiin"],"Dibaca: yukadzdzibu bid-dīn.");
m.is("B2","maun",`Tulisan latin lafal ${ar("يَدُعُّ الْيَتِيمَ")} adalah ….`,["yadu’ul yatim","yaduul yatim","yadu’’ul yatim","yadu ul yatim","yaduʼʼul yatiim"],"Dibaca: yadu‘‘ul-yatīm.");
m.is("B2","maun",`Tulisan latin lafal ${ar("وَيَمْنَعُونَ الْمَاعُونَ")} adalah ….`,["wa yamna’unal ma’un","wayamnaunal maun","wa yamnaunal maun","wayamna’unal ma’un"],"Dibaca: wa yamna‘ūnal-mā‘ūn.");
m.is("B3","quraisy","Kaum Quraisy biasa melakukan perjalanan dagang pada musim dingin dan musim ….",["panas"],"Rihlatasy-syitā’i wash-shaif: musim dingin dan musim panas.");
m.is("B3","quraisy","Pada musim dingin, kaum Quraisy berdagang ke negeri ….",["Yaman"],"Musim dingin ke Yaman, musim panas ke Syam.");
m.is("B3","quraisy","Pada musim panas, kaum Quraisy berdagang ke negeri ….",["Syam","Syria","Suriah"],"Musim panas ke Syam.");
m.is("B4","quraisy","Dua nikmat Allah yang dijelaskan dalam Surah Quraisy adalah makanan dan ….",["rasa aman","keamanan","aman"],"Ayat 4: makanan (dari lapar) dan rasa aman (dari ketakutan).");
m.is("B4","quraisy","Allah memberi makan kaum Quraisy untuk menghilangkan ….",["lapar","kelaparan","rasa lapar"],"Ath‘amahum min jū‘ = memberi mereka makan dari kelaparan.");
m.is("B4","quraisy","Allah mengamankan kaum Quraisy dari rasa ….",["takut","ketakutan"],"Āmanahum min khauf = mengamankan mereka dari ketakutan.");
m.is("B5","maun","Orang yang menghardik anak yatim dan tidak menganjurkan memberi makan orang miskin disebut pendusta ….",["agama"],"Yukadzdzibu bid-dīn = mendustakan agama.");
m.is("B5","maun","Menurut Surah Al-Ma’un, pendusta agama tidak menganjurkan memberi makan orang ….",["miskin"],"Ayat 3: tha‘āmil-miskīn = makanan orang miskin.");
m.is("B5","maun","Menurut Surah Al-Ma’un, pendusta agama suka menghardik anak ….",["yatim"],"Ayat 2: yadu‘‘ul-yatīm.");
m.is("B6","maun","Dalam Surah Al-Ma’un, orang yang salat dinyatakan celaka karena … terhadap salatnya.",["lalai","melalaikan"],"Ayat 5: ‘an shalātihim sāhūn = lalai terhadap salatnya.");
m.is("B6","maun","Selain lalai, orang salat yang celaka juga suka berbuat … (ingin dipuji orang).",["ria","riya","riya’"],"Ayat 6: yurā’ūn = berbuat ria.");
m.is("B6","maun","Orang yang salat hanya ingin dipuji orang lain disebut berbuat ….",["ria","riya","riya’"],"Ingin dipuji = ria.");
m.is("B7","maun",`Balasan bagi orang yang salat tetapi lalai dan ria adalah ${ar("وَيْلٌ")}, artinya ….`,["celaka","kecelakaan","neraka Wail","kecelakaan besar"],"Fawailul lil-mushallīn = maka celakalah orang yang salat (yang lalai).");
m.is("B7","maun","Kata “wail” dalam Surah Al-Ma’un artinya ….",["celaka","kecelakaan","neraka Wail"],"Wail = celaka.");
m.is("B7","maun",`Ayat ${ar("فَوَيْلٌ لِلْمُصَلِّينَ")} artinya maka … orang yang salat.`,["celakalah","celaka"],"Maka celakalah orang yang salat (yang lalai).");
m.is("B8","takatsur","Surah At-Takatsur diturunkan di kota Makkah, maka termasuk golongan surah ….",["Makkiyah","Makiyah","Makkiyyah"],"Turun di Makkah = Makkiyah.");
m.is("B8","takatsur","Surah yang turun di Makkah disebut surah Makkiyah, sedangkan yang turun di Madinah disebut surah ….",["Madaniyah","Madaniyyah"],"Turun di Madinah = Madaniyah.");
m.is("B8","takatsur","Surah At-Takatsur terdiri atas … ayat.",["8","delapan"],"Surah At-Takatsur ada 8 ayat.");
m.is("B9","takatsur","Dalam Islam, kita boleh berlomba-lomba dalam hal ….",["kebaikan","berbuat baik","kebajikan","fastabiqul khairat"],"Fastabiqul khairat = berlomba-lombalah dalam kebaikan.");
m.is("B9","takatsur","“Fastabiqul khairat” artinya berlomba-lombalah dalam ….",["kebaikan","kebajikan"],"Fastabiqul khairat = berlomba-lomba dalam kebaikan.");
m.is("B9","takatsur","Kita tidak boleh berlomba-lomba dalam bermegah-megahan, tetapi boleh berlomba-lomba dalam ….",["kebaikan","kebajikan","ibadah"],"Berlomba dalam kebaikan, misalnya rajin belajar, bersedekah, dan beribadah.");
m.is("B10","takatsur","Segala nikmat yang kita miliki di dunia akan dipertanggungjawabkan pada hari ….",["kiamat","akhir","hari kiamat","hari akhir","pembalasan"],"Ayat 8: kamu pasti akan ditanya pada hari itu (hari kiamat) tentang kenikmatan.");
m.is("B10","takatsur","Ayat terakhir Surah At-Takatsur menjelaskan bahwa manusia akan … tentang kenikmatan yang dimilikinya.",["ditanya","dimintai pertanggungjawaban"],"Latus’alunna = kamu pasti akan ditanya.");
m.is("B10","takatsur",`Kata ${ar("النَّعِيمِ")} dalam ayat 8 Surah At-Takatsur artinya ….`,["kenikmatan","nikmat"],"An-na‘īm = kenikmatan.");

/* ================= URAIAN ================= */
m.ur("C1","quraisy",`Tuliskan arti potongan ayat berikut!${arb(Q[3])}`,QA[3],["Memberi makan dari kelaparan","Mengamankan dari ketakutan"]);
m.ur("C1","quraisy",`Tuliskan arti potongan ayat berikut!${arb(Q[2])}`,QA[2],["Menyembah","Tuhan pemilik rumah ini (Ka’bah)"]);
m.ur("C2","maun",`Berilah harakat pada potongan ayat berikut!${arb("فذلك الذي يدع اليتيم")}`,arb(MA[1]),["Harakat benar pada setiap huruf","Tasydid pada يَدُعُّ"],"Dibaca: fa dzālikal-ladzī yadu‘‘ul-yatīm.");
m.ur("C2","maun",`Berilah harakat pada potongan ayat berikut!${arb("ولا يحض على طعام المسكين")}`,arb(MA[2]),["Harakat benar pada setiap huruf","Tasydid pada يَحُضُّ"],"Dibaca: wa lā yahuddu ‘alā tha‘āmil-miskīn.");
m.ur("C3","maun","Jelaskan siapa saja yang termasuk orang yang mendustakan agama menurut Surah Al-Ma’un!",
 "Orang yang mendustakan agama adalah orang yang menghardik (berbuat kasar kepada) anak yatim dan tidak menganjurkan memberi makan orang miskin.",["Menghardik anak yatim","Tidak menganjurkan memberi makan orang miskin"]);
m.ur("C3","maun","Sebutkan ciri-ciri orang yang celaka dalam Surah Al-Ma’un ayat 4–7!",
 "Orang yang salat tetapi lalai terhadap salatnya, berbuat ria (ingin dipuji orang), dan enggan memberikan bantuan kepada orang lain.",["Lalai dalam salat","Ria","Enggan memberi bantuan"]);
m.ur("C4","takatsur","Uraikan sikap seorang muslim ketika memiliki harta berlebih sesuai pesan Surah At-Takatsur!",
 "Bersyukur kepada Allah, tidak sombong dan tidak pamer, menyisihkan sebagian harta untuk sedekah dan membantu orang miskin, serta tidak lalai beribadah walaupun sibuk dengan hartanya.",["Bersyukur dan tidak pamer/sombong","Bersedekah/membantu orang lain","Tidak lalai beribadah"]);
m.ur("C4","takatsur","Jika kamu memiliki mainan yang banyak dan bagus, bagaimana sikapmu agar tidak termasuk orang yang bermegah-megahan?",
 "Aku bersyukur kepada Allah, tidak memamerkan mainan kepada teman, mau meminjamkan atau berbagi dengan teman, dan tidak lupa salat dan belajar karena bermain.",["Bersyukur","Tidak pamer","Mau berbagi","Tidak lalai ibadah"]);
m.ur("C5","takatsur","Jelaskan hikmah mengingat kematian bagi anak yang rajin belajar dan beribadah!",
 "Mengingat kematian membuat kita sadar bahwa hidup di dunia hanya sementara dan semua perbuatan akan dipertanggungjawabkan. Karena itu kita semakin rajin belajar dan beribadah, tidak menyia-nyiakan waktu, tidak sombong, dan selalu berbuat baik sebagai bekal di akhirat.",["Hidup di dunia sementara","Semakin rajin beribadah dan belajar","Menjadi bekal akhirat / tidak sombong"]);
m.ur("C5","takatsur","Surah At-Takatsur ayat 2 mengingatkan kita tentang kematian. Apa manfaat selalu mengingat kematian?",
 "Kita menjadi lebih taat kepada Allah, tidak lalai karena harta atau permainan, rajin salat dan belajar, serta selalu berbuat baik karena tahu semua amal akan ditanya di akhirat.",["Lebih taat beribadah","Tidak lalai karena dunia","Rajin berbuat baik sebagai bekal"]);
})();
