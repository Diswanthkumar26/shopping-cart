import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="border border-black rounded-md overflow-hidden">
      <div
          onClick={() => setIsOpen(!isOpen)}
          className={`px-6 py-3 text-xl font-semibold flex justify-between items-center hover:bg-[#5a7ea3] cursor-pointer transition-colors duration-300 ${
            isOpen ? 'bg-[#5a7ea3]' : 'bg-blue-800'
          } text-white`}
        >
          FAQ
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>

        {isOpen && (
          <div className="bg-white px-6 py-4 space-y-4 text-[15px] leading-relaxed">
            <p>
              <strong>What is Quiz Answers:</strong> <br />
              Most E-commerce websites & Brands are running contests everyday on their websites, Apps & social media
              accounts. Here on Dealsmagnet Quiz Answers, you will get answers of all major contests running online. You
              will also get details of quiz & contest, how to participate & tricks to get best out of it. You can also
              get details of winners & winners list links. With the quiz contest, you will get answers of Amazon Quiz
              Answers, Flipkart Quiz Answers, Khata Book Quiz Answers, Spin & Win Answers, Answers & Share contests,
              etc.
            </p>

            <p>
              <strong>Do We Provide Correct Answers?</strong> <br />
              As a small help for the online community, we provide answers of all major quiz contests in India.
            </p>

            <p>
              <strong>Submitting Correct Answers on Amazon is Guaranteed of Prize?</strong> <br />
              No. Submitting correct answers in Amazon Quiz is only a guarantee of entrance in the lucky draw for
              winners selection. Ultimate winners will be selected from participants submitted with correct answers. So
              only a limited participant as mentioned in terms & conditions of each contest wins prize in quiz.
            </p>

            <p>
              <strong>Where will Get answers to Quiz?</strong> <br />
              For daily{' '}
              <a href="#" className="text-blue-600 font-semiold">
                Amazon Quiz Answers
              </a>{' '}
              running from 12 AM to 11:59 PM you can get answers & all other{' '}
              <a href="#" className="text-blue-600 font-semiold">
                Amazon Quiz Answers
              </a>
              , Answers available by clicking on the quiz link on this page.{' '}
              <a href="#" className="text-blue-600  font-semiold">
                Flipkart Quiz Answers
              </a>{' '}
              updated here.
            </p>

            <p>
              <strong>Why Shall I Participate in Amazon & Flipkart Quiz?</strong> <br />
              There is no participation fee in Amazon Quiz & Flipkart Quiz. Moreover, you can win grand prizes, spin
              prizes, shopping rewards, discount vouchers, free gift cards & more by participating in these contests.
              So participation in those contests are always win-win situations for participants.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
