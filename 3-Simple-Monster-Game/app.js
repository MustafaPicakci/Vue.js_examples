new Vue({
    el:"#app",
    data:{
        player_health: 100,
        monster_health: 100,
        attack_multiple: 10,
        special_attack_multiple: 25,
        heal_up_multiple: 20,
        monster_attack_multiple: 15,
        game_is_on: false,
        log_text:{
            attack: "OYUNCU ATAĞI :",
            special_attack: "ÖZEL OYUNCU ATAĞI ",
            monster_attack: "CANAVAR ATAĞI ",
            heal_up: "ILK YARDIM",
            give_up: "OYUNCU PES ETTI!!"
        },
        logs:[]
    },
    methods:{
        start_game(){
            this.game_is_on=true;
        },
        attack(){
            var point =Math.ceil(Math.random() * this.attack_multiple);
            this.add_to_log({turn:"p", text: this.log_text.attack +point })
            this.monster_health -=point;
            this.monster_attack();
        },
        special_attack(){
            var point =Math.ceil(Math.random() * this.special_attack_multiple);
            this.add_to_log({turn:"p", text: this.log_text.special_attack + point})
            this.monster_health -=point;
            this.monster_attack();
        },
        monster_attack(){
            var point =Math.ceil(Math.random() * this.monster_attack_multiple);
            this.add_to_log({turn:"m", text: this.log_text.monster_attack + point})
            this.player_health -=point;
        },
        heal_up(){
            var point =Math.ceil(Math.random() * this.heal_up_multiple);
            this.add_to_log({turn:"p", text: this.log_text.heal_up + point})
            this.player_health +=point;
            this.monster_attack();
        },
        give_up(){
            this.player_health=0;
            this.add_to_log({turn:"p", text: this.log_text.give_up})
        },
        add_to_log(log){
            this.logs.push(log);
        }
    },
    watch:{
        player_health(value){
            if(value <= 0){
                this.player_health = 0;

                if(confirm("Kaybettin... Tekrar deneme istser misin ?")){
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs=[];
                }
            }else if(value>=100){
                this.player_health=100;
            }
        },
        monster_health(value){
            if(value <= 0){
                this.monster_health = 0;
                if(confirm("Kazandın... Tekrar deneme istser misin ?")){
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs=[];
                }
            }
        }
    },
    computed:{
        player_progress(){
            return {
                width: this.player_health +'%'
            }
        },
        monster_progress(){
            return {
                width: this.monster_health +'%'
            }
        }
    }
})