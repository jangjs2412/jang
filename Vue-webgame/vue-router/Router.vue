<template>
    <div>
        <div>
            <router-link to="number-baseball">숫 자 야 구</router-link>
        </div>
        <!--화면이 바뀔 부분-->
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './routes';
    export default {
        router,
    };
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>