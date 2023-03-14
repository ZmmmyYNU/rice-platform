import { useRef, useEffect } from "react";

/**
 * 存在问题，如果组件在异步请求的过程中突然被卸载，系统会报错，所以设置下面的hook
 * @returns 返回组件的挂载状态，如果还没挂载或者已经卸载，返回false，反之，返回true
 */
export const useMountRef = () => {
  // useRef 的current属性改变不会触发页面的渲染
  const mountedRef = useRef(false);

  useEffect(() => {
    // 组件加载的时候设置为true
    mountedRef.current = true;
    // 组件卸载设置为false
    return () => {
      mountedRef.current = false;
    };
  }, [mountedRef]);
  return mountedRef;
};
