import React from 'react';

const CircularProgressRing = ({ radius, stroke, progress, color }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#eee"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const MultiColorProgressRings = () => {
  const strokeWidth = 15;
  const baseRadius = 175;

  const rings = [
    { progress: 62.25, color: "#FFB5B5" },
    { progress: 52.25, color: "#FF7B9C" },
    { progress: 42.25, color: "#D16E82" },
    { progress: 82.25, color: "#956784" },
    { progress: 52.25, color: "#4A5776" }
  ];

  return (
    <div style={{ position: "relative", width: "350px", height: "350px", margin: "0 auto",transform: 'rotate(90deg)', }}>
      {rings.map((ring, index) => {
        const currentRadius = baseRadius - index * (strokeWidth + 5); // Add padding between rings
        return (
          <div
            key={index}
            style={{
              position: index==0 ? 'relative' : 'absolute',
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <CircularProgressRing
              radius={currentRadius}
              stroke={strokeWidth}
              progress={ring.progress}
              color={ring.color}
            />
          </div>
        );
      })}
    </div>
  );
};

// const MultiColorProgressRings  = () => {
//   const rings = [
//     { color: '#ff7f7f', progress: 82.25 }, // Attendance
//     { color: '#ff9ca8', progress: 52.25 }, // Qs
//     { color: '#a86ebc', progress: 90.25 }, // Debates
//     { color: '#7766c6', progress: 52.25 }, // PMB
//     { color: '#4c4a8a', progress: 62.25 }, // MP Fund
//   ];

//   return (
//     <div style={{ position: 'relative', width: '250px', margin: '0 auto', transform: 'rotate(90deg)',  }}>
//       {rings.map((ring, index) => (
//         <div key={index} style={{ position: index==0 ? 'relative' : 'absolute', top: 0, left: 0, transform: `scale(${1 - index * 0.14})`, transformOrigin: 'center' }}>
//           <CircularProgressRing
//             radius={125}
//             stroke={10}
//             progress={ring.progress}
//             color={ring.color}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

export default MultiColorProgressRings ;
