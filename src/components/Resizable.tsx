import React, { useRef, useEffect } from "react";

type Props = {};

function Resizable({
  children,
  extraClassNames,
  enableLeft = true,
  enableRight = true,
  enableTop = true,
  enableBottom = true,
  showResizerThumbRight = false,
}) {
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 0);
    let height = parseInt(styles.height, 0);
    let x = 0;
    let y = 0;

    resizeableEle.style.top = "0px";
    resizeableEle.style.left = "0px";

    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top resize
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom resize
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Left resize
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Add mouse down event listener
    const resizerRight = refRight.current;
    const resizerTop = refTop.current;
    const resizerLeft = refLeft.current;
    const resizerBottom = refBottom.current;
    if (enableRight) {
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    }
    if (enableTop) {
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    }
    if (enableBottom) {
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    }
    if (enableLeft) {
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);
    }

    return () => {
      resizerRight &&
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerTop &&
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom &&
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft &&
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <div className="relative top-0">
      <div
        ref={ref}
        className={`resizeable   overflow-hidden ${extraClassNames}`}
        data-resizer-thumb-right={`${showResizerThumbRight}`}
      >
        {children}
        {enableLeft && <div ref={refLeft} className="resizer resizer-l"></div>}
        {enableTop && <div ref={refTop} className="resizer resizer-t"></div>}
        {enableRight && (
          <div ref={refRight} className="resizer resizer-r"></div>
        )}
        {enableBottom && (
          <div ref={refBottom} className="resizer resizer-b"></div>
        )}{" "}
      </div>
    </div>
  );
}

export default Resizable;
