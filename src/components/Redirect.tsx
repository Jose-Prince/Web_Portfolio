import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface ItemProps {
  route: string;
}

const Redirect: React.FC<ItemProps> = ({ route }) => {
  const router = useRouter();

  useEffect(() => {
    if (route === '') {
      router.push('/AboutMe');
    } else {
      router.push('/' + route);
    }
  }, [route, router]);

  return null;
};

export default Redirect;
