import { useState, useEffect } from 'react';

function useDeviceType(): 'ios' | 'android' | 'desktop' | null {
    const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop' | null>(null);
  
    useEffect(() => {
      const userAgent = navigator.userAgent;
  
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
          setDeviceType('ios');
        } else {
          setDeviceType('android');
        }
      } else {
        setDeviceType('desktop');
      }
    }, []);
  
    return deviceType;
}
  
export default useDeviceType;