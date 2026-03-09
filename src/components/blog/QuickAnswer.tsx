import { Zap } from 'lucide-react';

interface QuickAnswerProps {
  answer: string;
  bullets?: string[];
}

export default function QuickAnswer({ answer, bullets }: QuickAnswerProps) {
  return (
    <div className="border-l-4 border-lime bg-green-light p-5 rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] my-12">
        <div className="section-label flex items-center gap-2 mb-4 w-fit">
          <Zap size={14} fill="currentColor" />
          Quick Answer
        </div>
      <p className="text-charcoal font-bold text-[18px] mb-4 leading-relaxed">
        {answer}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 text-dark-text text-[16px]">
              <span className="text-lime font-bold">•</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
