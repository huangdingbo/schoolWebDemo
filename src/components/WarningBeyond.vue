<template>
    <div class="">
        <warning-lamp :option="lamp"></warning-lamp>

    </div>
</template>

<script>
    import WarningLamp from '../common/WarningLamp'
    export default {
        name: "WarningBeyond",
        components: {
            WarningLamp
        },
        props:{
            grade:{},
            studentType:{},
            classVal:{},
            testVal:{},
        },
        data(){
            return{
                lamp:{},
            }
        },
        watch: {
            grade(){
                if(this.grade&&this.studentType){
                    this.refresh();
                }
            },
            studentType(){
                if(this.grade&&this.studentType){
                    this.refresh();
                }
            },
            classVal(){
                this.refresh();
            },
            testVal(){
                this.refresh();
            },
            immediate: true,
            deep: true
        },
        mounted() {
            if(this.grade&&this.studentType){
                this.refresh();
            }
        },
        methods: {
            refresh(){
                this.$api.header({type:2,studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.lamp = res.list;
                });
            }
        }
    }
</script>

<style scoped>

</style>