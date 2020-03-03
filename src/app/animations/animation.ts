import {animate, keyframes, style, transition, trigger} from '@angular/animations';


export let slideInDown =
      trigger('slideInDown', [
      transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('0.8s ease-in-out')
  ])

]);

export let fadeIn =
      trigger('fadeIn', [
      transition(':enter', [
      style({opacity: 0}),
      animate('3s 0.5s ease-in-out', style({ opacity: 1}))
   ])
  ]);

export let fadeInUp =
  trigger('fadeInUp', [
    transition(':enter', [
      style({opacity: 0 , transform: 'translateY(100%)'}),
      animate('0.8s ease-in-out')
    ])
  ]);

export let zoomInDown =
      trigger('zoomInDown', [
        transition(':enter', [
        animate('0.7s', keyframes([
          style({ opacity: 0 , transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)', offset: 0}),
          style( { opacity: 0.6 , transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', offset: 0.6}),
          style( { opacity: 1 , transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1.0})

        ]))
        ])
      ]);

export let zoomInUp =
  trigger('zoomInUp', [
    transition(':enter', [
      animate('0.7s 0.3s', keyframes([
        style({ opacity: 0 , transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)', offset: 0}),
        style( { opacity: 0.6 , transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)', offset: 0.6}),
        style( { opacity: 1 , transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1.0})

      ]))
    ])
  ]);
