function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  // ALL
  let allridesButton = document.querySelector('#all-filter')
    allridesButton.addEventListener('click', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    document.querySelector('.rides').innerHTML = ''
    let loSHeader = document.querySelector('.loSheader')
    loSHeader.innerHTML = `All Rides selected... one moment.`
    console.log(loSHeader.innerHTML)
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
    // PUSH ALL RIDES TO PAGE
    renderRides(json)
    loSHeader.insertAdjacentHTML('beforeend', '<br />' + json.length + ' rides found.')
    })

  // POOL
  let poolButton = document.querySelector('#noober-pool-filter')
    poolButton.addEventListener('click', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    document.querySelector('.rides').innerHTML = ''
    let loSHeader = document.querySelector('.loSheader')
    loSHeader.innerHTML = `Noober Pool Rides selected... one moment.`
    console.log(loSHeader.innerHTML)
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
  // POOL LOOP
  let poolArray = []
  for (let i=0; i<json.length; i++){
    let b= levelOfService(json[i])
    if(b=="Noober Pool"){
    poolArray.push(json[i])
    }}
  // PUSH POOL RIDES TO PAGE
  renderRides(poolArray)
  loSHeader.insertAdjacentHTML('beforeend', '<br />' + poolArray.length + ' rides found.')
    })

  // PURPLE
  let purpleButton = document.querySelector('#noober-purple-filter')
    purpleButton.addEventListener('click', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    document.querySelector('.rides').innerHTML = ''
    let loSHeader = document.querySelector('.loSheader')
    loSHeader.innerHTML = `Noober Purple Rides selected... one moment.`
    console.log(loSHeader.innerHTML)
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
    // PURPLE LOOP
    let purpleArray = []
    for (let i=0; i<json.length; i++){
      let b= levelOfService(json[i])
      if(b=="Noober Purple"){
      purpleArray.push(json[i])
      }}
    // PUSH PURPLE RIDES TO PAGE
    renderRides(purpleArray)
    loSHeader.insertAdjacentHTML('beforeend', '<br />' + purpleArray.length + ' rides found.')
    })

  // XL
  let xlButton = document.querySelector('#noober-xl-filter')
    xlButton.addEventListener('click', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    document.querySelector('.rides').innerHTML = ''
    let loSHeader = document.querySelector('.loSheader')
    loSHeader.innerHTML = `Noober XL Rides selected... one moment.`
    console.log(loSHeader.innerHTML)
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
  // XL LOOP
  let xlArray = []
  for (let i=0; i<json.length; i++){
    let b= levelOfService(json[i])
    if(b=="Noober XL"){
    xlArray.push(json[i])
    }}
  // PUSH XL RIDES TO PAGE
  renderRides(xlArray)
  loSHeader.insertAdjacentHTML('beforeend', '<br />' + xlArray.length + ' rides found.')
    })

  // X
  let xButton = document.querySelector('#noober-x-filter')
    xButton.addEventListener('click', async function(event) {
    event.preventDefault() // supress the browser's default click behavior
    document.querySelector('.rides').innerHTML = ''
    let loSHeader = document.querySelector('.loSheader')
    loSHeader.innerHTML = `NooberX Rides selected... one moment.`
    console.log(loSHeader.innerHTML)
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
  // X LOOP
  let xArray = []
  for (let i=0; i<json.length; i++){
    let b= levelOfService(json[i])
    if(b=="Noober X"){
    xArray.push(json[i])
    }}
  // PUSH X RIDES TO PAGE
  renderRides(xArray)
  loSHeader.insertAdjacentHTML('beforeend', '<br />' + xArray.length + ' rides found.')
    })



})

