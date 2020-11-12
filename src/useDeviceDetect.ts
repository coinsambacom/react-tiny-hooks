import { useEffect, useState } from 'react';
import useIsClient from './useIsClient';

interface IGetDevice {
  isMobile: boolean;
  isDesktop: boolean;
  isAndroid: boolean;
  isIos: boolean;
  isSSR: boolean;
}

const getDevice = (userAgent: string): IGetDevice => {
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const isSSR = Boolean(userAgent.match(/SSR/i));

  const isMobile = Boolean(isAndroid || isIos || isOpera || isWindows);
  const isDesktop = Boolean(!isMobile && !isSSR);
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};

export default function useDeviceDetect() {
  const [device, setDevice] = (useState({}) as unknown) as [
    IGetDevice,
    React.Dispatch<IGetDevice>
  ];

  const isClient = useIsClient();

  useEffect(() => {
    const userAgent = isClient ? navigator.userAgent : 'SSR';

    setDevice(getDevice(userAgent));
  }, [isClient]);

  return device;
}
