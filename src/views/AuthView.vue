<script setup>
    
</script>
<template>
    <div class="login">
        <div class="container-fluid h-100">
            <div class="row h-100 align-items-md-center">
                <div class="col-md-6 login_bg">
                    <!-- <img src="" alt=""> -->
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.login{
    height: 100vh;
    &_bg{
        height: 200px;
        background-image: url('https://images.unsplash.com/photo-1619241638225-14d56e47ae64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    &_form{
        height: calc(100% - 200px);
        .login_btn{
            color: white;
            font-weight: bold;
            font-size: 20px;
            border: 0;
            height: 50px;
            border-radius: 15px;
            background: linear-gradient(91.47deg, #FFC52A 0.58%, #F79515 95.65%);
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }
}
@media (min-width: 992px) {
    .login{
        &_bg{
            height: inherit;
        }
        &_form{
            height: auto;
        }
    }
    
}

</style>