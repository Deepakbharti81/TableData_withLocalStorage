LocalStorage Browser me Data ko Store karke rakhta hai, 
LocalStorage me Data 'json' format me save hota hai,
Object ko Json me convert karne ke liye json.stringify();


JSON.parse() का use करके उसे Javascript object या Arrray में convert किया जाता है,

जब भी हम localStorage में Data save करते हैं, तो हमें JSON.stringify() का use करके उसे string में बदलना पड़ता है। क्योंकि localStorage केवल string format में Data store कर सकता है।

**_?? [] (Nullish Coalescing Operator) ===============================_**

अगर JSON.parse(localStorage.getItem("city")) null (मतलब key नहीं मिली) है, तो यह खाली ऐरे [] Assign कर देगा।

इसका use तब किया जाता है जब हमें किसी value को null या undefined होने की स्थिति में defaultvalue देनी हो।

<!-- let result = value ?? defaultValue; -->
<!-- अगर value null या undefined है, तो defaultValue Assign हो जाएगा। -->