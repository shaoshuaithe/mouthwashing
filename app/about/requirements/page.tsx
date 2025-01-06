import RelatedAbout from '@/components/about/RelatedAbout';
import Navigation from '@/components/Navigation';
import { Cpu, Gamepad, HardDrive, MonitorCheck } from 'lucide-react';
import styles from './requirements.module.css';

export const metadata = {
  title: 'System Requirements | MouthWashing Game - Hardware & Software Specs',
  description: 'Check if your system can run MouthWashing Game. View minimum and recommended hardware requirements, supported platforms, and additional features.',
  openGraph: {
    title: 'MouthWashing Game System Requirements',
    description: 'Hardware and software specifications needed to play',
    images: ['/images/about/requirements-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/about/requirements'
  }
};

interface SpecSection {
  title: string;
  icon: React.ReactNode;
  minimum: string[];
  recommended: string[];
}

export default function RequirementsPage() {
  const specs: SpecSection[] = [
    {
      title: 'System',
      icon: <Cpu className={styles.specIcon} />,
      minimum: [
        'OS: Windows 10 64-bit',
        'Processor: Intel Core i5-4460 / AMD FX-6300',
        'Memory: 8 GB RAM',
        'DirectX: Version 11'
      ],
      recommended: [
        'OS: Windows 10/11 64-bit',
        'Processor: Intel Core i7-8700K / AMD Ryzen 5 3600',
        'Memory: 16 GB RAM',
        'DirectX: Version 12'
      ]
    },
    {
      title: 'Graphics',
      icon: <MonitorCheck className={styles.specIcon} />,
      minimum: [
        'NVIDIA GeForce GTX 960 2GB',
        'AMD Radeon R9 280 3GB',
        'Resolution: 1920x1080',
        'VRAM: 2 GB'
      ],
      recommended: [
        'NVIDIA GeForce RTX 2060 6GB',
        'AMD Radeon RX 5600 XT 6GB',
        'Resolution: 2560x1440',
        'VRAM: 6 GB'
      ]
    },
    {
      title: 'Storage',
      icon: <HardDrive className={styles.specIcon} />,
      minimum: [
        'Available Space: 45 GB',
        'HDD: 7200 RPM',
        'Read Speed: 50 MB/s',
        'Write Speed: 30 MB/s'
      ],
      recommended: [
        'Available Space: 60 GB',
        'SSD Required',
        'Read Speed: 500 MB/s',
        'Write Speed: 400 MB/s'
      ]
    },
    {
      title: 'Input',
      icon: <Gamepad className={styles.specIcon} />,
      minimum: [
        'Keyboard & Mouse',
        'DirectInput Compatible Controller',
        'Xbox 360/One Controller',
        'Basic Force Feedback Support'
      ],
      recommended: [
        'Xbox Series X|S Controller',
        'PlayStation 5 DualSense',
        'Advanced Force Feedback',
        'Adaptive Trigger Support'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>System Requirements</h1>
          <p className={styles.subtitle}>
            Check if your system meets the requirements to experience MouthWashing
            at its best. View detailed specifications for optimal performance.
          </p>
        </section>

        <section className={styles.specsSection}>
          {specs.map((spec, index) => (
            <div key={index} className={styles.specCard}>
              <div className={styles.specHeader}>
                {spec.icon}
                <h2>{spec.title}</h2>
              </div>
              
              <div className={styles.requirements}>
                <div className={styles.reqColumn}>
                  <h3>Minimum</h3>
                  <ul>
                    {spec.minimum.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.reqColumn}>
                  <h3>Recommended</h3>
                  <ul>
                    {spec.recommended.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.notesSection}>
          <h2>Additional Notes</h2>
          <ul>
            <li>Internet connection required for initial activation and online features</li>
            <li>SSD strongly recommended for optimal loading times and performance</li>
            <li>Ray tracing features require compatible GPU with latest drivers</li>
            <li>HDR display recommended for enhanced visual experience</li>
          </ul>
        </section>

        <RelatedAbout currentPath="/about/requirements" />
      </main>
    </>
  );
} 