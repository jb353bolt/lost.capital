import React from 'react';

const CartoonAvatar = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      style={{ background: '#ffffff' }}
    >
      {/* Face */}
      <path
        d="M200 320c-55 0-100-45-100-100v-60c0-55 45-100 100-100s100 45 100 100v60c0 55-45 100-100 100z"
        fill="#f5d0c0"  // Mildly tanned skin tone
      />

      {/* Hair */}
      <path
        d="M300 160c0-55-45-100-100-100s-100 45-100 100v20c0-55 45-100 100-100s100 45 100 100v-20z"
        fill="#6b4423"  // Brown hair
      />
      
      {/* Side Hair */}
      <path
        d="M120 180c0-30 10-50 20-60M280 180c0-30-10-50-20-60"
        fill="none"
        stroke="#6b4423"
        strokeWidth="16"
      />

      {/* Eyes */}
      <g transform="translate(0, 15)">
        <circle cx="160" cy="160" r="15" fill="white" />
        <circle cx="240" cy="160" r="15" fill="white" />
        <circle cx="160" cy="160" r="8" fill="#4299e1" /> {/* Blue eyes */}
        <circle cx="240" cy="160" r="8" fill="#4299e1" />
        <circle cx="164" cy="157" r="3" fill="white" />
        <circle cx="244" cy="157" r="3" fill="white" />
      </g>

      {/* Nose */}
      <path
        d="M190 180c0 0 10 10 20 0"
        fill="none"
        stroke="#d4a08f"
        strokeWidth="3"
      />

      {/* Smile */}
      <path
        d="M170 200c10 10 50 10 60 0"
        fill="none"
        stroke="#d4a08f"
        strokeWidth="3"
      />

      {/* Gilet */}
      <path
        d="M120 260v80h160v-80"
        fill="#2c5282"  // Navy blue gilet
      />
      <path
        d="M140 260v80M260 260v80"
        fill="none"
        stroke="#2b4c7e"
        strokeWidth="4"
      />

      {/* Shirt underneath */}
      <path
        d="M160 260h80v80h-80z"
        fill="white"
      />
    </svg>
  );
};

export default CartoonAvatar;