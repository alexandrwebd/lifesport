new Vue({
    el: '#training-time',
    data: {
        trainings: [],
        days: [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Субота'
        ],
        isActive: false,
        data: '',
        day: '',
        sunday: [
            {name: 'Нет запланированых занятий'},
        ],
        monday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' }
        ],
        tuesday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            // { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' } 
        ],
        wednesday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            // { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            // { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' } 
        ],
        thursday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            // { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            // { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            // { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' } 
        ],
        friday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            // { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            // { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            // { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            // { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' } 
        ],
        saturday: [
            { time: '9.00-11.00', name: 'Тренажорный зал', trener: 'С Пилипенко Владимером' },
            // { time: '11.00-12.00', name: 'Базовый crossfit', trener: 'С Иванченко Tатьяной' },
            // { time: '11.00-13.00', name: 'Занятие аэробикой', trener: 'С Аней' },
            // { time: '13.00-15.00', name: 'Занятие йогой', trener: 'С Олей' },
            // { time: '15.00-17.00', name: 'Занятие пилатесом', trener: 'С Таней' },
            // { time: '13.00-21.00', name: 'Лечебный массаж', trener: 'С Андреем' } 
        ]

    },
    methods: {
        getTraining(key) {
            switch (key) {
                case 0: 
                    this.trainings = this.sunday;
                    this.isActive = true;
                    break;
                case 1:
                     this.trainings = this.monday;
                     this.isActive = false;
                     break;
                case 2:
                     this.trainings = this.tuesday;
                     this.isActive = false;
                     break;
                case 3:
                     this.trainings = this.wednesday;
                     this.isActive = false;
                     break;
                case 4:
                     this.trainings = this.thursday;
                     this.isActive = false;
                     break;
                case 5:
                     this.trainings = this.friday;
                     this.isActive = false;
                     break;
                case 6:
                     this.trainings = this.saturday;
                     this.isActive = false;
                     break;
            }
        }
    },
    mounted: function () {
        let dat = new Date();
        let dd = dat.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = dat.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        this.data = dd + '.' + mm;

        let d = dat.getDay();
        this.day = this.days[d];

        switch (this.day) {
            case "Воскресенье": this.trainings = this.sunday; break;
            case "Понедельник": this.trainings = this.monday; break;
            case "Вторник": this.trainings = this.tuesday; break;
            case "Среда": this.trainings = this.wednesday; break;
            case "Четверг": this.trainings = this.thursday; break;
            case "Пятница": this.trainings = this.friday; break;
            case "Субота": this.trainings = this.saturday; break;
        }
    },
})