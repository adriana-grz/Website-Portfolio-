import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: THREE.Object3D & {
      setPoints: (points: THREE.Vector3[]) => void;
    };
    meshLineMaterial: THREE.Material & {
      color?: string;
      depthTest?: boolean;
      resolution?: number[];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: number[];
      lineWidth?: number;
    };
  }
}