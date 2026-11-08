// DIYI-PATH 3D emblem: the brand symbol (traced from the approved artwork) given real depth.
// Solid brand colours only; shading comes from scene lighting. Uses three.js r160 (MIT).
// Behaviour: power-on intro, drag/swipe to spin, scroll reaction, orbiting department tokens,
// tap to "charge", layers separate on hover, phone tilt, and lighting that follows shop hours.
import * as THREE from './vendor/three.module.min.js';

const SHAPES = {"blue":[[-0.8114,0.8478],[-0.7996,0.8482],[-0.7878,0.8478],[-0.776,0.8477],[-0.7642,0.8477],[-0.7523,0.8477],[-0.7405,0.8477],[-0.7287,0.8477],[-0.7169,0.8477],[-0.705,0.8477],[-0.6932,0.8477],[-0.6814,0.8477],[-0.6695,0.8477],[-0.6577,0.8477],[-0.6459,0.8477],[-0.6341,0.8477],[-0.6222,0.8477],[-0.6104,0.8477],[-0.5986,0.8477],[-0.5868,0.8477],[-0.5749,0.8477],[-0.5631,0.8477],[-0.5513,0.8477],[-0.5395,0.8477],[-0.5276,0.8477],[-0.5158,0.8477],[-0.504,0.8477],[-0.4921,0.8477],[-0.4803,0.8477],[-0.4685,0.8477],[-0.4567,0.8477],[-0.4448,0.8477],[-0.433,0.8477],[-0.4212,0.8477],[-0.4094,0.8477],[-0.3975,0.8477],[-0.3857,0.8477],[-0.3739,0.8477],[-0.3621,0.8477],[-0.3502,0.8477],[-0.3384,0.8477],[-0.3266,0.8477],[-0.3148,0.8477],[-0.3029,0.8477],[-0.2911,0.8477],[-0.2793,0.8477],[-0.2674,0.8477],[-0.2556,0.8477],[-0.2438,0.8477],[-0.232,0.8477],[-0.2201,0.8477],[-0.2083,0.8477],[-0.1965,0.8477],[-0.1847,0.8477],[-0.1728,0.8477],[-0.161,0.8477],[-0.1492,0.8477],[-0.1374,0.8477],[-0.1255,0.8477],[-0.1137,0.8477],[-0.1019,0.8477],[-0.0901,0.8477],[-0.0782,0.8477],[-0.0664,0.8477],[-0.0546,0.8477],[-0.0427,0.8477],[-0.0309,0.8477],[-0.0191,0.8477],[-0.0073,0.8477],[0.0046,0.8477],[0.0164,0.8477],[0.0282,0.8477],[0.04,0.8477],[0.0519,0.8477],[0.0637,0.8477],[0.0755,0.8477],[0.0873,0.8477],[0.0992,0.8477],[0.111,0.8477],[0.1228,0.8479],[0.1346,0.8479],[0.1465,0.8478],[0.1583,0.8477],[0.1701,0.8474],[0.1817,0.8452],[0.1932,0.8427],[0.205,0.8428],[0.2167,0.8411],[0.2279,0.8374],[0.2396,0.8357],[0.2512,0.8334],[0.2629,0.8314],[0.2744,0.8288],[0.286,0.8265],[0.2975,0.824],[0.3091,0.8217],[0.3206,0.8186],[0.3319,0.8152],[0.343,0.8112],[0.3545,0.8086],[0.366,0.8056],[0.3771,0.8017],[0.3884,0.7981],[0.3992,0.7934],[0.4106,0.7901],[0.4216,0.7859],[0.4325,0.7814],[0.4434,0.7767],[0.4546,0.7729],[0.4654,0.7681],[0.4759,0.7627],[0.4865,0.7575],[0.4974,0.7527],[0.5078,0.7472],[0.5184,0.742],[0.5289,0.7365],[0.5392,0.7307],[0.5492,0.7244],[0.56,0.7196],[0.5702,0.7137],[0.5801,0.7072],[0.5903,0.7012],[0.6001,0.6946],[0.6096,0.6876],[0.6195,0.6812],[0.6291,0.6743],[0.6389,0.6676],[0.6483,0.6604],[0.6577,0.6533],[0.6671,0.6461],[0.6762,0.6385],[0.6855,0.6312],[0.6942,0.6233],[0.7028,0.6151],[0.7114,0.607],[0.7199,0.5988],[0.7284,0.5906],[0.7375,0.583],[0.7461,0.5749],[0.7542,0.5663],[0.7615,0.557],[0.7695,0.5483],[0.778,0.54],[0.7858,0.5312],[0.7927,0.5216],[0.8005,0.5127],[0.8081,0.5037],[0.8146,0.4938],[0.8217,0.4844],[0.8289,0.475],[0.8361,0.4656],[0.8426,0.4557],[0.849,0.4457],[0.8554,0.4358],[0.8622,0.4261],[0.869,0.4165],[0.8743,0.4059],[0.8799,0.3955],[0.8859,0.3853],[0.8916,0.3749],[0.8972,0.3646],[0.9025,0.354],[0.9076,0.3433],[0.9129,0.3327],[0.9184,0.3223],[0.9233,0.3115],[0.9275,0.3005],[0.932,0.2895],[0.9364,0.2785],[0.9412,0.2677],[0.9456,0.2568],[0.9495,0.2456],[0.9531,0.2343],[0.9574,0.2233],[0.9614,0.2122],[0.9642,0.2007],[0.9677,0.1894],[0.9711,0.1781],[0.9742,0.1667],[0.9771,0.1552],[0.9792,0.1436],[0.9816,0.132],[0.9839,0.1204],[0.9864,0.1089],[0.989,0.0974],[0.9897,0.0856],[0.9925,0.0741],[0.9948,0.0625],[0.9953,0.0507],[0.9954,0.0389],[0.9964,0.0271],[0.9988,0.0155],[0.9999,0.0038],[1.0,-0.0081],[1.0,-0.0199],[1.0,-0.0317],[1.0,-0.0435],[1.0,-0.0554],[1.0,-0.0672],[0.9998,-0.079],[0.9982,-0.0907],[0.9961,-0.1023],[0.9953,-0.1141],[0.995,-0.126],[0.9934,-0.1377],[0.9907,-0.1492],[0.9894,-0.1609],[0.9878,-0.1726],[0.985,-0.1841],[0.9829,-0.1957],[0.98,-0.2072],[0.9778,-0.2188],[0.9749,-0.2303],[0.9725,-0.2418],[0.9695,-0.2533],[0.9667,-0.2648],[0.963,-0.276],[0.9596,-0.2873],[0.956,-0.2986],[0.952,-0.3097],[0.9482,-0.3209],[0.944,-0.332],[0.94,-0.3431],[0.9357,-0.3541],[0.9313,-0.3651],[0.9266,-0.3759],[0.9215,-0.3866],[0.9164,-0.3973],[0.9109,-0.4078],[0.9055,-0.4182],[0.9,-0.4287],[0.8947,-0.4393],[0.889,-0.4497],[0.8826,-0.4596],[0.8766,-0.4698],[0.8707,-0.4801],[0.8643,-0.49],[0.8575,-0.4997],[0.8508,-0.5094],[0.8443,-0.5193],[0.8377,-0.5291],[0.8307,-0.5386],[0.8234,-0.548],[0.816,-0.5571],[0.8087,-0.5664],[0.8014,-0.5758],[0.7936,-0.5847],[0.7859,-0.5936],[0.7781,-0.6025],[0.7699,-0.6111],[0.7621,-0.6199],[0.754,-0.6285],[0.7456,-0.6368],[0.7369,-0.6449],[0.7281,-0.6528],[0.7192,-0.6606],[0.71,-0.668],[0.7011,-0.6758],[0.6926,-0.684],[0.684,-0.6921],[0.6748,-0.6996],[0.6654,-0.7068],[0.656,-0.7139],[0.6467,-0.7212],[0.6373,-0.7284],[0.6277,-0.7353],[0.618,-0.742],[0.6081,-0.7485],[0.5982,-0.755],[0.5884,-0.7617],[0.5784,-0.768],[0.5681,-0.7738],[0.5581,-0.78],[0.5479,-0.786],[0.5376,-0.7918],[0.5273,-0.7977],[0.517,-0.8034],[0.5065,-0.8089],[0.4959,-0.8141],[0.4852,-0.8191],[0.4746,-0.8243],[0.4639,-0.8294],[0.4532,-0.8344],[0.4423,-0.8392],[0.4314,-0.8437],[0.4201,-0.8472],[0.4084,-0.8481],[0.3965,-0.8482],[0.3847,-0.8482],[0.3729,-0.8482],[0.3611,-0.8482],[0.3492,-0.8482],[0.3374,-0.8482],[0.3256,-0.8482],[0.3138,-0.8482],[0.3019,-0.8482],[0.2901,-0.8482],[0.2783,-0.8482],[0.2665,-0.8482],[0.2546,-0.8482],[0.2428,-0.8482],[0.231,-0.8482],[0.2191,-0.8482],[0.2073,-0.8482],[0.1955,-0.8482],[0.1837,-0.8482],[0.1718,-0.8482],[0.16,-0.8482],[0.1482,-0.8482],[0.1364,-0.8482],[0.1245,-0.8482],[0.1127,-0.8482],[0.1009,-0.8482],[0.0891,-0.8482],[0.0772,-0.8482],[0.0654,-0.8482],[0.0536,-0.8482],[0.0418,-0.8481],[0.0302,-0.846],[0.02,-0.84],[0.0105,-0.833],[0.0014,-0.8255],[-0.0081,-0.8184],[-0.0177,-0.8114],[-0.027,-0.8042],[-0.0363,-0.7969],[-0.0452,-0.7891],[-0.0539,-0.7811],[-0.0629,-0.7734],[-0.0721,-0.766],[-0.0809,-0.7581],[-0.0894,-0.7499],[-0.098,-0.7417],[-0.1067,-0.7338],[-0.1155,-0.7258],[-0.1239,-0.7175],[-0.1321,-0.709],[-0.1399,-0.7001],[-0.1477,-0.6912],[-0.1554,-0.6822],[-0.1628,-0.673],[-0.1699,-0.6635],[-0.176,-0.6534],[-0.1816,-0.643],[-0.1869,-0.6325],[-0.1909,-0.6213],[-0.1947,-0.6101],[-0.1983,-0.5989],[-0.2009,-0.5873],[-0.2019,-0.5755],[-0.202,-0.5637],[-0.2013,-0.5519],[-0.1994,-0.5403],[-0.1959,-0.529],[-0.192,-0.5178],[-0.1878,-0.5068],[-0.1822,-0.4963],[-0.1758,-0.4864],[-0.1687,-0.477],[-0.1607,-0.4682],[-0.1529,-0.4593],[-0.1451,-0.4504],[-0.1366,-0.4422],[-0.1276,-0.4346],[-0.1187,-0.4268],[-0.1093,-0.4196],[-0.0996,-0.4128],[-0.0899,-0.406],[-0.0801,-0.3995],[-0.0701,-0.3931],[-0.06,-0.387],[-0.05,-0.3806],[-0.0401,-0.3742],[-0.03,-0.3681],[-0.0196,-0.3624],[-0.0092,-0.3568],[0.0011,-0.351],[0.0114,-0.3452],[0.022,-0.3399],[0.0327,-0.335],[0.0433,-0.3296],[0.0537,-0.324],[0.0641,-0.3185],[0.0748,-0.3135],[0.0856,-0.3086],[0.0962,-0.3033],[0.1069,-0.2983],[0.1179,-0.294],[0.1295,-0.2916],[0.141,-0.289],[0.1526,-0.2866],[0.164,-0.2836],[0.1755,-0.2806],[0.1865,-0.2764],[0.1973,-0.2716],[0.2082,-0.2669],[0.2188,-0.2618],[0.229,-0.2557],[0.2389,-0.2493],[0.2489,-0.2429],[0.2584,-0.2359],[0.2675,-0.2284],[0.2767,-0.2209],[0.2853,-0.2128],[0.2929,-0.2037],[0.3006,-0.1948],[0.3083,-0.1858],[0.3146,-0.1758],[0.3205,-0.1655],[0.3263,-0.1553],[0.3316,-0.1447],[0.3367,-0.134],[0.3408,-0.1229],[0.3443,-0.1116],[0.3477,-0.1003],[0.3508,-0.0889],[0.3525,-0.0772],[0.3552,-0.0657],[0.3564,-0.0539],[0.3566,-0.0421],[0.3566,-0.0303],[0.3566,-0.0185],[0.3559,-0.0067],[0.3538,0.005],[0.3519,0.0166],[0.3501,0.0283],[0.3465,0.0396],[0.3431,0.0509],[0.3396,0.0622],[0.3351,0.0731],[0.3299,0.0838],[0.3239,0.094],[0.3175,0.1039],[0.3113,0.1139],[0.305,0.124],[0.298,0.1335],[0.29,0.1422],[0.2817,0.1506],[0.273,0.1587],[0.2643,0.1666],[0.2554,0.1744],[0.2459,0.1815],[0.236,0.188],[0.2258,0.194],[0.2155,0.1997],[0.2051,0.2054],[0.1942,0.2099],[0.1831,0.2139],[0.1718,0.2175],[0.1604,0.2207],[0.1491,0.2242],[0.1376,0.2267],[0.126,0.229],[0.1142,0.2301],[0.1024,0.2304],[0.0906,0.2304],[0.0787,0.2304],[0.0669,0.2304],[0.0551,0.2304],[0.0433,0.2304],[0.0314,0.2304],[0.0196,0.2304],[0.0078,0.2304],[-0.004,0.2304],[-0.0159,0.2304],[-0.0277,0.2304],[-0.0395,0.2304],[-0.0513,0.2304],[-0.0632,0.2304],[-0.075,0.2304],[-0.0868,0.2304],[-0.0986,0.2304],[-0.1105,0.2304],[-0.1223,0.2304],[-0.1341,0.2304],[-0.146,0.2304],[-0.1578,0.2304],[-0.1696,0.2304],[-0.1814,0.2304],[-0.1933,0.2304],[-0.2051,0.2304],[-0.2169,0.2304],[-0.2287,0.2304],[-0.2406,0.2304],[-0.2524,0.2304],[-0.2642,0.2304],[-0.276,0.2304],[-0.2879,0.2304],[-0.2997,0.2304],[-0.3115,0.2304],[-0.3234,0.2304],[-0.3352,0.2304],[-0.347,0.2304],[-0.3588,0.2304],[-0.3707,0.2304],[-0.3825,0.2304],[-0.3943,0.2304],[-0.4061,0.2304],[-0.418,0.2304],[-0.4298,0.2304],[-0.4416,0.2304],[-0.4534,0.2304],[-0.4653,0.2304],[-0.4771,0.2304],[-0.4889,0.2304],[-0.5007,0.2304],[-0.5126,0.2304],[-0.5244,0.2304],[-0.5362,0.2304],[-0.5481,0.2304],[-0.5599,0.2304],[-0.5717,0.2304],[-0.5835,0.2304],[-0.5954,0.2304],[-0.6072,0.2304],[-0.619,0.2304],[-0.6308,0.2304],[-0.6427,0.2304],[-0.6545,0.2304],[-0.6663,0.2304],[-0.6781,0.2304],[-0.69,0.2304],[-0.7018,0.2304],[-0.7136,0.2304],[-0.7254,0.2304],[-0.7373,0.2304],[-0.7491,0.2304],[-0.7609,0.2304],[-0.7728,0.2304],[-0.7846,0.2304],[-0.7964,0.2304],[-0.8082,0.2312],[-0.8197,0.2338],[-0.831,0.2374],[-0.8415,0.2427],[-0.8506,0.2503],[-0.8582,0.2593],[-0.8642,0.2695],[-0.8679,0.2807],[-0.8686,0.2925],[-0.8686,0.3043],[-0.8686,0.3161],[-0.8686,0.328],[-0.8686,0.3398],[-0.8686,0.3516],[-0.8686,0.3634],[-0.8686,0.3753],[-0.8686,0.3871],[-0.8686,0.3989],[-0.8686,0.4107],[-0.8686,0.4226],[-0.8686,0.4344],[-0.8686,0.4462],[-0.8686,0.4581],[-0.8686,0.4699],[-0.8686,0.4817],[-0.8686,0.4935],[-0.8686,0.5054],[-0.8686,0.5172],[-0.8686,0.529],[-0.8686,0.5408],[-0.8686,0.5527],[-0.8686,0.5645],[-0.8686,0.5763],[-0.8686,0.5881],[-0.8686,0.6],[-0.8686,0.6118],[-0.8686,0.6236],[-0.8686,0.6355],[-0.8686,0.6473],[-0.8686,0.6591],[-0.8686,0.6709],[-0.8686,0.6828],[-0.8686,0.6946],[-0.8686,0.7064],[-0.8686,0.7182],[-0.8686,0.7301],[-0.8686,0.7419],[-0.8686,0.7537],[-0.8686,0.7655],[-0.8686,0.7774],[-0.8685,0.7892],[-0.8674,0.8009],[-0.8629,0.8118],[-0.8556,0.8211],[-0.8472,0.8295],[-0.8381,0.8369],[-0.8277,0.8425]],"green":[[0.2358,-0.194],[0.2306,-0.2033],[0.2211,-0.2103],[0.2107,-0.2159],[0.1997,-0.2201],[0.1883,-0.2234],[0.1769,-0.2265],[0.1655,-0.2297],[0.1541,-0.2328],[0.1427,-0.2359],[0.1313,-0.2391],[0.12,-0.2427],[0.1087,-0.2462],[0.0974,-0.2496],[0.0861,-0.2529],[0.0747,-0.2562],[0.0633,-0.2594],[0.0519,-0.2626],[0.0405,-0.2656],[0.0293,-0.2693],[0.018,-0.2728],[0.0067,-0.2765],[-0.0046,-0.2798],[-0.016,-0.283],[-0.0274,-0.2862],[-0.0387,-0.2898],[-0.0498,-0.2938],[-0.061,-0.2975],[-0.0722,-0.3012],[-0.0834,-0.3051],[-0.0945,-0.3093],[-0.1056,-0.3134],[-0.1166,-0.3177],[-0.1275,-0.3224],[-0.1384,-0.3269],[-0.1494,-0.3312],[-0.1605,-0.3353],[-0.1714,-0.3399],[-0.1821,-0.3448],[-0.193,-0.3494],[-0.2041,-0.3536],[-0.2151,-0.3578],[-0.2259,-0.3626],[-0.2365,-0.3679],[-0.2471,-0.3731],[-0.2578,-0.3782],[-0.2683,-0.3836],[-0.2789,-0.389],[-0.2893,-0.3946],[-0.2994,-0.4007],[-0.3096,-0.4067],[-0.3199,-0.4125],[-0.3299,-0.4187],[-0.3398,-0.4253],[-0.3496,-0.4319],[-0.3595,-0.4384],[-0.3693,-0.445],[-0.3789,-0.4518],[-0.3884,-0.459],[-0.3972,-0.4668],[-0.4063,-0.4743],[-0.4156,-0.4817],[-0.4244,-0.4895],[-0.4329,-0.4978],[-0.4413,-0.5061],[-0.4494,-0.5148],[-0.457,-0.5238],[-0.4643,-0.5331],[-0.4713,-0.5426],[-0.4781,-0.5523],[-0.4854,-0.5616],[-0.4918,-0.5715],[-0.4979,-0.5817],[-0.504,-0.5918],[-0.5097,-0.6021],[-0.515,-0.6127],[-0.5201,-0.6234],[-0.5247,-0.6343],[-0.5289,-0.6454],[-0.5326,-0.6566],[-0.5355,-0.668],[-0.5377,-0.6796],[-0.5405,-0.6911],[-0.5423,-0.7028],[-0.5447,-0.7144],[-0.5466,-0.7261],[-0.5469,-0.7379],[-0.5472,-0.7497],[-0.5483,-0.7615],[-0.5494,-0.7732],[-0.5507,-0.785],[-0.5515,-0.7968],[-0.5515,-0.8086],[-0.5507,-0.8204],[-0.549,-0.8321],[-0.5504,-0.8436],[-0.561,-0.8479],[-0.5728,-0.8482],[-0.5846,-0.8482],[-0.5965,-0.8482],[-0.6083,-0.8482],[-0.6201,-0.8482],[-0.6319,-0.8482],[-0.6438,-0.8482],[-0.6556,-0.8482],[-0.6674,-0.8482],[-0.6793,-0.8482],[-0.6911,-0.8482],[-0.7029,-0.8482],[-0.7147,-0.8482],[-0.7266,-0.8482],[-0.7384,-0.8482],[-0.7502,-0.8482],[-0.762,-0.8482],[-0.7739,-0.8482],[-0.7857,-0.8482],[-0.7975,-0.8482],[-0.8093,-0.8482],[-0.8212,-0.8482],[-0.833,-0.8482],[-0.8448,-0.8482],[-0.8566,-0.8482],[-0.8685,-0.8482],[-0.8803,-0.8482],[-0.8921,-0.8482],[-0.904,-0.8482],[-0.9158,-0.8482],[-0.9276,-0.8482],[-0.9394,-0.8482],[-0.9513,-0.8482],[-0.9631,-0.8482],[-0.9749,-0.8482],[-0.9867,-0.8481],[-0.9976,-0.8445],[-1.0,-0.8331],[-0.9992,-0.8213],[-0.9986,-0.8095],[-0.9977,-0.7977],[-0.9958,-0.7861],[-0.9939,-0.7744],[-0.9919,-0.7627],[-0.9889,-0.7513],[-0.9868,-0.7396],[-0.9848,-0.728],[-0.9821,-0.7165],[-0.9793,-0.705],[-0.9759,-0.6937],[-0.9725,-0.6824],[-0.9685,-0.6712],[-0.964,-0.6603],[-0.9594,-0.6494],[-0.9546,-0.6386],[-0.9497,-0.6278],[-0.9444,-0.6173],[-0.9388,-0.6068],[-0.9334,-0.5963],[-0.9278,-0.5859],[-0.9215,-0.5759],[-0.9147,-0.5662],[-0.9077,-0.5567],[-0.9004,-0.5474],[-0.8928,-0.5383],[-0.8854,-0.5291],[-0.8778,-0.52],[-0.8699,-0.5112],[-0.8617,-0.5027],[-0.8535,-0.4942],[-0.845,-0.486],[-0.836,-0.4783],[-0.8268,-0.4708],[-0.8177,-0.4633],[-0.8087,-0.4556],[-0.7993,-0.4484],[-0.7896,-0.4417],[-0.7796,-0.4353],[-0.7696,-0.429],[-0.7599,-0.4223],[-0.75,-0.4158],[-0.7399,-0.4096],[-0.7297,-0.4037],[-0.7196,-0.3976],[-0.7093,-0.3918],[-0.6987,-0.3864],[-0.6882,-0.381],[-0.6778,-0.3755],[-0.6671,-0.3704],[-0.6561,-0.366],[-0.6453,-0.3613],[-0.6345,-0.3565],[-0.6235,-0.3521],[-0.6125,-0.3476],[-0.6015,-0.3434],[-0.5904,-0.3392],[-0.5792,-0.3354],[-0.5681,-0.3315],[-0.5568,-0.3279],[-0.5456,-0.324],[-0.5345,-0.3199],[-0.5233,-0.3163],[-0.512,-0.3129],[-0.5005,-0.3099],[-0.489,-0.3073],[-0.4775,-0.3044],[-0.4662,-0.3011],[-0.4548,-0.2977],[-0.4436,-0.2939],[-0.4321,-0.2912],[-0.4206,-0.2886],[-0.4089,-0.2866],[-0.3974,-0.2842],[-0.3857,-0.282],[-0.3742,-0.2795],[-0.3625,-0.2777],[-0.3509,-0.2753],[-0.3392,-0.2733],[-0.3277,-0.2708],[-0.3162,-0.268],[-0.3046,-0.2658],[-0.293,-0.2634],[-0.2813,-0.2618],[-0.2696,-0.2606],[-0.258,-0.2581],[-0.2462,-0.2568],[-0.2345,-0.2552],[-0.2229,-0.2529],[-0.2112,-0.252],[-0.1995,-0.2504],[-0.1879,-0.2481],[-0.1761,-0.2472],[-0.1644,-0.2455],[-0.153,-0.2422],[-0.1413,-0.2405],[-0.1296,-0.2395],[-0.1179,-0.2373],[-0.1062,-0.2358],[-0.0944,-0.2355],[-0.0826,-0.2344],[-0.071,-0.2322],[-0.0593,-0.231],[-0.0474,-0.2308],[-0.0356,-0.2301],[-0.024,-0.228],[-0.0123,-0.2264],[-0.0005,-0.2261],[0.0114,-0.2261],[0.0232,-0.2256],[0.0348,-0.2235],[0.0465,-0.2218],[0.0583,-0.2214],[0.0701,-0.2214],[0.082,-0.2213],[0.0937,-0.2201],[0.1051,-0.217],[0.1167,-0.2148],[0.1285,-0.2152],[0.1403,-0.2152],[0.1518,-0.2125],[0.1634,-0.2101],[0.1752,-0.2095],[0.187,-0.2089],[0.1986,-0.2068],[0.21,-0.2037],[0.2213,-0.2001]]};

