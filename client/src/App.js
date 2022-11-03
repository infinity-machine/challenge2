import React from 'react';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Main from './pages/Main';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Media from './pages/Media'
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import * as THREE from 'three';

function App() {
     let camera, scene, renderer, stars=[];
     function init(){
       camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
       camera.position.z = 1;
       scene = new THREE.Scene();
       renderer = new THREE.WebGLRenderer({});
       renderer.setSize( window.innerWidth, window.innerHeight );
       document.body.appendChild( renderer.domElement );
     }
     function addSphere(){
           for ( let z= -1000; z < 1000; z+=20 ) {
             let geometry = new THREE.SphereGeometry(0.5, 32, 32);
             let material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
             let sphere = new THREE.Mesh(geometry, material);
             sphere.position.x = Math.random() * 1000 - 500;
             sphere.position.y = Math.random() * 1000 - 500;
             sphere.position.z = z;
             sphere.scale.x = sphere.scale.y = 2;
             scene.add(sphere);
             stars.push(sphere); 
           }
     }
   
     function animateStars() { 
       for(let i=0; i<stars.length; i++) {
         let star = stars[i]; 
         star.position.z +=  i/10;
         if(star.position.z>1000) star.position.z-=2000; 
       }  
     }
   
     function render() {
       requestAnimationFrame( render );
       renderer.render( scene, camera );
         animateStars();
   
     }
     const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  
    }
  
    window.addEventListener('resize', onWindowResize, false);
     
     init();
     addSphere();
     render();

  return (
    <div id="background">
      < Header />
      < Card />
      <Routes>
        <Route path="/" element={< Main />}></Route>
        <Route path="/portfolio" element={< Portfolio />}></Route>
        <Route path="/resume" element={< Resume />}></Route>
        <Route path="/media" element={< Media />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
