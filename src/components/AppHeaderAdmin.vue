<template>
    <nav class="nav_admin">
        <ul class="nav justify-content-center "  >
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" aria-current="page" href="#" style="font-size: 30px;">CHÀO MỪNG ĐẾN TRANG QUẢN TRỊ VIÊN</a>
  </li>
 
</ul>

<nav class="navbar navbar-expand-lg navbar-light bg-light nav_admin">
  <div class="container-fluid">
    <a class="navbar-brand" href="/homeadmin" style="font-size: 25px;">Trang chủ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/user">Danh sách người dùng</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/admin" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Danh sách sản phẩm
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/addproduct">Thêm sản phẩm</a></li>
            <li><a class="dropdown-item" href="/admin">Liệt kê danh sách sản phẩm</a></li>
           
          </ul>
        </li>
       
      </ul>
 
    </div>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="/loginadmin">Đăng xuất</a>
  </li>
</ul>
  </div>

</nav>

    </nav>

</template>
<style>
.nav_admin{
    font-size: 25px;
}
</style>