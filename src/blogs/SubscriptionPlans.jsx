import React from 'react';

const plans = [
  {
    term: 'Monthly',
    cost: '₹129/month',
    payment: 'Credit Card & Selected Banks Debit Cards'
  },
  {
    term: 'Quarterly',
    cost: '₹329 (MRP ₹387)',
    payment: 'Any Credit / Debit Card, UPI, Net Banking'
  },
  {
    term: 'Yearly',
    cost: '₹999',
    payment: 'Any payment method including Cash on Delivery (on selected locations)'
  }
];

export default function SubscriptionPlans() {
  return (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-300 w-[800px] text-left">
        <thead className="bg-gray-100">
          <tr>
            {['Plan Term', 'Cost (in ₹)', 'Payment Methods'].map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2">{plan.term}</td>
              <td className="border border-gray-300 px-4 py-2">{plan.cost}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">{plan.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
