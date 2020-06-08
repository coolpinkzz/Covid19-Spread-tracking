var size = 200;

// implementation of CustomLayerInterface to draw a pulsing dot icon on the map
// see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
var pulsingDot = {
width: size,
height: size,
data: new Uint8Array(size * size * 4),

// get rendering context for the map canvas when layer is added to the map
onAdd: function() {
var canvas = document.createElement('canvas');
canvas.width = this.width;
canvas.height = this.height;
this.context = canvas.getContext('2d');
},

// called once before every frame where the icon will be used
render: function() {
var duration = 1000;
var t = (performance.now() % duration) / duration;

var radius = (size / 2) * 0.3;
var outerRadius = (size / 2) * 0.7 * t + radius;
var context = this.context;

// draw outer circle
context.clearRect(0, 0, this.width, this.height);
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
outerRadius,
0,
Math.PI * 2
);
context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
context.fill();

// draw inner circle
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
radius,
0,
Math.PI * 2
);
context.fillStyle = 'rgba(255, 100, 100, 1)';
context.strokeStyle = 'white';
context.lineWidth = 2 + 4 * (1 - t);
context.fill();
context.stroke();

// update this image's data with data from the canvas
this.data = context.getImageData(
0,
0,
this.width,
this.height
).data;

// continuously repaint the map, resulting in the smooth animation of the dot
map.triggerRepaint();

// return `true` to let the map know that the image was updated
return true;
}
};







