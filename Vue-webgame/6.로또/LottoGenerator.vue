<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" number="5" v-bind:key="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball></lotto-ball>
        <button v-if="redo">한 번 더!</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                winBalls:[],
                bonus: null,
                redo: false,
            };
        },
        computed : {

        },
        methods : {
        },
        mounted() {
            console.log('mounted');
            this.changeHand(); 
        },
        beforeDestroy(){
            
        },
        watch: {

        },
    };
</script>

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>>