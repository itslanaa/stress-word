


const generateSimp_btn = document.querySelector("#generateSimp");
const copySimp_btn = document.querySelector('#copySimp');


const getData = () => {
    const namaSimp = document.querySelector('#namaSimp');
    // const kekurangan = document.querySelector("#kekurangan");
    // const kebenaran = document.querySelector("#kebenaran");
    // const deskripsi = document.querySelector("#deskripsi");
    // const keluar = document.querySelector("#keluar");
    // const kesan = document.querySelector("#kesan");

    return {
        namaSimp : namaSimp.value,
        // nama_besar : nama.value.toUpperCase(),
        // huruf_akhir : nama.value.substr(nama.value.length - 1).toUpperCase(),
        // kekurangan : kekurangan.value,
        // kebenaran : kebenaran.value,
        // deskripsi : deskripsi.value,
        // keluar : keluar.value,
        // kesan : kesan.value
    };
};

generateSimp_btn.addEventListener('click',event => {
    event.preventDefault();

    const data = getData();

    const text = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${data.namaSimp}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${data.namaSimp}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${data.namaSimp} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${data.namaSimp}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`;

    console.log(text);
    const text_el = document.querySelector('#textSimp');
    text_el.innerText = text;


});

copySimp_btn.addEventListener('click',event => {
    const text = document.querySelector('#textSimp');
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");

    document.querySelector('#copy-alert').innerText = '- tercopy sob! -';
});



