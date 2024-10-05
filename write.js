const fs = require("node:fs");

fs.writeFile(
  "Biodata.txt",
  "hello, perkenalkan nama saya alvin ahmad kusairi, saya sekolah diSMKN 15 KOTA BEKASI, saya tinggal di jalan telkom rt.3/rw.5 saya berusia 16 tahun",
  function (error) {
    if (error) {
      console.error("Terjadi Error", error);
    } else {
      console.log("File berhasil dibuat");
    }
  }
);
