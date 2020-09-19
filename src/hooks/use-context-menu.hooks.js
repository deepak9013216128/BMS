import { useCallback, useEffect, useState } from 'react';

const useContextMenu = (id) => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    const element = document.getElementById(id);
    document.addEventListener("click", handleClick);
    element.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      element.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu };
};

export default useContextMenu;