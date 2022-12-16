import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  );
}
