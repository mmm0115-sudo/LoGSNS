// core.js - Shared Logic and Firebase Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, increment, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCA4NQzxcz2gh8uaw3LKrKl_NEnE_fMybs",
    authDomain: "lo-g-8a620.firebaseapp.com",
    projectId: "lo-g-8a620",
    storageBucket: "lo-g-8a620.firebasestorage.app",
    messagingSenderId: "780857099698",
    appId: "1:780857099698:web:b6cb359114da98ab3e50ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Simple Toast Notification Logic (Shared)
export function showToastText(msg) {
    let t = document.getElementById('core-toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'core-toast';
        t.style.position = 'fixed';
        t.style.bottom = '80px';
        t.style.left = '50%';
        t.style.transform = 'translateX(-50%) translateY(20px)';
        t.style.background = 'rgba(255, 255, 255, 0.9)';
        t.style.color = '#000';
        t.style.padding = '10px 24px';
        t.style.borderRadius = '50px';
        t.style.fontWeight = 'bold';
        t.style.opacity = '0';
        t.style.transition = 'all 0.3s ease';
        t.style.pointerEvents = 'none';
        t.style.zIndex = '9999';
        t.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        document.body.appendChild(t);
    }

    t.innerText = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
}

// X (Twitter) Share Logic
export function shareToX(text, url) {
    const defaultUrl = 'https://lo-g-8a620.web.app/';
    const shareUrl = encodeURIComponent(url || defaultUrl);
    const shareText = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank', 'width=550,height=420');
}

// Export Auth Methods
export { signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, increment, where, getDocs };