function toShape(points) {
  const shape = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y)));
  shape.closePath();
  return shape;
}

// Smooth the curved side walls while keeping the edges between faces and sides crisp.
function creaseNormals(geo, creaseDeg = 40) {
  const pos = geo.attributes.position, n = pos.count, cos = Math.cos(THREE.MathUtils.degToRad(creaseDeg));
  const face = new Float32Array(n * 3);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), cb = new THREE.Vector3();
  for (let i = 0; i < n; i += 3) {
    a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, i + 1); c.fromBufferAttribute(pos, i + 2);
    cb.subVectors(c, b).cross(ab.subVectors(a, b)).normalize();
    for (let k = 0; k < 3; k++) face.set([cb.x, cb.y, cb.z], (i + k) * 3);
  }
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const key = Math.round(pos.getX(i) * 1e4) + ',' + Math.round(pos.getY(i) * 1e4) + ',' + Math.round(pos.getZ(i) * 1e4);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(i);
  }
  const out = new Float32Array(n * 3);
  for (const ids of groups.values()) {
    for (const i of ids) {
      let x = 0, y = 0, z = 0;
      for (const j of ids) {
        if (face[i * 3] * face[j * 3] + face[i * 3 + 1] * face[j * 3 + 1] + face[i * 3 + 2] * face[j * 3 + 2] >= cos) {
          x += face[j * 3]; y += face[j * 3 + 1]; z += face[j * 3 + 2];
        }
      }
      const len = Math.hypot(x, y, z) || 1;
      out[i * 3] = x / len; out[i * 3 + 1] = y / len; out[i * 3 + 2] = z / len;
    }
  }
  geo.setAttribute('normal', new THREE.BufferAttribute(out, 3));
  return geo;
}

