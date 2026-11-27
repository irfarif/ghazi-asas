(() => {
const m = mapel("sunda", { nama: "Basa Sunda", ikon: "🎋", warna: "#0369a1" });
const teks = t => `<div class="teks">${t}</div>`;
const CARITA = teks("<b>Galih jeung Anak Ucing</b><br>Isuk-isuk Galih indit ka sakola. Di sisi jalan, manéhna ngadéngé sora anak ucing. Sorana halon pisan, sabab anak ucing téh geus lila kajebak dina solokan jeung kalaparan. Galih bingung, sabab manéhna kudu buru-buru ka sakola bisi kabeurangan. Tapi Galih teu tega ningali anak ucing nu keur susah. Anak ucing téh dicokot tina solokan, dibéré roti saeutik, tuluy dititipkeun ka Bu Ani, tatanggana. Galih tuluy lumpat ka sakola, untungna teu kabeurangan.");
const SURABI = teks("Surabi mangrupa kadaharan tradisional ti Jawa Barat. Surabi dijieun tina tipung béas jeung santen. Biasana diasakan dina hawu maké séréngséng taneuh. Surabi bisa didahar jeung oncom atawa kinca gula beureum. Nepi ka kiwari, surabi masih dipikaresep ku balaréa.");
const CURUG = teks("Curug Cimahi perenahna di Kabupatén Bandung Barat. Cai curugna ngocor tina luhur gawir anu jangkungna kurang leuwih 87 méter. Sorana ngagulung tarik pisan. Hawana tiis tur seger, sabudeureunana loba tatangkalan héjo ngemploh. Peuting-peuting, curugna dihiasan ku lampu warna-warni nu éndah pisan.");

/* ================= RANGKUMAN ================= */
m.bab("carita", "Maca jeung Maham Carita", `
<p>Lamun maca carita, perhatikeun:</p>
<ul><li><b>Saha</b> palakuna (tokoh) jeung kumaha <b>watekna</b>.</li><li><b>Naon pasualan</b> (masalah) anu disanghareupan ku palaku.</li><li><b>Kumaha sikep</b> palaku dina nyanghareupan pasualan.</li><li><b>Naon amanatna</b> (pesen moral).</li></ul>
${CARITA}
<ul><li>Sabab sora anak ucing halon: <b>geus lila kajebak dina solokan jeung kalaparan</b>.</li><li>Pasualan Galih: <b>kudu buru-buru ka sakola</b>, tapi manggihan anak ucing nu keur susah.</li><li>Sikep Galih: <b>welas asih, daék nulungan</b> sato nu keur susah.</li></ul>`);

m.bab("kalimah", "Kekenteng jeung Kalimah Langsung", `
<p><b>Kekenteng</b> (tanda petik “ ... ”) dipaké pikeun <b>ngapit omongan langsung</b>.</p>
<h3>Kalimah langsung</h3><p>Kalimah anu nuliskeun <b>omongan saurang persis</b> sakumaha diucapkeunana. Omonganana diapit ku kekenteng.</p>
<p>Conto: Ceuk Ibu, <b>“Geura mandi, Galih!”</b><br>Conto séjén: <b>“Kuring rék ka pasar,”</b> ceuk Bapa.</p>
<div class="ingat">Cara nulis anu bener: kekenteng dipasang <b>di awal jeung di ahir</b> omongan. Tanda koma ditulis saméméh kekenteng muka: Ceuk Ibu, “...”</div>
<h3>Kalimah teu langsung</h3><p>Kalimah anu <b>nyaritakeun deui</b> omongan batur <b>tanpa kekenteng</b>. Biasana maké kecap <i>yén, sangkan, nitah, nanyakeun</i>.</p>
<table><tr><th>Langsung</th><th>Teu langsung</th></tr>
<tr><td>Ceuk Ibu, “Galih, geura mandi!”</td><td>Ibu nitah Galih geura mandi.</td></tr>
<tr><td>Ceuk Dodi, “Kuring geus réngsé nyieun PR.”</td><td>Dodi nyarita yén manéhna geus réngsé nyieun PR.</td></tr>
<tr><td>Bu Guru nanya, “Saha anu can ngumpulkeun tugas?”</td><td>Bu Guru nanyakeun saha anu can ngumpulkeun tugas.</td></tr></table>`);

m.bab("kecap", "Kecap Panganteb, Pangantét, jeung Panambah", `
<h3>Kecap panganteb</h3><p>Kecap anu fungsina <b>ngantebkeun</b> (negeskeun) harti kecap séjén dina kalimah. Conto: <b>mah, téh, wé (waé), tah, atuh, mah, pisan, deui, ogé, geuning, kétang</b>.</p>
<ul><li>Kuring <b>mah</b> resep maca buku.</li><li>Buku <b>téh</b> aya dina méja.</li><li>Hayu <b>atuh</b> urang indit!</li><li>Dahar <b>wé</b> heula.</li></ul>
<h3>Kecap pangantét</h3><p>Kecap anu nuduhkeun <b>tempat, arah, atawa waktu</b>: <b>di, ka, ti, dina, kana, tina, keur, pikeun, ku</b>. Kecap pangantét <b>ditulis misah</b> jeung kecap saterusna.</p>
<ul><li>Bapa keur aya <b>di</b> kebon. Kuring indit <b>ka</b> sakola. Uwa datang <b>ti</b> Bandung.</li></ul>
<h3>Kecap panambah “para”</h3><p><b>Para</b> nuduhkeun <b>jumlah loba</b> (sakabéh) pikeun jalma. Ditulis <b>misah</b>: <b>para guru, para murid, para tamu</b> (lain paraguru).</p>`);

m.bab("rarangken", "Rarangkén Hareup N- jeung di-", `
<h3>Rarangkén hareup N- (nasal)</h3><p>Rarangkén N- ngarobah sora awal kecap dasar:</p>
<table><tr><th>Sora awal</th><th>Robah jadi</th><th>Conto</th></tr>
<tr><td>vokal (a, i, u, é, o, e, eu)</td><td>ng-</td><td>useup → <b>nguseup</b>, ala → ngala</td></tr>
<tr><td>k</td><td>ng-</td><td>kirim → <b>ngirim</b>, koréd → ngoréd</td></tr>
<tr><td>p, b</td><td>m-</td><td>pacul → <b>macul</b>, baca → <b>maca</b>, bawa → mawa</td></tr>
<tr><td>t</td><td>n-</td><td>tulis → <b>nulis</b>, tulung → nulung</td></tr>
<tr><td>s, c</td><td>ny-</td><td>sapu → <b>nyapu</b>, cokot → <b>nyokot</b>, seuseuh → nyeuseuh</td></tr>
<tr><td>d, g, j, l, r, w, y, h</td><td>nga-</td><td>dahar → <b>ngadahar</b>, gambar → ngagambar, lamar → ngalamar</td></tr></table>
<p>Harti rarangkén N-: <b>ngalakukeun pagawéan</b>. Conto: Bapa keur <b>nguseup</b> di balong.</p>
<h3>Rarangkén hareup di-</h3><p>Rarangkén <b>di-</b> nuduhkeun pagawéan anu <b>dilakukeun ku batur</b> (pasif). Ditulis <b>babarengan</b> (dihijikeun) jeung kecap dasar.</p>
<ul><li>Buku téh <b>dibaca</b> ku Rina. Surat <b>ditulis</b> ku Bapa. Sangu <b>didahar</b> ku adi.</li></ul>
<div class="ingat"><b>di-</b> rarangkén → <b>dihijikeun</b>: dibaca, ditulis. <b>di</b> pangantét (tempat) → <b>dipisah</b>: di imah, di sakola. <b>ka</b> pangantét (arah) → <b>dipisah</b>: ka pasar, ka kelas.</div>`);

m.bab("paragraf", "Paragraf jeung Kalimah Pamadegan", `
<p><b>Ide pokok</b> (gagasan utama / <b>poko pikiran</b>) nyaéta <b>inti</b> anu dicaritakeun dina hiji paragraf. Biasana aya dina kalimah kahiji atawa ahir.</p>
${SURABI}<p>Ide pokokna: <b>surabi mangrupa kadaharan tradisional ti Jawa Barat</b>.</p>
<h3>Paragraf argumentasi (bahasan)</h3><p>Paragraf anu eusina <b>pamadegan</b> dibarung ku <b>alesan atawa bukti</b> sangkan nu maca yakin.</p>
<h3>Paragraf deskripsi (dadaran)</h3><p>Paragraf anu <b>ngagambarkeun</b> hiji objék, tempat, atawa kaayaan sacara jéntré, nepi ka nu maca saolah-olah <b>ningali atawa ngarasakeun sorangan</b>.</p>
<h3>Kalimah pamadegan</h3><p>Kalimah anu eusina <b>pamanggih</b> (pendapat). Dina diskusi, nepikeun pamadegan kudu <b>sopan</b>, upamana: <i>“Punten, abdi satuju kana usul Rina, sabab ...”</i></p>`);

m.bab("wawancara", "Wawancara", `
<p><b>Wawancara</b> nyaéta kagiatan <b>tanya-jawab</b> pikeun meunangkeun <b>informasi</b>.</p>
<ul><li><b>Narasumber</b> = jalma anu <b>méré informasi</b> atawa jawaban.</li><li><b>Pewawancara</b> (nu ngawawancara) = jalma anu <b>nanya</b>.</li></ul>
<h3>Saméméh wawancara kudu nyiapkeun</h3><ul><li>Nangtukeun tujuan jeung narasumber.</li><li>Nyieun <b>janji</b> jeung narasumber.</li><li>Nyieun <b>daptar pananya</b>.</li><li>Nyiapkeun alat tulis atawa alat rékam.</li></ul>
<h3>Kalimah pananya</h3><p>Maké kecap pananya: <b>naon, saha, iraha, di mana, ku naon/naha, kumaha, sabaraha</b>. Basana kudu <b>sopan</b> (lemes): <i>“Punten, Pa, kumaha carana melak paré?”</i></p>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","carita",`${CARITA}Naha sora anak ucing kadéngé halon?`,["Sabab geus lila kajebak dina solokan jeung kalaparan","Sabab keur ulin jeung indungna","Sabab keur saré tibra","Sabab sieun ku Galih"],"Dina carita ditulis: geus lila kajebak dina solokan jeung kalaparan.");
m.pg("A1","carita",`${CARITA}Anak ucing dina éta carita kapanggih di ….`,["solokan sisi jalan","kelas","imah Galih","kebon sakola"],"Anak ucing kajebak dina solokan di sisi jalan.");
m.pg("A1","carita",`${CARITA}Kaayaan anak ucing basa kapanggih ku Galih nyaéta ….`,["kalaparan jeung kajebak","séhat jeung bungah","keur dahar","keur ulin"],"Kajebak dina solokan jeung kalaparan.");
m.pg("A2","carita",`${CARITA}Pasualan anu disanghareupan ku Galih nyaéta ….`,["kudu buru-buru ka sakola, tapi manggihan anak ucing nu keur susah","poho mawa buku","dicarékan ku Bu Ani","teu boga roti"],"Galih bingung: kudu buru-buru ka sakola, tapi teu tega ka anak ucing.");
m.pg("A2","carita",`${CARITA}Naha Galih bingung?`,["Sabab sieun kabeurangan ka sakola","Sabab leungiteun duit","Sabab teu bisa maca","Sabab hayang ulin"],"Manéhna kudu buru-buru ka sakola bisi kabeurangan.");
m.pg("A2","carita",`${CARITA}Naon anu ngajadikeun Galih eureun di sisi jalan?`,["Ngadéngé sora anak ucing","Ningali babaturanana","Sapédahna ruksak","Hujan gedé"],"Galih ngadéngé sora anak ucing.");
m.pg("A3","carita",`${CARITA}Sikep Galih sanggeus ningali anak ucing anu keur susah nyaéta ….`,["welas asih jeung daék nulungan","teu paduli","ngaheureuyan anak ucing","ambek ka anak ucing"],"Galih teu tega, tuluy nulungan anak ucing.");
m.pg("A3","carita",`${CARITA}Amanat anu bisa dicokot tina éta carita nyaéta ….`,["urang kudu nyaah jeung nulungan mahluk nu keur susah","urang meunang kabeurangan ka sakola","sato teu perlu ditulungan","urang kudu ulin di solokan"],"Amanatna: nyaah ka sato jeung daék nulungan.");
m.pg("A3","carita",`${CARITA}Naon anu dipigawé ku Galih ka anak ucing?`,["Dicokot, dibéré roti, tuluy dititipkeun ka Bu Ani","Diantep di solokan","Dibawa ka sakola","Dijual ka pasar"],"Dicokot, dibéré roti, dititipkeun ka Bu Ani.");
m.pg("A4","kalimah","Tanda baca pikeun ngapit omongan langsung disebut ….",["kekenteng","titik","koma","tanda tanya"],"Kekenteng (“ ... ”) pikeun ngapit omongan langsung.");
m.pg("A4","kalimah","Kekenteng téh wangunna ….",["“ ... ”","( ... )","...?","...!"],"Kekenteng = tanda petik.");
m.pg("A4","kalimah","Kekenteng dipaké pikeun ngapit ….",["omongan langsung","ngaran jalma","angka","judul buku pelajaran"],"Kekenteng ngapit omongan langsung.");
m.pg("A5","kalimah","Cara nulis kekenteng anu bener dina kalimah langsung nyaéta ….",["Ceuk Ibu, “Geura mandi, Galih!”","Ceuk Ibu, Geura mandi, Galih!”","Ceuk Ibu “Geura mandi, Galih!","Ceuk Ibu, Geura “mandi”, Galih!"],"Kekenteng dipasang di awal jeung ahir omongan.");
m.pg("A5","kalimah","Kalimah langsung anu panulisanana bener nyaéta ….",["“Kuring rék ka pasar,” ceuk Bapa.","Kuring rék ka pasar,” ceuk Bapa.","“Kuring rék ka pasar, ceuk Bapa.”","Kuring “rék ka pasar” ceuk Bapa."],"Omongan Bapa wungkul anu diapit ku kekenteng.");
m.pg("A5","kalimah","Panulisan kalimah langsung anu bener nyaéta ….",["Bu Guru nanya, “Saha anu piket poé ieu?”","Bu Guru nanya, Saha anu piket poé ieu?","Bu Guru “nanya, Saha anu piket poé ieu?”","Bu Guru nanya “Saha anu piket” poé ieu?"],"Omongan langsung diapit kekenteng.");
m.pg("A6","kalimah","Ceuk Ibu, “Galih, geura mandi!”<br>Robahna jadi kalimah teu langsung nyaéta ….",["Ibu nitah Galih geura mandi.","Ibu, “Galih geura mandi.”","Galih nitah Ibu mandi.","“Ibu nitah Galih mandi.”"],"Kalimah teu langsung teu maké kekenteng: Ibu nitah Galih geura mandi.");
m.pg("A6","kalimah","Ceuk Dodi, “Kuring geus réngsé nyieun PR.”<br>Kalimah teu langsungna nyaéta ….",["Dodi nyarita yén manéhna geus réngsé nyieun PR.","Dodi nyarita, “Kuring geus réngsé.”","Kuring geus réngsé nyieun PR ceuk Dodi.","“Dodi geus réngsé nyieun PR.”"],"Maké kecap yén, “kuring” robah jadi “manéhna”.");
m.pg("A6","kalimah","Bu Guru nanya, “Saha anu can ngumpulkeun tugas?”<br>Kalimah teu langsungna nyaéta ….",["Bu Guru nanyakeun saha anu can ngumpulkeun tugas.","Bu Guru nanya, saha anu can ngumpulkeun tugas?","“Bu Guru nanyakeun tugas.”","Saha anu can ngumpulkeun tugas ceuk Bu Guru?"],"Kalimah teu langsung: Bu Guru nanyakeun saha anu can ngumpulkeun tugas.");
m.pg("A7","kecap","Kecap panganteb dina kalimah “Kuring mah resep maca buku” nyaéta ….",["mah","kuring","resep","buku"],"Mah = kecap panganteb.");
m.pg("A7","kecap","Kecap panganteb dina kalimah “Buku téh aya dina méja” nyaéta ….",["téh","buku","aya","dina"],"Téh = kecap panganteb.");
m.pg("A7","kecap","Kecap panganteb dina kalimah “Hayu atuh urang indit!” nyaéta ….",["atuh","hayu","urang","indit"],"Atuh = kecap panganteb.");
m.pg("A8","kecap","“Ari kuring … resep kana pelajaran Basa Sunda.” Kecap panganteb anu merenah nyaéta ….",["mah","di","ka","ti"],"Mah = panganteb. Di, ka, ti = pangantét.");
m.pg("A8","kecap","“Dahar … heula, engké deui ulinna!” Kecap panganteb anu merenah nyaéta ….",["wé","ka","di","ti"],"Wé (waé) = panganteb.");
m.pg("A8","kecap","“Imah Galih … deukeut ka masjid.” Kecap panganteb anu merenah nyaéta ….",["téh","ka","ti","jeung"],"Téh = panganteb.");
m.pg("A9","rarangken","Kecap dasar <i>sapu</i> dibéré rarangkén N- jadi ….",["nyapu","masapu","nyapuan","ngasapu"],"s → ny: sapu → nyapu.");
m.pg("A9","rarangken","Kecap <i>nyapu</i> asalna tina kecap dasar ….",["sapu","apu","napu","capu"],"nyapu = N- + sapu.");
m.pg("A9","rarangken","Ibu keur … (N- + sapu) buruan.",["nyapu","nyapuan","disapu","sapuan"],"N- + sapu = nyapu.");
m.pg("A10","rarangken","Bapa keur … di balong. Kecap rundayan tina kecap dasar <i>useup</i> anu merenah nyaéta ….",["nguseup","diuseup","useupan","maruseup"],"Vokal → ng-: useup → nguseup.");
m.pg("A10","rarangken","Kecap dasar <i>useup</i> dibéré rarangkén N- jadi ….",["nguseup","nyuseup","museup","nauseup"],"Kecap nu dimimitian vokal → ng-.");
m.pg("A10","rarangken","Mang Udin resep … lauk di walungan. Kecap anu merenah nyaéta ….",["nguseup","diuseup","kauseup","useupan"],"Nguseup = néangan lauk maké useup.");
m.pg("A11","rarangken","Panulisan anu bener nyaéta ….",["Buku téh dibaca ku Rina di kelas.","Buku téh di baca ku Rina dikelas.","Buku téh dibaca ku Rina dikelas.","Buku téh di baca ku Rina di kelas."],"di- rarangkén dihijikeun (dibaca); di pangantét dipisah (di kelas).");
m.pg("A11","rarangken","Panulisan kecap pangantét <i>ka</i> anu bener aya dina kalimah ….",["Kuring indit ka sakola isuk-isuk.","Kuring indit kasakola isuk-isuk.","Kuring indit ka-sakola isuk-isuk.","Kuring inditka sakola isuk-isuk."],"Ka pangantét ditulis misah: ka sakola.");
m.pg("A11","rarangken","Kalimah anu panulisanana bener nyaéta ….",["Surat ditulis ku Bapa di imah.","Surat di tulis ku Bapa diimah.","Surat ditulis ku Bapa diimah.","Surat di tulis ku Bapa di imah."],"ditulis (dihijikeun), di imah (dipisah).");
m.pg("A12","rarangken","Kalimah anu ngandung kecap maké rarangkén hareup di- nyaéta ….",["Sangu téh didahar ku adi.","Adi keur di imah.","Bapa indit ka kebon.","Ibu datang ti pasar."],"Didahar = di- + dahar (rarangkén). Di imah mah pangantét.");
m.pg("A12","rarangken","Kecap anu maké rarangkén hareup di- nyaéta ….",["ditulis","di sakola","di kebon","di imah"],"Ditulis = rarangkén. Di sakola/kebon/imah = pangantét.");
m.pg("A12","rarangken","Dina kalimah “Kembang téh disiram ku Nisa”, kecap anu maké rarangkén di- nyaéta ….",["disiram","kembang","téh","Nisa"],"Disiram = di- + siram.");
m.pg("A13","paragraf",`${SURABI}Ide pokok éta paragraf nyaéta ….`,["Surabi mangrupa kadaharan tradisional ti Jawa Barat","Surabi dijieun tina tipung béas","Surabi diasakan dina hawu","Surabi didahar jeung oncom"],"Kalimah kahiji mangrupa kalimah poko.");
m.pg("A13","paragraf",`${SURABI}Bahan nyieun surabi nyaéta ….`,["tipung béas jeung santen","tipung terigu jeung susu","béas ketan jeung gula","sampeu jeung kéju"],"Surabi dijieun tina tipung béas jeung santen.");
m.pg("A13","paragraf",`${SURABI}Kalimah anu jadi ide pokok perenahna di ….`,["awal paragraf","tengah paragraf","ahir paragraf","teu aya"],"Ide pokokna aya dina kalimah kahiji.");
m.pg("A14","paragraf","Paragraf kaasup argumentasi (bahasan) sabab ….",["eusina pamadegan anu dibarung ku alesan atawa bukti","ngagambarkeun kaayaan hiji tempat","nyaritakeun lalakon hiji jalma","eusina léngkah-léngkah nyieun hiji barang"],"Argumentasi = pamadegan + alesan/bukti.");
m.pg("A14","paragraf",teks("Sarapan isuk-isuk penting pisan pikeun barudak. Sabab, sarapan méré tanaga pikeun diajar. Barudak anu sarapan leuwih gampang konséntrasi. Ku kituna, urang kudu biasa sarapan saméméh indit ka sakola.")+"Éta paragraf kaasup paragraf argumentasi, sabab ….",["eusina pamadegan dibarung ku alesan","ngagambarkeun kaayaan dapur","nyaritakeun dongéng","eusina léngkah nyieun sarapan"],"Aya pamadegan (sarapan penting) jeung alesan.");
m.pg("A14","paragraf","Ciri paragraf bahasan (argumentasi) nyaéta ….",["aya pamadegan, alesan, jeung kacindekan","ngan ukur ngagambarkeun objék","eusina sajak","eusina paguneman wungkul"],"Pamadegan + alesan + kacindekan.");
m.pg("A15","paragraf","Paragraf anu kaasup paragraf deskripsi (dadaran) nyaéta ….",["Cai Curug Cimahi ngocor tina gawir anu luhur. Sorana ngagulung, hawana tiis, sabudeureunana loba tatangkalan héjo.","Kuring indit ka Curug Cimahi poé Minggu.","Urang kudu ngajaga kabersihan curug sabab éta téh tempat wisata.","Hayu urang ulin ka Curug Cimahi!"],"Deskripsi ngagambarkeun kaayaan sacara jéntré.");
m.pg("A15","paragraf",`${CURUG}Éta paragraf kaasup paragraf ….`,["deskripsi (dadaran)","argumentasi (bahasan)","narasi (carita)","persuasi (ajakan)"],"Ngagambarkeun kaayaan Curug Cimahi sacara jéntré.");
m.pg("A15","paragraf",`${CURUG}Kalimah anu ngagambarkeun hawa di Curug Cimahi nyaéta ….`,["Hawana tiis tur seger","Curug Cimahi perenahna di Bandung Barat","Jangkungna 87 méter","Dihiasan ku lampu"],"Hawana tiis tur seger.");
m.pg("A16","paragraf","Dina diskusi kelas, Rina ngusulkeun piket dibagi lima kelompok. Kalimah pamadegan anu sopan pikeun ngarojong usul Rina nyaéta ….",["Punten, abdi satuju kana usul Rina, sabab pagawéanana jadi leuwih hampang.","Usul Rina mah goréng!","Teu kudu loba omong, Rina!","Kuring mah embung piket."],"Ngarojong kalawan sopan jeung aya alesanana.");
m.pg("A16","paragraf","Kalimah pamadegan anu sopan dina diskusi nyaéta ….",["Numutkeun abdi, usul Dodi saé pisan sabab tiasa ngahémat waktos.","Pamadegan manéh salah kabéh!","Cicing siah!","Ah, teu penting."],"Maké basa lemes jeung aya alesan.");
m.pg("A16","paragraf","Pikeun ngarojong usul babaturan dina diskusi, urang bisa nyarita ….",["“Abdi satuju kana usul éta, margi ...”","“Éta usul teu bener!”","“Kuring teu paduli.”","“Gancang atuh, ulah lila!”"],"Satuju + alesan, basana sopan.");
m.pg("A17","kecap","Harti kecap <i>para</i> dina kalimah “Para guru keur rapat di kantor” nyaéta ….",["loba/sakabéh guru","hiji guru","guru anyar","guru nu geus kolot"],"Para nuduhkeun jumlah loba.");
m.pg("A17","kecap","Kecap <i>para</i> nuduhkeun ….",["jumlah loba (jalma)","hiji jalma","tempat","waktu"],"Para = loba.");
m.pg("A17","kecap","“Para murid baris di buruan sakola.” Kecap <i>para</i> hartina ….",["murid nu loba","murid hiji","murid nu kesang","murid kelas hiji wungkul"],"Para murid = sakabéh/loba murid.");
m.pg("A18","kecap","Panulisan kecap maké kecap panambah <i>para</i> anu bener nyaéta ….",["para tamu","paratamu","para-tamu","paratamuh"],"Para ditulis misah: para tamu.");
m.pg("A18","kecap","Kalimah anu panulisanana bener nyaéta ….",["Para siswa keur upacara.","Parasiswa keur upacara.","Para-siswa keur upacara.","Parasiswa-siswa keur upacara."],"Para ditulis misah.");
m.pg("A18","kecap","Panulisan anu bener nyaéta ….",["para pamaén","parapamaén","para-pamaén","parapamaén-pamaén"],"Para ditulis misah.");
m.pg("A19","wawancara","Jalma anu méré informasi atawa jawaban dina wawancara disebut ….",["narasumber","pewawancara","panongton","pamaca"],"Narasumber = nu méré informasi.");
m.pg("A19","wawancara","Murid ngawawancara Pa Tani ngeunaan melak paré. Pa Tani dina éta wawancara jadi ….",["narasumber","pewawancara","moderator","juru tulis"],"Nu ditanya jeung ngajawab = narasumber.");
m.pg("A19","wawancara","Tugas narasumber dina wawancara nyaéta ….",["ngajawab pananya jeung méré informasi","nyieun daptar pananya","nyatet jawaban","nanya ka pewawancara"],"Narasumber ngajawab/méré informasi.");
m.pg("A20","wawancara","Narasumber ngajawab: “Paré dipelak dina usum ngijih.” Kalimah pananya anu luyu nyaéta ….",["Iraha paré dipelakna, Pa?","Saha anu melak paré, Pa?","Di mana sawah Bapa?","Sabaraha harga béas, Pa?"],"Jawabanana ngeunaan waktu → maké kecap pananya iraha.");
m.pg("A20","wawancara","Narasumber ngajawab: “Bapa melak paré di sawah tukangeun imah.” Kalimah pananya anu luyu nyaéta ….",["Di mana Bapa melak paré?","Iraha Bapa melak paré?","Kumaha carana melak paré?","Saha anu mantuan Bapa?"],"Jawabanana ngeunaan tempat → di mana.");
m.pg("A20","wawancara","Narasumber ngajawab: “Mimitina taneuh dipacul, tuluy dicaian, karék binihna dipelak.” Kalimah pananya anu luyu nyaéta ….",["Kumaha carana melak paré, Pa?","Iraha Bapa ka sawah?","Saha nu boga sawah?","Sabaraha lega sawahna?"],"Jawabanana ngeunaan cara → kumaha.");

/* ================= ISIAN ================= */
m.is("B1","kalimah","Tanda baca pikeun ngapit omongan langsung disebut ….",["kekenteng","kekenténg"],"Kekenteng.");
m.is("B1","kalimah","Kalimah anu nuliskeun omongan saurang persis sakumaha diucapkeunana disebut kalimah ….",["langsung"],"Kalimah langsung.");
m.is("B1","kalimah","Kalimah anu nyaritakeun deui omongan batur tanpa kekenteng disebut kalimah ….",["teu langsung"],"Kalimah teu langsung.");
m.is("B2","kecap","“Kuring … resep ngagambar.” Kecap panganteb anu merenah nyaéta ….",["mah","teh","téh"],"Mah (atawa téh).");
m.is("B2","kecap","“Hayu … urang diajar babarengan!” Kecap panganteb anu merenah nyaéta ….",["atuh","tah","wé"],"Atuh.");
m.is("B2","kecap","“Sapatu … disimpen dina rak.” Kecap panganteb anu merenah nyaéta ….",["téh","teh","mah"],"Téh.");
m.is("B3","rarangken","Kecap <i>tulis</i> lamun dibéré rarangkén hareup N- jadi ….",["nulis"],"t → n: tulis → nulis.");
m.is("B3","rarangken","Kecap <i>cokot</i> lamun dibéré rarangkén hareup N- jadi ….",["nyokot"],"c → ny: cokot → nyokot.");
m.is("B3","rarangken","Kecap <i>pacul</i> lamun dibéré rarangkén hareup N- jadi ….",["macul"],"p → m: pacul → macul.");
m.is("B4","rarangken","Kecap <i>baca</i> lamun dibéré rarangkén hareup N- jadi ….",["maca"],"b → m: baca → maca.");
m.is("B4","rarangken","Kecap <i>dahar</i> lamun dibéré rarangkén hareup N- jadi ….",["ngadahar"],"d → nga-: dahar → ngadahar.");
m.is("B4","rarangken","Kecap <i>kirim</i> lamun dibéré rarangkén hareup N- jadi ….",["ngirim"],"k → ng: kirim → ngirim.");
m.is("B5","kecap","Bapa keur aya … kebon. Kecap pangantét anu merenah nyaéta ….",["di","dina"],"Di = tempat.");
m.is("B5","kecap","Isuk-isuk kuring indit … sakola. Kecap pangantét anu merenah nyaéta ….",["ka"],"Ka = arah.");
m.is("B5","kecap","Uwa kakara datang … Bandung. Kecap pangantét anu merenah nyaéta ….",["ti"],"Ti = asal.");
m.is("B6","paragraf","Paragraf anu ngagambarkeun objék, tempat, atawa kaayaan disebut paragraf ….",["deskripsi","dadaran","deskripsi dadaran"],"Deskripsi (dadaran).");
m.is("B6","paragraf","Paragraf anu eusina pamadegan dibarung ku alesan disebut paragraf ….",["argumentasi","bahasan"],"Argumentasi (bahasan).");
m.is("B6","paragraf","Paragraf dadaran disebut ogé paragraf ….",["deskripsi"],"Dadaran = deskripsi.");
m.is("B7","paragraf","Gagasan utama dina hiji paragraf disebut ….",["ide pokok","poko pikiran","gagasan utama","ide poko"],"Ide pokok.");
m.is("B7","paragraf","Ide pokok biasana aya dina kalimah anu perenahna di awal atawa di … paragraf.",["ahir","tungtung","akhir"],"Di awal atawa ahir paragraf.");
m.is("B7","paragraf","Kalimah anu eusina pamanggih atawa pendapat disebut kalimah ….",["pamadegan"],"Kalimah pamadegan.");
m.is("B8","kecap","Kecap panambah pikeun nuduhkeun jumlah loba (jalma) nyaéta ….",["para"],"Para: para guru, para murid.");
m.is("B8","kecap","“… tamu calik di korsi.” Kecap panambah anu nuduhkeun loba nyaéta ….",["para"],"Para tamu.");
m.is("B8","kecap","Kecap <i>para</i> dina panulisanana kudu ditulis … tina kecap saterusna.",["misah","dipisah","papisah"],"Ditulis misah: para guru.");
m.is("B9","wawancara","Jalma anu ngajukeun pananya ka narasumber disebut ….",["pewawancara","nu ngawawancara","juru wawancara"],"Pewawancara.");
m.is("B9","wawancara","Jalma anu méré informasi dina wawancara disebut ….",["narasumber","nara sumber"],"Narasumber.");
m.is("B9","wawancara","Kagiatan tanya-jawab pikeun meunangkeun informasi disebut ….",["wawancara"],"Wawancara.");
m.is("B10","wawancara","Saméméh wawancara, urang kudu nyiapkeun daptar … sangkan wawancara lancar.",["pananya","patanyaan"],"Daptar pananya.");
m.is("B10","wawancara","Saméméh wawancara, urang kudu nyieun … heula jeung narasumber.",["janji","jangji"],"Nyieun janji.");
m.is("B10","wawancara","Kecap pananya pikeun nanyakeun cara nyaéta ….",["kumaha"],"Kumaha = cara.");

/* ================= URAIAN ================= */
m.ur("C1","kalimah","Robah kalimah langsung ieu jadi kalimah teu langsung!<br><b>Ceuk Bapa, “Galih, pangmeulikeun gula ka warung!”</b>","Bapa nitah Galih meuli gula ka warung.",["Teu maké kekenteng","Maké kecap nitah/ménta"]);
m.ur("C1","kalimah","Robah kalimah langsung ieu jadi kalimah teu langsung!<br><b>Ceuk Rina, “Kuring rék diajar di imah Nisa.”</b>","Rina nyarita yén manéhna rék diajar di imah Nisa.",["Teu maké kekenteng","Maké kecap yén","“Kuring” robah jadi “manéhna”"]);
m.ur("C2","kecap","Tulis dua kalimah anu ngagunakeun kecap panganteb!","1) Kuring <b>mah</b> resep dahar surabi.<br>2) Buku <b>téh</b> disimpen dina tas.",["Dua kalimah","Unggal kalimah aya kecap panganteb (mah, téh, wé, atuh, tah, jsb.)"]);
m.ur("C2","kecap","Jieun dua kalimah maké kecap panganteb <i>atuh</i> jeung <i>wé</i>!","1) Hayu <b>atuh</b> urang ka masjid!<br>2) Diuk <b>wé</b> di dieu.",["Kalimah maké atuh","Kalimah maké wé"]);
m.ur("C3","rarangken","Robah kecap dasar <i>cokot</i> jeung <i>dahar</i> maké rarangkén N-, tuluy jieun kalimahna!","cokot → <b>nyokot</b>: Adi keur nyokot buku dina lomari.<br>dahar → <b>ngadahar</b>: Ucing ngadahar lauk asin.",["nyokot","ngadahar","Dua kalimah anu bener"]);
m.ur("C3","rarangken","Robah kecap dasar <i>sapu</i> jeung <i>tulis</i> maké rarangkén N-, tuluy jieun kalimahna!","sapu → <b>nyapu</b>: Ibu keur nyapu buruan.<br>tulis → <b>nulis</b>: Kuring keur nulis surat.",["nyapu","nulis","Dua kalimah anu bener"]);
m.ur("C4","paragraf","Jieun paragraf déskripsi pondok sahenteuna tilu kalimah ngeunaan kaayaan rohangan kelas!","Kelas kuring beresih tur rapih. Méja jeung korsina dijajarkeun ngabaris, dina témbokna aya gambar pahlawan jeung jam dingding. Jandélana lega, jadi hawana seger tur caang.",["Sahenteuna tilu kalimah","Ngagambarkeun kaayaan kelas sacara jéntré","Aya gambaran warna/barang/hawa"]);
m.ur("C4","paragraf","Jieun paragraf dadaran (déskripsi) pondok tilu kalimah ngeunaan kelas anjeun!","Kelas opat perenahna di gigireun masjid sakola. Témbokna dicét héjo ngora, aya papan tulis bodas di hareup. Dina pojok kelas aya rak buku anu pinuh ku buku carita.",["Tilu kalimah","Ngagambarkeun kaayaan kelas"]);
m.ur("C5","wawancara","Susun dua kalimah pananya anu sopan pikeun ngawawancara patani ngeunaan cara melak paré!","1) Punten, Pa, kumaha carana melak paré?<br>2) Iraha waktu anu pangsaéna pikeun melak paré, Pa?",["Dua kalimah pananya","Basa sopan (punten, Pa)","Luyu jeung téma melak paré"]);
m.ur("C5","wawancara","Anjeun rék ngawawancara Pa Tani. Tulis dua pananya anu sopan ngeunaan melak paré!","1) Punten, Pa, sabaraha lami paré dugi ka tiasa dipanén?<br>2) Pupuk naon anu dianggo ku Bapa?",["Dua pananya","Sopan","Ngeunaan paré"]);
})();
