var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#D2EDD4',
  progressColor: '#46B54D'
})

wavesurfer.load('https://i.alexflipnote.dev/7fzEQP4.mp3')


// Equalizer
wavesurfer.on('ready', function () {
  var EQ = [
    {f: 25, type: 'lowshelf'},
    {f: 40, type: 'peaking'},
    {f: 63, type: 'peaking'},
    {f: 100, type: 'peaking'},
    {f: 160, type: 'peaking'},
    {f: 250, type: 'peaking'},
    {f: 400, type: 'peaking'},
    {f: 630, type: 'peaking'},
    {f: 1000, type: 'peaking'},
    {f: 1600, type: 'peaking'},
    {f: 2500, type: 'peaking'},
    {f: 4000, type: 'peaking'},
    {f: 6300, type: 'peaking'},
    {f: 10000, type: 'peaking'},
    {f: 16000, type: 'highshelf'}
  ]

  // Create filters
  var filters = EQ.map(function (band) {
    var filter = wavesurfer.backend.ac.createBiquadFilter()
    filter.type = band.type
    filter.gain.value = 0
    filter.Q.value = 1
    filter.frequency.value = band.f
    return filter
  })

  // Connect filters to wavesurfer
  wavesurfer.backend.setFilters(filters)

  wavesurfer.setVolume(0.5)
  document.querySelector('#volume').value = wavesurfer.backend.getVolume()

  // Bind filters to vertical range sliders
  var container = document.querySelector('#equalizer')
  filters.forEach(function (filter) {
    var input = document.createElement('input')
    wavesurfer.util.extend(input, {
      type: 'range',
      max: 100,
      min: -25,
      value: 0,
      title: filter.frequency.value
    })
    input.style.display = 'inline-block'
    input.setAttribute('oninput', "this.setAttribute('data-value', this.value / 100)")
    input.setAttribute('onchange', "this.setAttribute('data-value', this.value / 100)")
    input.setAttribute('data-value', '0.0')
    input.setAttribute('orient', 'vertical')
    wavesurfer.drawer.style(input, {
      'webkitAppearance': 'slider-vertical',
      width: '50px',
      height: '150px'
    })
    container.appendChild(input)

    var onChange = function (e) {
      filter.gain.value = ~~e.target.value
    }

    input.addEventListener('input', onChange)
    input.addEventListener('change', onChange)
  })


    var volumeInput = document.querySelector('#volume')
    var onChangeVolume = function (e) {
      wavesurfer.setVolume(e.target.value)
      console.log(e.target.value)
    }
  volumeInput.addEventListener('input', onChangeVolume)
  volumeInput.addEventListener('change', onChangeVolume)


  // For debugging
  wavesurfer.filters = filters
})


// Let's get those nice values
function getEqValues() {
  var getValues = document.querySelector('#equalizer').children
  var tempValues = []
  for (var i = 0; i < getValues.length; i++) {
    var toLavalinkVal = getValues[i].value / 100
    if (getValues[i].value == 0) toLavalinkVal = toLavalinkVal.toFixed(1)
    tempValues.push("("+i+", "+toLavalinkVal+")")
    getValues[i].setAttribute('data-value', toLavalinkVal)
  }
  document.querySelector('#eq-values').innerHTML = tempValues.join(", ")
}
