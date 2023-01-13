import classNames from "classnames";
import { useEffect, useState } from "react";
import "./style.css";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  // let body = document.body;
  // document.addEventListener("mousemove", (e: any) => {
  //   let element = document.createElement("div");
  //   element.setAttribute("class", "cursor");
  //   element.setAttribute(
  //     "style",
  //     `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`
  //   );

  //   element.onanimationend = () => {
  //     element.remove();
  //   };

  //   body.insertAdjacentElement("beforeend", element);
  // });

  // document.removeEventListener("mousedown", () => {
  //   setClicked(true);
  // });
  // document.removeEventListener("mouseup", () => {
  //   setClicked(false);
  // });

  // useEffect(() => {
  //   // addEventListeners();
  //   handleLinkHoverEvents();
  //   // return () => removeEventListeners();
  // }, []);

  // const addEventListeners = () => {
  //   document.addEventListener("mouseenter", onMouseEnter);
  //   document.addEventListener("mouseleave", onMouseLeave);
  //   document.addEventListener("mousedown", onMouseDown);
  //   document.addEventListener("mouseup", onMouseUp);
  // };

  // const removeEventListeners = () => {
  //   document.removeEventListener("mouseenter", onMouseEnter);
  //   document.removeEventListener("mouseleave", onMouseLeave);
  //   document.removeEventListener("mousedown", onMouseDown);
  //   document.removeEventListener("mouseup", onMouseUp);
  // };

  // const OnRemove = (e: any) => {
  //   e.target.remove();
  // };

  // const onMouseDown = () => {
  //   setClicked(true);
  // };

  // const onMouseUp = () => {
  //   setClicked(false);
  // };

  // const onMouseLeave = () => {
  //   setHidden(true);
  // };

  // const onMouseEnter = () => {
  //   setHidden(false);
  // };

  // const handleLinkHoverEvents = () => {
  //   document.querySelectorAll("a").forEach((el) => {
  //     el.addEventListener("mouseover", () => setLinkHovered(true));
  //     el.addEventListener("mouseout", () => setLinkHovered(false));
  //   });
  // };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  });

  return <div className={cursorClasses} />;
}
