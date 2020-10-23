new Vue({
    el: '#exercise',
    data: {
        effectClass: false,
        myClass: '',
        stil: '',
        userClass: '',
        userClass2: '',
        myStyle: {
            width: '100px',
            height: '100px',
            backgroundColor: 'red'
        },
        progressWidth: 0

    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.effectClass = !vm.effectClass;
            }, 1000)

        },
        startProgress: function() {
            var vm = this;
            setInterval(function() {
                vm.progressWidth += 10;
            }, 1000)
        }
    },
    computed: {
        updateEffectClass() {
            return {
                highlight: this.effectClass,
                shrink: !this.effectClass
            }
        }
    }
});