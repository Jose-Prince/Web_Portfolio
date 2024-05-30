import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../Sidebar/Sidebar.module.css'

interface ItemsProps {
  label: string;
}

const NavigationButton: React.FC<ItemsProps> = ({ label }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const encodedLocation = router.pathname;
    const decodedLocation = decodeURIComponent(encodedLocation).replace(/\/$/, '').replace('/', '');

    if (decodedLocation === label.replace(' ','')) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [router.pathname, label]);

  const handleClick = () => {
    router.push('/' + label.replace(' ',''));
  };

  return (
    <button
      className={isActive ? styles.navButtonA : styles.navButton}
      onClick={handleClick}
    >
      <p className={styles.textRot}>
        {label.toUpperCase()}
      </p>
    </button>
  );
};

export default NavigationButton;
