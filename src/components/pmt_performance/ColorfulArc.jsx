import React from "react";

const ColorfulArc = ({ progressValues, height, width }) => {
    const arcData = [
        { radius: 95, strokeWidth: 10, color: "white", progress: 100 }, // White background arc
        { radius: 90, strokeWidth: 6, color: "#f5b797", progress: progressValues[0] || 0 },
        { radius: 80, strokeWidth: 6, color: "#e795a2", progress: progressValues[1] || 0 },
        { radius: 70, strokeWidth: 6, color: "#b979a4", progress: progressValues[2] || 0 },
        { radius: 60, strokeWidth: 6, color: "#686091", progress: progressValues[3] || 0 },
    ];

    return (
        <svg width={width || "450"} height={height || "225"} viewBox="0 0 200 100">
            {arcData.map((arc, index) => {
                const circumference = Math.PI * arc.radius;
                const dashLength = (arc.progress / 100) * circumference;
                const dashArray = `${dashLength} ${circumference - dashLength}`;

                return (
                    <g key={index}>
                        <circle
                            cx="100"
                            cy="100"
                            r={arc.radius}
                            stroke={arc.color}
                            strokeWidth={arc.strokeWidth}
                            strokeDasharray={dashArray}
                            fill="transparent"
                        />
                        {arc.progress < 100 && (
                            <circle
                                cx="100"
                                cy="100"
                                r={arc.radius}
                                stroke="#D3D3D3"
                                strokeWidth={arc.strokeWidth}
                                strokeDasharray={dashLength}
                                strokeDashoffset={dashArray}
                                fill="transparent"
                            />
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

export default ColorfulArc;

// const ColorfulArc = () => {
//     const arcData = [
//         // { radius: 95, strokeWidth: 10, color: "white", dasharray: "300 596.90" }, // White background arc
//         // { radius: 90, strokeWidth: 8, color: "#f5b797", dasharray: "270 200.49" },
//         // { radius: 80, strokeWidth: 8, color: "#e795a2", dasharray: "240 502.65" },
//         // { radius: 70, strokeWidth: 8, color: "#b979a4", dasharray: "210 439.82" },
//         // { radius: 60, strokeWidth: 8, color: "#686091", dasharray: "180 377.00" },

//         { radius: 95, strokeWidth: 10, color: "gray", dasharray: "300 596.90" }, // White background arc
//         { radius: 95, strokeWidth: 10, color: "white", dasharray: "300 596.90" }, // White background arc
//         { radius: 90, strokeWidth: 6, color: "#f5b797", dasharray: "282.74 565.49" },
//         { radius: 80, strokeWidth: 6, color: "#e795a2", dasharray: "251.33 502.65" },
//         { radius: 70, strokeWidth: 6, color: "#b979a4", dasharray: "219.91 439.82" },
//         { radius: 60, strokeWidth: 6, color: "#686091", dasharray: "188.50 377.00" },
//     ];

//     return (
//         <svg width="400" height="400" viewBox="0 0 200 200" >
//             {arcData.map((arc, index) => (
//                 <circle
//                     key={index}
//                     cx="100"
//                     cy="100"
//                     r={arc.radius}
//                     stroke={arc.color}
//                     strokeWidth={arc.strokeWidth}
//                     strokeDasharray={arc.dasharray}
//                     fill="transparent"
//                     transform="rotate(180 100 100)"
//                     style={{boxShadow:'2px 2px 20px gray'}}
//                 />
//             ))}
//         </svg>
//     );
// };

// export default ColorfulArc;
// // import React from "react";

// // const ColorfulArc = () => {
// //     const arcData = [
// //         { radius: 90, strokeWidth: 10, color: "#f5b797", dasharray: "282.74 565.49" },
// //         { radius: 80, strokeWidth: 10, color: "#e795a2", dasharray: "251.33 502.65" },
// //         { radius: 70, strokeWidth: 10, color: "#b979a4", dasharray: "219.91 439.82" },
// //         { radius: 60, strokeWidth: 10, color: "#686091", dasharray: "188.50 377.00" },
// //     ];
