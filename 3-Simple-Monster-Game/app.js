new Vue({
    el:"#app",
    data:{
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,
        logs:[]
    },
    methods:{
        start_game(){
            this.game_is_on=true;
        },
        attack(){
            var point =Math.ceil(Math.random() * 10);
            this.add_to_log({turn:"p", text:"OYUNCU ATAĞI ("+ point + " )"})
            this.monster_heal -=point;
            this.monster_attack();
        },
        special_attack(){
            var point =Math.ceil(Math.random() * 25);
            this.add_to_log({turn:"p", text:"ÖZEL OYUNCU ATAĞI ("+ point + " )"})
            this.monster_heal -=point;
            this.monster_attack();
        },
        monster_attack(){
            var point =Math.ceil(Math.random() * 15);
            this.add_to_log({turn:"m", text:"CANAVAR ATAĞI ("+ point + " )"})
            this.player_heal -=point;
        },
        heal_up(){
            var point =Math.ceil(Math.random() * 20);
            this.add_to_log({turn:"p", text:"ILK YARDIM ("+ point + " )"})
            this.player_heal +=point;
            this.monster_attack();
        },
        give_up(){
            this.player_heal=0;
            this.add_to_log({turn:"p", text:"OYUNCU PES ETTİ"})
        },
        add_to_log(log){
            this.logs.push(log);
        }
    },
    watch:{
        player_heal(value){
            if(value <= 0){
                this.player_heal = 0;

                if(confirm("Kaybettin... Tekrar deneme istser misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs=[];
                }
            }else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("Kazandın... Tekrar deneme istser misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs=[];
                }
            }
        }
    }
})