import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useScrollPosition } from '../hooks/useScrollPosition';

const RoamingBug = () => {
  const containerRef = useRef(null);
  const threeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollY = useScrollPosition();
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  const bugRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  
  // Toggle debug mode with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'b' && e.ctrlKey) {
        setIsDebugMode(prev => !prev);
      }
      // Add escape key to toggle bug activity
      if (e.key === 'Escape') {
        setIsActive(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!isActive) return;
    
    console.log("🐛 Bug component initializing...");
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create scene with better performance settings
    const scene = new THREE.Scene();
    
    // Use orthographic camera for 2D-like behavior
    const camera = new THREE.OrthographicCamera(
      width / -2, width / 2, height / 2, height / -2, 1, 1000
    );
    camera.position.z = 10;
    
    // Create renderer with optimized settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump" // Better performance with slight quality trade-off
    });
    
    // Configure renderer
    renderer.domElement.style.zIndex = "2000";
    renderer.domElement.style.pointerEvents = "auto"; // Changed to allow direct click detection
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);
    
    // Store for cleanup
    threeRef.current = { scene, camera, renderer };
    
    createBugModel(scene);
    
    // Set initial target to a random position
    setNewRandomTarget();
    
    // Start animation loop
    animate();
    
    // Handle window resize more efficiently with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.left = width / -2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = height / -2;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle clicks with performance improvements
    const handleClick = (e) => {
      if (isCaught || !isActive) return;
      
      // Get bug position in screen coordinates
      const bugPosition = getBugScreenPosition();
      
      // Check if click is within catch range with adjustable difficulty
      const catchRadius = 40; // Slightly larger catch radius for better user experience
      const dx = e.clientX - bugPosition.x;
      const dy = e.clientY - bugPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < catchRadius) {
        setIsCaught(true);
        playCaughtAnimation();
      } else {
        // Bug escapes - change direction immediately
        setNewRandomTarget(true); // true = panic mode (faster)
      }
    };
    
    // Add touch support for mobile
    const handleTouch = (e) => {
      e.preventDefault();
      if (isCaught || !isActive) return;
      
      const touch = e.touches[0];
      if (!touch) return;
      
      // Get bug position in screen coordinates
      const bugPosition = getBugScreenPosition();
      
      // Check if touch is within catch range
      const catchRadius = 50; // Larger for touch devices
      const dx = touch.clientX - bugPosition.x;
      const dy = touch.clientY - bugPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < catchRadius) {
        setIsCaught(true);
        playCaughtAnimation();
      } else {
        // Bug escapes - change direction immediately
        const mouseX = touch.clientX;
        const mouseY = touch.clientY;
        escapeFromPoint(mouseX, mouseY);
      }
    };
    
    // Also make bug respond to movement
    const handleMouseMove = (e) => {
      if (isCaught || !isActive) return;
      
      // Occasionally make the bug react to mouse movements
      if (Math.random() < 0.03) {
        escapeFromPoint(e.clientX, e.clientY);
      }
    };
    
    // Register event listeners
    renderer.domElement.addEventListener('click', handleClick);
    renderer.domElement.addEventListener('touchstart', handleTouch, { passive: false });
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    
    // Helper function to get bug screen position
    function getBugScreenPosition() {
      const vector = new THREE.Vector3();
      vector.setFromMatrixPosition(bugRef.current.matrixWorld);
      
      vector.project(camera);
      
      const x = (vector.x * 0.5 + 0.5) * width;
      const y = (vector.y * -0.5 + 0.5) * height;
      
      return { x, y };
    }
    
    // Make bug escape from a specific point
    function escapeFromPoint(pointX, pointY) {
      const currentPos = { 
        x: bugRef.current.position.x,
        y: bugRef.current.position.y
      };
      
      // Calculate direction away from point
      const mouseX = pointX - width / 2;
      const mouseY = -(pointY - height / 2);
      
      const dx = currentPos.x - mouseX;
      const dy = currentPos.y - mouseY;
      
      // Normalize and scale
      const length = Math.sqrt(dx * dx + dy * dy);
      if (length === 0) return;
      
      velocityRef.current = {
        x: (dx / length) * 200, // Much faster escape
        y: (dy / length) * 200
      };
      
      // Set a new target in the escape direction
      targetRef.current = {
        x: currentPos.x + dx / length * 500,
        y: currentPos.y + dy / length * 500
      };
    }
    
    // Function to play caught animation
    function playCaughtAnimation() {
      const originalScale = bugRef.current.scale.clone();
      
      // Swirl animation
      const startTime = Date.now();
      const swirlAnimation = () => {
        const elapsed = Date.now() - startTime;
        const duration = 1000; // 1 second
        
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const scale = 1 - progress;
          bugRef.current.scale.set(
            originalScale.x * scale,
            originalScale.y * scale,
            originalScale.z * scale
          );
          
          bugRef.current.rotation.z += 0.2;
          animationFrameRef.current = requestAnimationFrame(swirlAnimation);
        } else {
          // Reset bug
          setTimeout(() => {
            bugRef.current.scale.copy(originalScale);
            bugRef.current.rotation.set(0, 0, 0);
            updateBugPosition(Math.random() * width, Math.random() * height);
            setIsCaught(false);
            setNewRandomTarget();
          }, 1000); // Shorter wait before respawning for better UX
        }
      };
      
      swirlAnimation();
    }
    
    // Function to set a new random target
    function setNewRandomTarget(panic = false) {
      const border = 100; // Keep away from edges
      const newTarget = {
        x: Math.random() * (width - 2 * border) + border - width / 2,
        y: Math.random() * (height - 2 * border) + border - height / 2
      };
      
      targetRef.current = newTarget;
      
      // Set panic mode velocity (faster)
      if (panic) {
        const mousePosX = event?.clientX || width / 2;
        const mousePosY = event?.clientY || height / 2;
        escapeFromPoint(mousePosX, mousePosY);
      }
    }
    
    // Function to update the bug's position
    function updateBugPosition(x, y) {
      // Convert from screen coordinates to Three.js coordinates
      bugRef.current.position.x = x - width / 2;
      bugRef.current.position.y = -(y - height / 2);
    }
    
    // Animation loop with optimizations
    function animate(time) {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      if (!isActive) return;
      
      // Skip if caught
      if (isCaught) {
        renderer.render(scene, camera);
        return;
      }
      
      // Calculate delta time with better stability
      if (!lastTimeRef.current) lastTimeRef.current = time;
      let deltaTime = (time - lastTimeRef.current) / 1000; // in seconds
      lastTimeRef.current = time;
      
      // Cap delta time to avoid huge jumps if tab was inactive
      deltaTime = Math.min(deltaTime, 0.1);
      
      // Update bug position
      const bug = bugRef.current;
      const target = targetRef.current;
      const vel = velocityRef.current;
      
      // Calculate direction to target
      const dx = target.x - bug.position.x;
      const dy = target.y - bug.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If reached target, set new target
      if (distance < 10) {
        setNewRandomTarget();
        return;
      }
      
      // Set direction and normalize
      const dirX = dx / distance;
      const dirY = dy / distance;
      
      // Update velocity with easing - smoother acceleration
      vel.x += dirX * 100 * deltaTime; // Acceleration
      vel.y += dirY * 100 * deltaTime;
      
      // Damping - more natural movement
      vel.x *= 0.92;
      vel.y *= 0.92;
      
      // Limit velocity with better control
      const maxSpeed = 150;
      const currentSpeed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      if (currentSpeed > maxSpeed) {
        vel.x = (vel.x / currentSpeed) * maxSpeed;
        vel.y = (vel.y / currentSpeed) * maxSpeed;
      }
      
      // Apply velocity
      bug.position.x += vel.x * deltaTime;
      bug.position.y += vel.y * deltaTime;
      
      // Rotate bug to face movement direction with smoother rotation
      if (Math.abs(vel.x) > 0.1 || Math.abs(vel.y) > 0.1) {
        const targetAngle = Math.atan2(vel.y, vel.x);
        
        // Smoothly interpolate current rotation to target rotation
        let currentAngle = bug.rotation.z;
        
        // Normalize angle difference
        let angleDiff = targetAngle - currentAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        // Gradually rotate towards target angle
        bug.rotation.z += angleDiff * Math.min(1, 10 * deltaTime);
      }
      
      // Bound checking with bounce effect
      const boundX = width / 2 - 20;
      const boundY = height / 2 - 20;
      
      if (bug.position.x < -boundX) {
        bug.position.x = -boundX;
        vel.x *= -0.7;
        vel.y *= 0.9; // Slow down perpendicular motion too
      } else if (bug.position.x > boundX) {
        bug.position.x = boundX;
        vel.x *= -0.7;
        vel.y *= 0.9;
      }
      
      if (bug.position.y < -boundY) {
        bug.position.y = -boundY;
        vel.y *= -0.7;
        vel.x *= 0.9;
      } else if (bug.position.y > boundY) {
        bug.position.y = boundY;
        vel.y *= -0.7;
        vel.x *= 0.9;
      }
      
      // Animate legs with more natural movement
      animateLegs(time, currentSpeed);
      
      // Render
      renderer.render(scene, camera);
    }
    
    // Function to animate bug legs more naturally
    function animateLegs(time, speed) {
      if (bugRef.current.children && bugRef.current.children.length > 4) {
        // Speed factor affects leg movement rate
        const speedFactor = Math.min(1, speed / 50);
        
        // Legs start at index 3 (after body, head, eyes)
        for (let i = 4; i < 10; i++) {
          if (bugRef.current.children[i]) {
            // Different leg animation for each leg
            const legIndex = i - 4;
            const timeFactor = time / (80 + legIndex * 20); // Varied timing for each leg
            const legPhase = (timeFactor + legIndex * 0.6) % (Math.PI * 2);
            
            // Amplitude affected by speed
            const amplitude = 0.2 + speedFactor * 0.2;
            const legAngle = Math.sin(legPhase) * amplitude + Math.PI / 4;
            
            // Left legs
            if (i % 2 === 0) {
              bugRef.current.children[i].rotation.z = legAngle;
            } 
            // Right legs
            else {
              bugRef.current.children[i].rotation.z = -legAngle;
            }
          }
        }
        
        // Animate antennae if they exist (usually the last two children)
        if (bugRef.current.children.length >= 12) {
          const antennaTime = time / 500;
          // Subtle antenna movement
          bugRef.current.children[10].rotation.z = Math.PI / 4 + Math.sin(antennaTime) * 0.1;
          bugRef.current.children[11].rotation.z = Math.PI / 4 + Math.sin(antennaTime + 0.5) * 0.1;
        }
      }
    }
    
    // Function to create a better bug model
    function createBugModel(scene) {
      const bugGroup = new THREE.Group();
      
      // Bug body with better materials
      const bodyGeometry = new THREE.CapsuleGeometry(5, 10, 8, 16);
      const bodyMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x222222,
        wireframe: false
      });
      const bugBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
      bugBody.rotation.z = Math.PI / 2;
      bugGroup.add(bugBody);
      
      // Bug head with better shape
      const headGeometry = new THREE.SphereGeometry(4, 16, 16);
      const headMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333,
        wireframe: false
      });
      const bugHead = new THREE.Mesh(headGeometry, headMaterial);
      bugHead.position.x = 7;
      bugGroup.add(bugHead);
      
      // Bug eyes with better appearance
      const eyeGeometry = new THREE.SphereGeometry(1.5, 12, 12);
      const eyeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff3300,
        wireframe: false
      });
      
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(9, 1.5, 2.5);
      bugGroup.add(leftEye);
      
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(9, 1.5, -2.5);
      bugGroup.add(rightEye);
      
      // Bug legs (3 pairs) with improved appearance
      const legGeometry = new THREE.CylinderGeometry(0.5, 0.3, 12, 8);
      const legMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x111111,
        wireframe: false
      });
      
      // Position pairs of legs
      for (let i = 0; i < 3; i++) {
        // Left leg
        const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        leftLeg.position.set(i * 5 - 5, 0, 6);
        leftLeg.rotation.z = Math.PI / 4;
        bugGroup.add(leftLeg);
        
        // Right leg
        const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        rightLeg.position.set(i * 5 - 5, 0, -6);
        rightLeg.rotation.z = -Math.PI / 4;
        bugGroup.add(rightLeg);
      }
      
      // Antennae with better appearance
      const antennaGeometry = new THREE.CylinderGeometry(0.3, 0.1, 8, 8);
      const antennaMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x111111,
        wireframe: false
      });
      
      const leftAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
      leftAntenna.position.set(9, 3, 2);
      leftAntenna.rotation.z = Math.PI / 4;
      bugGroup.add(leftAntenna);
      
      const rightAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
      rightAntenna.position.set(9, 3, -2);
      rightAntenna.rotation.z = Math.PI / 4;
      bugGroup.add(rightAntenna);
      
      // Scale and position the bug
      bugGroup.scale.set(0.9, 0.9, 0.9);
      bugGroup.position.set(0, 0, 0);
      
      // Add to scene
      scene.add(bugGroup);
      bugRef.current = bugGroup;
      
      // Set initial position to center
      updateBugPosition(window.innerWidth / 2, window.innerHeight / 2);
    }
    
    // Cleanup function with improved cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('click', handleClick);
        renderer.domElement.removeEventListener('touchstart', handleTouch);
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
        
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
      
      // Dispose THREE.js resources to prevent memory leaks
      if (bugRef.current) {
        bugRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      
      if (threeRef.current) {
        threeRef.current.scene.clear();
        threeRef.current.renderer.dispose();
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, [isCaught, isActive]);
  
  // Handle scroll position changes
  useEffect(() => {
    if (!isActive) return;
    
    if (threeRef.current && bugRef.current) {
      // Make bug react to scrolling by adjusting its position or behavior
      const { camera } = threeRef.current;
      const scrollFactor = scrollY / 1000; // Adjust sensitivity
      
      // Slightly move the camera based on scroll
      camera.position.y = scrollFactor * 20; // Increased effect
      camera.updateProjectionMatrix();
      
      // Occasionally change bug target based on scroll changes
      if (Math.random() < 0.05 && !isCaught) {
        setNewRandomTarget();
      }
    }
  }, [scrollY, isCaught, isActive]);
  
  return (
    <>
      <div 
        ref={containerRef} 
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: 1050 }}
      />
      
      {isDebugMode && (
        <div className="position-fixed bottom-0 start-0 mb-4 ms-4 bg-dark text-success p-2 rounded font-monospace small" 
             style={{ zIndex: 1060 }}>
          <div>Debug Mode: ON (Ctrl+B to toggle)</div>
          <div>Active: {isActive ? 'Yes (Esc to pause)' : 'No (Esc to resume)'}</div>
          {!isCaught ? (
            <div>Bug is active - try to catch it!</div>
          ) : (
            <div>Bug caught! Respawning soon...</div>
          )}
        </div>
      )}
    </>
  );
};

export default RoamingBug;