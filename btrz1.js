/************** 
 * Btrz1 *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'btrz1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(preRoutineBegin());
flowScheduler.add(preRoutineEachFrame());
flowScheduler.add(preRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trial_list_mapping_1_block_1.csv', 'path': 'trial_list_mapping_1_block_1.csv'},
    {'name': 'WashingDishes.mp4', 'path': 'WashingDishes.mp4'},
    {'name': 'Sp009.jpg', 'path': 'Sp009.jpg'},
    {'name': 'GrassTrimmingII.mp4', 'path': 'GrassTrimmingII.mp4'},
    {'name': 'A127.jpg', 'path': 'A127.jpg'},
    {'name': 'HorseTrail.mp4', 'path': 'HorseTrail.mp4'},
    {'name': 'OASIS_I274.jpg', 'path': 'OASIS_I274.jpg'},
    {'name': 'Spinning.mp4', 'path': 'Spinning.mp4'},
    {'name': 'Sp075.jpg', 'path': 'Sp075.jpg'},
    {'name': 'ManBikeRiding.mp4', 'path': 'ManBikeRiding.mp4'},
    {'name': 'A042.jpg', 'path': 'A042.jpg'},
    {'name': 'Hairrollers.mp4', 'path': 'Hairrollers.mp4'},
    {'name': 'A123.jpg', 'path': 'A123.jpg'},
    {'name': 'WoodchoppingDog.mp4', 'path': 'WoodchoppingDog.mp4'},
    {'name': 'Sp020.jpg', 'path': 'Sp020.jpg'},
    {'name': 'HarmonicaStanding.mp4', 'path': 'HarmonicaStanding.mp4'},
    {'name': 'A011.jpg', 'path': 'A011.jpg'},
    {'name': 'WindowCleaner.mp4', 'path': 'WindowCleaner.mp4'},
    {'name': 'N092.bmp', 'path': 'N092.bmp'},
    {'name': 'Harmonica.mp4', 'path': 'Harmonica.mp4'},
    {'name': 'N040.bmp', 'path': 'N040.bmp'},
    {'name': 'PoolJumpingOutdoors.mp4', 'path': 'PoolJumpingOutdoors.mp4'},
    {'name': 'N017.bmp', 'path': 'N017.bmp'},
    {'name': 'GiftWrapping.mp4', 'path': 'GiftWrapping.mp4'},
    {'name': 'N031.bmp', 'path': 'N031.bmp'},
    {'name': 'WhaleWatching.mp4', 'path': 'WhaleWatching.mp4'},
    {'name': 'N082.bmp', 'path': 'N082.bmp'},
    {'name': 'Bicycle.mp4', 'path': 'Bicycle.mp4'},
    {'name': 'N020.bmp', 'path': 'N020.bmp'},
    {'name': 'CarDriving.mp4', 'path': 'CarDriving.mp4'},
    {'name': 'N004.bmp', 'path': 'N004.bmp'},
    {'name': 'HairdresserDonation.mp4', 'path': 'HairdresserDonation.mp4'},
    {'name': 'N047.bmp', 'path': 'N047.bmp'},
    {'name': 'GrandmaJumping.mp4', 'path': 'GrandmaJumping.mp4'},
    {'name': 'P077.jpg', 'path': 'P077.jpg'},
    {'name': 'WashingFace.mp4', 'path': 'WashingFace.mp4'},
    {'name': 'P081.jpg', 'path': 'P081.jpg'},
    {'name': 'GrassTrimming.mp4', 'path': 'GrassTrimming.mp4'},
    {'name': 'P113.jpg', 'path': 'P113.jpg'},
    {'name': 'Pipes.mp4', 'path': 'Pipes.mp4'},
    {'name': 'P122.jpg', 'path': 'P122.jpg'},
    {'name': 'Tennis.mp4', 'path': 'Tennis.mp4'},
    {'name': 'P078.jpg', 'path': 'P078.jpg'},
    {'name': 'PianoYanni.mp4', 'path': 'PianoYanni.mp4'},
    {'name': 'P099.jpg', 'path': 'P099.jpg'},
    {'name': 'CookingDadDaughter.mp4', 'path': 'CookingDadDaughter.mp4'},
    {'name': 'P079.jpg', 'path': 'P079.jpg'},
    {'name': 'BabyTeeth.mp4', 'path': 'BabyTeeth.mp4'},
    {'name': 'I132.jpg', 'path': 'I132.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var preClock;
var negative_pictures;
var neutral_pictures;
var positive_pictures;
var video_filenames;
var video_set_a;
var video_set_b;
var video_set_c;
var trial_list_mapping_1;
var trial_list_mapping_1_block_1;
var trial_list_mapping_1_block_2;
var trial_list_mapping_1_block_3;
var trial_list_mapping_2;
var trial_list_mapping_2_block_1;
var trial_list_mapping_2_block_2;
var trial_list_mapping_2_block_3;
var trial_list_mapping_3;
var trial_list_mapping_3_block_1;
var trial_list_mapping_3_block_2;
var trial_list_mapping_3_block_3;
var trialClock;
var image;
var movieClock;
var movie;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "pre"
  preClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  negative_pictures = ["A011.jpg", "A038.jpg", "A040.jpg", "A042.jpg", "A062.jpg", "A115.jpg", "A123.jpg", "A127.jpg", "I169.jpg", "OASIS_I166.jpg", "OASIS_I167.jpg", "OASIS_I22.jpg", "OASIS_I24.jpg", "OASIS_I273.jpg", "OASIS_I274.jpg", "OASIS_I281.jpg", "OASIS_I282.jpg", "Sn079.jpg", "Sp009.jpg", "Sp020.jpg", "Sp051.jpg", "Sp075.jpg", "Sp125.jpg", "Sp126.jpg"];
  neutral_pictures = ["N003.bmp", "N004.bmp", "N006.bmp", "N009.bmp", "N010.bmp", "N011.bmp", "N014.bmp", "N017.bmp", "N020.bmp", "N024.bmp", "N026.bmp", "N028.bmp", "N031.bmp", "N036.bmp", "N040.bmp", "N047.bmp", "N061.bmp", "N067.bmp", "N070.bmp", "N081.bmp", "N082.bmp", "N091.bmp", "N092.bmp", "N102.bmp"];
  positive_pictures = ["I132.jpg", "OASIS_I133.jpg", "OASIS_I134.jpg", "OASIS_I252.jpg", "OASIS_I254.jpg", "OASIS_I256.jpg", "P060.jpg", "P066.jpg", "P073.jpg", "P075.jpg", "P077.jpg", "P078.jpg", "P079.jpg", "P080.jpg", "P081.jpg", "P082.jpg", "P083.jpg", "P095.jpg", "P096.jpg", "P099.jpg", "P101.jpg", "P113.jpg", "P114.jpg", "P122.jpg"];
  video_filenames = ["BabyCooking.mp4", "BabyTeeth.mp4", "BabyTree.mp4", "Backflips.mp4", "Ballerina.mp4", "Ballett.mp4", "Basketball.mp4", "Beard.mp4", "Bicycle.mp4", "BicycleBoy.mp4", "Boysplaying.mp4", "Canoe.mp4", "CarDriving.mp4", "ChildHockey.mp4", "CityWalking.mp4", "CookingDadDaughter.mp4", "CookingMan.mp4", "CookingPumpkin.mp4", "CookingShow.mp4", "CookingShowII.mp4", "DancingGirl.mp4", "DancingGuy.mp4", "DiscusThrow.mp4", "DogWalking.mp4", "DrivingCar.mp4", "GiftWrapping.mp4", "GrandmaJumping.mp4", "GrassTrimming.mp4", "GrassTrimmingII.mp4", "GuySmoking.mp4", "GymnasticsChina.mp4", "HairMannequin.mp4", "HairStyling.mp4", "HairdresserDonation.mp4", "Hairrollers.mp4", "Harmonica.mp4", "HarmonicaStanding.mp4", "HighJump.mp4", "HorseRiding.mp4", "HorseTrail.mp4", "Interview.mp4", "KidswithDad.mp4", "MakeupArtist.mp4", "MakeupArtistGirl.mp4", "ManBikeRiding.mp4", "Motorbikes.mp4", "Nails.mp4", "PianoRecital.mp4", "PianoYanni.mp4", "Pipes.mp4", "PoolJumping.mp4", "PoolJumpingOutdoors.mp4", "RockClimbing.mp4", "RockClimbingII.mp4", "ShoeCleaning.mp4", "ShoeCleaningII.mp4", "SnowShovelling.mp4", "Spinning.mp4", "Tennis.mp4", "Vaccum.mp4", "WalkingDog.mp4", "WashingBedsheets.mp4", "WashingDishes.mp4", "WashingFace.mp4", "Weightlifing.mp4", "WhaleWatching.mp4", "WindowCleaner.mp4", "WindowCleanersCostumes.mp4", "WomanCooking.mp4", "WoodchoppingDog.mp4", "WoodchoppingSnow.mp4", "Woodpolishing.mp4"];
  Math.random.shuffle(negative_pictures);
  Math.random.shuffle(neutral_pictures);
  Math.random.shuffle(positive_pictures);
  Math.random.shuffle(video_filenames);
  video_set_a = video_filenames.slice(0, 24);
  video_set_b = video_filenames.slice(24, 48);
  video_set_c = video_filenames.slice(48, 72);
  trial_list_mapping_1 = [{"vid": video_set_a[0], "img": negative_pictures[0], "valence": "negative", "n": 1, "list": 1}, {"vid": video_set_a[1], "img": negative_pictures[1], "valence": "negative", "n": 2, "list": 1}, {"vid": video_set_a[2], "img": negative_pictures[2], "valence": "negative", "n": 3, "list": 1}, {"vid": video_set_a[3], "img": negative_pictures[3], "valence": "negative", "n": 4, "list": 1}, {"vid": video_set_a[4], "img": negative_pictures[4], "valence": "negative", "n": 5, "list": 1}, {"vid": video_set_a[5], "img": negative_pictures[5], "valence": "negative", "n": 6, "list": 1}, {"vid": video_set_a[6], "img": negative_pictures[6], "valence": "negative", "n": 7, "list": 1}, {"vid": video_set_a[7], "img": negative_pictures[7], "valence": "negative", "n": 8, "list": 1}, {"vid": video_set_a[8], "img": negative_pictures[8], "valence": "negative", "n": 9, "list": 1}, {"vid": video_set_a[9], "img": negative_pictures[9], "valence": "negative", "n": 10, "list": 1}, {"vid": video_set_a[10], "img": negative_pictures[10], "valence": "negative", "n": 11, "list": 1}, {"vid": video_set_a[11], "img": negative_pictures[11], "valence": "negative", "n": 12, "list": 1}, {"vid": video_set_a[12], "img": negative_pictures[12], "valence": "negative", "n": 13, "list": 1}, {"vid": video_set_a[13], "img": negative_pictures[13], "valence": "negative", "n": 14, "list": 1}, {"vid": video_set_a[14], "img": negative_pictures[14], "valence": "negative", "n": 15, "list": 1}, {"vid": video_set_a[15], "img": negative_pictures[15], "valence": "negative", "n": 16, "list": 1}, {"vid": video_set_a[16], "img": negative_pictures[16], "valence": "negative", "n": 17, "list": 1}, {"vid": video_set_a[17], "img": negative_pictures[17], "valence": "negative", "n": 18, "list": 1}, {"vid": video_set_a[18], "img": negative_pictures[18], "valence": "negative", "n": 19, "list": 1}, {"vid": video_set_a[19], "img": negative_pictures[19], "valence": "negative", "n": 20, "list": 1}, {"vid": video_set_a[20], "img": negative_pictures[20], "valence": "negative", "n": 21, "list": 1}, {"vid": video_set_a[21], "img": negative_pictures[21], "valence": "negative", "n": 22, "list": 1}, {"vid": video_set_a[22], "img": negative_pictures[22], "valence": "negative", "n": 23, "list": 1}, {"vid": video_set_a[23], "img": negative_pictures[23], "valence": "negative", "n": 24, "list": 1}, {"vid": video_set_b[0], "img": neutral_pictures[0], "valence": "neutral", "n": 25, "list": 1}, {"vid": video_set_b[1], "img": neutral_pictures[1], "valence": "neutral", "n": 26, "list": 1}, {"vid": video_set_b[2], "img": neutral_pictures[2], "valence": "neutral", "n": 27, "list": 1}, {"vid": video_set_b[3], "img": neutral_pictures[3], "valence": "neutral", "n": 28, "list": 1}, {"vid": video_set_b[4], "img": neutral_pictures[4], "valence": "neutral", "n": 29, "list": 1}, {"vid": video_set_b[5], "img": neutral_pictures[5], "valence": "neutral", "n": 30, "list": 1}, {"vid": video_set_b[6], "img": neutral_pictures[6], "valence": "neutral", "n": 31, "list": 1}, {"vid": video_set_b[7], "img": neutral_pictures[7], "valence": "neutral", "n": 32, "list": 1}, {"vid": video_set_b[8], "img": neutral_pictures[8], "valence": "neutral", "n": 33, "list": 1}, {"vid": video_set_b[9], "img": neutral_pictures[9], "valence": "neutral", "n": 34, "list": 1}, {"vid": video_set_b[10], "img": neutral_pictures[10], "valence": "neutral", "n": 35, "list": 1}, {"vid": video_set_b[11], "img": neutral_pictures[11], "valence": "neutral", "n": 36, "list": 1}, {"vid": video_set_b[12], "img": neutral_pictures[12], "valence": "neutral", "n": 37, "list": 1}, {"vid": video_set_b[13], "img": neutral_pictures[13], "valence": "neutral", "n": 38, "list": 1}, {"vid": video_set_b[14], "img": neutral_pictures[14], "valence": "neutral", "n": 39, "list": 1}, {"vid": video_set_b[15], "img": neutral_pictures[15], "valence": "neutral", "n": 40, "list": 1}, {"vid": video_set_b[16], "img": neutral_pictures[16], "valence": "neutral", "n": 41, "list": 1}, {"vid": video_set_b[17], "img": neutral_pictures[17], "valence": "neutral", "n": 42, "list": 1}, {"vid": video_set_b[18], "img": neutral_pictures[18], "valence": "neutral", "n": 43, "list": 1}, {"vid": video_set_b[19], "img": neutral_pictures[19], "valence": "neutral", "n": 44, "list": 1}, {"vid": video_set_b[20], "img": neutral_pictures[20], "valence": "neutral", "n": 45, "list": 1}, {"vid": video_set_b[21], "img": neutral_pictures[21], "valence": "neutral", "n": 46, "list": 1}, {"vid": video_set_b[22], "img": neutral_pictures[22], "valence": "neutral", "n": 47, "list": 1}, {"vid": video_set_b[23], "img": neutral_pictures[23], "valence": "neutral", "n": 48, "list": 1}, {"vid": video_set_c[0], "img": positive_pictures[0], "valence": "positive", "n": 49, "list": 1}, {"vid": video_set_c[1], "img": positive_pictures[1], "valence": "positive", "n": 50, "list": 1}, {"vid": video_set_c[2], "img": positive_pictures[2], "valence": "positive", "n": 51, "list": 1}, {"vid": video_set_c[3], "img": positive_pictures[3], "valence": "positive", "n": 52, "list": 1}, {"vid": video_set_c[4], "img": positive_pictures[4], "valence": "positive", "n": 53, "list": 1}, {"vid": video_set_c[5], "img": positive_pictures[5], "valence": "positive", "n": 54, "list": 1}, {"vid": video_set_c[6], "img": positive_pictures[6], "valence": "positive", "n": 55, "list": 1}, {"vid": video_set_c[7], "img": positive_pictures[7], "valence": "positive", "n": 56, "list": 1}, {"vid": video_set_c[8], "img": positive_pictures[8], "valence": "positive", "n": 57, "list": 1}, {"vid": video_set_c[9], "img": positive_pictures[9], "valence": "positive", "n": 58, "list": 1}, {"vid": video_set_c[10], "img": positive_pictures[10], "valence": "positive", "n": 59, "list": 1}, {"vid": video_set_c[11], "img": positive_pictures[11], "valence": "positive", "n": 60, "list": 1}, {"vid": video_set_c[12], "img": positive_pictures[12], "valence": "positive", "n": 61, "list": 1}, {"vid": video_set_c[13], "img": positive_pictures[13], "valence": "positive", "n": 62, "list": 1}, {"vid": video_set_c[14], "img": positive_pictures[14], "valence": "positive", "n": 63, "list": 1}, {"vid": video_set_c[15], "img": positive_pictures[15], "valence": "positive", "n": 64, "list": 1}, {"vid": video_set_c[16], "img": positive_pictures[16], "valence": "positive", "n": 65, "list": 1}, {"vid": video_set_c[17], "img": positive_pictures[17], "valence": "positive", "n": 66, "list": 1}, {"vid": video_set_c[18], "img": positive_pictures[18], "valence": "positive", "n": 67, "list": 1}, {"vid": video_set_c[19], "img": positive_pictures[19], "valence": "positive", "n": 68, "list": 1}, {"vid": video_set_c[20], "img": positive_pictures[20], "valence": "positive", "n": 69, "list": 1}, {"vid": video_set_c[21], "img": positive_pictures[21], "valence": "positive", "n": 70, "list": 1}, {"vid": video_set_c[22], "img": positive_pictures[22], "valence": "positive", "n": 71, "list": 1}, {"vid": video_set_c[23], "img": positive_pictures[23], "valence": "positive", "n": 72, "list": 1}];
  trial_list_mapping_1_block_1 = [{"vid": video_set_a[0], "img": negative_pictures[0], "valence": "negative", "n": 1, "list": 1}, {"vid": video_set_a[1], "img": negative_pictures[1], "valence": "negative", "n": 2, "list": 1}, {"vid": video_set_a[2], "img": negative_pictures[2], "valence": "negative", "n": 3, "list": 1}, {"vid": video_set_a[3], "img": negative_pictures[3], "valence": "negative", "n": 4, "list": 1}, {"vid": video_set_a[4], "img": negative_pictures[4], "valence": "negative", "n": 5, "list": 1}, {"vid": video_set_a[5], "img": negative_pictures[5], "valence": "negative", "n": 6, "list": 1}, {"vid": video_set_a[6], "img": negative_pictures[6], "valence": "negative", "n": 7, "list": 1}, {"vid": video_set_a[7], "img": negative_pictures[7], "valence": "negative", "n": 8, "list": 1}, {"vid": video_set_b[0], "img": neutral_pictures[0], "valence": "neutral", "n": 25, "list": 1}, {"vid": video_set_b[1], "img": neutral_pictures[1], "valence": "neutral", "n": 26, "list": 1}, {"vid": video_set_b[2], "img": neutral_pictures[2], "valence": "neutral", "n": 27, "list": 1}, {"vid": video_set_b[3], "img": neutral_pictures[3], "valence": "neutral", "n": 28, "list": 1}, {"vid": video_set_b[4], "img": neutral_pictures[4], "valence": "neutral", "n": 29, "list": 1}, {"vid": video_set_b[5], "img": neutral_pictures[5], "valence": "neutral", "n": 30, "list": 1}, {"vid": video_set_b[6], "img": neutral_pictures[6], "valence": "neutral", "n": 31, "list": 1}, {"vid": video_set_b[7], "img": neutral_pictures[7], "valence": "neutral", "n": 32, "list": 1}, {"vid": video_set_c[0], "img": positive_pictures[0], "valence": "positive", "n": 49, "list": 1}, {"vid": video_set_c[1], "img": positive_pictures[1], "valence": "positive", "n": 50, "list": 1}, {"vid": video_set_c[2], "img": positive_pictures[2], "valence": "positive", "n": 51, "list": 1}, {"vid": video_set_c[3], "img": positive_pictures[3], "valence": "positive", "n": 52, "list": 1}, {"vid": video_set_c[4], "img": positive_pictures[4], "valence": "positive", "n": 53, "list": 1}, {"vid": video_set_c[5], "img": positive_pictures[5], "valence": "positive", "n": 54, "list": 1}, {"vid": video_set_c[6], "img": positive_pictures[6], "valence": "positive", "n": 55, "list": 1}, {"vid": video_set_c[7], "img": positive_pictures[7], "valence": "positive", "n": 56, "list": 1}];
  trial_list_mapping_1_block_2 = [{"vid": video_set_a[8], "img": negative_pictures[8], "valence": "negative", "n": 9, "list": 1}, {"vid": video_set_a[9], "img": negative_pictures[9], "valence": "negative", "n": 10, "list": 1}, {"vid": video_set_a[10], "img": negative_pictures[10], "valence": "negative", "n": 11, "list": 1}, {"vid": video_set_a[11], "img": negative_pictures[11], "valence": "negative", "n": 12, "list": 1}, {"vid": video_set_a[12], "img": negative_pictures[12], "valence": "negative", "n": 13, "list": 1}, {"vid": video_set_a[13], "img": negative_pictures[13], "valence": "negative", "n": 14, "list": 1}, {"vid": video_set_a[14], "img": negative_pictures[14], "valence": "negative", "n": 15, "list": 1}, {"vid": video_set_a[15], "img": negative_pictures[15], "valence": "negative", "n": 16, "list": 1}, {"vid": video_set_b[8], "img": neutral_pictures[8], "valence": "neutral", "n": 33, "list": 1}, {"vid": video_set_b[9], "img": neutral_pictures[9], "valence": "neutral", "n": 34, "list": 1}, {"vid": video_set_b[10], "img": neutral_pictures[10], "valence": "neutral", "n": 35, "list": 1}, {"vid": video_set_b[11], "img": neutral_pictures[11], "valence": "neutral", "n": 36, "list": 1}, {"vid": video_set_b[12], "img": neutral_pictures[12], "valence": "neutral", "n": 37, "list": 1}, {"vid": video_set_b[13], "img": neutral_pictures[13], "valence": "neutral", "n": 38, "list": 1}, {"vid": video_set_b[14], "img": neutral_pictures[14], "valence": "neutral", "n": 39, "list": 1}, {"vid": video_set_b[15], "img": neutral_pictures[15], "valence": "neutral", "n": 40, "list": 1}, {"vid": video_set_c[8], "img": positive_pictures[8], "valence": "positive", "n": 57, "list": 1}, {"vid": video_set_c[9], "img": positive_pictures[9], "valence": "positive", "n": 58, "list": 1}, {"vid": video_set_c[10], "img": positive_pictures[10], "valence": "positive", "n": 59, "list": 1}, {"vid": video_set_c[11], "img": positive_pictures[11], "valence": "positive", "n": 60, "list": 1}, {"vid": video_set_c[12], "img": positive_pictures[12], "valence": "positive", "n": 61, "list": 1}, {"vid": video_set_c[13], "img": positive_pictures[13], "valence": "positive", "n": 62, "list": 1}, {"vid": video_set_c[14], "img": positive_pictures[14], "valence": "positive", "n": 63, "list": 1}, {"vid": video_set_c[15], "img": positive_pictures[15], "valence": "positive", "n": 64, "list": 1}];
  trial_list_mapping_1_block_3 = [{"vid": video_set_a[16], "img": negative_pictures[16], "valence": "negative", "n": 17, "list": 1}, {"vid": video_set_a[17], "img": negative_pictures[17], "valence": "negative", "n": 18, "list": 1}, {"vid": video_set_a[18], "img": negative_pictures[18], "valence": "negative", "n": 19, "list": 1}, {"vid": video_set_a[19], "img": negative_pictures[19], "valence": "negative", "n": 20, "list": 1}, {"vid": video_set_a[20], "img": negative_pictures[20], "valence": "negative", "n": 21, "list": 1}, {"vid": video_set_a[21], "img": negative_pictures[21], "valence": "negative", "n": 22, "list": 1}, {"vid": video_set_a[22], "img": negative_pictures[22], "valence": "negative", "n": 23, "list": 1}, {"vid": video_set_a[23], "img": negative_pictures[23], "valence": "negative", "n": 24, "list": 1}, {"vid": video_set_b[16], "img": neutral_pictures[16], "valence": "neutral", "n": 41, "list": 1}, {"vid": video_set_b[17], "img": neutral_pictures[17], "valence": "neutral", "n": 42, "list": 1}, {"vid": video_set_b[18], "img": neutral_pictures[18], "valence": "neutral", "n": 43, "list": 1}, {"vid": video_set_b[19], "img": neutral_pictures[19], "valence": "neutral", "n": 44, "list": 1}, {"vid": video_set_b[20], "img": neutral_pictures[20], "valence": "neutral", "n": 45, "list": 1}, {"vid": video_set_b[21], "img": neutral_pictures[21], "valence": "neutral", "n": 46, "list": 1}, {"vid": video_set_b[22], "img": neutral_pictures[22], "valence": "neutral", "n": 47, "list": 1}, {"vid": video_set_b[23], "img": neutral_pictures[23], "valence": "neutral", "n": 48, "list": 1}, {"vid": video_set_c[16], "img": positive_pictures[16], "valence": "positive", "n": 65, "list": 1}, {"vid": video_set_c[17], "img": positive_pictures[17], "valence": "positive", "n": 66, "list": 1}, {"vid": video_set_c[18], "img": positive_pictures[18], "valence": "positive", "n": 67, "list": 1}, {"vid": video_set_c[19], "img": positive_pictures[19], "valence": "positive", "n": 68, "list": 1}, {"vid": video_set_c[20], "img": positive_pictures[20], "valence": "positive", "n": 69, "list": 1}, {"vid": video_set_c[21], "img": positive_pictures[21], "valence": "positive", "n": 70, "list": 1}, {"vid": video_set_c[22], "img": positive_pictures[22], "valence": "positive", "n": 71, "list": 1}, {"vid": video_set_c[23], "img": positive_pictures[23], "valence": "positive", "n": 72, "list": 1}];
  trial_list_mapping_2 = [{"vid": video_set_a[0], "img": neutral_pictures[0], "valence": "neutral", "n": 1, "list": 2}, {"vid": video_set_a[1], "img": neutral_pictures[1], "valence": "neutral", "n": 2, "list": 2}, {"vid": video_set_a[2], "img": neutral_pictures[2], "valence": "neutral", "n": 3, "list": 2}, {"vid": video_set_a[3], "img": neutral_pictures[3], "valence": "neutral", "n": 4, "list": 2}, {"vid": video_set_a[4], "img": neutral_pictures[4], "valence": "neutral", "n": 5, "list": 2}, {"vid": video_set_a[5], "img": neutral_pictures[5], "valence": "neutral", "n": 6, "list": 2}, {"vid": video_set_a[6], "img": neutral_pictures[6], "valence": "neutral", "n": 7, "list": 2}, {"vid": video_set_a[7], "img": neutral_pictures[7], "valence": "neutral", "n": 8, "list": 2}, {"vid": video_set_a[8], "img": neutral_pictures[8], "valence": "neutral", "n": 9, "list": 2}, {"vid": video_set_a[9], "img": neutral_pictures[9], "valence": "neutral", "n": 10, "list": 2}, {"vid": video_set_a[10], "img": neutral_pictures[10], "valence": "neutral", "n": 11, "list": 2}, {"vid": video_set_a[11], "img": neutral_pictures[11], "valence": "neutral", "n": 12, "list": 2}, {"vid": video_set_a[12], "img": neutral_pictures[12], "valence": "neutral", "n": 13, "list": 2}, {"vid": video_set_a[13], "img": neutral_pictures[13], "valence": "neutral", "n": 14, "list": 2}, {"vid": video_set_a[14], "img": neutral_pictures[14], "valence": "neutral", "n": 15, "list": 2}, {"vid": video_set_a[15], "img": neutral_pictures[15], "valence": "neutral", "n": 16, "list": 2}, {"vid": video_set_a[16], "img": neutral_pictures[16], "valence": "neutral", "n": 17, "list": 2}, {"vid": video_set_a[17], "img": neutral_pictures[17], "valence": "neutral", "n": 18, "list": 2}, {"vid": video_set_a[18], "img": neutral_pictures[18], "valence": "neutral", "n": 19, "list": 2}, {"vid": video_set_a[19], "img": neutral_pictures[19], "valence": "neutral", "n": 20, "list": 2}, {"vid": video_set_a[20], "img": neutral_pictures[20], "valence": "neutral", "n": 21, "list": 2}, {"vid": video_set_a[21], "img": neutral_pictures[21], "valence": "neutral", "n": 22, "list": 2}, {"vid": video_set_a[22], "img": neutral_pictures[22], "valence": "neutral", "n": 23, "list": 2}, {"vid": video_set_a[23], "img": neutral_pictures[23], "valence": "neutral", "n": 24, "list": 2}, {"vid": video_set_b[0], "img": positive_pictures[0], "valence": "positive", "n": 25, "list": 2}, {"vid": video_set_b[1], "img": positive_pictures[1], "valence": "positive", "n": 26, "list": 2}, {"vid": video_set_b[2], "img": positive_pictures[2], "valence": "positive", "n": 27, "list": 2}, {"vid": video_set_b[3], "img": positive_pictures[3], "valence": "positive", "n": 28, "list": 2}, {"vid": video_set_b[4], "img": positive_pictures[4], "valence": "positive", "n": 29, "list": 2}, {"vid": video_set_b[5], "img": positive_pictures[5], "valence": "positive", "n": 30, "list": 2}, {"vid": video_set_b[6], "img": positive_pictures[6], "valence": "positive", "n": 31, "list": 2}, {"vid": video_set_b[7], "img": positive_pictures[7], "valence": "positive", "n": 32, "list": 2}, {"vid": video_set_b[8], "img": positive_pictures[8], "valence": "positive", "n": 33, "list": 2}, {"vid": video_set_b[9], "img": positive_pictures[9], "valence": "positive", "n": 34, "list": 2}, {"vid": video_set_b[10], "img": positive_pictures[10], "valence": "positive", "n": 35, "list": 2}, {"vid": video_set_b[11], "img": positive_pictures[11], "valence": "positive", "n": 36, "list": 2}, {"vid": video_set_b[12], "img": positive_pictures[12], "valence": "positive", "n": 37, "list": 2}, {"vid": video_set_b[13], "img": positive_pictures[13], "valence": "positive", "n": 38, "list": 2}, {"vid": video_set_b[14], "img": positive_pictures[14], "valence": "positive", "n": 39, "list": 2}, {"vid": video_set_b[15], "img": positive_pictures[15], "valence": "positive", "n": 40, "list": 2}, {"vid": video_set_b[16], "img": positive_pictures[16], "valence": "positive", "n": 41, "list": 2}, {"vid": video_set_b[17], "img": positive_pictures[17], "valence": "positive", "n": 42, "list": 2}, {"vid": video_set_b[18], "img": positive_pictures[18], "valence": "positive", "n": 43, "list": 2}, {"vid": video_set_b[19], "img": positive_pictures[19], "valence": "positive", "n": 44, "list": 2}, {"vid": video_set_b[20], "img": positive_pictures[20], "valence": "positive", "n": 45, "list": 2}, {"vid": video_set_b[21], "img": positive_pictures[21], "valence": "positive", "n": 46, "list": 2}, {"vid": video_set_b[22], "img": positive_pictures[22], "valence": "positive", "n": 47, "list": 2}, {"vid": video_set_b[23], "img": positive_pictures[23], "valence": "positive", "n": 48, "list": 2}, {"vid": video_set_c[0], "img": negative_pictures[0], "valence": "negative", "n": 49, "list": 2}, {"vid": video_set_c[1], "img": negative_pictures[1], "valence": "negative", "n": 50, "list": 2}, {"vid": video_set_c[2], "img": negative_pictures[2], "valence": "negative", "n": 51, "list": 2}, {"vid": video_set_c[3], "img": negative_pictures[3], "valence": "negative", "n": 52, "list": 2}, {"vid": video_set_c[4], "img": negative_pictures[4], "valence": "negative", "n": 53, "list": 2}, {"vid": video_set_c[5], "img": negative_pictures[5], "valence": "negative", "n": 54, "list": 2}, {"vid": video_set_c[6], "img": negative_pictures[6], "valence": "negative", "n": 55, "list": 2}, {"vid": video_set_c[7], "img": negative_pictures[7], "valence": "negative", "n": 56, "list": 2}, {"vid": video_set_c[8], "img": negative_pictures[8], "valence": "negative", "n": 57, "list": 2}, {"vid": video_set_c[9], "img": negative_pictures[9], "valence": "negative", "n": 58, "list": 2}, {"vid": video_set_c[10], "img": negative_pictures[10], "valence": "negative", "n": 59, "list": 2}, {"vid": video_set_c[11], "img": negative_pictures[11], "valence": "negative", "n": 60, "list": 2}, {"vid": video_set_c[12], "img": negative_pictures[12], "valence": "negative", "n": 61, "list": 2}, {"vid": video_set_c[13], "img": negative_pictures[13], "valence": "negative", "n": 62, "list": 2}, {"vid": video_set_c[14], "img": negative_pictures[14], "valence": "negative", "n": 63, "list": 2}, {"vid": video_set_c[15], "img": negative_pictures[15], "valence": "negative", "n": 64, "list": 2}, {"vid": video_set_c[16], "img": negative_pictures[16], "valence": "negative", "n": 65, "list": 2}, {"vid": video_set_c[17], "img": negative_pictures[17], "valence": "negative", "n": 66, "list": 2}, {"vid": video_set_c[18], "img": negative_pictures[18], "valence": "negative", "n": 67, "list": 2}, {"vid": video_set_c[19], "img": negative_pictures[19], "valence": "negative", "n": 68, "list": 2}, {"vid": video_set_c[20], "img": negative_pictures[20], "valence": "negative", "n": 69, "list": 2}, {"vid": video_set_c[21], "img": negative_pictures[21], "valence": "negative", "n": 70, "list": 2}, {"vid": video_set_c[22], "img": negative_pictures[22], "valence": "negative", "n": 71, "list": 2}, {"vid": video_set_c[23], "img": negative_pictures[23], "valence": "negative", "n": 72, "list": 2}];
  trial_list_mapping_2_block_1 = [{"vid": video_set_a[0], "img": neutral_pictures[0], "valence": "neutral", "n": 1, "list": 2}, {"vid": video_set_a[1], "img": neutral_pictures[1], "valence": "neutral", "n": 2, "list": 2}, {"vid": video_set_a[2], "img": neutral_pictures[2], "valence": "neutral", "n": 3, "list": 2}, {"vid": video_set_a[3], "img": neutral_pictures[3], "valence": "neutral", "n": 4, "list": 2}, {"vid": video_set_a[4], "img": neutral_pictures[4], "valence": "neutral", "n": 5, "list": 2}, {"vid": video_set_a[5], "img": neutral_pictures[5], "valence": "neutral", "n": 6, "list": 2}, {"vid": video_set_a[6], "img": neutral_pictures[6], "valence": "neutral", "n": 7, "list": 2}, {"vid": video_set_a[7], "img": neutral_pictures[7], "valence": "neutral", "n": 8, "list": 2}, {"vid": video_set_b[0], "img": positive_pictures[0], "valence": "positive", "n": 25, "list": 2}, {"vid": video_set_b[1], "img": positive_pictures[1], "valence": "positive", "n": 26, "list": 2}, {"vid": video_set_b[2], "img": positive_pictures[2], "valence": "positive", "n": 27, "list": 2}, {"vid": video_set_b[3], "img": positive_pictures[3], "valence": "positive", "n": 28, "list": 2}, {"vid": video_set_b[4], "img": positive_pictures[4], "valence": "positive", "n": 29, "list": 2}, {"vid": video_set_b[5], "img": positive_pictures[5], "valence": "positive", "n": 30, "list": 2}, {"vid": video_set_b[6], "img": positive_pictures[6], "valence": "positive", "n": 31, "list": 2}, {"vid": video_set_b[7], "img": positive_pictures[7], "valence": "positive", "n": 32, "list": 2}, {"vid": video_set_c[0], "img": negative_pictures[0], "valence": "negative", "n": 49, "list": 2}, {"vid": video_set_c[1], "img": negative_pictures[1], "valence": "negative", "n": 50, "list": 2}, {"vid": video_set_c[2], "img": negative_pictures[2], "valence": "negative", "n": 51, "list": 2}, {"vid": video_set_c[3], "img": negative_pictures[3], "valence": "negative", "n": 52, "list": 2}, {"vid": video_set_c[4], "img": negative_pictures[4], "valence": "negative", "n": 53, "list": 2}, {"vid": video_set_c[5], "img": negative_pictures[5], "valence": "negative", "n": 54, "list": 2}, {"vid": video_set_c[6], "img": negative_pictures[6], "valence": "negative", "n": 55, "list": 2}, {"vid": video_set_c[7], "img": negative_pictures[7], "valence": "negative", "n": 56, "list": 2}];
  trial_list_mapping_2_block_2 = [{"vid": video_set_a[8], "img": neutral_pictures[8], "valence": "neutral", "n": 9, "list": 2}, {"vid": video_set_a[9], "img": neutral_pictures[9], "valence": "neutral", "n": 10, "list": 2}, {"vid": video_set_a[10], "img": neutral_pictures[10], "valence": "neutral", "n": 11, "list": 2}, {"vid": video_set_a[11], "img": neutral_pictures[11], "valence": "neutral", "n": 12, "list": 2}, {"vid": video_set_a[12], "img": neutral_pictures[12], "valence": "neutral", "n": 13, "list": 2}, {"vid": video_set_a[13], "img": neutral_pictures[13], "valence": "neutral", "n": 14, "list": 2}, {"vid": video_set_a[14], "img": neutral_pictures[14], "valence": "neutral", "n": 15, "list": 2}, {"vid": video_set_a[15], "img": neutral_pictures[15], "valence": "neutral", "n": 16, "list": 2}, {"vid": video_set_b[8], "img": positive_pictures[8], "valence": "positive", "n": 33, "list": 2}, {"vid": video_set_b[9], "img": positive_pictures[9], "valence": "positive", "n": 34, "list": 2}, {"vid": video_set_b[10], "img": positive_pictures[10], "valence": "positive", "n": 35, "list": 2}, {"vid": video_set_b[11], "img": positive_pictures[11], "valence": "positive", "n": 36, "list": 2}, {"vid": video_set_b[12], "img": positive_pictures[12], "valence": "positive", "n": 37, "list": 2}, {"vid": video_set_b[13], "img": positive_pictures[13], "valence": "positive", "n": 38, "list": 2}, {"vid": video_set_b[14], "img": positive_pictures[14], "valence": "positive", "n": 39, "list": 2}, {"vid": video_set_b[15], "img": positive_pictures[15], "valence": "positive", "n": 40, "list": 2}, {"vid": video_set_c[8], "img": negative_pictures[8], "valence": "negative", "n": 57, "list": 2}, {"vid": video_set_c[9], "img": negative_pictures[9], "valence": "negative", "n": 58, "list": 2}, {"vid": video_set_c[10], "img": negative_pictures[10], "valence": "negative", "n": 59, "list": 2}, {"vid": video_set_c[11], "img": negative_pictures[11], "valence": "negative", "n": 60, "list": 2}, {"vid": video_set_c[12], "img": negative_pictures[12], "valence": "negative", "n": 61, "list": 2}, {"vid": video_set_c[13], "img": negative_pictures[13], "valence": "negative", "n": 62, "list": 2}, {"vid": video_set_c[14], "img": negative_pictures[14], "valence": "negative", "n": 63, "list": 2}, {"vid": video_set_c[15], "img": negative_pictures[15], "valence": "negative", "n": 64, "list": 2}];
  trial_list_mapping_2_block_3 = [{"vid": video_set_a[16], "img": neutral_pictures[16], "valence": "neutral", "n": 17, "list": 2}, {"vid": video_set_a[17], "img": neutral_pictures[17], "valence": "neutral", "n": 18, "list": 2}, {"vid": video_set_a[18], "img": neutral_pictures[18], "valence": "neutral", "n": 19, "list": 2}, {"vid": video_set_a[19], "img": neutral_pictures[19], "valence": "neutral", "n": 20, "list": 2}, {"vid": video_set_a[20], "img": neutral_pictures[20], "valence": "neutral", "n": 21, "list": 2}, {"vid": video_set_a[21], "img": neutral_pictures[21], "valence": "neutral", "n": 22, "list": 2}, {"vid": video_set_a[22], "img": neutral_pictures[22], "valence": "neutral", "n": 23, "list": 2}, {"vid": video_set_a[23], "img": neutral_pictures[23], "valence": "neutral", "n": 24, "list": 2}, {"vid": video_set_b[16], "img": positive_pictures[16], "valence": "positive", "n": 41, "list": 2}, {"vid": video_set_b[17], "img": positive_pictures[17], "valence": "positive", "n": 42, "list": 2}, {"vid": video_set_b[18], "img": positive_pictures[18], "valence": "positive", "n": 43, "list": 2}, {"vid": video_set_b[19], "img": positive_pictures[19], "valence": "positive", "n": 44, "list": 2}, {"vid": video_set_b[20], "img": positive_pictures[20], "valence": "positive", "n": 45, "list": 2}, {"vid": video_set_b[21], "img": positive_pictures[21], "valence": "positive", "n": 46, "list": 2}, {"vid": video_set_b[22], "img": positive_pictures[22], "valence": "positive", "n": 47, "list": 2}, {"vid": video_set_b[23], "img": positive_pictures[23], "valence": "positive", "n": 48, "list": 2}, {"vid": video_set_c[16], "img": negative_pictures[16], "valence": "negative", "n": 65, "list": 2}, {"vid": video_set_c[17], "img": negative_pictures[17], "valence": "negative", "n": 66, "list": 2}, {"vid": video_set_c[18], "img": negative_pictures[18], "valence": "negative", "n": 67, "list": 2}, {"vid": video_set_c[19], "img": negative_pictures[19], "valence": "negative", "n": 68, "list": 2}, {"vid": video_set_c[20], "img": negative_pictures[20], "valence": "negative", "n": 69, "list": 2}, {"vid": video_set_c[21], "img": negative_pictures[21], "valence": "negative", "n": 70, "list": 2}, {"vid": video_set_c[22], "img": negative_pictures[22], "valence": "negative", "n": 71, "list": 2}, {"vid": video_set_c[23], "img": negative_pictures[23], "valence": "negative", "n": 72, "list": 2}];
  trial_list_mapping_3 = [{"vid": video_set_a[0], "img": positive_pictures[0], "valence": "positive", "n": 1, "list": 3}, {"vid": video_set_a[1], "img": positive_pictures[1], "valence": "positive", "n": 2, "list": 3}, {"vid": video_set_a[2], "img": positive_pictures[2], "valence": "positive", "n": 3, "list": 3}, {"vid": video_set_a[3], "img": positive_pictures[3], "valence": "positive", "n": 4, "list": 3}, {"vid": video_set_a[4], "img": positive_pictures[4], "valence": "positive", "n": 5, "list": 3}, {"vid": video_set_a[5], "img": positive_pictures[5], "valence": "positive", "n": 6, "list": 3}, {"vid": video_set_a[6], "img": positive_pictures[6], "valence": "positive", "n": 7, "list": 3}, {"vid": video_set_a[7], "img": positive_pictures[7], "valence": "positive", "n": 8, "list": 3}, {"vid": video_set_a[8], "img": positive_pictures[8], "valence": "positive", "n": 9, "list": 3}, {"vid": video_set_a[9], "img": positive_pictures[9], "valence": "positive", "n": 10, "list": 3}, {"vid": video_set_a[10], "img": positive_pictures[10], "valence": "positive", "n": 11, "list": 3}, {"vid": video_set_a[11], "img": positive_pictures[11], "valence": "positive", "n": 12, "list": 3}, {"vid": video_set_a[12], "img": positive_pictures[12], "valence": "positive", "n": 13, "list": 3}, {"vid": video_set_a[13], "img": positive_pictures[13], "valence": "positive", "n": 14, "list": 3}, {"vid": video_set_a[14], "img": positive_pictures[14], "valence": "positive", "n": 15, "list": 3}, {"vid": video_set_a[15], "img": positive_pictures[15], "valence": "positive", "n": 16, "list": 3}, {"vid": video_set_a[16], "img": positive_pictures[16], "valence": "positive", "n": 17, "list": 3}, {"vid": video_set_a[17], "img": positive_pictures[17], "valence": "positive", "n": 18, "list": 3}, {"vid": video_set_a[18], "img": positive_pictures[18], "valence": "positive", "n": 19, "list": 3}, {"vid": video_set_a[19], "img": positive_pictures[19], "valence": "positive", "n": 20, "list": 3}, {"vid": video_set_a[20], "img": positive_pictures[20], "valence": "positive", "n": 21, "list": 3}, {"vid": video_set_a[21], "img": positive_pictures[21], "valence": "positive", "n": 22, "list": 3}, {"vid": video_set_a[22], "img": positive_pictures[22], "valence": "positive", "n": 23, "list": 3}, {"vid": video_set_a[23], "img": positive_pictures[23], "valence": "positive", "n": 24, "list": 3}, {"vid": video_set_b[0], "img": negative_pictures[0], "valence": "negative", "n": 25, "list": 3}, {"vid": video_set_b[1], "img": negative_pictures[1], "valence": "negative", "n": 26, "list": 3}, {"vid": video_set_b[2], "img": negative_pictures[2], "valence": "negative", "n": 27, "list": 3}, {"vid": video_set_b[3], "img": negative_pictures[3], "valence": "negative", "n": 28, "list": 3}, {"vid": video_set_b[4], "img": negative_pictures[4], "valence": "negative", "n": 29, "list": 3}, {"vid": video_set_b[5], "img": negative_pictures[5], "valence": "negative", "n": 30, "list": 3}, {"vid": video_set_b[6], "img": negative_pictures[6], "valence": "negative", "n": 31, "list": 3}, {"vid": video_set_b[7], "img": negative_pictures[7], "valence": "negative", "n": 32, "list": 3}, {"vid": video_set_b[8], "img": negative_pictures[8], "valence": "negative", "n": 33, "list": 3}, {"vid": video_set_b[9], "img": negative_pictures[9], "valence": "negative", "n": 34, "list": 3}, {"vid": video_set_b[10], "img": negative_pictures[10], "valence": "negative", "n": 35, "list": 3}, {"vid": video_set_b[11], "img": negative_pictures[11], "valence": "negative", "n": 36, "list": 3}, {"vid": video_set_b[12], "img": negative_pictures[12], "valence": "negative", "n": 37, "list": 3}, {"vid": video_set_b[13], "img": negative_pictures[13], "valence": "negative", "n": 38, "list": 3}, {"vid": video_set_b[14], "img": negative_pictures[14], "valence": "negative", "n": 39, "list": 3}, {"vid": video_set_b[15], "img": negative_pictures[15], "valence": "negative", "n": 40, "list": 3}, {"vid": video_set_b[16], "img": negative_pictures[16], "valence": "negative", "n": 41, "list": 3}, {"vid": video_set_b[17], "img": negative_pictures[17], "valence": "negative", "n": 42, "list": 3}, {"vid": video_set_b[18], "img": negative_pictures[18], "valence": "negative", "n": 43, "list": 3}, {"vid": video_set_b[19], "img": negative_pictures[19], "valence": "negative", "n": 44, "list": 3}, {"vid": video_set_b[20], "img": negative_pictures[20], "valence": "negative", "n": 45, "list": 3}, {"vid": video_set_b[21], "img": negative_pictures[21], "valence": "negative", "n": 46, "list": 3}, {"vid": video_set_b[22], "img": negative_pictures[22], "valence": "negative", "n": 47, "list": 3}, {"vid": video_set_b[23], "img": negative_pictures[23], "valence": "negative", "n": 48, "list": 3}, {"vid": video_set_c[0], "img": neutral_pictures[0], "valence": "neutral", "n": 49, "list": 3}, {"vid": video_set_c[1], "img": neutral_pictures[1], "valence": "neutral", "n": 50, "list": 3}, {"vid": video_set_c[2], "img": neutral_pictures[2], "valence": "neutral", "n": 51, "list": 3}, {"vid": video_set_c[3], "img": neutral_pictures[3], "valence": "neutral", "n": 52, "list": 3}, {"vid": video_set_c[4], "img": neutral_pictures[4], "valence": "neutral", "n": 53, "list": 3}, {"vid": video_set_c[5], "img": neutral_pictures[5], "valence": "neutral", "n": 54, "list": 3}, {"vid": video_set_c[6], "img": neutral_pictures[6], "valence": "neutral", "n": 55, "list": 3}, {"vid": video_set_c[7], "img": neutral_pictures[7], "valence": "neutral", "n": 56, "list": 3}, {"vid": video_set_c[8], "img": neutral_pictures[8], "valence": "neutral", "n": 57, "list": 3}, {"vid": video_set_c[9], "img": neutral_pictures[9], "valence": "neutral", "n": 58, "list": 3}, {"vid": video_set_c[10], "img": neutral_pictures[10], "valence": "neutral", "n": 59, "list": 3}, {"vid": video_set_c[11], "img": neutral_pictures[11], "valence": "neutral", "n": 60, "list": 3}, {"vid": video_set_c[12], "img": neutral_pictures[12], "valence": "neutral", "n": 61, "list": 3}, {"vid": video_set_c[13], "img": neutral_pictures[13], "valence": "neutral", "n": 62, "list": 3}, {"vid": video_set_c[14], "img": neutral_pictures[14], "valence": "neutral", "n": 63, "list": 3}, {"vid": video_set_c[15], "img": neutral_pictures[15], "valence": "neutral", "n": 64, "list": 3}, {"vid": video_set_c[16], "img": neutral_pictures[16], "valence": "neutral", "n": 65, "list": 3}, {"vid": video_set_c[17], "img": neutral_pictures[17], "valence": "neutral", "n": 66, "list": 3}, {"vid": video_set_c[18], "img": neutral_pictures[18], "valence": "neutral", "n": 67, "list": 3}, {"vid": video_set_c[19], "img": neutral_pictures[19], "valence": "neutral", "n": 68, "list": 3}, {"vid": video_set_c[20], "img": neutral_pictures[20], "valence": "neutral", "n": 69, "list": 3}, {"vid": video_set_c[21], "img": neutral_pictures[21], "valence": "neutral", "n": 70, "list": 3}, {"vid": video_set_c[22], "img": neutral_pictures[22], "valence": "neutral", "n": 71, "list": 3}, {"vid": video_set_c[23], "img": neutral_pictures[23], "valence": "neutral", "n": 72, "list": 3}];
  trial_list_mapping_3_block_1 = [{"vid": video_set_a[0], "img": positive_pictures[0], "valence": "positive", "n": 1, "list": 3}, {"vid": video_set_a[1], "img": positive_pictures[1], "valence": "positive", "n": 2, "list": 3}, {"vid": video_set_a[2], "img": positive_pictures[2], "valence": "positive", "n": 3, "list": 3}, {"vid": video_set_a[3], "img": positive_pictures[3], "valence": "positive", "n": 4, "list": 3}, {"vid": video_set_a[4], "img": positive_pictures[4], "valence": "positive", "n": 5, "list": 3}, {"vid": video_set_a[5], "img": positive_pictures[5], "valence": "positive", "n": 6, "list": 3}, {"vid": video_set_a[6], "img": positive_pictures[6], "valence": "positive", "n": 7, "list": 3}, {"vid": video_set_a[7], "img": positive_pictures[7], "valence": "positive", "n": 8, "list": 3}, {"vid": video_set_b[0], "img": negative_pictures[0], "valence": "negative", "n": 25, "list": 3}, {"vid": video_set_b[1], "img": negative_pictures[1], "valence": "negative", "n": 26, "list": 3}, {"vid": video_set_b[2], "img": negative_pictures[2], "valence": "negative", "n": 27, "list": 3}, {"vid": video_set_b[3], "img": negative_pictures[3], "valence": "negative", "n": 28, "list": 3}, {"vid": video_set_b[4], "img": negative_pictures[4], "valence": "negative", "n": 29, "list": 3}, {"vid": video_set_b[5], "img": negative_pictures[5], "valence": "negative", "n": 30, "list": 3}, {"vid": video_set_b[6], "img": negative_pictures[6], "valence": "negative", "n": 31, "list": 3}, {"vid": video_set_b[7], "img": negative_pictures[7], "valence": "negative", "n": 32, "list": 3}, {"vid": video_set_c[0], "img": neutral_pictures[0], "valence": "neutral", "n": 49, "list": 3}, {"vid": video_set_c[1], "img": neutral_pictures[1], "valence": "neutral", "n": 50, "list": 3}, {"vid": video_set_c[2], "img": neutral_pictures[2], "valence": "neutral", "n": 51, "list": 3}, {"vid": video_set_c[3], "img": neutral_pictures[3], "valence": "neutral", "n": 52, "list": 3}, {"vid": video_set_c[4], "img": neutral_pictures[4], "valence": "neutral", "n": 53, "list": 3}, {"vid": video_set_c[5], "img": neutral_pictures[5], "valence": "neutral", "n": 54, "list": 3}, {"vid": video_set_c[6], "img": neutral_pictures[6], "valence": "neutral", "n": 55, "list": 3}, {"vid": video_set_c[7], "img": neutral_pictures[7], "valence": "neutral", "n": 56, "list": 3}];
  trial_list_mapping_3_block_2 = [{"vid": video_set_a[8], "img": positive_pictures[8], "valence": "positive", "n": 9, "list": 3}, {"vid": video_set_a[9], "img": positive_pictures[9], "valence": "positive", "n": 10, "list": 3}, {"vid": video_set_a[10], "img": positive_pictures[10], "valence": "positive", "n": 11, "list": 3}, {"vid": video_set_a[11], "img": positive_pictures[11], "valence": "positive", "n": 12, "list": 3}, {"vid": video_set_a[12], "img": positive_pictures[12], "valence": "positive", "n": 13, "list": 3}, {"vid": video_set_a[13], "img": positive_pictures[13], "valence": "positive", "n": 14, "list": 3}, {"vid": video_set_a[14], "img": positive_pictures[14], "valence": "positive", "n": 15, "list": 3}, {"vid": video_set_a[15], "img": positive_pictures[15], "valence": "positive", "n": 16, "list": 3}, {"vid": video_set_b[8], "img": negative_pictures[8], "valence": "negative", "n": 33, "list": 3}, {"vid": video_set_b[9], "img": negative_pictures[9], "valence": "negative", "n": 34, "list": 3}, {"vid": video_set_b[10], "img": negative_pictures[10], "valence": "negative", "n": 35, "list": 3}, {"vid": video_set_b[11], "img": negative_pictures[11], "valence": "negative", "n": 36, "list": 3}, {"vid": video_set_b[12], "img": negative_pictures[12], "valence": "negative", "n": 37, "list": 3}, {"vid": video_set_b[13], "img": negative_pictures[13], "valence": "negative", "n": 38, "list": 3}, {"vid": video_set_b[14], "img": negative_pictures[14], "valence": "negative", "n": 39, "list": 3}, {"vid": video_set_b[15], "img": negative_pictures[15], "valence": "negative", "n": 40, "list": 3}, {"vid": video_set_c[8], "img": neutral_pictures[8], "valence": "neutral", "n": 57, "list": 3}, {"vid": video_set_c[9], "img": neutral_pictures[9], "valence": "neutral", "n": 58, "list": 3}, {"vid": video_set_c[10], "img": neutral_pictures[10], "valence": "neutral", "n": 59, "list": 3}, {"vid": video_set_c[11], "img": neutral_pictures[11], "valence": "neutral", "n": 60, "list": 3}, {"vid": video_set_c[12], "img": neutral_pictures[12], "valence": "neutral", "n": 61, "list": 3}, {"vid": video_set_c[13], "img": neutral_pictures[13], "valence": "neutral", "n": 62, "list": 3}, {"vid": video_set_c[14], "img": neutral_pictures[14], "valence": "neutral", "n": 63, "list": 3}, {"vid": video_set_c[15], "img": neutral_pictures[15], "valence": "neutral", "n": 64, "list": 3}];
  trial_list_mapping_3_block_3 = [{"vid": video_set_a[16], "img": positive_pictures[16], "valence": "positive", "n": 17, "list": 3}, {"vid": video_set_a[17], "img": positive_pictures[17], "valence": "positive", "n": 18, "list": 3}, {"vid": video_set_a[18], "img": positive_pictures[18], "valence": "positive", "n": 19, "list": 3}, {"vid": video_set_a[19], "img": positive_pictures[19], "valence": "positive", "n": 20, "list": 3}, {"vid": video_set_a[20], "img": positive_pictures[20], "valence": "positive", "n": 21, "list": 3}, {"vid": video_set_a[21], "img": positive_pictures[21], "valence": "positive", "n": 22, "list": 3}, {"vid": video_set_a[22], "img": positive_pictures[22], "valence": "positive", "n": 23, "list": 3}, {"vid": video_set_a[23], "img": positive_pictures[23], "valence": "positive", "n": 24, "list": 3}, {"vid": video_set_b[16], "img": negative_pictures[16], "valence": "negative", "n": 41, "list": 3}, {"vid": video_set_b[17], "img": negative_pictures[17], "valence": "negative", "n": 42, "list": 3}, {"vid": video_set_b[18], "img": negative_pictures[18], "valence": "negative", "n": 43, "list": 3}, {"vid": video_set_b[19], "img": negative_pictures[19], "valence": "negative", "n": 44, "list": 3}, {"vid": video_set_b[20], "img": negative_pictures[20], "valence": "negative", "n": 45, "list": 3}, {"vid": video_set_b[21], "img": negative_pictures[21], "valence": "negative", "n": 46, "list": 3}, {"vid": video_set_b[22], "img": negative_pictures[22], "valence": "negative", "n": 47, "list": 3}, {"vid": video_set_b[23], "img": negative_pictures[23], "valence": "negative", "n": 48, "list": 3}, {"vid": video_set_c[16], "img": neutral_pictures[16], "valence": "neutral", "n": 65, "list": 3}, {"vid": video_set_c[17], "img": neutral_pictures[17], "valence": "neutral", "n": 66, "list": 3}, {"vid": video_set_c[18], "img": neutral_pictures[18], "valence": "neutral", "n": 67, "list": 3}, {"vid": video_set_c[19], "img": neutral_pictures[19], "valence": "neutral", "n": 68, "list": 3}, {"vid": video_set_c[20], "img": neutral_pictures[20], "valence": "neutral", "n": 69, "list": 3}, {"vid": video_set_c[21], "img": neutral_pictures[21], "valence": "neutral", "n": 70, "list": 3}, {"vid": video_set_c[22], "img": neutral_pictures[22], "valence": "neutral", "n": 71, "list": 3}, {"vid": video_set_c[23], "img": neutral_pictures[23], "valence": "neutral", "n": 72, "list": 3}];
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [640, 480],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    movie: null,
    name: 'movie',
    units: psychoJS.window.units,
    pos: [0, 0],
    anchor: 'center',
    size: [0.5, 0.5],
    ori: 0.0,
    opacity: null,
    loop: false,
    noAudio: false,
    depth: -1
  })
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var preMaxDurationReached;
var preMaxDuration;
var preComponents;
function preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    preClock.reset();
    routineTimer.reset();
    preMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre.started', globalClock.getTime());
    preMaxDuration = null
    // keep track of which components have finished
    preComponents = [];
    
    for (const thisComponent of preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre' ---
    // get current time
    t = preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre' ---
    for (const thisComponent of preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre.stopped', globalClock.getTime());
    // the Routine "pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_list_mapping_1_block_1.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(9.500000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(img);
    movie.setMovie(vid);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(movie);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    
    // *movie* updates
    if (t >= 2.5 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }
    
    frameRemains = 2.5 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      movie.tStop = t;  // not accounting for scr refresh
      movie.frameNStop = frameN;  // exact frame index
      // update status
      movie.status = PsychoJS.Status.FINISHED;
      movie.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    movie.stop();  // ensure movie has stopped at end of Routine
    if (routineForceEnded) {
        routineTimer.reset();} else if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(9.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
