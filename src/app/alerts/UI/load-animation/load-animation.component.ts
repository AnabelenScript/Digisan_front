import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { AlertsService } from '../../infrastructure/alerts.service';
import { WebSocketService } from '../../infrastructure/websocket_service';

@Component({
  selector: 'app-load-animation',
  templateUrl: './load-animation.component.html',
  styleUrls: ['./load-animation.component.css']
})
export class LoadAnimationComponent implements AfterViewInit, OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  messages: string[] = [];

  constructor(
    private alertService: AlertsService,
    private wsService: WebSocketService 
  ) {}

  ngOnInit(): void {
  
    this.wsService.connect(); 
    this.wsService.messages$.subscribe(message => {
      console.log('Mensaje recibido en LoadAnimationComponent:', message);
      this.messages.push(message);
    });
  }

  ngAfterViewInit() {
    /* const container = this.canvasContainer.nativeElement;

    // Inicializa Three.js
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Agregar luces
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 1.5, 5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 1.5, 5);
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    // Crear estrellas
    const starsGeometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 3000; i++) {
      vertices.push(
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000)
      );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0x59e7ff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Crear esfera
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x59e7ff,
      roughness: 0.5,
      metalness: 0.8
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Obtener posiciones y crear ruido
    const positionAttribute = geo.getAttribute('position');
    const positionArray = positionAttribute.array as Float32Array;
    const noise = createNoise3D();
    
    // Crear copia de los valores originales de la esfera
    const originalPositions = new Float32Array(positionArray.length);
    originalPositions.set(positionArray);

    function update() {
      const time = Date.now() * 0.001;
      for (let i = 0; i < positionArray.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];

        const offset = 0.15 * noise(x * 3 + time, y * 3, z * 3);
        const scaleFactor = 1 + offset;

        positionArray[i] = x * scaleFactor;
        positionArray[i + 1] = y * scaleFactor;
        positionArray[i + 2] = z * scaleFactor;
      }
      positionAttribute.needsUpdate = true;
      geo.computeVertexNormals();
    }

    function render() {
      update();
      mesh.rotation.y += 0.005; // Rotar la esfera lentamente
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    render(); */
  }

  alertLoad(liquid: string) {
    this.alertService.alertLoading(liquid);
  }

  alertWarning(tipo: string, codigoMaquina: number) {
    this.alertService.alertLowLevel(tipo, codigoMaquina);
  }

  alertWrong() {
    this.alertService.alertWrong();
  }
}