function extrude(points, depth) {
  const geo = new THREE.ExtrudeGeometry(toShape(points), {
    depth, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.04, bevelSegments: 8, curveSegments: 6,
  });
  geo.translate(0, 0, -depth / 2);
  return creaseNormals(geo);
}

const BLUE = 0x168bcb, GREEN = 0x168a24, GRAPHITE = 0x111827, WHITE = 0xffffff;
// Colours measured from the approved emblem artwork (DIYIPATH_Standalone_Emblem.png), bottom to top.
const LOGO_BLUE = [[.125, 0x026abb], [.375, 0x0282df], [.625, 0x0290ec], [.875, 0x029ff5]];
const LOGO_GREEN = [[.125, 0x1c9f09], [.5, 0x39ba0b], [.875, 0x26ab14]];

// Paint the logo's own top-to-bottom shading onto a geometry as vertex colours.
function paint(geo, stops) {
  const pos = geo.attributes.position, n = pos.count;
  let min = Infinity, max = -Infinity;
  for (let i = 0; i < n; i++) { const y = pos.getY(i); if (y < min) min = y; if (y > max) max = y; }
  const cols = stops.map(([t, hex]) => [t, new THREE.Color(hex)]), out = new Float32Array(n * 3), c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const t = (pos.getY(i) - min) / (max - min || 1);
    let k = 0; while (k < cols.length - 2 && t > cols[k + 1][0]) k++;
    const [t0, c0] = cols[k], [t1, c1] = cols[k + 1];
    c.copy(c0).lerp(c1, clamp((t - t0) / (t1 - t0), 0, 1));
    out.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(out, 3));
  return geo;
}
const ease = { out: (t) => 1 - Math.pow(1 - t, 3), inOut: (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Centre line of the green road, used for the spark's route.
function roadLine(points) {
  const xs = points.map((p) => p[0]), min = Math.min(...xs), max = Math.max(...xs), N = 18, out = [];
  for (let i = 0; i <= N; i++) {
    const x0 = min + (max - min) * (i - .5) / N, x1 = min + (max - min) * (i + .5) / N;
    const ys = points.filter((p) => p[0] >= x0 && p[0] <= x1).map((p) => p[1]);
    if (ys.length) out.push(new THREE.Vector3(min + (max - min) * i / N, (Math.min(...ys) + Math.max(...ys)) / 2, 0));
  }
  return new THREE.CatmullRomCurve3(out);
}

// Small flat icons for the department tokens.
function iconShapes(kind) {
  const s = new THREE.Shape();
  if (kind === 'electrical') {
    [[.03, .13], [-.07, -.01], [0, -.01], [-.03, -.13], [.07, .01], [0, .01]].forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
    s.closePath(); return [s];
  }
  if (kind === 'bulb') {
    // glass: an arc over the top, narrowing into the neck
    s.moveTo(-.035, -.055); s.lineTo(-.035, -.025);
    s.absarc(0, .035, .0695, 4.1888, -1.0472, true);
    s.lineTo(.035, -.055); s.closePath();
    const cap = new THREE.Shape(); cap.moveTo(-.03, -.07); cap.lineTo(.03, -.07); cap.lineTo(.03, -.1); cap.lineTo(-.03, -.1); cap.closePath();
    return [s, cap];
  }
  if (kind === 'plant') {
    // pot, stem and two leaves
    s.moveTo(-.045, -.07); s.lineTo(.045, -.07); s.lineTo(.034, -.115); s.lineTo(-.034, -.115); s.closePath();
    const stem = new THREE.Shape(); stem.moveTo(-.008, -.07); stem.lineTo(.008, -.07); stem.lineTo(.008, .02); stem.lineTo(-.008, .02); stem.closePath();
    const left = new THREE.Shape(); left.moveTo(0, -.02); left.quadraticCurveTo(-.1, -.01, -.085, .085); left.quadraticCurveTo(-.01, .08, 0, -.02);
    const right = new THREE.Shape(); right.moveTo(0, .01); right.quadraticCurveTo(.1, .02, .09, .12); right.quadraticCurveTo(.01, .11, 0, .01);
    return [s, stem, left, right];
  }
  if (kind === 'plumbing') {
    s.moveTo(0, .12); s.bezierCurveTo(.03, .07, .08, .02, .08, -.03);
    s.absarc(0, -.03, .08, 0, Math.PI, true); s.bezierCurveTo(-.08, .02, -.03, .07, 0, .12); return [s];
  }
  if (kind === 'sanitary') {
    s.moveTo(-.12, .0); s.lineTo(.12, .0); s.lineTo(.1, -.07); s.quadraticCurveTo(.09, -.09, .06, -.09);
    s.lineTo(-.06, -.09); s.quadraticCurveTo(-.09, -.09, -.1, -.07); s.closePath();
    const tap = new THREE.Shape(); tap.moveTo(-.1, .0); tap.lineTo(-.1, .1); tap.lineTo(-.03, .1); tap.lineTo(-.03, .07); tap.lineTo(-.07, .07); tap.lineTo(-.07, .0); tap.closePath();
    return [s, tap];
  }
  // smart home: a house with a signal dot
  [[-.1, -.1], [.1, -.1], [.1, .02], [0, .11], [-.1, .02]].forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath(); const hole = new THREE.Path(); hole.absarc(0, -.02, .035, 0, Math.PI * 2, true); s.holes.push(hole); return [s];
}

export default function mountEmblem(host, { reducedMotion = false, open = true, onDepartment, label, tokens: showTokens = true } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power', preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.style.cursor = 'grab';
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0, 6.3);

  // Lighting follows the shop's hours: lively when open, a calmer "night" look when closed.
  const LIGHT = 2.6;
  const hemi = new THREE.HemisphereLight(WHITE, GRAPHITE, 1.0 * LIGHT);
  const key = new THREE.DirectionalLight(WHITE, .75 * LIGHT); key.position.set(-3.5, 4.5, 6);
  const fill = new THREE.DirectionalLight(WHITE, .3 * LIGHT); fill.position.set(4, -1.5, 4);
  const rim = new THREE.DirectionalLight(WHITE, open ? 1.0 : 1.6); rim.position.set(2, 3, -5);
  scene.add(hemi, key, fill, rim);
  const pace = open ? 1 : .6;

  const material = (glow) => new THREE.MeshPhysicalMaterial({ color: WHITE, vertexColors: true, roughness: .5, metalness: 0, specularIntensity: .15, clearcoat: .2, clearcoatRoughness: .3, emissive: glow, emissiveIntensity: 0 });
  const emblem = new THREE.Group();
  const blueMat = material(0x028be3);
  const blue = new THREE.Mesh(paint(extrude(SHAPES.blue, .34), LOGO_BLUE), blueMat);
  const green = new THREE.Mesh(paint(extrude(SHAPES.green, .42), LOGO_GREEN), material(0x2daf0c));
  green.material.color.setScalar(1.1); // the road shows more side wall, so lift it to match the artwork
  green.position.z = .05;
  emblem.add(blue, green);
  scene.add(emblem);

  // The spark that runs along the road (power on / charge).
  const road = roadLine(SHAPES.green);
  const spark = new THREE.Group();
  spark.add(new THREE.Mesh(new THREE.SphereGeometry(.05, 16, 12), new THREE.MeshBasicMaterial({ color: WHITE })));
  const sparkLight = new THREE.PointLight(WHITE, 0, 1.4); spark.add(sparkLight);
  spark.visible = false; spark.position.z = .3; green.add(spark);

  // Tokens orbiting the emblem: lightning (electrical), bulb (all products), house (smart home), plant (our path).
  const DEPTS = [['electrical', BLUE], ['bulb', GRAPHITE], ['smart', GRAPHITE], ['plant', GREEN]];
  const ring = new THREE.Group(); ring.rotation.x = .32; scene.add(ring); ring.visible = showTokens;
  const tokens = DEPTS.map(([dept, col], i) => {
    const holder = new THREE.Group(), face = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(.17, .17, .06, 40), new THREE.MeshPhysicalMaterial({ color: col, roughness: .4, clearcoat: .6 }));
    disc.rotation.x = Math.PI / 2;
    const icon = new THREE.Mesh(new THREE.ExtrudeGeometry(iconShapes(dept), { depth: .025, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: WHITE, roughness: .5 }));
    icon.position.z = .031;
    face.add(disc, icon); holder.add(face); ring.add(holder);
    disc.userData.dept = icon.userData.dept = dept;
    return { dept, holder, face, angle: i * Math.PI / 2, grow: 0, hover: 0, pick: [disc, icon] };
  });
  const pickables = tokens.flatMap((t) => t.pick);

  const resize = () => {
    const w = host.clientWidth || 1, h = host.clientHeight || 1;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); draw();
  };

  // ---- input: pointer tilt, drag to spin, tap (token or charge), hover to separate layers ----
  let tx = 0, ty = 0, gx = 0, gy = 0;
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    tx = (e.clientX / window.innerWidth - .5) * .6; ty = (e.clientY / window.innerHeight - .5) * .4;
  }, { passive: true });
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const hit = (e) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const t = ray.intersectObjects(pickables, false)[0];
    return t ? t.object.userData.dept : (ray.intersectObjects([blue, green], false).length ? 'emblem' : null);
  };
  let dragging = false, lastX = 0, downX = 0, downY = 0, downT = 0, spin = 0, vel = 0, over = false, hovered = null, askedGyro = false;
  canvas.addEventListener('pointerdown', (e) => {
    dragging = true; lastX = downX = e.clientX; downY = e.clientY; downT = performance.now(); vel = 0;
    canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; wake();
    if (!askedGyro && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      askedGyro = true; DeviceOrientationEvent.requestPermission().then((s) => { if (s === 'granted') listenGyro(); }).catch(() => {});
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (dragging) { const dx = e.clientX - lastX; lastX = e.clientX; vel = dx * .012; spin += vel; wake(); return; }
    if (e.pointerType === 'mouse') {
      hovered = hit(e);
      canvas.style.cursor = hovered && hovered !== 'emblem' ? 'pointer' : 'grab';
      host.title = hovered && hovered !== 'emblem' && label ? label(hovered) : '';
    }
  });
  const release = (e, cancelled) => {
    if (!dragging) return;
    dragging = false; canvas.style.cursor = 'grab';
    const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
    if (!cancelled && moved < 8 && performance.now() - downT < 450) {
      const what = hit(e);
      if (what && what !== 'emblem') { if (onDepartment) onDepartment(what); }
      else charge();
    }
  };
  canvas.addEventListener('pointerup', (e) => release(e, false));
  canvas.addEventListener('pointercancel', (e) => release(e, true));
  canvas.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { over = true; wake(); } });
  canvas.addEventListener('pointerleave', () => { over = false; hovered = null; host.title = ''; });

  // Phone tilt (Android straight away; iPhone after the first tap grants permission).
  function listenGyro() {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null) return;
      gx = clamp(e.gamma / 30, -1, 1) * .35; gy = clamp((e.beta - 40) / 30, -1, 1) * .2; wake();
    }, { passive: true });
  }
  if (window.matchMedia('(pointer: coarse)').matches && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission !== 'function') listenGyro();

  // ---- timed effects ----
  let now = 0, introStart = 0, sparkStart = -1, chargeStart = -1, flashStart = -1;
  const INTRO = reducedMotion ? 0 : 1.2;
  function runSpark(at) { sparkStart = at; flashStart = at + .9; }
  function charge() { if (reducedMotion) return; chargeStart = now; runSpark(now + .1); wake(); }

  // ---- animation loop ----
  const base = { y: -.32, x: .08 };
  emblem.rotation.set(base.x, base.y, 0);
  let rotY = base.y, rotX = base.x, explode = 0, orbit = 0, last = performance.now(), started = false;
  const draw = () => renderer.render(scene, camera);
  let running = false, visible = true;
  function frame(ts) {
    if (!running) return;
    const tnow = performance.now(), dt = clamp((tnow - last) / 1000, 0, .25); last = tnow; now += dt;
    if (!started) { started = true; introStart = now; if (!reducedMotion) runSpark(now + .8); }

    // intro: the flat logo grows into 3D, the road slides in
    const it = INTRO ? clamp((now - introStart) / INTRO, 0, 1) : 1;
    emblem.scale.z = .02 + .98 * ease.out(it);
    const roadIn = INTRO ? ease.out(clamp((now - introStart - .2) / .9, 0, 1)) : 1;

    // scroll reaction: turn and tilt as the hero scrolls away
    const r = host.getBoundingClientRect();
    const sp = clamp(-r.top / (r.height || 1), 0, 1);

    // idle sway + pointer/phone tilt, eased
    const idle = reducedMotion ? 0 : 1;
    const ty2 = base.y + Math.sin(now * .55 * pace) * .42 * idle + tx + gx + sp * .9 - (1 - it) * .6;
    const tx2 = base.x + Math.sin(now * .8 * pace) * .05 * idle + ty + gy + sp * .3;
    rotY += (ty2 - rotY) * .06; rotX += (tx2 - rotX) * .06;

    // drag spin with momentum, then glide back to face front
    if (!dragging) {
      spin += vel; vel *= .93;
      if (Math.abs(vel) < .002) { const front = Math.round(spin / (Math.PI * 2)) * Math.PI * 2; spin += (front - spin) * .05; }
    }
    // tap to charge: one quick full turn
    let chargeSpin = 0;
    if (chargeStart >= 0) { const c = clamp((now - chargeStart) / 1.1, 0, 1); chargeSpin = ease.inOut(c) * Math.PI * 2; if (c >= 1) chargeStart = -1; }
    emblem.rotation.set(rotX, rotY + spin + chargeSpin, 0);
    emblem.position.y = Math.sin(now * 1.1 * pace) * .05 * idle;

    // layers separate on hover or while dragging
    explode += (((over || dragging) ? 1 : 0) - explode) * .08;
    green.position.set(-.9 * (1 - roadIn) - .06 * explode, 0, .05 + .5 * explode);
    blue.position.z = -.14 * explode;

    // spark along the road, then the blue P lights up
    if (sparkStart >= 0 && now >= sparkStart) {
      const f = clamp((now - sparkStart) / 1.0, 0, 1);
      spark.visible = f < 1; spark.position.copy(road.getPoint(ease.inOut(f))); spark.position.z = .3;
      sparkLight.intensity = f < 1 ? 2.2 : 0;
      if (f >= 1) sparkStart = -1;
    }
    if (flashStart >= 0 && now >= flashStart) {
      const f = clamp((now - flashStart) / .9, 0, 1);
      blueMat.emissiveIntensity = Math.sin(f * Math.PI) * .45;
      if (f >= 1) { flashStart = -1; blueMat.emissiveIntensity = 0; }
    }

    // orbiting department tokens, always facing the viewer
    if (!reducedMotion) orbit += dt * .28 * pace;
    tokens.forEach((t, i) => {
      t.grow += ((now > INTRO + .6 + i * .15 || !INTRO ? 1 : 0) - t.grow) * .08;
      t.hover += ((hovered === t.dept ? 1 : 0) - t.hover) * .15;
      const a = t.angle + orbit;
      t.holder.position.set(Math.cos(a) * 1.3, 0, Math.sin(a) * 1.3);
      t.holder.quaternion.copy(ring.quaternion).invert();
      t.face.scale.setScalar(Math.max(.001, t.grow * (1 + t.hover * .25)));
    });

    draw();
    const settled = reducedMotion && tokens.every((t) => t.grow > .995 && t.hover < .01) && !dragging && Math.abs(vel) < .0005 && chargeStart < 0 && explode < .01 && Math.abs(spin - Math.round(spin / (Math.PI * 2)) * Math.PI * 2) < .001;
    if (settled) { running = false; return; }
    requestAnimationFrame(frame);
  }
  function wake() { if (visible && !document.hidden && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); } }
  const update = () => { if (visible && !document.hidden) wake(); else running = false; };
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }).observe(host);
  document.addEventListener('visibilitychange', update);
  window.addEventListener('scroll', () => { if (reducedMotion) wake(); }, { passive: true });
  new ResizeObserver(resize).observe(host);

  resize();
  host.classList.add('is-3d');
  update();
  return { renderer, draw: () => renderer.render(scene, camera) };
}
