(() => {
const m = mapel("inggris", { nama: "Bahasa Inggris", ikon: "🔤", warna: "#2563eb" });
const teks = t => `<div class="teks">${t}</div>`;
/* gambar kucing & meja/kotak sederhana */
function kucing(pos) {
  const meja = `<rect x="60" y="70" width="160" height="12" rx="3" fill="#a16207"/><rect x="72" y="82" width="10" height="70" fill="#a16207"/><rect x="198" y="82" width="10" height="70" fill="#a16207"/><line x1="10" y1="152" x2="290" y2="152" stroke="#94a3b8" stroke-width="3"/>`;
  const kotak = `<rect x="95" y="90" width="110" height="62" fill="#fbbf24" stroke="#92400e" stroke-width="3"/><line x1="10" y1="152" x2="290" y2="152" stroke="#94a3b8" stroke-width="3"/>`;
  const cat = (x, y) => `<text x="${x}" y="${y}" font-size="44" text-anchor="middle">🐱</text>`;
  const p = { on: meja + cat(140, 66), under: meja + cat(140, 148), beside: meja + cat(255, 148), in: kotak + cat(150, 140), behind: kotak + `<text x="150" y="98" font-size="44" text-anchor="middle">🐱</text>` + `<rect x="95" y="90" width="110" height="62" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>` }[pos];
  return `<svg class="gbr" width="300" height="160" viewBox="0 0 300 160" role="img" aria-label="gambar kucing">${p}</svg>`;
}
const YUSUF = teks("Yusuf wakes up at five o’clock. He prays Subuh with his father. Then he takes a bath. At six o’clock, Yusuf has breakfast with his parents <b>in the dining room</b>. He eats fried rice and drinks a glass of milk. His father drinks <b>a cup of coffee</b> every morning. His mother drinks tea.");
const AHMAD = teks("This is my house. It has a living room, two bedrooms, a kitchen, and a bathroom. Now, Mother is <b>cooking</b> in the kitchen. Father is reading a newspaper in the living room. My brother Ahmad is <b>reading a story book in his bedroom</b>.");

/* ================= RANGKUMAN ================= */
m.bab("continuous", "Present Continuous Tense", `
<p><b>Present Continuous Tense</b> dipakai untuk kegiatan yang <b>sedang dilakukan</b> sekarang.</p>
<div class="ingat">Rumus: <b>Subjek + am/is/are + kata kerja-ing</b></div>
<table><tr><th>Subjek</th><th>to be</th><th>Contoh</th></tr>
<tr><td>I</td><td><b>am</b></td><td>I am reading.</td></tr>
<tr><td>He, She, It, nama 1 orang (Budi, Mother)</td><td><b>is</b></td><td>Budi is playing football.</td></tr>
<tr><td>You, We, They, 2 orang/lebih (Ali and Umar)</td><td><b>are</b></td><td>They are cleaning the classroom.</td></tr></table>
<h3>Menambah -ing</h3><ul><li>read → reading, cook → cooking, fly → <b>flying</b>, play → playing</li><li>Berakhiran -e: write → writ<b>ing</b>, ride → riding</li><li>Konsonan-vokal-konsonan: swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing, sit → sitting</li></ul>
<h3>Kalimat tanya (Yes/No Question)</h3><p>Pindahkan am/is/are ke depan: <i>They are cleaning the classroom.</i> → <b>Are they cleaning the classroom?</b></p>
<h3>Jawaban singkat</h3>
<table><tr><th>Pertanyaan</th><th>Ya</th><th>Tidak</th></tr>
<tr><td>Are you ...?</td><td>Yes, I am.</td><td>No, I am not.</td></tr>
<tr><td>Is he ...?</td><td>Yes, he is.</td><td>No, he isn’t.</td></tr>
<tr><td>Is she ...?</td><td>Yes, she is.</td><td>No, she isn’t.</td></tr>
<tr><td>Is it ...?</td><td>Yes, it is.</td><td>No, it isn’t.</td></tr>
<tr><td>Are they ...?</td><td>Yes, they are.</td><td>No, they aren’t.</td></tr></table>`);

m.bab("angka", "Numbers (Angka)", `
<table><tr><td>10 ten</td><td>11 eleven</td><td>12 twelve</td><td>13 thirteen</td><td>14 fourteen</td></tr>
<tr><td>15 fifteen</td><td>16 sixteen</td><td>17 seventeen</td><td>18 eighteen</td><td>19 nineteen</td></tr>
<tr><td>20 twenty</td><td>30 thirty</td><td>40 <b>forty</b></td><td>50 fifty</td><td>60 sixty</td></tr>
<tr><td>70 seventy</td><td>80 eighty</td><td>90 ninety</td><td>100 one hundred</td><td></td></tr></table>
<div class="ingat">Angka puluhan + satuan pakai tanda hubung: 58 = <b>fifty-eight</b>, 94 = <b>ninety-four</b>, 89 = eighty-nine, 90 = ninety. Ingat: 40 ditulis <b>forty</b> (tanpa u).</div>
<p>Penjumlahan: <i>plus</i> (+), <i>equals</i> (=). Contoh: twenty plus thirty equals fifty.</p>`);

m.bab("rumah", "Rooms in the House & Prepositions", `
<table><tr><th>Ruangan</th><th>Arti</th><th>Kegiatan</th></tr>
<tr><td>living room</td><td>ruang tamu/keluarga</td><td>menerima tamu, menonton TV</td></tr>
<tr><td>bedroom</td><td>kamar tidur</td><td>tidur, membaca</td></tr>
<tr><td>kitchen</td><td>dapur</td><td>memasak, menyimpan sayur dan susu di kulkas (refrigerator)</td></tr>
<tr><td>bathroom</td><td>kamar mandi</td><td>mandi, cuci muka, gosok gigi</td></tr>
<tr><td>dining room</td><td>ruang makan</td><td>makan bersama</td></tr>
<tr><td>garage</td><td>garasi</td><td>memarkir mobil</td></tr></table>
<h3>Prepositions of place (kata depan tempat)</h3>
<div class="gbr-row"><figure>${kucing("on")}<figcaption>on = di atas</figcaption></figure><figure>${kucing("under")}<figcaption>under = di bawah</figcaption></figure><figure>${kucing("beside")}<figcaption>beside / next to = di samping</figcaption></figure><figure>${kucing("in")}<figcaption>in = di dalam</figcaption></figure></div>
<p>behind = di belakang · in front of = di depan · between = di antara</p>`);

m.bab("sifat", "Adjectives (Kata Sifat)", `
<table><tr><th>Kata sifat</th><th>Arti</th><th>Lawan kata</th></tr>
<tr><td>big</td><td>besar</td><td>small (kecil)</td></tr><tr><td>tall</td><td>tinggi</td><td>short (pendek)</td></tr>
<tr><td>long</td><td>panjang</td><td>short (pendek)</td></tr><tr><td><b>clean</b></td><td>bersih</td><td><b>dirty</b> (kotor)</td></tr>
<tr><td>tidy</td><td>rapi</td><td>messy (berantakan)</td></tr><tr><td>hot</td><td>panas</td><td>cold (dingin)</td></tr>
<tr><td>fast</td><td>cepat</td><td>slow (lambat)</td></tr><tr><td>beautiful</td><td>indah/cantik</td><td>ugly (jelek)</td></tr></table>
<p>Contoh: <i>An elephant is <b>big</b>.</i> <i>My room is <b>clean</b>.</i></p>`);

m.bab("simple", "Simple Present Tense & Daily Activities", `
<p><b>Simple Present Tense</b> dipakai untuk <b>kebiasaan</b> atau kegiatan rutin (every day, every morning, every night).</p>
<div class="ingat">Subjek <b>I, You, We, They</b>, atau 2 orang → kata kerja <b>biasa</b>: They <b>go</b> to school.<br>Subjek <b>He, She, It</b>, atau 1 orang/nama (my mother, Salma) → kata kerja <b>+ s/es</b>: She <b>goes</b> to school.</div>
<ul><li>Umumnya + s: read → reads, sleep → sleeps, cook → cooks</li><li>Berakhiran o, sh, ch, x, ss → + es: go → <b>goes</b>, wash → <b>washes</b>, watch → watches</li><li>Konsonan + y → ies: study → studies</li></ul>
<p>Contoh: <i>My mother <b>cooks</b> every morning. Salma <b>reads</b> the Qur’an every night. Ali and Umar <b>play</b> football every afternoon.</i></p>
<h3>Menyusun kalimat</h3><p>Urutan kalimat bahasa Inggris: <b>Subjek + kata kerja + keterangan</b>. Contoh: <i>I / go / to school / every day</i> → <b>I go to school every day.</b></p>`);

/* ================= PILIHAN GANDA ================= */
m.pg("A1","continuous",`${AHMAD}What is Mother doing in the kitchen?`,["She is cooking.","She is reading a newspaper.","She is sleeping.","She is reading a story book."],"Tertulis: Mother is cooking in the kitchen.");
m.pg("A1","continuous",teks("It is Sunday morning. Mother is in the kitchen. She is <b>washing the dishes</b>. Father is in the garden. He is watering the flowers.")+"What is Mother doing?",["She is washing the dishes.","She is watering the flowers.","She is cooking rice.","She is sweeping the floor."],"Mother is washing the dishes (mencuci piring).");
m.pg("A1","continuous",teks("Look! Mother is in the kitchen. She is <b>making a cake</b> for my birthday. My sister is helping her.")+"What is Mother doing in the kitchen?",["She is making a cake.","She is washing clothes.","She is sleeping.","She is watching TV."],"Mother is making a cake.");
m.pg("A2","rumah",`${AHMAD}Where is Ahmad reading a story book?`,["In his bedroom","In the kitchen","In the living room","In the bathroom"],"Tertulis: Ahmad is reading a story book in his bedroom.");
m.pg("A2","rumah",`${AHMAD}Where is Father reading a newspaper?`,["In the living room","In the bedroom","In the kitchen","In the garage"],"Father is reading a newspaper in the living room.");
m.pg("A2","rumah",teks("Ahmad likes reading. Every afternoon he reads story books <b>in the library</b> at school. At night he reads in his bedroom.")+"Where does Ahmad read every afternoon?",["In the library","In the kitchen","In the bathroom","In the garage"],"Every afternoon he reads in the library.");
m.pg("A3","continuous","Budi is … football in the field now.",["playing","play","plays","played"],"Sedang dilakukan → is + verb-ing: playing.");
m.pg("A3","continuous","Look! Budi is … a kite.",["flying","fly","flies","flew"],"is + fly-ing = flying.");
m.pg("A3","continuous","Budi is … his bicycle to school.",["riding","ride","rides","rideing"],"ride → riding (huruf e dihilangkan).");
m.pg("A4","continuous","Ali and Umar … playing badminton.",["are","is","am","be"],"Subjek jamak (2 orang) → are.");
m.pg("A4","continuous","The students … cleaning the classroom.",["are","is","am","was"],"The students (jamak) → are.");
m.pg("A4","continuous","My parents … watching TV in the living room.",["are","is","am","does"],"My parents (jamak) → are.");
m.pg("A5","continuous","A: Are you studying now?<br>B: Yes, ….",["I am","you are","I is","he is"],"Are you …? → Yes, I am.");
m.pg("A5","continuous","A: Are you drawing a picture?<br>B: No, ….",["I am not","you aren’t","I isn’t","she isn’t"],"Are you …? → No, I am not.");
m.pg("A5","continuous","A: Are you reading a book, Rina?<br>B: Yes, ….",["I am","I are","you are","she is"],"Jawab dengan I am.");
m.pg("A6","continuous","A: Is Siti sleeping?<br>B: No, ….",["she isn’t","he isn’t","she aren’t","I am not"],"Siti = she → No, she isn’t.");
m.pg("A6","continuous","A: Is your father cooking?<br>B: No, ….",["he isn’t","she isn’t","he aren’t","they aren’t"],"Father = he → No, he isn’t.");
m.pg("A6","continuous","A: Is the cat eating fish?<br>B: No, ….",["it isn’t","he isn’t","they aren’t","I am not"],"The cat = it → No, it isn’t.");
m.pg("A7","angka","<div style='font-size:2.4rem;font-weight:800;text-align:center'>47</div>The number on the card is ….",["forty-seven","fourty-seven","seventy-four","forty-six"],"47 = forty-seven (forty tanpa u).");
m.pg("A7","angka","<div style='font-size:2.4rem;font-weight:800;text-align:center'>63</div>The number on the card is ….",["sixty-three","thirty-six","sixteen-three","sixty-thirteen"],"63 = sixty-three.");
m.pg("A7","angka","<div style='font-size:2.4rem;font-weight:800;text-align:center'>15</div>The number on the card is ….",["fifteen","fifty","five-ten","fiveteen"],"15 = fifteen.");
m.pg("A8","angka","Twenty + thirty = ….",["fifty","forty","sixty","seventy"],"20 + 30 = 50 = fifty.");
m.pg("A8","angka","Forty + thirty-five = ….",["seventy-five","sixty-five","eighty-five","seventy"],"40 + 35 = 75 = seventy-five.");
m.pg("A8","angka","Fifty + twelve = ….",["sixty-two","fifty-two","seventy-two","sixty-twelve"],"50 + 12 = 62 = sixty-two.");
m.pg("A9","rumah","Mother keeps vegetables and milk in the refrigerator. The refrigerator is in the ….",["kitchen","bedroom","bathroom","garage"],"Kulkas biasanya di dapur (kitchen).");
m.pg("A9","rumah","Mother cooks rice and keeps food in the refrigerator. She is in the ….",["kitchen","living room","garage","bedroom"],"Memasak dan kulkas → kitchen.");
m.pg("A9","rumah","Kata <i>kitchen</i> artinya ….",["dapur","kamar tidur","kamar mandi","ruang tamu"],"Kitchen = dapur.");
m.pg("A10","rumah","We take a bath, wash our face, and brush our teeth in the ….",["bathroom","kitchen","bedroom","dining room"],"Mandi, cuci muka, gosok gigi → bathroom.");
m.pg("A10","rumah","Kata <i>bathroom</i> artinya ….",["kamar mandi","kamar tidur","ruang makan","garasi"],"Bathroom = kamar mandi.");
m.pg("A10","rumah","I brush my teeth before sleeping. I do it in the ….",["bathroom","living room","garage","kitchen"],"Gosok gigi di bathroom.");
m.pg("A11","rumah",`${kucing("under")}Where is the cat?`,["The cat is under the table.","The cat is on the table.","The cat is beside the table.","The cat is in the table."],"Kucing berada di bawah meja = under.");
m.pg("A11","rumah",`${kucing("on")}Where is the cat?`,["The cat is on the table.","The cat is under the table.","The cat is behind the table.","The cat is beside the table."],"Kucing di atas meja = on.");
m.pg("A11","rumah",`${kucing("beside")}Where is the cat?`,["The cat is beside the table.","The cat is on the table.","The cat is under the table.","The cat is in the box."],"Kucing di samping meja = beside (next to).");
m.pg("A12","rumah","My pencil case is … my school bag.",["in","on","under","behind"],"Di dalam tas = in.");
m.pg("A12","rumah","The books are … the bag. I put them inside.",["in","on","beside","under"],"Inside (di dalam) = in.");
m.pg("A12","rumah","Kata depan yang artinya “di dalam” adalah ….",["in","on","under","beside"],"In = di dalam.");
m.pg("A13","sifat","An elephant is very ….",["big","small","short","thin"],"Gajah sangat besar = big.");
m.pg("A13","sifat","An elephant has a … nose (trunk).",["long","short","small","round"],"Belalai gajah panjang = long.");
m.pg("A13","sifat","An ant is … but an elephant is big.",["small","big","tall","long"],"Semut kecil = small.");
m.pg("A14","sifat","I always clean my room. My room is ….",["clean","dirty","messy","big"],"Kamar yang dibersihkan = clean.");
m.pg("A14","sifat","There is no rubbish in my room. My room is ….",["clean","dirty","old","hot"],"Tidak ada sampah = clean (bersih).");
m.pg("A14","sifat","Kata sifat yang artinya “bersih” adalah ….",["clean","dirty","tidy","clear"],"Clean = bersih. Dirty = kotor.");
m.pg("A15","simple",`${YUSUF}Where does Yusuf have breakfast with his parents?`,["In the dining room","In the kitchen","In the bedroom","In the living room"],"Tertulis: in the dining room.");
m.pg("A15","simple",`${YUSUF}What time does Yusuf have breakfast?`,["At six o’clock","At five o’clock","At seven o’clock","At twelve o’clock"],"At six o’clock.");
m.pg("A15","simple",`${YUSUF}Who prays Subuh with Yusuf?`,["His father","His mother","His sister","His teacher"],"He prays Subuh with his father.");
m.pg("A16","simple",`${YUSUF}What does Yusuf’s father drink every morning?`,["A cup of coffee","A glass of milk","A cup of tea","A glass of water"],"His father drinks a cup of coffee every morning.");
m.pg("A16","simple",`${YUSUF}What does Yusuf drink?`,["A glass of milk","A cup of coffee","Tea","Orange juice"],"He drinks a glass of milk.");
m.pg("A16","simple",`${YUSUF}What does Yusuf’s mother drink?`,["Tea","Coffee","Milk","Juice"],"His mother drinks tea.");
m.pg("A17","simple","My mother … breakfast every morning.",["cooks","cook","cooking","are cook"],"My mother = she → cook + s = cooks.");
m.pg("A17","simple","My mother … to the market every Sunday.",["goes","go","going","gos"],"She → go + es = goes.");
m.pg("A17","simple","My mother … the clothes every day.",["washes","wash","washs","washing"],"wash + es = washes.");
m.pg("A18","simple","Salma … the Qur’an every night.",["reads","read","reading","readed"],"Salma (1 orang) → reads.");
m.pg("A18","simple","Salma always … her teeth before she sleeps.",["brushes","brush","brushs","brushing"],"brush + es = brushes.");
m.pg("A18","simple","Salma … at nine o’clock every night.",["sleeps","sleep","sleeping","is sleep"],"Salma → sleeps.");
m.pg("A19","simple","Ali and Umar … football every afternoon.",["play","plays","playing","is play"],"Ali and Umar (2 orang) → kata kerja biasa: play.");
m.pg("A19","simple","Ali and Umar … to school by bike.",["go","goes","going","gos"],"Subjek jamak → go.");
m.pg("A19","simple","Ali and Umar … the Qur’an after Magrib.",["read","reads","reading","is read"],"Subjek jamak → read.");
m.pg("A20","simple","Susun kata acak berikut!<br><b>school – go – I – to – every day</b>",["I go to school every day.","I to school go every day.","Go I to school every day.","Every day school I go to."],"Subjek + kata kerja + keterangan.");
m.pg("A20","simple","Susun kata acak berikut!<br><b>is – my mother – in – cooking – the kitchen</b>",["My mother is cooking in the kitchen.","My mother cooking is in the kitchen.","Is my mother cooking the kitchen in.","In the kitchen my mother cooking is."],"Subjek + is + verb-ing + keterangan.");
m.pg("A20","simple","Susun kata acak berikut!<br><b>the cat – under – is – the table</b>",["The cat is under the table.","The cat under is the table.","Is the cat the table under.","Under the cat is the table."],"Subjek + is + preposisi + tempat.");

/* ================= ISIAN ================= */
m.is("B1","continuous","I … reading a book now.",["am"],"I → am.");
m.is("B1","continuous","She … writing a letter.",["is"],"She → is.");
m.is("B1","continuous","We … studying English.",["are"],"We → are.");
m.is("B2","continuous","The -ing form of <i>fly</i> is ….",["flying"],"fly + ing = flying.");
m.is("B2","continuous","The -ing form of <i>swim</i> is ….",["swimming"],"swim → swimming (m digandakan).");
m.is("B2","continuous","The -ing form of <i>write</i> is ….",["writing"],"write → writing (e dihilangkan).");
m.is("B3","continuous","A: Is your mother cooking?<br>B: Yes, ….",["she is"],"Mother = she → Yes, she is.");
m.is("B3","continuous","A: Is Budi playing kite?<br>B: Yes, ….",["he is"],"Budi = he → Yes, he is.");
m.is("B3","continuous","A: Is the baby sleeping?<br>B: No, ….",["she isn’t","he isn’t","she is not","he is not","it isn’t","it is not"],"Jawab negatif: No, she/he isn’t.");
m.is("B4","angka","After eighty-nine comes ….",["ninety","90"],"89 + 1 = 90 = ninety.");
m.is("B4","angka","After twenty-nine comes ….",["thirty"],"29 + 1 = 30 = thirty.");
m.is("B4","angka","Write 100 in English: ….",["one hundred","a hundred"],"100 = one hundred.");
m.is("B5","angka","Sixty + forty = …. (tulis dalam bahasa Inggris)",["one hundred","a hundred"],"60 + 40 = 100 = one hundred.");
m.is("B5","angka","Thirty + twenty = …. (tulis dalam bahasa Inggris)",["fifty"],"30 + 20 = 50 = fifty.");
m.is("B5","angka","Fifteen + five = …. (tulis dalam bahasa Inggris)",["twenty"],"15 + 5 = 20 = twenty.");
m.is("B6","rumah","The place to park the family car is the ….",["garage"],"Garage = garasi.");
m.is("B6","rumah","The room where we sleep is the ….",["bedroom","bed room"],"Bedroom = kamar tidur.");
m.is("B6","rumah","The room where we eat together is the ….",["dining room"],"Dining room = ruang makan.");
m.is("B7","rumah",`${kucing("under")}The cat is … the table.`,["under"],"Di bawah = under.");
m.is("B7","rumah",`${kucing("on")}The cat is … the table.`,["on"],"Di atas = on.");
m.is("B7","rumah",`${kucing("in")}The cat is … the box.`,["in","inside"],"Di dalam = in.");
m.is("B8","sifat","The opposite of <i>dirty</i> (kotor) is ….",["clean"],"Dirty >< clean.");
m.is("B8","sifat","The opposite of <i>big</i> is ….",["small","little"],"Big >< small.");
m.is("B8","sifat","The opposite of <i>tall</i> is ….",["short"],"Tall >< short.");
m.is("B9","simple","Farhan … (go) to school every morning.",["goes"],"Farhan (he) → goes.");
m.is("B9","simple","Farhan … (go) to the mosque every Friday.",["goes"],"go + es = goes.");
m.is("B9","simple","Farhan and Rafi … (go) to school together.",["go"],"Subjek jamak → go.");
m.is("B10","simple","Aisyah … (wash) the dishes every evening.",["washes"],"wash + es = washes.");
m.is("B10","simple","Aisyah … (wash) her hands before eating.",["washes"],"Aisyah (she) → washes.");
m.is("B10","simple","Aisyah … (watch) TV every Sunday.",["watches"],"watch + es = watches.");

/* ================= URAIAN ================= */
m.ur("C1","continuous","Change into a Yes/No question!<br><b>They are cleaning the classroom.</b>","<b>Are they cleaning the classroom?</b>",["are dipindah ke depan","diakhiri tanda tanya"]);
m.ur("C1","continuous","Change into a Yes/No question!<br><b>She is reading a book.</b>","<b>Is she reading a book?</b>",["is dipindah ke depan","diakhiri tanda tanya"]);
m.ur("C2","angka","Write the numbers in English!<br>a) 58 &nbsp; b) 94","a) <b>fifty-eight</b><br>b) <b>ninety-four</b>",["fifty-eight","ninety-four"]);
m.ur("C2","angka","Write the numbers in English!<br>a) 47 &nbsp; b) 73","a) <b>forty-seven</b><br>b) <b>seventy-three</b>",["forty-seven (tanpa u)","seventy-three"]);
m.ur("C3","simple","Arrange into good sentences!<br>1) reads – Salma – the Qur’an – every night<br>2) playing – are – they – football<br>3) the cat – on – is – the chair","1) <b>Salma reads the Qur’an every night.</b><br>2) <b>They are playing football.</b><br>3) <b>The cat is on the chair.</b>",["Tiga kalimat benar urutannya"]);
m.ur("C3","simple","Arrange into good sentences!<br>1) to school – I – every day – go<br>2) is – my father – coffee – drinking<br>3) in – the bag – is – my pencil","1) <b>I go to school every day.</b><br>2) <b>My father is drinking coffee.</b><br>3) <b>My pencil is in the bag.</b>",["Tiga kalimat benar urutannya"]);
m.ur("C4","simple","Complete with the correct verb!<br>1) My brother … (read) books every night.<br>2) We … (play) badminton every Sunday.<br>3) She … (go) to the market every morning.","1) <b>reads</b><br>2) <b>play</b><br>3) <b>goes</b>",["reads","play","goes"]);
m.ur("C4","simple","Complete with the correct verb!<br>1) Mother … (cook) rice every morning.<br>2) Ali and Umar … (study) together.<br>3) Salma … (wash) her face.","1) <b>cooks</b><br>2) <b>study</b><br>3) <b>washes</b>",["cooks","study","washes"]);
m.ur("C5","rumah","Translate into English!<br>1) Kucing itu di bawah meja.<br>2) Kamarku bersih.","1) <b>The cat is under the table.</b><br>2) <b>My room is clean.</b>",["under the table","My room is clean"]);
m.ur("C5","rumah","Translate into English!<br>1) Buku itu di atas meja.<br>2) Rumahku besar.","1) <b>The book is on the table.</b><br>2) <b>My house is big.</b>",["on the table","My house is big"]);
})();
