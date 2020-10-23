new Vue({
    el:"#app",
    data:{
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false
    },
    methods:{
        start_game(){
            this.game_is_on=true;
        },
        attack(){
            var point =Math.ceil(Math.random() * 10);
            this.monster_heal -=point;
            this.monster_attack();
        },
        special_attack(){
            var point =Math.ceil(Math.random() * 25);
            this.monster_heal -=point;
            this.monster_attack();
        },
        monster_attack(){
            var point =Math.ceil(Math.random() * 15);
            this.player_heal -=point;
        },
        heal_up(){
            var point =Math.ceil(Math.random() * 20);
            this.player_heal +=point;
            this.monster_attack();
        },
        give_up(){
            this.player_heal=0;
        }
    },
    watch:{
        player_heal(value){
            if(value <= 0){
                this.player_heal = 0;

                if(confirm("Kaybettin... Tekrar deneme istser misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            }else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("Kaybettin... Tekrar deneme istser misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            }
        }
    }
})