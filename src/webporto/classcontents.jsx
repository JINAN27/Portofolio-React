import React from "react";
import dua from ".//asset/2.png"
import satu from "./asset/1.png";
export default class Contents extends React.PureComponent {
    render() {
        return(
            <main>
        <section id="projects">
            <h2>Proyek</h2>
            <div class="project-card">
                <img src={satu} alt="Web Kampus"></img>
                <div class="project-info">
                    <h3>Web Kampus</h3>
                    <p>Proyek ini adalah pengembangan sebuah website untuk memfasilitasi kegiatan administrasi dan akademik di sebuah kampus. Fitur utama termasuk sistem manajemen pengguna, pendaftaran kursus online, dan portal informasi untuk mahasiswa, dosen, dan staf.</p>
                </div>
            </div>
            <div class="project-card">
                <img src={dua} alt="Web Inventory"></img>
                <div class="project-info">
                    <h3>Web Inventory</h3>
                    <p>Web Inventory adalah sebuah aplikasi web yang dirancang untuk membantu manajemen persediaan dan inventarisasi dalam sebuah perusahaan. Fitur-fitur meliputi pelacakan stok, pengelolaan pemesanan, laporan analisis inventaris, dan integrasi dengan sistem penjualan.</p>
                </div>
            </div>
        </section>
        
        <section id="contact">
            <h2>Kontak</h2>
            <p>Email: jinan@email.com</p>
            <p>Telepon: 089999999999</p>
            <p>Alamat: Jalan yuk No. 123</p>
        </section>
    </main>
        )
    }
}

