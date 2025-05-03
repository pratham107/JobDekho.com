import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [editableText, setEditableText] = useState(
    "Find your dream job with JobDekho.com"
  );

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(
        containerRef.current.querySelector("h1")
      );

      animate(
        words,
        { opacity: [0, 1], y: [15, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
          delay: stagger(0.05),
        }
      );
    });
  }, [editableText]);

  return (
    <div className="container" ref={containerRef}>
      <h1
        className="animated-title"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => setEditableText(e.currentTarget.textContent || "")}
      >
        {editableText}
      </h1>
      <style>{`
        .container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3rem 1rem;
          min-height: 60vh;
          text-align: center;
          visibility: hidden;
          background: linear-gradient(to right, #1e3a8a, #9333ea);
          color: white;
          border-radius: 1rem;
        }

        .animated-title {
          font-size: 2rem;
          font-weight: 700;
          max-width: 800px;
          line-height: 1.4;
          outline: none;
          transition: background 0.3s;
          cursor: text;
        }

        .animated-title:focus {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .split-word {
          will-change: transform, opacity;
        }

        @media (min-width: 768px) {
          .animated-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
