// let nama_user = document.getElementById

window.onload = function(){
    getUsername();
    if(pengguna_saat_ini == null){
      document.getElementById("aksi_admin").remove();

      header.innerHTML ="Selamat Datang";

      user_link.innerHTML="Buat Akun Baru";
      user_link.classList.replace("nav-link","btn");
      user_link.classList.add("btn-primary");
      user_link.href="registrasi.html";

      logout_link.innerHTML="Login";
      logout_link.classList.replace("nav-link","btn");
      logout_link.classList.add("btn-success");
      logout_link.href="login.html";

      tambah_data_halaman_legal.href="login.html"
    }
    else{
      if(pengguna_saat_ini.role != 1){
        document.getElementById('dropdownMenu3').remove();
      }

      header.innerHTML = "Selamat Datang "+pengguna_saat_ini.name;

      user_link.innerHTML=pengguna_saat_ini.username;
      user_link.classList.replace("btn","nav-link");
      user_link.classList.add("btn-primary");
      user_link.href="#";

      logout_link.innerHTML="Logout";
      logout_link.classList.replace("btn","nav-link");
      logout_link.classList.add("btn-success");
      logout_link.href="javascript:logout()";
    }
  }