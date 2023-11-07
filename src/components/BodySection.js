import React from 'react'

function BodySection() {
  return (
    // <section>
    //     <div>
    //         <div>
    //         <img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/iron-man-3/8/85/Redsnapper.jpg?width=1280'></img>
    //         <p>Disaster Rescue Suit "Red Snapper"</p>
    //         </div>
    //         <div>
    //         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYRnovijmSqGvfnYXq4uq9nJM-v3I8q3QVg&usqp=CAU'></img>
    //          <p>Mark XX Silver Centurion</p>
    //         </div>
    //         <div>
    //         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FWVonet9j1yw2SvZq2NNd3h6FX9J9NdJQQ&usqp=CAU'></img>
    //          <p>Roadies Iron Patriot</p>
    //         </div>
    //     </div>
    //     <div>
    //         <h1>Welcome To Our Iron Legion</h1>
    //         <h2>If You Are In Trouble Remember Us.</h2>
    //         <p>We Are Always Ready To Help You.</p>
    //     </div>
    // </section>
    
    <body class="bg-gray-100">
    <div class="h-screen flex items-center justify-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">And Remember one thing “I am Iron Man”</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div class="bg-white rounded-lg shadow-lg p-6">
                <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/iron-man-3/8/85/Redsnapper.jpg?width=1280" alt="Card 1" class="w-full h-80 object-cover rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold text-gray-800">Mark 35</h2>
                <p class="text-gray-600">Disaster Rescue Suit "Red Snapper".</p>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
                <img src="https://cdn.marvel.com/content/1x/is_ironman_udh_l178_3840x2160_zxx_v1_110520.png" alt="Card 2" class="w-full h-80 object-cover rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold text-gray-800">Mark XX Silver Centurion</h2>
                <p class="text-gray-600">framed attack on Iran where the Hulk is sent in response. S.H.I.E.L.D.</p>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
                <img src="https://i.pinimg.com/originals/c9/da/7e/c9da7eeece33ae711025baa06daf2c8b.jpg" alt="Card 3" class="w-full h-80 object-cover rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold text-gray-800">Iron Patriot</h2>
                <p class="text-gray-600">incriminate the United States in international attacks</p>
            </div>
        </div>
    </div>
</body>
  )
}

export default BodySection