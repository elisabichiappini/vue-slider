// linguaggio javascript restrittivo
'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        slides : [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            }
        ],
        activeSlide: 0,
        currentInterval: null
      }
    },
    methods: {
        prev(){
            //controllo se ho il bottone console.log('ho cliccato prev');
            this.activeSlide--;
            //ripetere sempre il ciclo in senso antiorario
            if(this.activeSlide < 0){
            this.activeSlide = this.slides.length - 1;
            }
        },
        next(){
            console.log('ho cliccato next');
            this.activeSlide++;
            //ripetere sempre il ciclo in senso orario
            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
        },
        clickThumbnailImage(index) {
            console.log('clicca img');
            console.log(index);
            this.activeSlide = index;
        },
        stopAutoPlay() {
            console.log('stop lo slider');
            clearInterval(this.currentInterval);
        },
        startAutoPlay() {
            console.log('start lo slider');
            this.currentInterval = setInterval(this.next, 3_000);
        }
    },
    //questo ciclo di vita ha accesso ai dati: quando monti l'applicazione fai cambiare l'immagine ogni 3 sec.
    mounted() {
        console.log('mounted funziona');
        this.startAutoPlay();
    }
  }).mount('#app')
