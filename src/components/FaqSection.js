const faqData = [
  {
    question: "What are your shipping options?",
    answer: "We offer standard and express shipping options. Standard shipping typically takes 5-7 business days, while express shipping takes 1-3 business days. All orders are processed within 24 hours.",
  },
  {
    question: "What is your return policy?",
    answer: "We have a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, provided it's in its original condition.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), as well as PayPal and other secure payment gateways.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can use this to track your package's journey to your doorstep.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-base-200 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Have questions? We have answers.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-100 shadow-md">
              <input type="radio" name="my-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium text-gray-900 dark:text-white">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70 text-md">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}