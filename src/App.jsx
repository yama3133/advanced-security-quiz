import React from 'react';

function Ambient() {
  return (
    <>
      <div className="bg-ambient"></div>
    </>
  );
}

const quizzes = [
  {
    id: 'cissp',
    name: 'CISSP',
    fullName: 'Certified Information Systems Security Professional',
    icon: '🔐',
    url: 'https://cissp-quiz-pi.vercel.app',
    color: '#16a34a',
  },
  {
    id: 'ccsp',
    name: 'CCSP',
    fullName: 'Certified Cloud Security Professional',
    icon: '☁️',
    url: 'https://ccsp-quiz-vite.vercel.app',
    color: '#059669',
  },
  {
    id: 'ceh',
    name: 'CEH',
    fullName: 'Certified Ethical Hacker',
    icon: '🛡️',
    url: 'https://ceh-quiz.vercel.app',
    color: '#0d9488',
  },
];

export default function App() {
  const handleQuizClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container">
      <Ambient />
      <div className="panel fade-in">
        <div className="label">セキュリティ認定試験</div>
        <h1>高度セキュリティ試験問題集</h1>
        <p>世界的に認められたセキュリティ認定試験の問題集です。</p>

        <div className="quiz-selection">
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              className="quiz-card"
              onClick={() => handleQuizClick(quiz.url)}
              title={quiz.fullName}
            >
              <div className="quiz-card-icon">{quiz.icon}</div>
              <h3>{quiz.name}</h3>
              <p>{quiz.fullName}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
