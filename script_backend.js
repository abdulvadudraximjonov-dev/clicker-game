// Telegram WebApp sozlash
if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}

// Supabase sozlamalari
const SUPABASE_URL = 'https://pwfuwffjrsduxdvgwsyt.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE'; // Joyiga Supabase anon key kiriting

let supabaseClient = null;
if (SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY_HERE') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let tgUser = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user;
let userId = tgUser ? tgUser.id.toString() : 'guest_' + Math.floor(Math.random() * 10000);
let userName = tgUser ? (tgUser.first_name || 'O\'yinchi') : 'Mehmon';

document.getElementById('profile-name-text').innerText = userName;

// O'yin o'zgaruvchilari
let score = parseInt(localStorage.getItem('score')) || 0;
let bonusPower = parseInt(localStorage.getItem('bonusPower')) || 0;
let maxEnergy = parseInt(localStorage.getItem('maxEnergy')) || 1000;
let energy = parseInt(localStorage.getItem('energy')) || maxEnergy;

let boostPrice = parseInt(localStorage.getItem('boostPrice')) || 500;
let autoPrice = parseInt(localStorage.getItem('autoPrice')) || 1000;
let elimitPrice = parseInt(localStorage.getItem('elimitPrice')) || 500;
let autoLevel = parseInt(localStorage.getItem('autoLevel')) || 0;

let lastDaily = parseInt(localStorage.getItem('lastDaily')) || 0;
let task1Done = localStorage.getItem('task1Done') === 'true';
let task1Visited = false;

// Kengaytirilgan Darajalar Ro'yxati
const levels = [
    { name: "Bronza 🥉", req: 0 },
    { name: "Kumush 🥈", req: 10000 },
    { name: "Oltin 🥇", req: 50000 },
    { name: "Platina 💎", req: 250000 },
    { name: "Afsonaviy 👑", req: 1000000 },
    { name: "Titan 🛡️", req: 5000000 },
    { name: "Master 🧙‍♂️", req: 25000000 },
    { name: "Chempion 🏆", req: 100000000 },
    { name: "Kosmik 🌌", req: 500000000 },
    { name: "Galaktik 🚀", req: 2500000000 },
    { name: "Imperator ⚔️", req: 10000000000 },
    { name: "Tangri ⚡", req: 50000000000 }
];

// Avatar yuklash
let savedAvatar = localStorage.getItem('userAvatar');
if (savedAvatar) {
    document.getElementById('avatar-img').src = savedAvatar;
    document.getElementById('avatar-img').style.display = 'block';
    document.getElementById('avatar-emoji').style.display = 'none';
}

function loadAvatar(event) {
    const file = event.target.files[0];
    if (file) {
  
