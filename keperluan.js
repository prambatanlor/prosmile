var keperluan_arr = new Array(
"Surat Keterangan RT - RW",
"Surat Keterangan Domisili",
"Surat Keterangan Domisili Usaha",
"Surat Keterangan Usaha",
"Surat Keterangan Tinggal Sementara",
"Kartu Tanda Penduduk Sementara",
"Surat Keterangan",
"Surat Keterangan Kehilangan",
"Surat Keterangan Pindah",
"Surat Keterangan Kenal Lahir Sementara",
"Surat Keterangan Kelakuan Baik",
"Surat Keterangan Asal-Usul",
"Surat Keterangan Tentang Orang Tua",
"Surat Keterangan Kematian",
"Surat Keterangan Kelahiran",
"Surat Keterangan Duda Karena Istri Meninggal",
"Surat Keterangan Duda Cerai",
"Surat Keterangan Janda Karena Suami Meninggal",
"Surat Keterangan Janda Cerai",
"Surat Keterangan Jual Beli Bahan Bakar Minyak",
"Surat Keterangan Bepergian",
"Surat Keterangan Orang Yang Sama",
"Surat Keterangan BPJS Mandiri");

// sehinggas
var s_a = new Array();
s_a[0]="";
s_a[1]="A. Bahwa orang tersebut diatas benar-benar membutuhkan Surat Keterangan RT - RW";
s_a[2]="A. Bahwa orang tersebut diatas benar-benar berdomisili di Desa Prambatan Lor";
s_a[3]="A. Bahwa orang tersebut diatas benar-benar memiliki usaha yang berdomisili di Desa Prambatan Lor";
s_a[4]="A. Bahwa orang tersebut diatas benar-benar memiliki usaha di Desa Prambatan Lor";
s_a[5]="A. Bahwa orang tersebut diatas benar-benar pendatang yang tinggal sementara di Desa Prambatan Lor";
s_a[6]="A. Bahwa orang tersebut diatas benar-benar penduduk Desa Prambatan Lor dan telah melaksanakan perekaman Kartu Tanda Penduduk Elektronik dan terdaftar dalam database kependudukan Kota Kudus";
s_a[7]="A. Bahwa orang tersebut diatas benar-benar membutuhkan surat keterangan dari Desa Prambatan Lor";
s_a[8]="A. Bahwa orang tersebut diatas adalah penduduk atau berdomisili di Desa Prambatan Lor benar-benar telah kehilangan ...................... pada hari ........ tanggal ......... pukul ........";
s_a[9]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Pindah";
s_a[10]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Kenal Lahir Sementara";
s_a[11]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Kelakuan Baik";
s_a[12]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Asal-Usul";
s_a[13]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Tentang Orang Tua";
s_a[14]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Kematian";
s_a[15]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Kelahiran";
s_a[16]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Duda Karena Istri Meninggal";
s_a[17]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Duda Cerai";
s_a[18]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Janda Karena Suami Meninggal";
s_a[19]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Janda Cerai";
s_a[20]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Jual Beli Bahan Bakar Minyak";
s_a[21]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Bepergian";
s_a[22]="A. Bahwa orang tersebut diatas benar-benar penduduk atau berdomisili di Desa Prambatan Lor yang membutuhkan Surat Keterangan Orang Yang Sama";
s_a[23]="A. Bahwa orang tersebut diatas benar-benar belum punya kartu BPJS";




function populasisehingga( keperluanElementId, sehinggaElementId ){
	
	var selectedkeperluanIndex = document.getElementById( keperluanElementId ).selectedIndex;

	var sehinggaElement = document.getElementById( sehinggaElementId );
	
	sehinggaElement.length=0;	
	sehinggaElement.selectedIndex = 0;
	
	var sehingga_arr = s_a[selectedkeperluanIndex].split("|");
	
	for (var i=0; i<sehingga_arr.length; i++) {
		sehinggaElement.options[sehinggaElement.length] = new Option(sehingga_arr[i],sehingga_arr[i]);
	}
}

function populasikeperluan(keperluanElementId, sehinggaElementId){

	var keperluanElement = document.getElementById(keperluanElementId);
	keperluanElement.length=0;
	keperluanElement.options[0] = new Option('Keperluan','-1');
	keperluanElement.selectedIndex = 0;
	for (var i=0; i<keperluan_arr.length; i++) {
		keperluanElement.options[keperluanElement.length] = new Option(keperluan_arr[i],keperluan_arr[i]);
	}

	if( sehinggaElementId ){
		keperluanElement.onchange = function(){
			populasisehingga( keperluanElementId, sehinggaElementId );
		};
	}
}
