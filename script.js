<!-- SCRIPT LOGIKA UNTUK KUPON DAN AMPLOP INTERAKTIF -->
    <script>
        // 1. Fungsi untuk Mengklaim Kupon
        function claimCoupon(buttonElement, couponName) {
            // Cari elemen kartu kupon pembungkusnya
            const couponCard = buttonElement.closest('.coupon-card');
            
            // Cek apakah sudah pernah diklaim sebelumnya
            if(!couponCard.classList.contains('claimed')) {
                couponCard.classList.add('claimed');
                buttonElement.innerText = "✓ Sukses Diklaim!";
                
                // Alert manis kejutan kecil
                alert(`Kupon "${couponName}" berhasil diklaim! Screen shoot bagian ini dan tagih ke Tri ya! 🤍`);
            }
        }

        // 2. Fungsi untuk Membuka Amplop Surat
        function openEnvelope() {
            const envelope = document.getElementById('loveEnvelope');
            // Toggle kelas 'open' (jika diklik lagi bisa menutup atau membuka)
            envelope.classList.toggle('open');
        }
    </script>
</body>