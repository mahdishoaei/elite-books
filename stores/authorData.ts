import { defineStore } from 'pinia'

export const authorDS = defineStore('author' , {

    state: () => ({
        authors :[
            {
                id : 0,
                img : 'https://jadoyebavar.ir/wp-content/uploads/2022/10/Joanne-.k-Rowling-1.jpg',
                name : 'J.K Rowling',
                position : 'British writer'
                
            },
            {
                id : 1,
                img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Woody_Allen_-_Kup.JPG/800px-Woody_Allen_-_Kup.JPG',
                name : 'Woody Allen',
                position : 'American filmmaker and actor'
                
            },
            {
                id : 2,
                img : 'https://es.babelio.com/users/AVT_Jiro-Akagawa_7643.jpg',
                name : 'Jirō Akagawa',
                position : 'Japanese novelist'
                
            },
            {
                id : 3,
                img : 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg',
                name : 'Douglas Adams',
                position : 'humorist and screenwriter'
                
            },
            {
                id : 4,
                img : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtQbGjK4ljUKQgf1ioAPNtq-Qy4UDUiXYDdqFMe2N1_ZE7kUsE',
                name : 'Isabel Allende',
                position : 'Chilean writer'
                
            },
            {
                id : 5,
                img : 'https://i1.sndcdn.com/artworks-000173353055-jk4gsz-t500x500.jpg',
                name : 'Albert Camus',
                position : 'French philosopher and writer'
                
            },
            {
                id : 6,
                img : 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSOJseqMGsdOhWkFPCDWsjDIRyWQ_WYSJM5zeUY-KzqdTF7Yaq4xGt_cTda5aiiEhfML6BchLZ-n5OVsqg',
                name : 'Franz Kafka',
                position : 'Novelist and short story writer'
                
            },
            {
                id : 7,
                img : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMaNPuVQMqB_xJnMhnvIXOmUZxPQWRBpX0zkv72lvS316L5xN3',
                name : 'Debbie Ford',
                position : 'American writer and coach'
                
            },
            {
                id : 8,
                img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEt5yMCiCO1bBC66pahlOVRPWsaf7PV-6aFTSVRMPTbwirM2o',
                name : 'Irvin D. Yalom',
                position : 'American psychiatrist'
                
            },
            {
                id : 9,
                img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyN8GzI4K1AoOGq4ldRsh-EDI74Pm9c-LzdOOC2dZNxT9ynmM',
                name : 'Jeffrey Young',
                position : 'American psychologist'
                
            },
        ]
    }) 
    
})