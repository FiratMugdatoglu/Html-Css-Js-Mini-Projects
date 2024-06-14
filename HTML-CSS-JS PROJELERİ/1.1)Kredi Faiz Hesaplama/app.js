function krediHesapla() {
    var cekilecekTutar, vadeSayisi;
    var aylikTaksit, odenecekToplamTutar;

    cekilecekTutar = document.querySelector("#txtKrediTutari").value;
    var liste = document.querySelector("#listeVade");
    vadeSayisi = liste.options[liste.selectedIndex].value;

    odenecekToplamTutar = cekilecekTutar * 1.1;
    aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.querySelector("#sonuc").innerHTML = "Geri Ödenecek Tutar: " + odenecekToplamTutar + "<br>" + "Aylık Taksit Tutarı: " + aylikTaksit.toFixed(3);
}
