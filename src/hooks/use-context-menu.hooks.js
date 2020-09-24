import { useCallback, useEffect, useState } from 'react';

const useContextMenu = () => {
  const [state, setState] = useState({
    xPos: '0px',
    yPos: '0px',
    showMenu: false,
  })
  const { xPos, yPos, showMenu } = state;

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    setState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true,
    })
  }, []);

  const handleClick = useCallback(() => {
    showMenu && setState(s => {
      return { ...s, showMenu: false }
    });
  }, [showMenu]);




  useEffect(() => {
    const elements = document.getElementsByClassName('bookmark');
    for (let element of elements) {
      element.addEventListener("contextmenu", handleContextMenu);
    }
    return () => {
      for (let element of elements) {
        element.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, [handleContextMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  useEffect(() => {
    console.log(showMenu)
    let flag = true;
    const handleScroll = () => {
      flag = showMenu && flag ? true : false;
      if (flag) {
        setState(s => ({ ...s, showMenu: false }));
        flag = false;
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scoll", handleScroll);
    };
  }, [showMenu]);

  return { xPos, yPos, showMenu };
};

export default useContextMenu;