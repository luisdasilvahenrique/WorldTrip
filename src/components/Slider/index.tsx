import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Slider(){
    return(
        <Flex 
        w="100%"
        maxW="1240px"
        mx="auto"
        mb={["5","10"]}
        height={["250px", "450px"]}
        >
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{width: "100%", flex: '1'}}
            >

                <SwiperSlide>
                    <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europa.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="100% 30%"
                    >
                        <Link href="/continent/europe">
                                <Heading>Europa</Heading>
                                <Text>O continente mais antigo</Text>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europa.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="100% 30%"
                    >
                        <Link href="/continent/europe">
                                <Heading>Europa</Heading>
                                <Text>O continente mais antigo</Text>
                        </Link>
                    </Flex>
                </SwiperSlide>

            </Swiper>
        </Flex>
    );
}