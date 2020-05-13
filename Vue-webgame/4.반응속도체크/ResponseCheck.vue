<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
        <!--v-show : 감춰져 있다가 result.length가 들어오면 보임-->
        <div v-show="result.length">
            <div>평균 시간 : {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
    export default {
        data() {
            return{
                result:[],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        /*
        일반 데이터를 가공해서 쓸 때, computed를 사용, 
        캐싱해서 데이터가 그대로 보존되는 장점이 있고,
        다른 데이터 값이 바뀌였을 때, 영향이 없음
        */
        computed : {
            average() {
                return this.result.reduce((a,c) => a+c,0)/this.result.length || 0;
            }
        },
        methods : {
            onReset() {
                this.result = [];
            },
            onClickScreen() {
                if(this.state === 'waiting') {
                    this.state = 'ready';
                    this.message='초록색이 되면 클릭하세요.';
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000)+2000);
                }   
                else if(this.state === 'ready') {
                    clearTimeout(timeout);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요!'
                }
                else if(this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.'
                    this.result.push(endTime-startTime);
                }
            }
        },
    };
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>