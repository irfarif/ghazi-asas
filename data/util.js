/* Pembantu untuk menulis bank soal secara ringkas.
   pg(kode, bab, soal, [jawabanBenar, pengecoh...], pembahasan)  -> opsi diacak otomatis
   pgf(kode, bab, soal, [opsi...], indeksBenar, pembahasan)        -> urutan opsi tetap
   is(kode, bab, soal, [jawaban yang diterima...], pembahasan)
   ur(kode, bab, soal, contohJawaban, [poin penting...], pembahasan) */
window.BANK = window.BANK || {};
function mapel(id, info) {
  const M = (BANK[id] = Object.assign({ id, bab: [], soal: [] }, info));
  return {
    bab(bid, judul, r) { M.bab.push({ id: bid, judul, r }); },
    pg(k, b, q, o, p) { M.soal.push({ k, b, t: 'pg', q, o, a: 0, acak: true, p }); },
    pgf(k, b, q, o, a, p) { M.soal.push({ k, b, t: 'pg', q, o, a, acak: false, p }); },
    is(k, b, q, a, p) { M.soal.push({ k, b, t: 'is', q, a: [].concat(a), p }); },
    ur(k, b, q, a, poin, p) { M.soal.push({ k, b, t: 'ur', q, a, poin: poin || [], p: p || '' }); },
  };
}
