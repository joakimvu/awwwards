import {useRef, useState} from "react";

const BentoTilt = ({children, className}) => {
    const [transformStyle, setTransformStyle] = useState("")

    const itemRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const {left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeY - 0.5) * 5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) scale3d(0.95, 0.95, 0.95) rotateY(${tiltY}deg)`

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = (e) => {
        setTransformStyle("")
    }

    return (
        <div className={className}
             ref={itemRef}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             style={{transform: transformStyle}}
        >
            {children}
        </div>
    );
};

export default BentoTilt;