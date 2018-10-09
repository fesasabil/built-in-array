var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(sp){
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    
    console.log(sp)

var bulan=sp[3].split("/")
var moon = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "Septmber", "Oktober", "November", "Desember"]
var arr = moon[4]
console.log(arr)
    
var tahun = sp[3].split("/")
var cp = tahun.sort(function(a, b) {
        return b - a
})
console.log(cp)
    
var tanggal = sp[3].split("/")
console.log(tanggal.join('-'))
            
var akhir = sp[1]
console.log(akhir.slice(0, 15))
}
