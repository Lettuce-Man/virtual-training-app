export default [
    {
        id: 1,
        title: 'Core Strength',
        description: 'Get ready to work the front and back of your core. Keep your torso engaged and your lower back strong and still. Classes will be from 5:30 to 7:00 pm on Tuesdays and Thursdays.',
        equipment: "Yoga blocks, Mat",
        image: "assets/imgs/class1.png",
        trainer:{
          image:'assets/imgs/trainer1.png',
          name:'Amanda Burns',
          description:'ACE certified personal trainer',
          experience:'5+ years of experience',
          specialization:'Specialize in core strengthing'
        },
        targets: [
          {
            areaType:'abs',
            displayName:'Core'
          },
          {
            areaType:'chest',
            displayName:'Chest'
          },
          {
            areaType:'back',
            displayName:'Back'
          }
        ],
        calories: 90,
        start_date:'Mar 26, 2019',
        end_date:'Apr 4, 2019',
        start_time: '5:30 PM',
        end_time: '7:00 PM',
        level: 2,
        price: '$24',
        day:"Tue, Thu",
        zoom: 'https://zoom.us/j/5514005419',
        registeredstudents: []
    },
    {
        id: 2,
        title: 'Muscle Builder I',
        description: 'Work out those back muscles with high intensity exercise and short rest periods. Classes will be held from 8:00pm to 8:40pm on Mondays, Wednesdays, and Fridays.',
        equipment: "Dumbbells, TRX",
        image: "assets/imgs/class2.png",
        trainer:{
          image:'assets/imgs/trainer2.png',
          name:'Patrick Kono',
          description:'ACE certified personal trainer',
          experience:'2+ years of experience',
          specialization:'Specialize in muscle building'
        },
        targets: [
          {
            areaType:'arms',
            displayName:'Arms'
          },
          {
            areaType:'chest',
            displayName:'Chest'
          },
          {
            areaType:'back',
            displayName:'Back'
          }
        ],
        calories: 120,
        start_date:'Apr 1, 2019',
        end_date:'Apr 12, 2019',
        start_time: '8:00 PM',
        end_time: '8:40 PM',
        level: 1,
        day:"Mon, Wed, Fri",
        price: '$29',
        zoom: 'https://zoom.us/j/5514005419',
        registeredstudents: [],
    },
    {
        id: 3,
        title: 'Intro to Yoga',
        description: 'Start your day by grounding yourself through this biweekly yoga session. Learn different postures to help your body and mind relax. Classes will be held from 9:00am to 10:15am on Sundays and Thursdays.',
        equipment: "Mat, Blocks",
        image: "assets/imgs/class3.png",
        trainer:{
          image:'assets/imgs/trainer3.png',
          name:'Meghan Taylor',
          description:'Yoga Instructor Certification',
          experience:'5+ years of experience',
          specialization:'Specialize in Ashtanga Yoga'
        },
        targets: [
          {
            areaType:'abs',
            displayName:'Core'
          },
          {
            areaType:'back',
            displayName:'Back'
          }
        ],
        calories: 88,
        start_date:'Mar 26, 2019',
        end_date:'Apr 4, 2019',
        start_time: '9:00 AM',
        end_time: '10:15 AM',
        level: 1,
        day:"Sun",
        price: '$18',
        zoom: 'https://zoom.us/j/5514005419',
        registeredstudents: []
    },
    {
        id: 4,
        title: 'Cardio Blast',
        description: 'End your day with high intensity cardio bursts that will strengthen and tone your abs and legs. Classes wil be held from 10:00pm to 11:15pm five days a week (Sundays, Mondays, Wednesdays, Fridays and Saturdays).',
        equipment: "Resistance Band, Mat",
        image: "assets/imgs/class4.png",
        trainer:{
          image:'assets/imgs/trainer4.png',
          name:'Rachel Liu',
          description:'ACE certified personal trainer',
          experience:'4+ years of experience',
          specialization:'Specialize in weight training'
        },
        targets: [
          {
            areaType:'body',
            displayName:'Full Body'
          }
        ],
        calories: 200,
        start_date:'Apr 7, 2019',
        end_date:'Apr 13, 2019',
        start_time: '10:00 PM',
        end_time: '11:15 PM',
        level: 3,
        day:"Mon, Wed, Fri",
        price: '$35',
        zoom: 'https://zoom.us/j/5514005419',
        registeredstudents: []
    }
];
