/*
function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

function shuffleArray(array) {
    return array.sort((a,b) => Math.random() - 0.5);
}

function getMultipleChoices(n, correctAnswer, array) {
    // Use a while loop and the getRandomElement() function
    // Make sure there are no duplicates in the array
    let i = 0;
    let choicesArray = [];
    while (i < n) {
        let choice = getRandomElement(array)
            if (choicesArray.includes(choice)){
                continue;
                
            }
        choicesArray[i] = choice;
        i++;
    }
    
    choicesArray.splice((choicesArray.length/2), 1, correctAnswer);
    return shuffleArray(choicesArray);
}

const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "germanshepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "germanlonghair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];

let result = getMultipleChoices(10, "retaj", BREEDS);
console.log(result);
*/
/*
function getBreedFromURL(url) {
    // The string method .split(char) may come in handy
    // Try to use destructuring as much as you can
    const urlArray = url.split("/");
    const [,,,,namePerURL] = urlArray;
    let name = "";
    if (namePerURL.includes("-")) {
        name = namePerURL.split("-").reverse().join(" ");
    }
    else {
        name = namePerURL;
    }
    return name;
}

const url = "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg";
const name = getBreedFromURL(url);
console.log(name);
*/

const RANDOM_IMG_ENDPOINT = "https://dog.ceo/api/breeds/image/random";
async function fetchMessage(url) {
    const response = await fetch(url);
    const {message} = await response.json();
    return message;
}

async function main() {
    const doggoImgUrl = await fetchMessage(RANDOM_IMG_ENDPOINT);
    console.log(doggoImgUrl);
}

main().catch(console.error); // Call main and catch any potential errors