map.on('load', function() {

  map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

map.addSource('points', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>Tamil Nadu,India</strong><p>Infected :621 <br>Dead :5 <br> Recovered: 8</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [78.387451,11.059821]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Telangana, India	</strong><p>Infected :321 <br>Dead :7 <br> Recovered: 34</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [79.208824,	17.123184]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Madhya Pradesh, India</strong><p>Infected :165 <br>Dead : 9<br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [77.947998,23.473324]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Haryana, India</strong><p>Infected :90 <br>Dead : 1<br> Recovered:25</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [76.431885,29.238478]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Maharashtra, India	</strong><p>Infected :748 <br>Dead :45 <br> Recovered:56</p>",

},
'geometry': {
'type': 'Point',
'coordinates': [	75.552979,19.601194]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Chhattisgarh, India</strong><p>Infected :10 <br>Dead :0 <br> Recovered:8</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [81.828232, 21.295132]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Tripura, India</strong><p>Infected :1 <br>Dead :0 <br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [91.746826, 23.74512]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Karnataka, India</strong><p>Infected :151 <br>Dead : 4<br> Recovered: 12</p>",

},
'geometry': {
'type': 'Point',
'coordinates': [	75.713890, 	15.317277]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Kerala, India	</strong><p>Infected :327 <br>Dead :2 <br> Recovered:58</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [76.271080, 	10.850516]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Uttar Pradesh, India	</strong><p>Infected :305 <br>Dead :3 <br> Recovered:21</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [79.826660, 		28.207609]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Rajasthan, India	</strong><p>Infected :288 <br>Dead :3 <br> Recovered:21</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [73.432617, 	27.391277]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>West Bengal 	</strong><p>Infected :91 <br>Dead :3 <br> Recovered:13</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	88.32994665, 	22.58039044]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Punjab </strong><p>Infected :76 <br>Dead :6 <br> Recovered:4</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [75.98000281, 		31.51997398	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Kerala , India	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	86.41998572, 		23.80039349]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Jharkhand, India	</strong><p>Infected :4 <br>Dead :0 <br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [73.432617, 	27.391277]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Sikkim,India	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	88.6166475, 27.3333303	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Jammu And Kashmir, India	</strong><p>Infected :109 <br>Dead :2 <br> Recovered:4</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [74.46665849, 	34.29995933]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Goa, India	</strong><p>Infected :7 <br>Dead :0 <br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [73.81800065 ,	15.491997]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Bihar, India	</strong><p>Infected :32 <br>Dead :1 <br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [73.432617, 	27.391277]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Delhi, India	</strong><p>Infected :523 <br>Dead :7 <br> Recovered:19</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [77.23000403, 	28.6699929]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Arunachal Pradesh, India	</strong><p>Infected :1 <br>Dead : 0<br> Recovered:0</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	93.61660071, 27.10039878]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Andaman And Nicobar, India	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	92.73598262, 	11.66702557]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Afghanistan	</strong><p>Infected :337 <br>Dead :7 <br> Recovered: 15</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	67.709953, 		33.93911]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Argentina	</strong><p>Infected :1,451 <br>Dead :44 <br> Recovered:280</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-63.616672	, 	-38.416097]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Australia</strong><p>Infected :5678 <br>Dead :35	 <br> Recovered:2,315	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	133.775136, 		-25.274398]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Bangladesh</strong><p>Infected :88 <br>Dead :9 <br> Recovered:33</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	90.356331, 		23.684994]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Belgium	</strong><p>Infected :19,691 <br>Dead :1,447	 <br> Recovered:3,751</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	4.469936, 		50.503887]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Brazil	</strong><p>Infected : 10,568<br>Dead :455	 <br> Recovered:127</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	-51.92528, 	-14.235004]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Canada	</strong><p>Infected :14,426 <br>Dead :258 <br> Recovered:2,603	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-106.346771, 		56.130366]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		China	</strong><p>Infected :81,669 <br>Dead :3,329	 <br> Recovered:76,964</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	104.195397, 	35.86166]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Chile	</strong><p>Infected :4,471 <br>Dead :34	 <br> Recovered618:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	-71.542969,	-35.675147]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Germany	</strong><p>Infected :98,765 <br>Dead :1,524	 <br> Recovered:26,400</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	10.451526, 		51.165691]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Denmark	</strong><p>Infected :4,369 <br>Dead :179 <br> Recovered:1,327</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	9.501785, 		56.26392]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Egypt	</strong><p>Infected :1,070 <br>Dead :71 <br> Recovered: 241</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	30.802498,	26.820553]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Spain	</strong><p>Infected :1,30,759 <br>Dead :15,887 <br> Recovered:21,815</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-3.74922, 40.463667	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		France	</strong><p>Infected : <br>89,953 <br> Dead : 7,560<br> Recovered:15,438	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [2.213749	, 	46.227638	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	United Kingdom</strong><p>Infected :47,806 <br>Dead :4,934	 <br> Recovered:135	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-3.435973, 			55.378051]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Georgia	</strong><p>Infected :174 <br>Dead :2 <br> Recovered:36</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [43.356892, 	42.315407	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Guinea	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-9.6966451, 	9.945587]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Greece	</strong><p>Infected :1735 <br>Dead :73 <br> Recovered:78</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [21.824312, 	39.074208	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Hong Kong	</strong><p>Infected :890 <br>Dead :61 <br> Recovered: 279</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [114.109497, 22.396428	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Indonesia	</strong><p>Infected :2,273 <br>Dead :198 <br> Recovered:164</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [113.921327, 	-0.789275	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Ireland	</strong><p>Infected :4,604 <br>Dead : 137	<br> Recovered:25</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-8.24389, 	53.41291]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Iraq	</strong><p>Infected :58,226 <br>Dead :3,603	 <br> Recovered:19,736</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [43.679291, 33.223191]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Iran	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	53.688046,32.427908	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Iran	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	53.688046,32.427908	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>		Italy	</strong><p>Infected :1,28,948 <br>Dead :15,887 <br> Recovered:21,815	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [12.56738,41.87194	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Jamaica	</strong><p>Infected :55 <br>Dead :3 <br> Recovered:7</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [77.297508,18.109581	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Japan	</strong><p>Infected :3,139 <br>Dead :77 <br> Recovered:514</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [138.252924,36.204824	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Kenya	</strong><p>Infected :142 <br>Dead : 4<br> Recovered: 4</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [37.906193,0.023559	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	North Korea	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	127.510093,40.339852	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>		South Korea	</strong><p>Infected :10,237 <br>Dead :183	 <br> Recovered:183	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	127.766922,	35.907757	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Kazakhstan	</strong><p>Infected :584 <br>Dead :6 <br> Recovered:42</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [66.923684,48.019573]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>		Sri Lanka	</strong><p>Infected :175 <br>Dead : 5<br> Recovered:33</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [80.771797,7.873054	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Mongolia	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [		103.846656,46.862496	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Mexico	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-102.552784,23.634501	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Malaysia	</strong><p>Infected :3,662 <br>Dead :61 <br> Recovered:1005</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [101.975766,4.210484	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Nigeria	</strong><p>Infected :224 <br>Dead :5 <br> Recovered: 27</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [8.675277,9.081999	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Netherlands	</strong><p>Infected :17,851 <br>Dead :1,766 <br> Recovered:250	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [5.291266,52.132633	]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>	Norway	</strong><p>Infected :5,687 <br>Dead :70	 <br> Recovered:32	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [8.468946,60.472024	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Nepal	</strong><p>Infected :9 <br>Dead :0 <br> Recovered:1</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [84.124008,28.3948574	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		New Zealand	</strong><p>Infected :1,039 <br>Dead : 1<br> Recovered: 156</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [174.885971,-40.900557	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Philippines	</strong><p>Infected :3,246 <br>Dead : 152<br> Recovered:64</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [121.774017,12.879721	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Pakistan	</strong><p>Infected : 3,123<br>Dead :45 <br> Recovered:28</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [69.345116,30.375321	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Portugal	</strong><p>Infected :11,278 <br>Dead :295 <br> Recovered:75	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-8.224454,39.399872	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Paraguay	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [-58.443832,-23.442503]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Qatar	</strong><p>Infected :1325 <br>Dead :3 <br> Recovered:109</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [51.183884,25.354826	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Romania	</strong><p>Infected :3,864 <br>Dead :151<br> Recovered:374</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [24.96676,45.943161	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Russia	</strong><p>Infected :5389 <br>Dead :45	 <br> Recovered:355	</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [105.318756,61.52401	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		Saudi Arabia	</strong><p>Infected :2,385 <br>Dead :34 <br> Recovered:488</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [45.079162,23.8859424	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Singapore	</strong><p>Infected :1,309 <br>Dead :6 <br> Recovered:320</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [103.819836,1.352083	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Thailand	</strong><p>Infected :2,169 <br>Dead : 23<br> Recovered:793</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [100.992541,15.870032	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Tajikistan	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [71.276093,38.861034	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Turkey	</strong><p>Infected :27,069 <br>Dead :574	 <br> Recovered:1,042</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [35.243322,38.963745	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	United States	</strong><p>Infected : 3,27,848 <br>Dead :9,325 <br> Recovered:16,700</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	-95.712891,37.09024	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Uruguay	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [	-55.765835,	-32.522779	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Vietnam	</strong><p>Infected :241 <br>Dead :0 <br> Recovered:90</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [108.277199,	14.058324	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>		South Africa	</strong><p>Infected :1,585 <br>Dead :9 <br> Recovered:95</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [22.937506,	-30.559482	]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>	Zimbabwe	</strong><p>Infected : <br>Dead : <br> Recovered:</p>',

},
'geometry': {
'type': 'Point',
'coordinates': [29.154857,	-19.015438	]
}
},






]
}
});

// Add a layer showing the places.
map.addLayer({
'id': 'points',
'type': 'symbol',
'source': 'points',
'layout': {
'icon-image': 'pulsing-dot'
}
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});

map.on('mouseenter', 'points', function(e) {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';

var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

// Populate the popup and set its coordinates
// based on the feature found.
popup
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

map.on('mouseleave', 'points', function() {
map.getCanvas().style.cursor = '';
popup.remove();
});
});
