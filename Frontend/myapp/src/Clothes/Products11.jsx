import React from 'react'


import Pro from '../Product.jsx';
export default function Productt(props) {
  console.log(props.user);
  return (
    <div>
       <div className='flex flex-col gap-4 mt-14'>
            <div className='text-2xl text-red-400'>
                <h1>{props.text}</h1>
             
            </div>
            <div className='flex flex-col gap-4'>
<div className='flex md:flex-row flex-col gap-4'>
              <Pro Image='https://assets.adidas.com/images/w_600,f_auto,q_auto/e23f7fe035ef47dc830f6b9a1e0db9c2_9366/LAUFEN_SPEED_SHOES_Black_IU6322_01_standard.jpg' user={props.user}></Pro>
              <Pro Image='https://assets.adidas.com/images/w_600,f_auto,q_auto/d15944330e014cef8775aeb700d66b86_9366/RAYGUN_SHOES_Black_GA1107_01_standard.jpg' user={props.user}></Pro>
              <Pro Image='https://assets.adidas.com/images/w_600,f_auto,q_auto/b3be7e59ffab4217a57deae62be7e744_9366/Predator_League_Firm_Ground_Football_Boots_Yellow_IG7747_22_model.jpg' user={props.user}></Pro>
              <Pro Image='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_fitness_badge_raffle_hp_crd_d_a30ae661d5.jpg' user={props.user}></Pro>
                </div>
             
                
            </div>

        </div>
    </div>
  )
}
