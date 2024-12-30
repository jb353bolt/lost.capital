import React from 'react';

interface ProjectGraphicProps {
  type: 'sales' | 'crm' | 'loans';
}

const ProjectGraphic = ({ type }: ProjectGraphicProps) => {
  const graphics = {
    sales: (
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <rect width="800" height="400" fill="#f8fafc" rx="16" />
        
        {/* Header */}
        <text x="40" y="50" className="text-2xl font-bold" fill="#1e293b">Sales Dashboard</text>
        
        {/* Stats Cards */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${40 + i * 190}, 80)`}>
            <rect width="170" height="90" fill="white" rx="8" filter="url(#shadow)" />
            <text x="20" y="30" fill="#64748b" fontSize="14">
              {['Total Pipeline', 'Close Rate', 'Active Deals', 'Avg Deal Size'][i]}
            </text>
            <text x="20" y="60" fill="#0f172a" fontSize="24" fontWeight="bold">
              {['£2.1M', '89%', '48', '£125K'][i]}
            </text>
            <text x="130" y="30" fill="#22c55e" fontSize="12">
              {['+12.5%', '+5.2%', '+8.1%', '+15.3%'][i]}
            </text>
          </g>
        ))}
        
        {/* Chart */}
        <g transform="translate(40, 200)">
          <rect width="720" height="180" fill="white" rx="8" filter="url(#shadow)" />
          <path d="M50,140 L670,140" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M50,90 L670,90" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M50,40 L670,40" stroke="#e2e8f0" strokeWidth="1" />
          <path 
            d="M50,120 C200,100 400,80 670,30" 
            fill="none" 
            stroke="#6366f1" 
            strokeWidth="3"
          />
        </g>
        
        <defs>
          <filter id="shadow" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="4" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
      </svg>
    ),
    
    crm: (
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <rect width="800" height="400" fill="#1e1b4b" rx="16" />
        
        {/* Header */}
        <text x="40" y="50" fill="#fff" className="text-2xl font-bold">Onyx CRM</text>
        
        {/* Pipeline Stages */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${40 + i * 190}, 80)`}>
            <rect width="170" height="280" fill="#2e2b5b" rx="8" />
            <text x="20" y="30" fill="#94a3b8" fontSize="14">
              {['Lead', 'Meeting', 'Proposal', 'Closed'][i]}
            </text>
            {[0, 1, 2].map((j) => (
              <g key={j} transform={`translate(10, ${50 + j * 90})`}>
                <rect width="150" height="80" fill="#312e7a" rx="6" />
                <circle cx="30" cy="30" r="15" fill="#6366f1" />
                <rect x="55" y="20" width="80" height="8" fill="#94a3b8" rx="4" />
                <rect x="55" y="35" width="60" height="8" fill="#64748b" rx="4" />
              </g>
            ))}
          </g>
        ))}
      </svg>
    ),
    
    loans: (
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <rect width="800" height="400" fill="#f8fafc" rx="16" />
        
        {/* Header */}
        <text x="40" y="50" fill="#1e293b" className="text-2xl font-bold">SME Loans Platform</text>
        
        {/* Application Steps */}
        <g transform="translate(40, 80)">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${i * 190}, 0)`}>
              <circle cx="30" cy="30" r="25" fill={i <= 1 ? "#6366f1" : "#e2e8f0"} />
              <text x="25" y="38" fill="white" fontSize="20">{i + 1}</text>
              <line 
                x1="55" 
                y1="30" 
                x2="165" 
                y2="30" 
                stroke="#e2e8f0" 
                strokeWidth="2" 
                strokeDasharray={i <= 1 ? "0" : "4"}
              />
            </g>
          ))}
        </g>
        
        {/* Form */}
        <g transform="translate(40, 140)">
          <rect width="720" height="220" fill="white" rx="8" filter="url(#shadow)" />
          <text x="30" y="40" fill="#1e293b" fontSize="16" fontWeight="bold">Loan Application</text>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(30, ${70 + i * 50})`}>
              <rect width="660" height="40" fill="#f1f5f9" rx="6" />
              <text x="15" y="25" fill="#64748b" fontSize="14">
                {['Business Name', 'Loan Amount', 'Business Type'][i]}
              </text>
            </g>
          ))}
        </g>
      </svg>
    )
  };

  return graphics[type];
};

export default ProjectGraphic;