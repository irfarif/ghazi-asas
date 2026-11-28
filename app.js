'use strict';
/* ===== Latihan ASAS Kelas 4 — aplikasi utama ===== */
const URUTAN = ['akidah', 'quran', 'fikih', 'ski', 'bindo', 'sunda', 'inggris', 'mtk', 'ipas', 'pancasila', 'senbud'];
const KEY = 'asas4-v1', KEY_UJ = 'asas4-ujian';
const ASAS_MULAI = new Date(2026, 10, 30), ASAS_AKHIR = new Date(2026, 11, 8, 23, 59);
const JML_LATIH = 10;
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');

/* ---------- data ---------- */
const MAPEL = URUTAN.filter(id => window.BANK && BANK[id]).map(id => BANK[id]);
MAPEL.forEach(m => {
  const hit = {};
  m.soal.forEach(s => { hit[s.k] = (hit[s.k] || 0); s.id = s.k + '.' + hit[s.k]++; s.m = m.id; });
  m.babMap = Object.fromEntries(m.bab.map(b => [b.id, b]));
});
const M = id => BANK[id];

/* ---------- penyimpanan ---------- */
function bawaan() { return { nama: '', bintang: 0, stat: {}, salah: {}, riwayat: [], lencana: [], jml: 0, hari: [], baca: [], dilatih: [] }; }
let S = (() => { try { return Object.assign(bawaan(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return bawaan(); } })();
function simpan() { localStorage.setItem(KEY, JSON.stringify(S)); $('#bintangTop span').textContent = S.bintang; }

function hariIni() { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
function catat(s, nilai) {
  const st = (S.stat[s.m] = S.stat[s.m] || {});
  const b = (st[s.b] = st[s.b] || { b: 0, n: 0 });
  b.b += nilai; b.n += 1; S.jml += 1;
  const sl = (S.salah[s.m] = S.salah[s.m] || []);
  const i = sl.indexOf(s.id);
  if (nilai < 1 && i < 0) sl.push(s.id);
  if (nilai >= 1 && i >= 0) sl.splice(i, 1);
  if (!S.hari.includes(hariIni())) S.hari.push(hariIni());
  if (!S.dilatih.includes(s.m)) S.dilatih.push(s.m);
  simpan();
}
function koreksi(s, dari, ke) { // ubah nilai yang sudah tercatat
  const b = S.stat[s.m][s.b]; b.b += ke - dari;
  const sl = S.salah[s.m] || []; const i = sl.indexOf(s.id);
  if (ke >= 1 && i >= 0) sl.splice(i, 1);
  simpan();
}
function tambahBintang(n) { if (n > 0) { S.bintang += n; simpan(); } }
function akurasi(mid, bid) {
  const st = S.stat[mid] || {};
  let b = 0, n = 0;
  Object.entries(st).forEach(([k, v]) => { if (!bid || k === bid) { b += v.b; n += v.n; } });
  return n ? { pct: Math.round(b / n * 100), n } : { pct: null, n: 0 };
}
function nilaiTerbaik(mid) {
  const r = S.riwayat.filter(x => x.m === mid && x.mode === 'ujian');
  return r.length ? Math.max(...r.map(x => x.skor)) : null;
}

/* ---------- lencana ---------- */
const LENCANA = [
  { id: 'pertama', e: '🌱', n: 'Langkah Pertama', d: 'Menjawab soal pertama', c: () => S.jml >= 1 },
  { id: 'rajin50', e: '📘', n: 'Rajin Berlatih', d: 'Menjawab 50 soal', c: () => S.jml >= 50 },
  { id: 'rajin200', e: '🚀', n: 'Pejuang Soal', d: 'Menjawab 200 soal', c: () => S.jml >= 200 },
  { id: 'rajin500', e: '🏔️', n: 'Master Latihan', d: 'Menjawab 500 soal', c: () => S.jml >= 500 },
  { id: 'baca', e: '📖', n: 'Kutu Buku', d: 'Membaca 10 rangkuman', c: () => S.baca.length >= 10 },
  { id: 'ujian1', e: '📝', n: 'Berani Ujian', d: 'Menyelesaikan 1 simulasi ASAS', c: () => S.riwayat.some(x => x.mode === 'ujian') },
  { id: 'nilai90', e: '🌟', n: 'Bintang Kelas', d: 'Nilai simulasi 90 ke atas', c: () => S.riwayat.some(x => x.mode === 'ujian' && x.skor >= 90) },
  { id: 'nilai100', e: '🏆', n: 'Sempurna!', d: 'Nilai simulasi 100', c: () => S.riwayat.some(x => x.mode === 'ujian' && x.skor >= 100) },
  { id: 'jelajah', e: '🧭', n: 'Penjelajah Ilmu', d: 'Berlatih di semua mata pelajaran', c: () => MAPEL.every(m => S.dilatih.includes(m.id)) },
  { id: 'hari3', e: '🔥', n: 'Istiqamah', d: 'Berlatih di 3 hari berbeda', c: () => S.hari.length >= 3 },
  { id: 'bintang100', e: '💫', n: 'Kolektor Bintang', d: 'Mengumpulkan 100 bintang', c: () => S.bintang >= 100 },
  { id: 'siap', e: '🎓', n: 'Siap ASAS!', d: 'Simulasi 75+ di semua mapel', c: () => MAPEL.every(m => (nilaiTerbaik(m.id) || 0) >= 75) },
];
function cekLencana() {
  LENCANA.forEach(l => {
    if (!S.lencana.includes(l.id) && l.c()) {
      S.lencana.push(l.id); simpan();
      setTimeout(() => toast(`${l.e} Lencana baru: ${l.n}!`), 600);
    }
  });
}

/* ---------- utilitas ---------- */
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function acak(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function norm(s) {
  return String(s).replace(/²/g, '2').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['’‘`ʼ]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function cocok(jwb, alts) {
  const j = norm(jwb); if (!j) return false;
  const jw = j.split(' ').length;
  return alts.some(a => {
    const x = norm(a); if (!x) return false;
    if (j === x || j.replace(/ /g, '') === x.replace(/ /g, '')) return true;
    if (/^\d+$/.test(x) && j.split(' ')[0] === x) return true; // "13 cm" cocok dengan "13"
    return x.length >= 3 && (' ' + j + ' ').includes(' ' + x + ' ') && jw <= x.split(' ').length + 3;
  });
}
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 2600); }
function dialog(html, tombol) {
  return new Promise(res => {
    const box = $('#modalBox');
    box.innerHTML = html + `<div class="aksi">${tombol.map((t, i) => `<button class="btn ${t.k || ''}" data-i="${i}">${t.t}</button>`).join('')}</div>`;
    $('#modal').hidden = false;
    box.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { $('#modal').hidden = true; res(tombol[+b.dataset.i].v); });
  });
}
function pie(n, k, size = 140) {
  const c = size / 2, r = c - 4; let p = '';
  if (n === 1) p = `<circle cx="${c}" cy="${c}" r="${r}" fill="${k ? '#f0a43a' : '#fff6e0'}" stroke="#8a5600" stroke-width="2"/>`;
  else for (let i = 0; i < n; i++) {
    const a0 = i / n * 2 * Math.PI - Math.PI / 2, a1 = (i + 1) / n * 2 * Math.PI - Math.PI / 2;
    const x0 = c + r * Math.cos(a0), y0 = c + r * Math.sin(a0), x1 = c + r * Math.cos(a1), y1 = c + r * Math.sin(a1);
    p += `<path d="M${c},${c} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${1 / n > .5 ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${i < k ? '#f0a43a' : '#fff6e0'}" stroke="#8a5600" stroke-width="2"/>`;
  }
  return `<svg class="gbr" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="lingkaran dibagi ${n}, diarsir ${k}">${p}</svg>`;
}
function persegi(n, k, w = 240) {
  const h = 50, bw = (w - 4) / n; let p = '';
  for (let i = 0; i < n; i++) p += `<rect x="${2 + i * bw}" y="2" width="${bw}" height="${h}" fill="${i < k ? '#5bb8a8' : '#eef8f5'}" stroke="#0b5a54" stroke-width="2"/>`;
  return `<svg class="gbr" width="${w}" height="${h + 4}" viewBox="0 0 ${w} ${h + 4}" role="img" aria-label="persegi panjang dibagi ${n}, diarsir ${k}">${p}</svg>`;
}
function fmt(html) {
  return String(html)
    .replace(/\[\[pie:(\d+):(\d+)(?::([^\]]+))?\]\]/g, (_, n, k, cap) => cap ? `<figure>${pie(+n, +k, 120)}<figcaption>${cap}</figcaption></figure>` : pie(+n, +k))
    .replace(/\[\[rect:(\d+):(\d+)\]\]/g, (_, n, k) => persegi(+n, +k));
}
const JENIS = { pg: 'Pilihan ganda', is: 'Isian', ur: 'Uraian' };
const HURUF = 'ABCD';

/* ---------- router ---------- */
function pergi(h) { location.hash = h; }
window.addEventListener('hashchange', render);
$('#btnBack').onclick = () => {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  if (parts[0] === 'ujian' && uj && !uj.selesai) return keluarUjian();
  if (['baca', 'latih', 'ujian'].includes(parts[0])) pergi('#/mapel/' + parts[1]);
  else pergi('#/');
};
let timerId = null;
function render() {
  clearInterval(timerId);
  const [r, a, b] = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  $('#btnBack').hidden = !r;
  window.scrollTo(0, 0);
  if (r === 'mapel' && M(a)) return halMapel(a, b);
  if (r === 'baca' && M(a)) return halBaca(a, b);
  if (r === 'latih' && M(a)) return halLatih(a, b);
  if (r === 'ujian' && M(a)) return halUjian(a);
  if (r === 'laporan') return halLaporan();
  if (r === 'atur') return halAtur();
  return halBeranda();
}
function judul(t) { $('#judul').textContent = t; document.title = t + ' · Latihan ASAS'; }

/* ---------- beranda ---------- */
function hitungMundur() {
  const now = new Date(), hari = Math.ceil((ASAS_MULAI - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 864e5);
  if (hari > 0) return `<div class="hitung"><b>${hari}</b>hari lagi ASAS</div>`;
  if (now <= ASAS_AKHIR) return `<div class="hitung"><b>ASAS</b>sedang berlangsung</div>`;
  return `<div class="hitung"><b>✓</b>ASAS selesai</div>`;
}
function halBeranda() {
  judul('Latihan ASAS Kelas 4');
  const nama = S.nama ? esc(S.nama) : 'Pejuang Ilmu';
  const ujSimpan = bacaUjian();
  app.innerHTML = `<div class="stack">
    <section class="hero">
      <div><h2>Assalamu'alaikum, ${nama}!</h2><p>Mau belajar apa hari ini? Pilih mata pelajaran di bawah.</p></div>
      ${hitungMundur()}
    </section>
    ${ujSimpan ? `<div class="card row"><div class="t" style="flex:1"><b>Simulasi ${esc(M(ujSimpan.mid).nama)} belum selesai.</b><div class="muted small">Lanjutkan sebelum waktunya habis.</div></div><a class="btn acc" href="#/ujian/${ujSimpan.mid}">Lanjutkan</a></div>` : ''}
    ${MAPEL.length ? '' : `<div class="card hasil bad"><h4>Data soal belum termuat</h4>Sambungkan tablet ke internet, lalu tutup dan buka lagi aplikasinya.</div>`}
    <div class="grid">${MAPEL.map(m => {
      const a = akurasi(m.id), nt = nilaiTerbaik(m.id);
      return `<a class="mapel" style="--c:${m.warna};text-decoration:none;color:inherit" href="#/mapel/${m.id}">
        <span class="ik">${m.ikon}</span><b>${esc(m.nama)}</b>
        <div class="bar"><i style="width:${a.pct ?? 0}%"></i></div>
        <span class="muted small">${a.n ? `Benar ${a.pct}% dari ${a.n} soal` : 'Belum dilatih'}${nt != null ? ` · Simulasi terbaik ${nt}` : ''}</span>
      </a>`;
    }).join('')}</div>
    <div class="row">
      <a class="btn sec" href="#/laporan">📊 Nilai &amp; Lencana</a>
      <a class="btn ghost" href="#/atur">⚙️ Pengaturan</a>
    </div>
  </div>`;
  if (!S.nama && !halBeranda.ditanya) { halBeranda.ditanya = 1; tanyaNama(); }
}
async function tanyaNama() {
  const box = $('#modalBox');
  box.innerHTML = `<h2>Halo! Siapa namamu?</h2><input class="isi" id="inNama" placeholder="Tulis nama panggilanmu" autocomplete="off">
    <div class="aksi"><button class="btn" id="okNama">Simpan</button></div>`;
  $('#modal').hidden = false;
  $('#okNama').onclick = () => { S.nama = $('#inNama').value.trim().slice(0, 30); simpan(); $('#modal').hidden = true; render(); };
}

/* ---------- halaman mapel ---------- */
function halMapel(mid) {
  const m = M(mid); judul(m.nama);
  const salah = (S.salah[mid] || []).length, nt = nilaiTerbaik(mid);
  const jml = t => m.soal.filter(s => s.t === t).length;
  app.innerHTML = `<div class="stack">
    <div class="card row" style="border-top:8px solid ${m.warna}">
      <span style="font-size:2.6rem">${m.ikon}</span>
      <div style="flex:1"><h2 style="margin:0">${esc(m.nama)}</h2>
        <div class="muted small">${m.soal.length} soal latihan: ${jml('pg')} pilihan ganda, ${jml('is')} isian, ${jml('ur')} uraian</div></div>
    </div>
    <div class="card">
      <h3>📝 Simulasi ASAS</h3>
      <p class="muted" style="margin-top:0">Soalnya sama persis susunannya dengan kisi-kisi ASAS, diambil acak setiap kali. ${nt != null ? `Nilai terbaikmu: <b>${nt}</b>.` : ''}</p>
      <a class="btn acc" href="#/ujian/${mid}">Mulai Simulasi</a>
    </div>
    <div class="card">
      <h3>📚 Belajar per bab</h3>
      <p class="muted small" style="margin-top:0">Baca rangkumannya dulu, lalu latihan ${JML_LATIH} soal.</p>
      <div class="list">${m.bab.map(b => {
        const a = akurasi(mid, b.id), n = m.soal.filter(s => s.b === b.id).length;
        const pill = a.pct == null ? '<span class="pill">baru</span>' : a.pct >= 80 ? `<span class="pill ok">${a.pct}%</span>` : a.pct >= 60 ? `<span class="pill acc">${a.pct}%</span>` : `<span class="pill bad">${a.pct}%</span>`;
        return `<div class="item"><div class="t"><b>${esc(b.judul)}</b><div class="muted small">${n} soal ${S.baca.includes(mid + '/' + b.id) ? '· ✓ sudah dibaca' : ''}</div></div>
          ${pill}
          <a class="btn sec" href="#/baca/${mid}/${b.id}">Baca</a>
          <a class="btn" href="#/latih/${mid}/${b.id}">Latihan</a></div>`;
      }).join('')}</div>
    </div>
    <div class="row">
      <a class="btn sec" href="#/latih/${mid}/semua">🎲 Latihan acak semua bab</a>
      ${salah ? `<a class="btn ghost" href="#/latih/${mid}/salah">🔁 Ulangi ${salah} soal yang salah</a>` : ''}
    </div>
  </div>`;
}

/* ---------- rangkuman ---------- */
function halBaca(mid, bid) {
  const m = M(mid), b = m.babMap[bid]; if (!b) return pergi('#/mapel/' + mid);
  judul(b.judul);
  const k = mid + '/' + bid; if (!S.baca.includes(k)) { S.baca.push(k); simpan(); cekLencana(); }
  const i = m.bab.indexOf(b), next = m.bab[i + 1];
  app.innerHTML = `<div class="stack">
    <article class="card rangkuman"><h2>${esc(b.judul)}</h2>${fmt(b.r)}</article>
    <div class="aksi">
      <a class="btn" href="#/latih/${mid}/${bid}">✏️ Latihan bab ini</a>
      ${next ? `<a class="btn sec" href="#/baca/${mid}/${next.id}">Bab berikutnya ›</a>` : ''}
    </div></div>`;
}

/* ---------- latihan ---------- */
let sesi = null;
function halLatih(mid, bid) {
  const m = M(mid);
  const kunci = mid + '/' + bid;
  if (!sesi || sesi.kunci !== kunci || sesi.baru) {
    let pool = bid === 'semua' ? m.soal : bid === 'salah' ? m.soal.filter(s => (S.salah[mid] || []).includes(s.id)) : m.soal.filter(s => s.b === bid);
    if (!pool.length) { toast('Belum ada soal di sini.'); return pergi('#/mapel/' + mid); }
    const list = acak(pool).slice(0, bid === 'salah' ? 20 : JML_LATIH);
    sesi = { kunci, mid, bid, list, ord: list.map(s => s.acak ? acak(s.o.map((_, i) => i)) : s.o ? s.o.map((_, i) => i) : null), i: 0, nilai: [], bintang: 0 };
  }
  sesi.baru = false;
  const namaBab = bid === 'semua' ? 'Acak semua bab' : bid === 'salah' ? 'Ulangi yang salah' : m.babMap[bid].judul;
  judul('Latihan · ' + namaBab);
  if (sesi.i >= sesi.list.length) return selesaiLatih();
  tampilSoalLatih();
}
function kepalaSoal(s, i, n) {
  const m = M(s.m);
  return `<div class="soalhead"><span class="pill">Soal ${i + 1} / ${n}</span><div class="prog"><i style="width:${i / n * 100}%"></i></div></div>
    <div class="muted small">${esc(m.babMap[s.b]?.judul || '')} · ${JENIS[s.t]}</div>`;
}
function htmlOpsi(s, ord, pilih) {
  return `<div class="opsi">${ord.map((oi, j) => `<button class="op ${pilih === oi ? 'pilih' : ''}" data-oi="${oi}"><span class="h">${HURUF[j]}</span><span>${fmt(s.o[oi])}</span></button>`).join('')}</div>`;
}
function tampilSoalLatih() {
  const s = sesi.list[sesi.i], ord = sesi.ord[sesi.i];
  let body = '';
  if (s.t === 'pg') body = htmlOpsi(s, ord);
  if (s.t === 'is') body = `<div style="margin-top:14px"><input class="isi" id="jwb" placeholder="Tulis jawabanmu" autocomplete="off" autocapitalize="off"></div>
    <div class="aksi"><button class="btn" id="cek">Periksa</button></div>`;
  if (s.t === 'ur') body = `<div style="margin-top:14px"><textarea class="isi" id="jwb" placeholder="Tulis jawabanmu di sini (boleh juga dijawab di buku tulis)"></textarea></div>
    <div class="aksi"><button class="btn" id="cek">Lihat contoh jawaban</button></div>`;
  app.innerHTML = `<div class="stack">${kepalaSoal(s, sesi.i, sesi.list.length)}
    <div class="card"><div class="tanya">${fmt(s.q)}</div>${body}<div id="fb"></div></div></div>`;
  if (s.t === 'pg') app.querySelectorAll('.op').forEach(b => b.onclick = () => jawabPG(s, +b.dataset.oi));
  if (s.t === 'is') { const inp = $('#jwb'); inp.focus(); inp.onkeydown = e => { if (e.key === 'Enter') jawabIsian(s); }; $('#cek').onclick = () => jawabIsian(s); }
  if (s.t === 'ur') $('#cek').onclick = () => jawabUraian(s);
}
function pembahasan(s) { return s.p ? `<div style="margin-top:8px">${fmt(s.p)}</div>` : ''; }
function tombolLanjut() {
  const akhir = sesi.i + 1 >= sesi.list.length;
  return `<div class="aksi"><button class="btn" id="lanjut">${akhir ? 'Lihat hasil' : 'Soal berikutnya ›'}</button></div>`;
}
function pasangLanjut() { $('#lanjut').onclick = () => { sesi.i++; halLatih(sesi.mid, sesi.bid); }; $('#lanjut').scrollIntoView({ behavior: 'smooth', block: 'center' }); }
function beriNilai(s, v) {
  sesi.nilai[sesi.i] = v; catat(s, v);
  if (v >= 1) { sesi.bintang++; tambahBintang(1); }
  cekLencana();
}
function jawabPG(s, oi) {
  if (sesi.nilai[sesi.i] != null) return;
  const benar = oi === s.a;
  app.querySelectorAll('.op').forEach(b => {
    b.disabled = true; const x = +b.dataset.oi;
    if (x === s.a) b.classList.add('benar'); else if (x === oi) b.classList.add('salah');
  });
  beriNilai(s, benar ? 1 : 0);
  $('#fb').innerHTML = `<div class="hasil ${benar ? 'ok' : 'bad'}"><h4>${benar ? '✅ Benar! +1 ★' : '❌ Belum tepat'}</h4>
    ${benar ? '' : `<div>Jawaban yang benar: <span class="kunci">${fmt(s.o[s.a])}</span></div>`}${pembahasan(s)}</div>${tombolLanjut()}`;
  pasangLanjut();
}
function jawabIsian(s) {
  if (sesi.nilai[sesi.i] != null) return;
  const v = $('#jwb').value; if (!v.trim()) return toast('Tulis jawabanmu dulu ya.');
  const benar = cocok(v, s.a); $('#jwb').disabled = true; $('#cek').remove();
  beriNilai(s, benar ? 1 : 0);
  $('#fb').innerHTML = `<div class="hasil ${benar ? 'ok' : 'bad'}"><h4>${benar ? '✅ Benar! +1 ★' : '❌ Belum tepat'}</h4>
    <div>Kunci jawaban: <span class="kunci">${esc(s.a[0])}</span></div>${pembahasan(s)}
    ${benar ? '' : `<div class="aksi"><button class="btn ghost" id="sama">Jawabanku sebenarnya sama maksudnya</button></div>`}</div>${tombolLanjut()}`;
  if (!benar) $('#sama').onclick = () => {
    koreksi(s, 0, 1); sesi.nilai[sesi.i] = 1; sesi.bintang++; tambahBintang(1);
    $('#sama').parentElement.innerHTML = '<b>Oke, dihitung benar. +1 ★</b>';
  };
  pasangLanjut();
}
function htmlContoh(s) {
  return `<div><b>Contoh jawaban:</b><div style="margin-top:4px">${fmt(s.a)}</div></div>
    ${s.poin.length ? `<div style="margin-top:8px"><b>Poin yang harus ada:</b><ul class="poin">${s.poin.map(p => `<li>${fmt(p)}</li>`).join('')}</ul></div>` : ''}${pembahasan(s)}`;
}
function tombolNilaiSendiri() {
  return `<div style="margin-top:10px"><b>Bandingkan dengan jawabanmu. Bagaimana hasilnya?</b></div>
    <div class="aksi"><button class="btn" data-v="1">✅ Sudah benar</button><button class="btn sec" data-v="0.5">🟡 Sebagian</button><button class="btn ghost" data-v="0">❌ Belum</button></div>`;
}
function jawabUraian(s) {
  $('#cek').remove();
  $('#fb').innerHTML = `<div class="hasil info">${htmlContoh(s)}${tombolNilaiSendiri()}</div>`;
  $('#fb').querySelectorAll('[data-v]').forEach(b => b.onclick = () => {
    const v = +b.dataset.v; beriNilai(s, v);
    $('#fb').querySelector('.aksi').outerHTML = `<div style="margin-top:8px"><b>${v === 1 ? 'Hebat! +1 ★' : v ? 'Lumayan, coba baca lagi rangkumannya ya.' : 'Tidak apa-apa, baca contoh jawabannya lalu coba lagi nanti.'}</b></div>`;
    $('#fb').insertAdjacentHTML('beforeend', tombolLanjut()); pasangLanjut();
  });
}
function selesaiLatih() {
  const n = sesi.list.length, b = sesi.nilai.reduce((x, y) => x + (y || 0), 0), pct = Math.round(b / n * 100);
  if (!sesi.dicatat) {
    sesi.dicatat = true;
    S.riwayat.push({ t: Date.now(), m: sesi.mid, mode: 'latihan', bab: sesi.bid, skor: pct, benar: b, n }); S.riwayat = S.riwayat.slice(-200); simpan();
  }
  const pesan = pct >= 90 ? 'Luar biasa! 🌟' : pct >= 70 ? 'Bagus sekali! 👍' : pct >= 50 ? 'Lumayan, terus berlatih ya! 💪' : 'Ayo baca rangkumannya lagi, pasti bisa! 📖';
  app.innerHTML = `<div class="stack"><div class="card skor"><div class="muted">Hasil latihan</div><div class="angka">${pct}</div>
    <h2>${pesan}</h2><p>Benar ${b} dari ${n} soal · dapat ${sesi.bintang} ★</p></div>
    <div class="aksi">
      <button class="btn" id="ulang">🔄 Latihan lagi</button>
      ${sesi.bid !== 'semua' && sesi.bid !== 'salah' ? `<a class="btn sec" href="#/baca/${sesi.mid}/${sesi.bid}">📖 Baca rangkuman</a>` : ''}
      <a class="btn ghost" href="#/mapel/${sesi.mid}">Kembali</a>
    </div></div>`;
  $('#ulang').onclick = () => { sesi.baru = true; halLatih(sesi.mid, sesi.bid); };
  cekLencana();
}

/* ---------- simulasi ujian ---------- */
let uj = null;
function bacaUjian() { try { return JSON.parse(localStorage.getItem(KEY_UJ) || 'null'); } catch (e) { return null; } }
function simpanUjian() { if (uj && !uj.selesai) localStorage.setItem(KEY_UJ, JSON.stringify({ mid: uj.mid, mulai: uj.mulai, durasi: uj.durasi, i: uj.i, items: uj.items.map(x => ({ id: x.s.id, ord: x.ord, ans: x.ans })) })); else localStorage.removeItem(KEY_UJ); }
function urutKode(a, b) { return a[0] === b[0] ? parseInt(a.slice(1)) - parseInt(b.slice(1)) : a.localeCompare(b); }
function buatUjian(mid, durasiMenit) {
  const m = M(mid), grup = {};
  m.soal.forEach(s => (grup[s.k] = grup[s.k] || []).push(s));
  const items = Object.keys(grup).sort(urutKode).map(k => {
    const s = acak(grup[k])[0];
    return { s, ord: s.t === 'pg' ? (s.acak ? acak(s.o.map((_, i) => i)) : s.o.map((_, i) => i)) : null, ans: null };
  });
  return { mid, items, i: 0, mulai: Date.now(), durasi: durasiMenit * 60000, selesai: false };
}
async function halUjian(mid) {
  const m = M(mid); judul('Simulasi ASAS · ' + m.nama);
  if (!uj || uj.mid !== mid) {
    const sv = bacaUjian();
    if (sv && sv.mid === mid) {
      const byId = Object.fromEntries(m.soal.map(s => [s.id, s]));
      uj = { mid, mulai: sv.mulai, durasi: sv.durasi, i: sv.i, selesai: false, items: sv.items.filter(x => byId[x.id]).map(x => ({ s: byId[x.id], ord: x.ord, ans: x.ans })) };
    } else {
      const jml = t => m.soal.filter(s => s.t === t).map(s => s.k).filter((v, i, a) => a.indexOf(v) === i).length;
      app.innerHTML = `<div class="card stack"><h2>📝 Simulasi ASAS ${esc(m.nama)}</h2>
        <p>Susunan soal: <b>${jml('pg')} pilihan ganda</b>, <b>${jml('is')} isian</b>, <b>${jml('ur')} uraian</b>, persis seperti kisi-kisi.</p>
        <p class="muted">Kerjakan seperti ujian sungguhan: jawaban baru diperiksa setelah kamu menekan <b>Selesai</b>. Soal uraian nanti kamu nilai sendiri dengan contoh jawaban.</p>
        <h3>Pilih waktu</h3>
        <div class="row">${[60, 90, 120].map(x => `<button class="btn ${x === 90 ? '' : 'sec'}" data-d="${x}">${x} menit</button>`).join('')}</div></div>`;
      app.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { uj = buatUjian(mid, +b.dataset.d); simpanUjian(); tampilUjian(); });
      return;
    }
  }
  if (uj.selesai) return uj.fase === 'uraian' ? nilaiUraianUjian() : hasilUjian();
  tampilUjian();
}
function sisaWaktu() { return uj.mulai + uj.durasi - Date.now(); }
function fmtWaktu(ms) { ms = Math.max(0, ms); const t = Math.ceil(ms / 1000), mm = Math.floor(t / 60), ss = t % 60; return mm + ':' + String(ss).padStart(2, '0'); }
function tampilUjian() {
  const it = uj.items[uj.i], s = it.s, n = uj.items.length;
  let body = '';
  if (s.t === 'pg') body = htmlOpsi(s, it.ord, it.ans);
  if (s.t === 'is') body = `<div style="margin-top:14px"><input class="isi" id="jwb" placeholder="Tulis jawabanmu" autocomplete="off" value="${esc(it.ans || '')}"></div>`;
  if (s.t === 'ur') body = `<div style="margin-top:14px"><textarea class="isi" id="jwb" placeholder="Tulis jawabanmu di sini">${esc(it.ans || '')}</textarea></div>`;
  let sek = '';
  const nomor = uj.items.map((x, j) => {
    const awal = j === 0 || uj.items[j - 1].s.t !== x.s.t;
    return (awal ? `</div><div class="seksi">${JENIS[x.s.t]}</div><div class="nomor">` : '') +
      `<button class="no ${x.ans != null && x.ans !== '' ? 'isi' : ''} ${j === uj.i ? 'kini' : ''}" data-j="${j}">${j + 1}</button>`;
  }).join('');
  app.innerHTML = `<div class="stack">
    <div class="soalhead"><span class="pill">Soal ${uj.i + 1} / ${n} · ${JENIS[s.t]}</span><span class="timer" id="timer">⏱ ${fmtWaktu(sisaWaktu())}</span></div>
    <div class="card"><div class="tanya">${fmt(s.q)}</div>${body}</div>
    <div class="aksi">
      <button class="btn sec" id="prev" ${uj.i === 0 ? 'disabled' : ''}>‹ Sebelumnya</button>
      ${uj.i < n - 1 ? `<button class="btn" id="next">Berikutnya ›</button>` : `<button class="btn acc" id="kumpul">Selesai &amp; kumpulkan</button>`}
    </div>
    <details class="card"><summary><b>Daftar nomor soal</b> <span class="muted small">(${uj.items.filter(x => x.ans != null && x.ans !== '').length} dari ${n} sudah dijawab)</span></summary>
      <div><div>${nomor}</div></div>
      <div class="aksi"><button class="btn acc" id="kumpul2">Selesai &amp; kumpulkan</button></div></details>
  </div>`;
  const ambil = () => { if (s.t !== 'pg') { it.ans = $('#jwb').value; simpanUjian(); } };
  if (s.t === 'pg') app.querySelectorAll('.op').forEach(b => b.onclick = () => {
    it.ans = +b.dataset.oi; simpanUjian();
    app.querySelectorAll('.op').forEach(x => x.classList.toggle('pilih', x === b));
    const no = app.querySelector(`.no[data-j="${uj.i}"]`); if (no) no.classList.add('isi');
  });
  if (s.t !== 'pg') $('#jwb').oninput = ambil;
  const ke = j => { ambil(); uj.i = j; simpanUjian(); tampilUjian(); window.scrollTo(0, 0); };
  if ($('#prev')) $('#prev').onclick = () => ke(uj.i - 1);
  if ($('#next')) $('#next').onclick = () => ke(uj.i + 1);
  app.querySelectorAll('.no').forEach(b => b.onclick = () => ke(+b.dataset.j));
  [$('#kumpul'), $('#kumpul2')].forEach(b => b && (b.onclick = () => { ambil(); kumpulkan(false); }));
  clearInterval(timerId);
  timerId = setInterval(() => {
    const t = sisaWaktu(), el = $('#timer'); if (!el) return clearInterval(timerId);
    el.textContent = '⏱ ' + fmtWaktu(t); el.classList.toggle('habis', t < 5 * 60000);
    if (t <= 0) { clearInterval(timerId); toast('Waktu habis! Jawaban dikumpulkan.'); kumpulkan(true); }
  }, 1000);
}
async function kumpulkan(paksa) {
  const kosong = uj.items.filter(x => x.ans == null || x.ans === '').length;
  if (!paksa) {
    const ok = await dialog(`<h2>Kumpulkan jawaban?</h2><p>${kosong ? `Masih ada <b>${kosong} soal</b> yang belum dijawab.` : 'Semua soal sudah dijawab. Mantap!'}</p>`,
      [{ t: 'Ya, kumpulkan', v: true }, { t: 'Periksa lagi', v: false, k: 'sec' }]);
    if (!ok) return;
  }
  clearInterval(timerId);
  uj.selesai = true; uj.selesaiPada = Date.now(); localStorage.removeItem(KEY_UJ);
  uj.items.forEach(x => {
    if (x.s.t === 'pg') x.v = x.ans === x.s.a ? 1 : 0;
    if (x.s.t === 'is') x.v = cocok(x.ans || '', x.s.a) ? 1 : 0;
  });
  uj.fase = uj.items.some(x => x.s.t === 'ur') ? 'uraian' : 'hasil';
  uj.fase === 'uraian' ? nilaiUraianUjian() : hasilUjian();
}
function nilaiUraianUjian() {
  const ur = uj.items.filter(x => x.s.t === 'ur');
  app.innerHTML = `<div class="stack"><div class="card"><h2>Periksa jawaban uraianmu</h2>
    <p class="muted" style="margin:0">Bandingkan jawabanmu dengan contoh jawaban, lalu nilai dengan jujur. Boleh minta bantuan Ayah atau Ibu.</p></div>
    ${ur.map((x, j) => `<div class="card" data-u="${j}"><div class="tanya">${fmt(x.s.q)}</div>
      <div class="teks"><b>Jawabanmu:</b><br>${x.ans ? esc(x.ans).replace(/\n/g, '<br>') : '<i class="muted">(tidak dijawab)</i>'}</div>
      <div class="hasil info">${htmlContoh(x.s)}${tombolNilaiSendiri()}</div></div>`).join('')}
    <div class="aksi"><button class="btn acc" id="lihat" disabled>Lihat nilai</button></div></div>`;
  app.querySelectorAll('[data-u]').forEach(card => {
    const x = ur[+card.dataset.u];
    card.querySelectorAll('[data-v]').forEach(b => b.onclick = () => {
      x.v = +b.dataset.v;
      card.querySelectorAll('[data-v]').forEach(y => { y.classList.toggle('sec', y !== b); y.classList.toggle('ghost', false); });
      $('#lihat').disabled = ur.some(y => y.v == null);
    });
  });
  $('#lihat').onclick = () => { uj.fase = 'hasil'; hasilUjian(); };
}
function hasilUjian() {
  const n = uj.items.length, b = uj.items.reduce((t, x) => t + (x.v || 0), 0), skor = Math.round(b / n * 100);
  if (!uj.dicatat) {
    uj.dicatat = true;
    uj.items.forEach(x => catat(x.s, x.v || 0));
    const bt = Math.round(skor / 10) + (skor >= 90 ? 5 : 0);
    uj.bintang = bt; tambahBintang(bt);
    S.riwayat.push({ t: Date.now(), m: uj.mid, mode: 'ujian', skor, benar: b, n, dur: Math.round((uj.selesaiPada - uj.mulai) / 60000) });
    S.riwayat = S.riwayat.slice(-200); simpan(); cekLencana();
  }
  const per = t => { const xs = uj.items.filter(x => x.s.t === t); return xs.length ? `${xs.reduce((a, x) => a + (x.v || 0), 0)} / ${xs.length}` : '-'; };
  const pesan = skor >= 90 ? 'MasyaAllah, luar biasa! 🌟' : skor >= 75 ? 'Bagus! Kamu sudah siap. 👍' : skor >= 60 ? 'Lumayan! Ulangi materi yang masih salah ya. 💪' : 'Jangan menyerah! Baca rangkuman lalu coba lagi. 📖';
  app.innerHTML = `<div class="stack">
    <div class="card skor"><div class="muted">Nilai Simulasi ASAS ${esc(M(uj.mid).nama)}</div><div class="angka">${skor}</div><h2>${pesan}</h2>
      <p>Pilihan ganda ${per('pg')} · Isian ${per('is')} · Uraian ${per('ur')} · +${uj.bintang} ★</p></div>
    <div class="card"><h3>Pembahasan semua soal</h3><div class="list">${uj.items.map((x, j) => {
      const s = x.s, ok = (x.v || 0) >= 1, half = x.v === 0.5;
      let jw = '';
      if (s.t === 'pg') jw = `<div>Jawabanmu: ${x.ans == null ? '<i>(kosong)</i>' : fmt(s.o[x.ans])}</div>${ok ? '' : `<div>Jawaban benar: <span class="kunci">${fmt(s.o[s.a])}</span></div>`}`;
      if (s.t === 'is') jw = `<div>Jawabanmu: ${x.ans ? esc(x.ans) : '<i>(kosong)</i>'}</div><div>Kunci: <span class="kunci">${esc(s.a[0])}</span></div>`;
      if (s.t === 'ur') jw = `<div><b>Contoh jawaban:</b> ${fmt(s.a)}</div>`;
      return `<details class="item" style="display:block"><summary class="row" style="cursor:pointer">
          <span class="pill ${ok ? 'ok' : half ? 'acc' : 'bad'}">${j + 1}. ${ok ? 'Benar' : half ? 'Sebagian' : 'Salah'}</span>
          <span class="muted small" style="flex:1">${esc(M(uj.mid).babMap[s.b]?.judul || '')}</span></summary>
        <div class="tanya" style="margin-top:8px">${fmt(s.q)}</div>${jw}${pembahasan(s)}</details>`;
    }).join('')}</div></div>
    <div class="aksi"><button class="btn" id="lagi">📝 Simulasi lagi (soal baru)</button><a class="btn ghost" href="#/mapel/${uj.mid}">Kembali</a></div></div>`;
  const mid = uj.mid;
  $('#lagi').onclick = () => { uj = null; halUjian(mid); };
}
async function keluarUjian() {
  const v = await dialog('<h2>Keluar dari simulasi?</h2><p>Jawabanmu tersimpan. Waktu tetap berjalan, jadi kamu bisa melanjutkannya dari halaman depan.</p>',
    [{ t: 'Keluar', v: 'keluar', k: 'sec' }, { t: 'Lanjut mengerjakan', v: 'lanjut' }]);
  if (v === 'keluar') { const mid = uj.mid; uj = null; pergi('#/mapel/' + mid); }
}

/* ---------- laporan ---------- */
function halLaporan() {
  judul('Nilai & Lencana');
  const lemah = [];
  MAPEL.forEach(m => m.bab.forEach(b => { const a = akurasi(m.id, b.id); if (a.n >= 3 && a.pct < 70) lemah.push({ m, b, a }); }));
  lemah.sort((x, y) => x.a.pct - y.a.pct);
  const tgl = t => new Date(t).toLocaleString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  app.innerHTML = `<div class="stack">
    <div class="stat">
      <div class="card"><b>${S.bintang}</b>bintang</div>
      <div class="card"><b>${S.jml}</b>soal dijawab</div>
      <div class="card"><b>${S.riwayat.filter(x => x.mode === 'ujian').length}</b>simulasi</div>
      <div class="card"><b>${S.hari.length}</b>hari berlatih</div>
    </div>
    <div class="card"><h3>🏅 Lencana</h3><div class="lencana">${LENCANA.map(l => `<div class="lc ${S.lencana.includes(l.id) ? '' : 'kunci-lc'}"><div class="e">${l.e}</div><b>${l.n}</b><div class="muted small">${l.d}</div></div>`).join('')}</div></div>
    <div class="card"><h3>⚠️ Materi yang perlu diulang</h3>${lemah.length ? `<div class="list">${lemah.slice(0, 12).map(x => `<div class="item"><div class="t"><b>${esc(x.b.judul)}</b><div class="muted small">${x.m.ikon} ${esc(x.m.nama)} · ${x.a.n} soal</div></div><span class="pill bad">${x.a.pct}%</span><a class="btn sec" href="#/baca/${x.m.id}/${x.b.id}">Baca</a><a class="btn" href="#/latih/${x.m.id}/${x.b.id}">Latihan</a></div>`).join('')}</div>` : '<p class="muted">Belum ada. Materi muncul di sini jika jawaban benarnya di bawah 70% (minimal 3 soal).</p>'}</div>
    <div class="card"><h3>📊 Per mata pelajaran</h3><div class="list">${MAPEL.map(m => { const a = akurasi(m.id), nt = nilaiTerbaik(m.id); return `<a class="item" style="text-decoration:none;color:inherit" href="#/mapel/${m.id}"><span style="font-size:1.6rem">${m.ikon}</span><div class="t"><b>${esc(m.nama)}</b><div class="muted small">${a.n ? `Latihan benar ${a.pct}% (${a.n} soal)` : 'Belum dilatih'}</div></div><span class="pct">${nt ?? '–'}</span></a>`; }).join('')}</div><p class="muted small">Angka di kanan = nilai simulasi ASAS terbaik.</p></div>
    <div class="card"><h3>🕘 Riwayat terakhir</h3>${S.riwayat.length ? `<div class="list">${S.riwayat.slice(-15).reverse().map(r => `<div class="item"><div class="t"><b>${esc(M(r.m)?.nama || r.m)}</b> · ${r.mode === 'ujian' ? 'Simulasi ASAS' : 'Latihan ' + esc(r.bab === 'semua' ? 'acak' : r.bab === 'salah' ? 'ulang salah' : (M(r.m)?.babMap[r.bab]?.judul || ''))}<div class="muted small">${tgl(r.t)} · benar ${r.benar}/${r.n}</div></div><span class="pct">${r.skor}</span></div>`).join('')}</div>` : '<p class="muted">Belum ada riwayat.</p>'}</div>
  </div>`;
}

/* ---------- pengaturan ---------- */
function halAtur() {
  judul('Pengaturan');
  app.innerHTML = `<div class="stack">
    <div class="card"><h3>Nama panggilan</h3><div class="row"><input class="isi" id="nm" value="${esc(S.nama)}" style="flex:1;min-width:200px"><button class="btn" id="svNama">Simpan</button></div></div>
    <div class="card"><h3>Hapus semua kemajuan</h3><p class="muted">Bintang, nilai, riwayat, dan lencana akan dihapus dari tablet ini. Tidak bisa dibatalkan.</p><button class="btn ghost" id="reset">Hapus kemajuan</button></div>
    <p class="muted small">Total bank soal: ${MAPEL.reduce((t, m) => t + m.soal.length, 0)} soal dari ${MAPEL.length} mata pelajaran. Semua data tersimpan di tablet ini saja.</p>
  </div>`;
  $('#svNama').onclick = () => { S.nama = $('#nm').value.trim().slice(0, 30); simpan(); toast('Nama disimpan.'); };
  $('#reset').onclick = async () => {
    const ok = await dialog('<h2>Yakin hapus semua kemajuan?</h2><p>Semua bintang, nilai, dan lencana akan hilang.</p>', [{ t: 'Ya, hapus', v: true, k: 'acc' }, { t: 'Batal', v: false, k: 'sec' }]);
    if (ok) { const nama = S.nama; S = bawaan(); S.nama = nama; simpan(); localStorage.removeItem(KEY_UJ); toast('Kemajuan dihapus.'); pergi('#/'); }
  };
}

/* ---------- mulai ---------- */
simpan();
render();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
