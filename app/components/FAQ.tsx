'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-[#f9f5f0] py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:underline">
              Do you accept insurance?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              No, I do not accept insurance, but I can provide a superbill for you to submit to your provider.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:underline">
              Are online sessions available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes! Virtual sessions are offered via Zoom on Monday, Wednesday, and Friday afternoons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:underline">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Please provide at least 24 hours' notice for cancellations to avoid a missed session fee.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
