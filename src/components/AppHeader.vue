<template>
  <nav class="navbar navbar-dark bg-dark border-bottom">
    
      <a href="/" class="navbar-brand mx-1 ">
        <img width="120px" height="50px" src="../assets/image/Logo.png" />
      </a>
      <ul class="header-nav header-nav-main nav nav-right  nav-size-xlarge nav-spacing-medium">

        <li>
          <a href="/Login" class="nav-top-link nav-top-not-logged-in is-small" >
            <i class="fa-solid fa-user " style="color: #ffffff;"></i>
          </a>
        </li>

        <li>
          
            <a href="/Cart" class="header-cart-link is-small">
              <i class="fa-solid fa-cart-shopping " style="color: #fcfcfc;"></i>
            </a>
        
        </li>
        
      </ul>

  </nav>

</template>
<script>

  export default {
    components:{
      
    }

    }
</script>
<style >
  #logo{
    height: 50px;
    width: 120px;
  }
  
  
</style>